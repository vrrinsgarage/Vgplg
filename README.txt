VRRINS GARAGE — AREA LAYANAN V2 HYBRID INTEGRATION TEST

File utama yang sudah dimodifikasi:
- index-area-v2-hybrid.html

File baru:
- area-v2-hybrid.css
- area-layanan-v2-hybrid.js

Konsep:
- Tombol/kartu Zona 1, Zona 2, Zona 3 TIDAK DIUBAH. Handler lama tetap membuka daftar perumahan dari zona.js.
- Hanya area peta yang mendapatkan overlay klik baru.
- Klik hijau/kuning/merah pada peta membuka modal V2 terpisah.
- Modal V2 memiliki Cek Lokasi Saya, hasil jarak/zona, Google Maps, dan WhatsApp untuk Zona 3.

Untuk menguji pada website penuh:
1. Backup index.html Anda.
2. Ganti sementara index.html dengan index-area-v2-hybrid.html.
3. Tambahkan area-v2-hybrid.css dan area-layanan-v2-hybrid.js ke root website.
4. Pastikan images/area-map.webp, zona.js, popup.js, bootstrap.js, services.js dan aset website lain tetap berada di tempat semula.

Catatan:
- Titik operasional dikonfigurasi terpusat di area-layanan-v2-hybrid.js.
- Jika titik koordinat operasional perlu dikoreksi, ubah hanya GARAGE.lat dan GARAGE.lng.
