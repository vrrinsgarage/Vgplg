(() => {
  'use strict';

  const WORKER_URL = 'https://layanan-location-api.vgplg003.workers.dev/';
  const WA_NUMBER = '62895622499262';
  const CONTAINER_ID = 'vg-location-container';

  function bookingMessage(serviceName, locationData = null) {
    const name = serviceName || 'servis mobil';
    let msg = '';

    if (locationData && Number.isFinite(locationData.jarakKm)) {
      msg += `Jarak lokasi saya: ${locationData.jarakKm} km.`;
      if (Number.isFinite(locationData.zona)) {
        msg += `\nZona layanan: ${locationData.zona === 0 ? 'Di luar area layanan' : `Zona ${locationData.zona}`}.`;
      }
      msg += '\n\n';
    }

    msg += `Halo, kak. 👋\n\nBiso bantu jadwalkan booking?\n\nAku nak booking layanan ${name}.\n\nTerima kasih. 🙏`;
    return msg;
  }

  function createBooking(serviceName, locationData = null) {
    const btn = document.createElement('a');
    btn.className = 'vg-location-booking';
    btn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      bookingMessage(serviceName, locationData)
    )}`;
    btn.target = '_blank';
    btn.rel = 'noopener';
    btn.setAttribute('aria-label', 'Booking layanan ini');
    btn.innerHTML = '<img src="images/vg-booking-v1.webp" alt="Booking Layanan Ini" loading="lazy">';
    return btn;
  }

  function setError(container, message, serviceName) {
    container.innerHTML = '';

    const error = document.createElement('div');
    error.className = 'vg-location-error';
    error.textContent = message;
    container.appendChild(error);
    container.appendChild(createBooking(serviceName));
  }

  const validNumber = value => typeof value === 'number' && Number.isFinite(value);

  let locationCheckInProgress = false;

  async function requestLocation() {
    if (!navigator.geolocation) {
      throw new Error('GEOLOCATION_UNSUPPORTED');
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 60000
      });
    });
  }

  window.VGLocation = {
    containerId: CONTAINER_ID,

    checkLocation: async function(serviceName = 'servis mobil') {
      if (locationCheckInProgress) return;
      locationCheckInProgress = true;

      const container = document.getElementById(this.containerId);

      if (!container) {
        console.error('Container #vg-location-container tidak ditemukan');
        locationCheckInProgress = false;
        return;
      }

      container.innerHTML = '<div class="vg-location-loading">⏳ Mengakses lokasi...</div>';

      try {
        const position = await requestLocation();
        const latitude = position?.coords?.latitude;
        const longitude = position?.coords?.longitude;

        if (
          !validNumber(latitude) || !validNumber(longitude) ||
          latitude < -90 || latitude > 90 ||
          longitude < -180 || longitude > 180
        ) {
          throw new Error('Invalid GPS coordinates');
        }

        const response = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lat: latitude, lng: longitude }),
          cache: 'no-store'
        });

        let data = null;
        try {
          data = await response.json();
        } catch (_) {
          data = null;
        }

        if (!response.ok) {
          const serverMessage = data?.message ? `: ${data.message}` : '';
          throw new Error(`Location service HTTP ${response.status}${serverMessage}`);
        }

        if (
          !data ||
          !validNumber(data.jarakKm) ||
          data.jarakKm < 0 ||
          !Number.isInteger(data.zona) ||
          data.zona < 0 ||
          data.zona > 3
        ) {
          throw new Error('Invalid location response');
        }

        const result = document.createElement('div');
        result.className = 'vg-location-result';

        const distance = document.createElement('p');
        distance.className = 'vg-location-distance';
        distance.innerHTML = '<strong>Perkiraan jarak Anda:</strong> ';
        distance.append(document.createTextNode(`${data.jarakKm} km`));

        const zone = document.createElement('p');
        zone.className = 'vg-location-zone';
        zone.innerHTML = '<strong>Zona layanan:</strong> ';
        zone.append(document.createTextNode(data.zona === 0 ? 'Di luar area layanan' : `Zona ${data.zona}`));

        const cost = document.createElement('p');
        cost.className = 'vg-location-cost';
        const estimatedCost = data.estimasiBiaya ?? data.biayaTransportasi;
        cost.textContent = estimatedCost || 'Hubungi WhatsApp untuk konfirmasi';

        result.append(distance, zone, cost);
        container.innerHTML = '';
        container.appendChild(result);
        container.appendChild(createBooking(serviceName, {
          jarakKm: data.jarakKm,
          zona: data.zona
        }));
      } catch (error) {
        console.error('VGLocation:', error);

        if (error?.code === 1) {
          setError(container, '⚠️ Izin lokasi ditolak. Anda tetap bisa melakukan booking.', serviceName);
        } else if (error?.code === 3) {
          setError(container, '⚠️ Pengambilan lokasi melewati batas waktu. Anda tetap bisa melakukan booking.', serviceName);
        } else if (error?.code === 2) {
          setError(container, '⚠️ Posisi Anda tidak tersedia. Anda tetap bisa melakukan booking.', serviceName);
        } else {
          setError(container, `⚠️ Pemeriksaan lokasi gagal. ${error?.message || 'Layanan lokasi sedang tidak tersedia.'}`, serviceName);
        }
      } finally {
        locationCheckInProgress = false;
      }
    }
  };

  function initLocationToggle() {
    const button = document.getElementById('vg-location-check');
    const container = document.getElementById(CONTAINER_ID);
    const area = button?.closest('.vg-location-area');

    if (!button || !container || !area) return;

    container.hidden = true;

    button.addEventListener('click', async () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        button.setAttribute('aria-expanded', 'false');
        area.classList.remove('is-open');
        container.hidden = true;
        return;
      }

      button.setAttribute('aria-expanded', 'true');
      area.classList.add('is-open');
      container.hidden = false;

      await window.VGLocation.checkLocation('servis mobil');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLocationToggle, { once: true });
  } else {
    initLocationToggle();
  }
})();
