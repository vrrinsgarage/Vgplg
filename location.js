/* location.js
   VRRINS GARAGE - Location check integration
   Garage coordinates are NEVER exposed to frontend.
*/
(function () {
  'use strict';

  const WORKER_URL = 'https://layanan-location-api.vgplg003.workers.dev/';
  const WA_NUMBER = '62895622499262';

  let currentServiceName = '';
  let currentDistanceKm = null;
  let currentZone = null;

  function formatDistance(km) {
    const n = Number(km);
    if (!Number.isFinite(n)) return '-';
    if (n < 1) return Math.round(n * 1000) + ' m';
    return n.toFixed(1) + ' km';
  }

  function zoneLabel(zone) {
    if (Number(zone) === 1) return 'Zona 1';
    if (Number(zone) === 2) return 'Zona 2';
    if (Number(zone) === 3) return 'Zona 3';
    return 'Zona tidak dikenali';
  }

  function bookingMessage() {
    const distance = formatDistance(currentDistanceKm);
    const service = currentServiceName || 'layanan';
    return [
      `Jarak lokasi saya: ${distance}`,
      '',
      'Halo, kak. 👋',
      'Biso bantu jadwalkan booking?',
      '',
      `Aku nak booking layanan ${service}.`,
      '',
      'Terima kasih. 🙏'
    ].join('\n');
  }

  function getElements() {
    return {
      button: document.getElementById('location-check-button'),
      result: document.getElementById('location-result'),
      booking: document.getElementById('location-booking-button')
    };
  }

  function ensureLocationUI(serviceName) {
    currentServiceName = serviceName || currentServiceName || '';

    const popup = document.querySelector('.service-popup');
    if (!popup) return null;

    let box = document.getElementById('location-check-box');
    if (!box) {
      box = document.createElement('div');
      box.id = 'location-check-box';
      box.innerHTML = `
        <div class="location-check-title">Cek Lokasi Saya</div>
        <button type="button" id="location-check-button">📍 CEK LOKASI SAYA</button>
        <div id="location-result" hidden></div>
        <a id="location-booking-button" href="#" target="_blank" rel="noopener" hidden>
          BOOKING LAYANAN INI
        </a>
      `;

      const detailTarget =
        popup.querySelector('.service-popup__content') ||
        popup.querySelector('.service-popup__body') ||
        popup.querySelector('.popup-content') ||
        popup;

      detailTarget.appendChild(box);
    }

    const els = getElements();
    if (els.button && !els.button.dataset.bound) {
      els.button.dataset.bound = '1';
      els.button.addEventListener('click', checkLocation);
    }

    return els;
  }

  function showResult(message, isError) {
    const els = getElements();
    if (!els.result) return;
    els.result.hidden = false;
    els.result.innerHTML = message;
    els.result.className = isError ? 'location-error' : 'location-success';
  }

  function showBooking() {
    const els = getElements();
    if (!els.booking) return;
    els.booking.href =
      'https://wa.me/' + WA_NUMBER + '?text=' +
      encodeURIComponent(bookingMessage());
    els.booking.hidden = false;
  }

  async function checkLocation() {
    const els = getElements();
    if (!els.button) return;

    els.button.disabled = true;
    if (els.booking) els.booking.hidden = true;
    showResult('⏳ Mengambil lokasi Anda...', false);

    if (!navigator.geolocation) {
      showResult('⚠️ Browser tidak mendukung lokasi.', true);
      els.button.disabled = false;
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async function (position) {
        try {
          const response = await fetch(WORKER_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            })
          });

          if (!response.ok) throw new Error('Server error ' + response.status);

          const data = await response.json();

          if (data.status !== 'success') {
            throw new Error(data.message || 'Lokasi tidak dapat diproses.');
          }

          currentDistanceKm = Number(data.jarakKm);
          currentZone = Number(data.zona);

          showResult(
            `<strong>${zoneLabel(currentZone)}</strong><br>Jarak: ${formatDistance(currentDistanceKm)}`,
            false
          );
          showBooking();
        } catch (error) {
          showResult('⚠️ ' + (error.message || 'Gagal menghubungi server.'), true);
        } finally {
          els.button.disabled = false;
        }
      },
      function (error) {
        let message = 'Gagal mendapatkan lokasi.';
        if (error.code === 1) message = 'Anda menolak izin lokasi.';
        else if (error.code === 2) message = 'Posisi tidak tersedia.';
        else if (error.code === 3) message = 'Permintaan lokasi timeout.';
        showResult('⚠️ ' + message, true);
        els.button.disabled = false;
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  function findServiceNameFromPopup() {
    const popup = document.querySelector('.service-popup');
    if (!popup) return '';
    const title =
      popup.querySelector('.service-popup__title') ||
      popup.querySelector('.popup-title') ||
      popup.querySelector('h2') ||
      popup.querySelector('h3');
    return title ? title.textContent.trim() : '';
  }

  function init() {
    // Observe popup creation/opening without modifying existing floating booking.
    const observer = new MutationObserver(function () {
      const popup = document.querySelector('.service-popup');
      if (popup) {
        ensureLocationUI(findServiceNameFromPopup());
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
