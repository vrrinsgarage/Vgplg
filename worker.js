const ALLOWED_ORIGIN = 'https://vrrinsgarage.github.io';
const JSON_HEADERS = { 'Content-Type': 'application/json' };

function corsHeaders(origin) {
  const headers = { ...JSON_HEADERS };

  if (origin === ALLOWED_ORIGIN) {
    headers['Access-Control-Allow-Origin'] = ALLOWED_ORIGIN;
    headers['Vary'] = 'Origin';
  }

  return headers;
}

function jsonResponse(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders(origin)
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');

    if (request.method === 'OPTIONS') {
      const headers = corsHeaders(origin);
      headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
      headers['Access-Control-Allow-Headers'] = 'Content-Type';

      return new Response(null, {
        status: 204,
        headers
      });
    }

    if (request.method !== 'POST') {
      return jsonResponse(
        { status: 'error', message: 'Method not allowed' },
        405,
        origin
      );
    }

    let body;

    try {
      body = await request.json();
    } catch (error) {
      console.error('Invalid JSON request:', error);
      return jsonResponse(
        { status: 'error', message: 'Invalid request' },
        400,
        origin
      );
    }

    const lat = body?.lat;
    const lng = body?.lng;

    if (
      typeof lat !== 'number' ||
      typeof lng !== 'number' ||
      !Number.isFinite(lat) ||
      !Number.isFinite(lng) ||
      lat < -90 ||
      lat > 90 ||
      lng < -180 ||
      lng > 180
    ) {
      return jsonResponse(
        { status: 'error', message: 'Invalid coordinates' },
        400,
        origin
      );
    }

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
      console.error('Invalid GARAGE_LAT/GARAGE_LNG Worker configuration.');
      return jsonResponse(
        { status: 'error', message: 'Location service unavailable' },
        503,
        origin
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

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const jarakKm = earthRadiusKm * c;

    let zona;
    let estimasiBiaya;

    if (jarakKm <= 8) {
      zona = 1;
      estimasiBiaya = 'Tidak ada tambahan biaya transportasi.';
    } else if (jarakKm <= 15) {
      zona = 2;
      estimasiBiaya = 'Rp70.000–Rp120.000';
    } else {
      zona = 3;
      estimasiBiaya = 'Rp120.000–Rp250.000';
    }

    return jsonResponse(
      {
        status: 'success',
        zona,
        jarakKm: Math.round(jarakKm * 10) / 10,
        estimasiBiaya
      },
      200,
      origin
    );
  }
};
