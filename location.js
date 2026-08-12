(() => {
  'use strict';

  const WORKER_URL = 'https://layanan-location-api.vgplg003.workers.dev/';
  const WA_NUMBER = '62895622499262';
  const CONTAINER_ID = 'vg-location-container';

  const bookingMessage = (serviceName, locationData = null) => {
    let msg = `Halo, kak. 👋

Biso bantu jadwalkan booking?

Aku nak booking layanan ${serviceName}.`;

    if (locationData) {
      msg += `

Jarak lokasi saya: ${locationData.jarakKm} km.
Zona layanan: Zona ${locationData.zona}.`;
    }

    msg += `

Terima kasih. 🙏`;
    return msg;
  };

  const createBooking = (serviceName, locationData = null) => {
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
  };

  const setError = (container, message, serviceName, serviceId) => {
    container.innerHTML = '';

    const error = document.createElement('div');
    error.className = 'vg-location-error';
    error.textContent = message;
    container.appendChild(error);

    container.appendChild(createBooking(serviceName));
  };

  const validNumber = value => typeof value === 'number' && Number.isFinite(value);

  window.VGLocation = {
    containerId: CONTAINER_ID,

    checkLocation: async function(serviceName, serviceId) {
      const container = document.getElementById(this.containerId);

      if (!container) {
        console.error('Container #vg-location-container tidak ditemukan');
        return;
      }

      container.innerHTML = '<div class="vg-location-loading">⏳ Mengakses lokasi...</div>';

      if (!navigator.geolocation) {
        setError(
          container,
          '⚠️ Posisi Anda tidak tersedia. Anda tetap bisa melakukan booking.',
          serviceName,
          serviceId
        );
        return;
      }

      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
          });
        });

        const latitude = position?.coords?.latitude;
        const longitude = position?.coords?.longitude;

        if (!validNumber(latitude) || !validNumber(longitude) ||
            latitude < -90 || latitude > 90 ||
            longitude < -180 || longitude > 180) {
          throw new Error('Invalid GPS coordinates');
        }

        const response = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lat: latitude, lng: longitude })
        });

        if (!response.ok) {
          throw new Error(`Location service HTTP ${response.status}`);
        }

        const data = await response.json();

        if (
          !data ||
          data.status !== 'success' ||
          !validNumber(data.zona) ||
          !validNumber(data.jarakKm) ||
          data.jarakKm < 0
        ) {
          throw new Error('Invalid location response');
        }

        const estimasiBiaya =
          typeof data.estimasiBiaya === 'string'
            ? data.estimasiBiaya
            : typeof data.biayaTransportasi === 'string'
              ? data.biayaTransportasi
              : null;

        const result = document.createElement('div');
        result.className = 'vg-location-result';

        const distance = document.createElement('p');
        distance.className = 'vg-location-distance';
        distance.innerHTML = '<strong>Jarak:</strong> ';
        distance.append(document.createTextNode(`${data.jarakKm} km`));

        const zone = document.createElement('p');
        zone.className = 'vg-location-zone';
        zone.innerHTML = '<strong>Zona layanan:</strong> ';
        zone.append(
          document.createTextNode(
            data.zona === 0
              ? 'Di luar area layanan'
              : `Zona ${data.zona}`
          )
        );

        const cost = document.createElement('p');
        cost.className = 'vg-location-cost';
        cost.textContent =
          estimasiBiaya ||
          data.message ||
          'Tidak ada informasi biaya transportasi.';

        result.append(distance, zone, cost);

        container.innerHTML = '';
        container.appendChild(result);
        container.appendChild(createBooking(serviceName, {
          jarakKm: data.jarakKm,
          zona: data.zona
        }));
      } catch (error) {
        console.error('VGLocation:', error);

        if (error && error.code === 1) {
          setError(
            container,
            '⚠️ Izin lokasi ditolak. Anda tetap bisa melakukan booking.',
            serviceName,
            serviceId
          );
        } else if (error && error.code === 3) {
          setError(
            container,
            '⚠️ Pengambilan lokasi melewati batas waktu. Anda tetap bisa melakukan booking.',
            serviceName,
            serviceId
          );
        } else if (error && error.code === 2) {
          setError(
            container,
            '⚠️ Posisi Anda tidak tersedia. Anda tetap bisa melakukan booking.',
            serviceName,
            serviceId
          );
        } else {
          setError(
            container,
            '⚠️ Layanan lokasi sedang tidak tersedia. Anda tetap bisa melakukan booking.',
            serviceName,
            serviceId
          );
        }
      }
    }
  };

  const initLocationToggle = () => {
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
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLocationToggle, { once: true });
  } else {
    initLocationToggle();
  }
})();
