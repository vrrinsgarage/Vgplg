export default {
  async fetch(request, env) {
    // Daftar origin yang diizinkan – sesuaikan dengan domain Anda
    const allowedOrigins = ['https://vrrinsgarage.github.io', 'https://vrrinsgarage.github.io/v1'];
    const origin = request.headers.get('Origin');
    const corsHeaders = {
      'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : '',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders, status: 204 });
    }
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ status: 'error', message: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    try {
      const { lat, lng } = await request.json();
      if (typeof lat !== 'number' || typeof lng !== 'number') {
        throw new Error('Invalid coordinates');
      }

      const GARAGE_LAT = env.GARAGE_LAT;
      const GARAGE_LNG = env.GARAGE_LNG;
      if (!GARAGE_LAT || !GARAGE_LNG) {
        throw new Error('Garage coordinates not configured');
      }

      const toRad = deg => deg * Math.PI / 180;
      const R = 6371;
      const dLat = toRad(GARAGE_LAT - lat);
      const dLng = toRad(GARAGE_LNG - lng);
      const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat)) * Math.cos(toRad(GARAGE_LAT)) *
        Math.sin(dLng / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const jarakKm = R * c;

      let zona, estimasiBiaya;
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

      return new Response(JSON.stringify({
        status: 'success',
        zona,
        jarakKm: Math.round(jarakKm * 10) / 10,
        estimasiBiaya,
      }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    } catch (e) {
      return new Response(JSON.stringify({ status: 'error', message: e.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
  }
};