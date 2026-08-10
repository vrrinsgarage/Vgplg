VRRINS GARAGE - FINAL LOCATION INTEGRATION

Basis:
- Original index.html, services.js, popup.js, zona.js, bootstrap.js are preserved.
- location.js adds the location-check flow.
- Existing floating BOOK NOW is not intentionally modified.
- No garage coordinates are included in frontend files.
- Cloudflare Worker reads GARAGE_LAT and GARAGE_LNG from Secrets.

Agreed flow:
Service popup -> Cek Lokasi Saya -> Zona + Jarak -> Booking Layanan Ini -> WhatsApp.

WhatsApp message:
Jarak lokasi saya: [jarak]

Halo, kak. 👋
Biso bantu jadwalkan booking?

Aku nak booking layanan [NAMA LAYANAN].

Terima kasih. 🙏

Worker:
https://layanan-location-api.vgplg003.workers.dev/
