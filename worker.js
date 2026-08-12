export default {
  async fetch(request, env) {
    const allowedOrigins = [
      'https://vrrinsgarage.github.io',
      'https://vrrinsgarage.github.io/v1'
    ];

    const origin = request.headers.get('Origin');

    const corsHeaders = {
      'Access-Control-Allow-Origin':
        allowedOrigins.includes(origin) ? origin : '',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    };

    const json = (body, status = 200) =>
      new Response(JSON.stringify(body), {
        status,
        headers: corsHeaders
      });

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }

    if (request.method !== 'POST') {
      return json(
        { status: 'error', message: 'Method not allowed' },
        405
      );
    }

    try {
      const body = await request.json();

      const lat = Number(body?.lat);
      const lng = Number(body?.lng);

      if (
        !Number.isFinite(lat) ||
        !Number.isFinite(lng) ||
        lat < -90 ||
        lat > 90 ||
        lng < -180 ||
        lng > 180
      ) {
        return json(
          { status: 'error', message: 'Invalid coordinates' },
          400
        );
      }

      // Titik Garage hanya disimpan di Cloudflare Environment Variables.
      // GARAGE_LAT = -2.9621263955297508
      // GARAGE_LNG = 104.68040171301256
      const garageLat = Number(env.GARAGE_LAT);
      const garageLng = Number(env.GARAGE_LNG);

      if (
        !Number.isFinite(garageLat) ||
        !Number.isFinite(garageLng) ||
        garageLat < -90 ||
        garageLat > 90 ||
        garageLng < -180 ||
        garageLng > 180
      ) {
        console.error('Invalid GARAGE_LAT/GARAGE_LNG configuration.');

        return json(
          {
            status: 'error',
            message: 'Garage coordinates are not configured correctly.'
          },
          503
        );
      }

      const toRad = degrees => degrees * Math.PI / 180;
      const earthRadiusKm = 6371;

      const dLat = toRad(garageLat - lat);
      const dLng = toRad(garageLng - lng);

      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat)) *
          Math.cos(toRad(garageLat)) *
          Math.sin(dLng / 2) ** 2;

      const c = 2 * Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );

      const jarakKm = earthRadiusKm * c;

      let zona;
      let estimasiBiaya;

      // Zona final:
      // Zona 1 = 0–5 km
      // Zona 2 = >5–10 km
      // Zona 3 = >10 km
      if (jarakKm <= 5) {
        zona = 1;
        estimasiBiaya = 'Tidak ada tambahan biaya transportasi.';
      } else if (jarakKm <= 10) {
        zona = 2;
        estimasiBiaya = 'Rp60.000–Rp100.000';
      } else {
        zona = 3;
        estimasiBiaya = 'Rp100.000–Rp180.000';
      }

      return json({
        status: 'success',
        zona,
        jarakKm: Math.round(jarakKm * 10) / 10,
        estimasiBiaya
      });
    } catch (error) {
      console.error('Location Worker error:', error);

      return json(
        {
          status: 'error',
          message: 'Location service could not process the request.'
        },
        500
      );
    }
  }
};
