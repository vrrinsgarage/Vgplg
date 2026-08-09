/* VRRINS GARAGE — AREA LAYANAN V2
   Konsep baru: radius GPS, bukan daftar perumahan sebagai penentu zona.
   Titik alamat resmi yang diberikan: 2MQJ+466, Bukit Baru, Palembang.
*/
(() => {
  'use strict';

  const GARAGE = {
    // Titik kerja sementara untuk kalkulasi GPS; alamat/Plus Code tetap sumber alamat utama.
    lat: -2.98836,
    lng: 104.71871,
    plusCode: '2MQJ+466, Bukit Baru, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30153'
  };

  const ZONES = [
    { id: 1, min: 0, max: 8, color: '#18c96a', title: 'Zona Utama Layanan', desc: 'Layanan prioritas dalam radius 0–8 KM.' },
    { id: 2, min: 8, max: 15, color: '#d7a900', title: 'Zona Perluasan', desc: 'Layanan tersedia dengan konfirmasi lokasi.' },
    { id: 3, min: 15, max: Infinity, color: '#e10606', title: 'Layanan Khusus', desc: 'Konfirmasi ketersediaan sebelum booking.' }
  ];

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const zone = id => ZONES.find(z => z.id === Number(id)) || ZONES[0];
  const mapsUrl = () => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(GARAGE.plusCode);

  function distanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2-lat1), dLon = toRad(lon2-lon1);
    const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  }

  function detectZone(km) {
    if (km <= 8) return ZONES[0];
    if (km <= 15) return ZONES[1];
    return ZONES[2];
  }

  function mapPanel(selectedId = 1) {
    const selected = zone(selectedId);
    return `
      <div class="vg-area-v2">
        <div class="vg-area-v2__head">
          <span class="vg-popup-eyebrow">AREA LAYANAN BARU</span>
          <h2 id="vg-modal-title">${esc(selected.title)}</h2>
          <p>Pusat layanan: <strong>VRRINS GARAGE</strong><br>${esc(GARAGE.plusCode)}</p>
        </div>
        <div class="vg-area-v2__map">
          <div class="vg-area-v2__grid"></div>
          <div class="vg-area-v2__ring vg-area-v2__ring--15"><span>15 KM</span></div>
          <div class="vg-area-v2__ring vg-area-v2__ring--8"><span>8 KM</span></div>
          <div class="vg-area-v2__garage">🏠<small>VRRINS GARAGE</small></div>
          <div class="vg-area-v2__north">N</div>
          <div class="vg-area-v2__legend">
            <span><i style="background:#18c96a"></i>0–8 KM</span>
            <span><i style="background:#d7a900"></i>8–15 KM</span>
            <span><i style="background:#e10606"></i>&gt;15 KM</span>
          </div>
        </div>
        <div class="vg-area-v2__zones">
          ${ZONES.map(z => `<button type="button" class="vg-area-v2__zone ${z.id===selected.id?'is-active':''}" data-area-zone="${z.id}">
            <i style="background:${z.color}"></i><span><b>${z.id===1?'0–8 KM':z.id===2?'8–15 KM':'>15 KM'}</b><small>${esc(z.title)}</small></span>
          </button>`).join('')}
        </div>
        <div class="vg-area-v2__actions">
          <button type="button" class="vg-area-v2__gps" data-area-gps>📍 Cek Lokasi Saya</button>
          <a class="vg-area-v2__maps" href="${mapsUrl()}" target="_blank" rel="noopener">🗺️ Buka Google Maps</a>
        </div>
        <div class="vg-area-v2__result" data-area-result>
          <b style="color:${selected.color}">${esc(selected.title)}</b>
          <span>${esc(selected.desc)}</span>
        </div>
        <p class="vg-area-v2__note">Radius zona dihitung dari titik operasional. Daftar perumahan lama tidak lagi menjadi penentu zona.</p>
      </div>`;
  }

  function render(id) {
    if (typeof window.open === 'undefined') return;
    const modal = document.getElementById('vg-modal');
    const content = document.getElementById('vg-modal-content');
    if (!modal || !content) return;
    const html = mapPanel(id);
    if (typeof window.__vgAreaOpen === 'function') window.__vgAreaOpen(html);
    else {
      content.innerHTML = html;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden','false');
      document.body.classList.add('popup-open');
    }
    bind();
  }

  function bind() {
    document.querySelectorAll('[data-area-zone]').forEach(btn => btn.addEventListener('click', () => render(btn.dataset.areaZone)));
    const gps = document.querySelector('[data-area-gps]');
    if (gps) gps.addEventListener('click', () => {
      const result = document.querySelector('[data-area-result]');
      if (!navigator.geolocation) { result.innerHTML = '<b>GPS tidak tersedia.</b><span>Silakan buka lokasi garage melalui Google Maps.</span>'; return; }
      gps.disabled = true; gps.textContent = '⏳ Mencari lokasi...';
      navigator.geolocation.getCurrentPosition(pos => {
        const km = distanceKm(GARAGE.lat, GARAGE.lng, pos.coords.latitude, pos.coords.longitude);
        const z = detectZone(km);
        result.innerHTML = `<b style="color:${z.color}">${z.id===1?'🟢':z.id===2?'🟡':'🔴'} ${esc(z.title)}</b><span>Jarak dari VRRINS GARAGE: <strong>${km.toFixed(1)} KM</strong><br>${esc(z.desc)}</span>`;
        gps.disabled = false; gps.textContent = '📍 Cek Lokasi Saya';
      }, () => {
        result.innerHTML = '<b>⚠️ Lokasi belum dapat dibaca</b><span>Izinkan akses lokasi pada browser lalu coba lagi.</span>';
        gps.disabled = false; gps.textContent = '📍 Cek Lokasi Saya';
      }, {enableHighAccuracy:true, timeout:10000, maximumAge:30000});
    });
  }

  // Pakai sistem popup existing, tetapi ganti isi zona menjadi peta konsep baru.
  const original = window.openZonePopup;
  window.openZonePopup = id => render(id);

  // Hubungkan kartu zona yang sudah ada di index.html.
  document.addEventListener('click', e => {
    const el = e.target.closest('.area-zone');
    if (el) render(el.dataset.zone || 1);
  });
  document.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement?.classList.contains('area-zone')) {
      e.preventDefault(); render(document.activeElement.dataset.zone || 1);
    }
  });

  // Ekspor konfigurasi untuk tahap aplikasi.
  window.VRRINS_AREA_V2 = { GARAGE, ZONES, distanceKm, detectZone, mapsUrl };
})();
