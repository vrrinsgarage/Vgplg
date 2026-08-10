/* Cloudflare Worker — simpan GARAGE_LAT & GARAGE_LNG sebagai Secret */
const ALLOWED_ORIGIN='https://vrrinsgarage.github.io';

export default{
 async fetch(request,env){
  const origin=request.headers.get('Origin');
  const cors=origin===ALLOWED_ORIGIN?{
   'Access-Control-Allow-Origin':origin,
   'Access-Control-Allow-Methods':'POST, OPTIONS',
   'Access-Control-Allow-Headers':'Content-Type',
   'Vary':'Origin'
  }:{};

  if(request.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
  if(request.method==='GET')return json({status:'success',message:'Location API aktif'},200,cors);
  if(request.method!=='POST')return json({status:'error',message:'Method not allowed'},405,cors);

  let body;
  try{body=await request.json()}catch{return json({status:'error',message:'Invalid JSON'},400,cors);}

  const lat=Number(body.lat),lng=Number(body.lng);
  if(!Number.isFinite(lat)||!Number.isFinite(lng))return json({status:'error',message:'Invalid coordinates'},400,cors);
  if(lat<-90||lat>90||lng<-180||lng>180)return json({status:'error',message:'Coordinates out of range'},400,cors);

  const garageLat=Number(env.GARAGE_LAT),garageLng=Number(env.GARAGE_LNG);
  if(!Number.isFinite(garageLat)||!Number.isFinite(garageLng))return json({status:'error',message:'Location service unavailable'},503,cors);

  const rad=v=>v*Math.PI/180, R=6371;
  const dLat=rad(garageLat-lat),dLng=rad(garageLng-lng);
  const a=Math.sin(dLat/2)**2+Math.cos(rad(lat))*Math.cos(rad(garageLat))*Math.sin(dLng/2)**2;
  const distance=R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
  const jarakKm=Math.round(distance*10)/10;

  let zona,estimasiBiaya;
  if(distance<=8){zona=1;estimasiBiaya='Tidak ada tambahan biaya';}
  else if(distance<=15){zona=2;estimasiBiaya='Rp70.000-Rp120.000';}
  else{zona=3;estimasiBiaya='Rp120.000-Rp250.000';}

  return json({status:'success',zona,jarakKm,estimasiBiaya},200,cors);
 }
};
function json(data,status,headers){return new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json',...headers}});}
