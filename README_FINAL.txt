VRRINS GARAGE - FINAL LOCATION INTEGRATION

File basis: production source files supplied in the conversation.

Included:
- index.html
- popup.js
- services.js
- zona.js
- bootstrap.js
- style.css
- location.js
- worker.js
- nojekyll.txt

Final behavior:
1. Existing service popup remains intact.
2. The old booking CTA inside the service detail popup is replaced by CEK LOKASI SAYA.
3. Successful location check shows distance, service zone, and transport estimate.
4. BOOKING LAYANAN INI then opens WhatsApp with the real service name and location data when available.
5. If GPS or Worker fails, booking remains available without fabricated location data.
6. The existing floating BOOK NOW/floating WhatsApp element in index.html is not modified.
7. Garage coordinates are not stored in frontend files; Worker reads GARAGE_LAT and GARAGE_LNG from Cloudflare Secrets.
8. Worker GET returns the health response; POST performs the Haversine calculation.

Cloudflare Secrets required:
GARAGE_LAT
GARAGE_LNG

Worker URL used by frontend:
https://layanan-location-api.vgplg003.workers.dev/

Important: deploy worker.js separately to Cloudflare. Do not put GARAGE_LAT/GARAGE_LNG into GitHub Pages.
