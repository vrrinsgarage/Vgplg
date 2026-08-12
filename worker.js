const ALLOWED_ORIGIN = "https://vrrinsgarage.github.io";

const JSON_HEADERS = {
  "Content-Type": "application/json; charset=UTF-8",
  "Cache-Control": "no-store"
};

function corsHeaders(origin) {
  const headers = {
    ...JSON_HEADERS,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  if (origin === ALLOWED_ORIGIN) {
    headers["Access-Control-Allow-Origin"] = ALLOWED_ORIGIN;
    headers["Vary"] = "Origin";
  }

  return headers;
}

function jsonResponse(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders(origin)
  });
}

function toRadians(value) {
  return value * Math.PI / 180;
}

function calculateDistanceKm(lat1, lng1, lat2, lng2) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function determineZone(jarakKm) {
  if (jarakKm <= 5) {
    return {
      zona: 1,
      namaZona: "Zona 1",
      batasZona: "0–5 km",
      biayaTransportasi: "Tidak ada tambahan biaya transportasi"
    };
  }

  if (jarakKm <= 10) {
    return {
      zona: 2,
      namaZona: "Zona 2",
      batasZona: ">5–10 km",
      biayaTransportasi: "Rp60.000–Rp100.000"
    };
  }

  if (jarakKm <= 15) {
    return {
      zona: 3,
      namaZona: "Zona 3",
      batasZona: ">10–15 km",
      biayaTransportasi: "Rp100.000–Rp180.000"
    };
  }

  return {
    zona: 0,
    namaZona: "Di luar area layanan",
    batasZona: ">15 km",
    biayaTransportasi: null
  };
}

function readGarageCoordinates(env) {
  const garageLat = Number(env?.GARAGE_LAT);
  const garageLng = Number(env?.GARAGE_LNG);

  return {
    garageLat,
    garageLng,
    valid:
      Number.isFinite(garageLat) &&
      Number.isFinite(garageLng) &&
      garageLat >= -90 &&
      garageLat <= 90 &&
      garageLng >= -180 &&
      garageLng <= 180
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      if (origin && origin !== ALLOWED_ORIGIN) {
        return new Response(null, {
          status: 403,
          headers: corsHeaders(origin)
        });
      }

      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin)
      });
    }

    const coordinates = readGarageCoordinates(env);

    // GET is intentionally diagnostic without exposing secret values.
    // It confirms whether both bindings are present and valid.
    if (request.method === "GET") {
      return jsonResponse(
        {
          status: "success",
          message: "VRRINS GARAGE Location API aktif",
          konfigurasi: {
            GARAGE_LAT: coordinates.valid && Number.isFinite(coordinates.garageLat),
            GARAGE_LNG: coordinates.valid && Number.isFinite(coordinates.garageLng),
            siapMenghitungJarak: coordinates.valid
          }
        },
        200,
        origin
      );
    }

    if (request.method !== "POST") {
      return jsonResponse(
        { status: "error", message: "Method not allowed" },
        405,
        origin
      );
    }

    if (origin && origin !== ALLOWED_ORIGIN) {
      return jsonResponse(
        { status: "error", message: "Origin not allowed" },
        403,
        origin
      );
    }

    if (!coordinates.valid) {
      console.error("Garage location binding is missing or invalid", {
        hasGarageLat: env?.GARAGE_LAT !== undefined,
        hasGarageLng: env?.GARAGE_LNG !== undefined
      });

      return jsonResponse(
        {
          status: "error",
          message: "Konfigurasi lokasi layanan belum tersedia"
        },
        500,
        origin
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
        return jsonResponse(
          { status: "error", message: "Koordinat tidak valid" },
          400,
          origin
        );
      }

      const jarakKm = calculateDistanceKm(
        lat,
        lng,
        coordinates.garageLat,
        coordinates.garageLng
      );

      const jarakDibulatkan = Math.round(jarakKm * 10) / 10;
      const hasilZona = determineZone(jarakDibulatkan);

      if (hasilZona.zona === 0) {
        return jsonResponse(
          {
            status: "success",
            layanan: false,
            zona: 0,
            namaZona: hasilZona.namaZona,
            batasZona: hasilZona.batasZona,
            jarakKm: jarakDibulatkan,
            estimasiBiaya: null,
            biayaTransportasi: null,
            message: "Lokasi berada di luar area layanan VRRINS GARAGE"
          },
          200,
          origin
        );
      }

      return jsonResponse(
        {
          status: "success",
          layanan: true,
          zona: hasilZona.zona,
          namaZona: hasilZona.namaZona,
          batasZona: hasilZona.batasZona,
          jarakKm: jarakDibulatkan,
          estimasiBiaya: hasilZona.biayaTransportasi,
          biayaTransportasi: hasilZona.biayaTransportasi
        },
        200,
        origin
      );
    } catch (error) {
      console.error("Location API error:", error);

      return jsonResponse(
        {
          status: "error",
          message: "Data lokasi tidak dapat diproses"
        },
        400,
        origin
      );
    }
  }
};
