/* VRRINS GARAGE — location.js UJI COBA */
(function(){
'use strict';
const WORKER_URL='https://layanan-location-api.vgplg003.workers.dev/';
const WA_NUMBER='62895622499262';
const PALEMBANG_CENTER=[-2.990000,104.755000]; // pusat umum Palembang, BUKAN garasi

const mapContainer=document.getElementById('map-container');
const checkBtn=document.getElementById('check-location-btn');
const resultDiv=document.getElementById('location-result');
if(!mapContainer||!checkBtn||!resultDiv)return;

let map=null;

function loadLeaflet(){
 return new Promise((resolve,reject)=>{
  if(typeof L!=='undefined'){resolve();return;}
  if(!document.querySelector('link[data-location-leaflet]')){
   const link=document.createElement('link');
   link.rel='stylesheet';link.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
   link.dataset.locationLeaflet='1';document.head.appendChild(link);
  }
  const script=document.createElement('script');
  script.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  script.dataset.locationLeaflet='1';
  script.onload=resolve;script.onerror=()=>reject(new Error('Leaflet gagal dimuat.'));
  document.head.appendChild(script);
 });
}

async function initMap(){
 try{
  await loadLeaflet();if(map)return;
  map=L.map(mapContainer,{center:PALEMBANG_CENTER,zoom:13,zoomControl:false});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
 }catch(e){
  mapContainer.innerHTML='<div style="color:#888;text-align:center;padding:40px 15px">Peta tidak dapat dimuat. Fitur cek lokasi tetap dapat dicoba.</div>';
 }
}

function formatDistance(km){
 km=Number(km);if(!Number.isFinite(km))return '-';
 return km<1?Math.round(km*1000)+' m':km.toFixed(1)+' km';
}
function zoneLabel(z){
 switch(Number(z)){case 1:return'Zona 1 (0–8 km)';case 2:return'Zona 2 (>8–15 km)';case 3:return'Zona 3 (>15 km)';default:return'Zona tidak dikenali';}
}
function cost(z){
 switch(Number(z)){case 1:return'Tidak ada tambahan biaya transportasi.';case 2:return'Estimasi biaya transportasi: Rp70.000 – Rp120.000';case 3:return'Estimasi biaya transportasi: Rp120.000 – Rp250.000';default:return'';}
}
function wa(msg){return'https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(msg);}
function esc(v){return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');}

function showError(msg){
 const m='Halo Vrrins Garage, saya mau booking layanan.';
 resultDiv.style.display='block';
 resultDiv.innerHTML='<div class="location-error">⚠️ '+esc(msg)+'</div><a class="booking" target="_blank" rel="noopener noreferrer" href="'+wa(m)+'">📱 BOOKING VIA WA</a>';
}

function showResult(data){
 if(!data||data.status!=='success'){showError(data&&data.message||'Terjadi kesalahan.');return;}
 const z=Number(data.zona),d=Number(data.jarakKm);
 if(![1,2,3].includes(z)||!Number.isFinite(d)){showError('Respons server tidak valid.');return;}
 const msg='Halo Vrrins Garage, saya dari '+zoneLabel(z)+', jarak '+formatDistance(d)+', mau booking layanan.';
 resultDiv.style.display='block';
 resultDiv.innerHTML='<div class="result-zone">'+zoneLabel(z)+'</div><div>Jarak: '+formatDistance(d)+'</div><div class="result-cost">'+cost(z)+'</div><a class="booking" target="_blank" rel="noopener noreferrer" href="'+wa(msg)+'">📱 BOOKING VIA WA</a>';
}

async function checkLocation(){
 resultDiv.style.display='block';resultDiv.innerHTML='<div>⏳ Mengambil lokasi...</div>';
 checkBtn.disabled=true;checkBtn.textContent='⏳ Memproses...';
 try{
  if(!window.isSecureContext)throw new Error('Fitur lokasi membutuhkan HTTPS.');
  if(!navigator.geolocation)throw new Error('Browser tidak mendukung geolokasi.');
  const position=await new Promise((resolve,reject)=>navigator.geolocation.getCurrentPosition(resolve,reject,{enableHighAccuracy:true,timeout:15000,maximumAge:0}));
  const lat=Number(position.coords.latitude),lng=Number(position.coords.longitude);
  if(!Number.isFinite(lat)||!Number.isFinite(lng))throw new Error('Koordinat lokasi tidak valid.');
  const response=await fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({lat,lng})});
  const text=await response.text();let data;
  try{data=JSON.parse(text)}catch(e){throw new Error('Respons server tidak valid.');}
  if(!response.ok)throw new Error(data&&data.message||'Server error: '+response.status);
  showResult(data);
 }catch(e){
  if(e&&typeof e.code==='number'){
   if(e.code===1)return showError('Anda menolak izin lokasi. Booking via WhatsApp tetap tersedia.');
   if(e.code===2)return showError('Posisi tidak tersedia. Silakan coba lagi.');
   if(e.code===3)return showError('Pengambilan lokasi terlalu lama. Silakan coba lagi.');
  }
  showError(e&&e.message||'Gagal menghubungi server.');
 }finally{checkBtn.disabled=false;checkBtn.textContent='📍 CEK LOKASI SAYA';}
}
checkBtn.addEventListener('click',checkLocation);
if(document.readyState==='complete')initMap();else window.addEventListener('load',initMap,{once:true});
})();
