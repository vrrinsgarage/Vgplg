(function() {
  'use strict';

  // GANTI dengan URL Cloudflare Worker Anda
  const WORKER_URL = 'https://location-checker.your-subdomain.workers.dev';

  window.VGLocation = {
    containerId: 'vg-location-container',

    // Fungsi utama: dipanggil dari popup
    checkLocation: async function(serviceName, serviceId) {
      const container = document.getElementById(this.containerId);
      if (!container) {
        console.error('Container #vg-location-container tidak ditemukan');
        return;
      }

      // Reset tampilan
      container.innerHTML = '<div class="vg-location-loading">⏳ Mengakses lokasi...</div>';

      // Cek dukungan geolokasi
      if (!navigator.geolocation) {
        this.showError(container, 'Browser tidak mendukung geolokasi.');
        this.enableBooking(container, serviceName, serviceId);
        return;
      }

      try {
        // Minta posisi
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000,
          });
        });

        const { latitude, longitude } = position.coords;

        // Kirim ke Worker
        const response = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lat: latitude, lng: longitude }),
        });

        if (!response.ok) throw new Error('Server error');
        const data = await response.json();
        if (data.status !== 'success') throw new Error(data.message || 'Gagal');

        // Tampilkan hasil
        this.showResult(container, data, serviceName, serviceId);
      } catch (error) {
        console.error(error);
        // Tangani berbagai error
        if (error.code === 1) {
          this.showError(container, '⚠️ Anda menolak izin lokasi.');
        } else if (error.code === 2 || error.code === 3) {
          this.showError(container, '⚠️ Posisi tidak tersedia.');
        } else {
          this.showError(container, '⚠️ Gagal menghubungi layanan lokasi.');
        }
        // Tetap sediakan tombol booking (tanpa jarak)
        this.enableBooking(container, serviceName, serviceId);
      }
    },

    // Tampilkan hasil sukses
    showResult: function(container, data, serviceName, serviceId) {
      const { zona, jarakKm, estimasiBiaya } = data;
      const biayaInfo = zona === 1
        ? 'Tidak ada tambahan biaya transportasi.'
        : `Estimasi biaya transportasi: ${estimasiBiaya}`;

      container.innerHTML = `
        <div class="vg-location-result">
          <p><strong>📍 Jarak:</strong> ${jarakKm} km</p>
          <p><strong>Zona ${zona}</strong></p>
          <p class="vg-location-cost">${biayaInfo}</p>
        </div>
      `;

      // Tambahkan tombol booking setelah hasil
      this.enableBooking(container, serviceName, serviceId, jarakKm);
    },

    // Tampilkan pesan error
    showError: function(container, message) {
      container.innerHTML = `<div class="vg-location-error">${message}</div>`;
    },

    // Tambahkan tombol booking WhatsApp
    enableBooking: function(container, serviceName, serviceId, jarakKm = null) {
      // Hapus tombol lama jika ada
      const oldBtn = container.querySelector('.vg-location-booking');
      if (oldBtn) oldBtn.remove();

      const btn = document.createElement('a');
      btn.className = 'vg-location-booking button button--whatsapp';
      btn.target = '_blank';
      btn.rel = 'noopener';

      // Bangun pesan WhatsApp
      let msg = '';
      if (jarakKm !== null) {
        msg = `Jarak lokasi saya: ${jarakKm} km\n\n`;
      }
      msg += `Halo, kak. 👋\n\nBiso bantu jadwalkan booking?\n\nAku nak booking layanan ${serviceName}.\n\nTerima kasih. 🙏`;

      btn.href = `https://wa.me/62895622499262?text=${encodeURIComponent(msg)}`;

      // Gunakan gambar booking (sesuai dengan yang sudah ada)
      btn.innerHTML = `<img src="images/booking-layanan-ini.webp" alt="Booking layanan ini" loading="lazy" style="display:block;width:100%;height:auto;">`;
      btn.style.cssText = `
        display:block !important;
        width:220px !important;
        height:48px !important;
        margin:12px auto 0 !important;
        border-radius:14px !important;
        overflow:hidden !important;
        background-image:url("images/booking-layanan-ini.webp") !important;
        background-size:cover !important;
        background-position:center !important;
        color:transparent !important;
        text-indent:-9999px !important;
      `;

      container.appendChild(btn);
    },
  };
})();