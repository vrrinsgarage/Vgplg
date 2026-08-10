/* VRRINS GARAGE — CEK LOKASI TERINTEGRASI DENGAN POPUP LAYANAN */
(() => {
  'use strict';

  const WORKER_URL = 'https://layanan-location-api.vgplg003.workers.dev/';
  const WA_NUMBER = '62895622499262';
  const PALEMBANG_CENTER = [-2.990000, 104.755000];

  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

  function formatDistance(km) {
    const n = Number(km);
    if (!Number.isFinite(n)) return '-';
    return n < 1 ? `${Math.round(n * 1000)} m` : `${n.toFixed(1)} km`;
  }

  function zoneLabel(zone) {
    switch (Number(zone)) {
      case 1: return 'Zona 1 (0–8 km)';
      case 2: return 'Zona 2 (>8–15 km)';
      case 3: return 'Zona 3 (>15 km)';
      default: return 'Zona tidak dikenali';
    }
  }

  function costText(zone) {
    switch (Number(zone)) {
      case 1: return 'Tidak ada tambahan biaya transportasi.';
      case 2: return 'Estimasi biaya transportasi: Rp70.000 – Rp120.000';
      case 3: return 'Estimasi biaya transportasi: Rp120.000 – Rp250.000';
      default: return '';
    }
  }

  function bookingUrl(serviceName, zone, distance) {
    const message = zone
      ? `Halo Vrrins Garage, saya mau booking ${serviceName}. Saya berada di ${zoneLabel(zone)}, jarak ${formatDistance(distance)}. Mohon bantu jadwalkan booking.`
      : `Halo Vrrins Garage, saya mau booking ${serviceName}. Mohon bantu jadwalkan booking.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function injectStyle() {
    if (document.getElementById('vg-location-style')) return;
    const style = document.createElement('style');
    style.id = 'vg-location-style';
    style.textContent = `
      .vg-location-check{margin:24px auto 8px;padding:16px;border:1px solid #2a2d31;border-radius:14px;background:#101113}
      .vg-location-check__head h4{margin:6px 0;font-size:16px}.vg-location-check__head p{margin:0;color:#a5a7ab;font-size:12px;line-height:1.5}
      .vg-location-check__button{display:block;width:100%;margin-top:14px;padding:13px 16px;border:0;border-radius:10px;background:#168f5a;color:#fff;font-weight:900;cursor:pointer}
      .vg-location-check__button:disabled{opacity:.65;cursor:wait}.vg-location-check__result{margin-top:12px;padding:13px;border:1px solid #2a2d31;border-radius:10px;text-align:center;font-size:13px}
      .vg-location-zone{font-size:19px;font-weight:900;color:#e10606}.vg-location-cost{margin-top:5px;color:#54d68a;font-size:12px}.vg-location-error{color:#ff6b6b}
      .vg-location-map{height:190px;margin-top:12px;border-radius:10px;overflow:hidden;background:#0c0d0f;border:1px solid #2a2d31}
      .vg-location-book{display:inline-flex;margin-top:10px;padding:9px 13px;border-radius:9px;background:#168f5a;color:#fff;text-decoration:none;font-size:11px;font-weight:900}
    `;
    document.head.appendChild(style);
  }

  let leafletPromise = null;
  function loadLeaflet() {
    if (window.L) return Promise.resolve(window.L);
    if (leafletPromise) return leafletPromise;
    leafletPromise = new Promise((resolve, reject) => {
      if (!document.querySelector('link[data-vg-leaflet]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.dataset.vgLeaflet = '1';
        document.head.appendChild(link);
      }
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => resolve(window.L);
      script.onerror = () => reject(new Error('Peta gagal dimuat.'));
      document.head.appendChild(script);
    });
    return leafletPromise;
  }

  function initMap(container, lat, lng) {
    return loadLeaflet().then(L => {
      const map = L.map(container, { center: [lat, lng], zoom: 14, zoomControl: false, attributionControl: true });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
      L.marker([lat, lng]).addTo(map).bindPopup('Lokasi Anda').openPopup();
      return map;
    });
  }

  function showError(result, message, serviceName) {
    const url = bookingUrl(serviceName);
    result.hidden = false;
    result.innerHTML = `<div class="vg-location-error">⚠️ ${esc(message)}</div><a class="vg-location-book" target="_blank" rel="noopener" href="${url}">📱 BOOKING VIA WA</a>`;
  }

  async function checkLocation(button) {
    const box = button.closest('[data-location-service-id]');
    const result = box?.querySelector('[data-location-result]');
    const serviceName = box?.dataset.locationServiceName || 'layanan';
    if (!result) return;

    button.disabled = true;
    button.textContent = '⏳ MENGAMBIL LOKASI...';
    result.hidden = false;
    result.innerHTML = '<div>⏳ Meminta lokasi Anda...</div>';

    try {
      if (!window.isSecureContext) throw new Error('Fitur lokasi membutuhkan koneksi HTTPS.');
      if (!navigator.geolocation) throw new Error('Browser tidak mendukung geolokasi.');

      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 });
      });

      const lat = Number(position.coords.latitude);
      const lng = Number(position.coords.longitude);
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) throw new Error('Koordinat lokasi tidak valid.');

      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lat, lng })
      });

      const text = await response.text();
      let data;
      try { data = JSON.parse(text); } catch { throw new Error('Respons server tidak valid.'); }
      if (!response.ok) throw new Error(data?.message || `Server error: ${response.status}`);
      if (data.status !== 'success') throw new Error(data.message || 'Perhitungan lokasi gagal.');

      const zone = Number(data.zona);
      const distance = Number(data.jarakKm);
      if (![1,2,3].includes(zone) || !Number.isFinite(distance)) throw new Error('Data hasil dari server tidak valid.');

      result.hidden = false;
      result.innerHTML = `<div class="vg-location-zone">${zoneLabel(zone)}</div><div>Jarak: ${formatDistance(distance)}</div><div class="vg-location-cost">${costText(zone)}</div><div class="vg-location-map" data-location-map></div><a class="vg-location-book" target="_blank" rel="noopener" href="${bookingUrl(serviceName, zone, distance)}">📱 BOOKING LAYANAN INI VIA WA</a>`;

      const mapEl = result.querySelector('[data-location-map]');
      try { await initMap(mapEl, lat, lng); } catch { mapEl.innerHTML = '<div style="padding:55px 10px;text-align:center;color:#888;font-size:11px">Peta tidak dapat dimuat. Hasil zona tetap valid.</div>'; }
    } catch (error) {
      let message = error?.message || 'Gagal menghubungi server.';
      if (error?.code === 1) message = 'Anda menolak izin lokasi. Booking via WhatsApp tetap tersedia.';
      else if (error?.code === 2) message = 'Posisi tidak tersedia. Silakan coba lagi.';
      else if (error?.code === 3) message = 'Pengambilan lokasi terlalu lama. Silakan coba lagi.';
      showError(result, message, serviceName);
    } finally {
      button.disabled = false;
      button.textContent = '📍 CEK LOKASI SAYA';
    }
  }

  injectStyle();
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-location-check]');
    if (button) checkLocation(button);
  });
})();
