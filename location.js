/* VRRINS GARAGE — Sistem Cek Lokasi & Zona Layanan */
(function () {
  'use strict';

  const WORKER_URL = 'https://layanan-location-api.vgplg003.workers.dev/';
  const WA_NUMBER = '62895622499262';
  const PALEMBANG_CENTER = [-2.990000, 104.755000];

  const mapContainer = document.getElementById('map-container');
  const checkBtn = document.getElementById('check-location-btn');
  const resultDiv = document.getElementById('location-result');

  if (!mapContainer || !checkBtn || !resultDiv) {
    console.warn('Sistem lokasi: elemen DOM tidak ditemukan.');
    return;
  }

  let map = null;
  let userMarker = null;

  function loadLeaflet() {
    return new Promise((resolve, reject) => {
      if (typeof L !== 'undefined') return resolve();

      const existingCss = document.querySelector('link[data-vg-leaflet]');
      if (!existingCss) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.dataset.vgLeaflet = 'true';
        document.head.appendChild(link);
      }

      const existingScript = document.querySelector('script[data-vg-leaflet]');
      if (existingScript) {
        existingScript.addEventListener('load', resolve, { once: true });
        existingScript.addEventListener('error', reject, { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.dataset.vgLeaflet = 'true';
      script.onload = resolve;
      script.onerror = () => reject(new Error('Leaflet gagal dimuat.'));
      document.head.appendChild(script);
    });
  }

  async function initMap() {
    try {
      await loadLeaflet();
      if (map) return;

      map = L.map(mapContainer, {
        center: PALEMBANG_CENTER,
        zoom: 13,
        zoomControl: false,
        attributionControl: true
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
    } catch (err) {
      console.warn('Sistem lokasi: peta gagal dimuat.', err);
      mapContainer.innerHTML = '<div style="color:#888;text-align:center;padding:40px 15px;">Peta tidak dapat dimuat. Fitur cek lokasi tetap dapat digunakan.</div>';
    }
  }

  function formatDistance(km) {
    const value = Number(km);
    if (!Number.isFinite(value)) return '-';
    if (value < 1) return Math.round(value * 1000) + ' m';
    return value.toFixed(1) + ' km';
  }

  function getZoneLabel(zone) {
    switch (Number(zone)) {
      case 1: return 'Zona 1 (0–8 km)';
      case 2: return 'Zona 2 (>8–15 km)';
      case 3: return 'Zona 3 (>15 km)';
      default: return 'Zona tidak dikenali';
    }
  }

  function getCostText(zone) {
    switch (Number(zone)) {
      case 1: return 'Tidak ada tambahan biaya transportasi.';
      case 2: return 'Estimasi biaya transportasi: Rp70.000 – Rp120.000';
      case 3: return 'Estimasi biaya transportasi: Rp120.000 – Rp250.000';
      default: return '';
    }
  }

  function buildWhatsAppMessage(zone, distance) {
    if (zone != null && Number.isFinite(Number(distance))) {
      return `Halo Vrrins Garage, saya dari ${getZoneLabel(zone)}, jarak ${formatDistance(distance)}, mau booking layanan.`;
    }
    return 'Halo Vrrins Garage, saya mau booking layanan.';
  }

  function bookingLink(message) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function showResult(data) {
    resultDiv.style.display = 'block';

    if (data && data.status === 'success') {
      const zone = Number(data.zona);
      const distance = Number(data.jarakKm);
      const zoneLabel = getZoneLabel(zone);
      const costText = getCostText(zone);
      const message = buildWhatsAppMessage(zone, distance);

      resultDiv.innerHTML = `
        <div class="result-zone">${zoneLabel}</div>
        <div class="result-distance">Jarak: ${formatDistance(distance)}</div>
        <div class="result-cost">${costText}</div>
        <div class="location-booking">
          <a href="${bookingLink(message)}" target="_blank" rel="noopener" class="button button--whatsapp">📱 BOOKING VIA WA</a>
        </div>
      `;
      return;
    }

    const message = data && data.message ? String(data.message) : 'Terjadi kesalahan.';
    resultDiv.innerHTML = `
      <div class="location-error">⚠️ ${escapeHtml(message)}</div>
      <div class="location-booking">
        <a href="${bookingLink(buildWhatsAppMessage(null, null))}" target="_blank" rel="noopener" class="button button--whatsapp">📱 BOOKING VIA WA</a>
      </div>
    `;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char];
    });
  }

  function setLoading(isLoading) {
    checkBtn.disabled = isLoading;
    checkBtn.textContent = isLoading ? '⏳ Memproses...' : '📍 CEK LOKASI SAYA';
  }

  function markUserLocation(lat, lng) {
    if (!map || typeof L === 'undefined') return;

    if (userMarker) {
      userMarker.setLatLng([lat, lng]);
    } else {
      userMarker = L.marker([lat, lng]).addTo(map).bindPopup('Lokasi Anda');
    }

    map.setView([lat, lng], 14);
  }

  async function checkLocation() {
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '<div class="location-loading">⏳ Mengambil lokasi...</div>';
    setLoading(true);

    if (!window.isSecureContext) {
      showResult({ status: 'error', message: 'Fitur lokasi membutuhkan koneksi HTTPS.' });
      setLoading(false);
      return;
    }

    if (!navigator.geolocation) {
      showResult({ status: 'error', message: 'Browser Anda tidak mendukung geolokasi.' });
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = Number(position.coords.latitude);
      const lng = Number(position.coords.longitude);

      if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
        showResult({ status: 'error', message: 'Koordinat lokasi tidak valid.' });
        setLoading(false);
        return;
      }

      markUserLocation(lat, lng);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      try {
        const response = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lat, lng }),
          signal: controller.signal
        });

        const text = await response.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error('Respons server tidak valid.');
        }

        if (!response.ok) {
          throw new Error(data.message || `Server error: ${response.status}`);
        }

        if (data.status !== 'success') {
          throw new Error(data.message || 'Server tidak dapat menghitung zona.');
        }

        showResult(data);
      } catch (err) {
        const message = err && err.name === 'AbortError'
          ? 'Server terlalu lama merespons. Silakan coba lagi.'
          : (err && err.message ? err.message : 'Gagal menghubungi server. Silakan coba lagi.');
        showResult({ status: 'error', message });
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    }, (error) => {
      let message = 'Gagal mendapatkan lokasi. ';
      if (error.code === 1) message += 'Anda menolak izin lokasi.';
      else if (error.code === 2) message += 'Posisi tidak tersedia.';
      else if (error.code === 3) message += 'Permintaan lokasi timeout.';
      else message += 'Terjadi kesalahan yang tidak diketahui.';

      showResult({ status: 'error', message });
      setLoading(false);
    }, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 30000
    });
  }

  checkBtn.addEventListener('click', checkLocation);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap, { once: true });
  } else {
    initMap();
  }
})();
