// =========================
// DATABASE LAYANAN
// VRRINS GARAGE (TOTAL 54 LAYANAN)
// =========================

const services = [

  // =========================
  // VG TUNE PACKAGE (6 Layanan)
  // =========================
  {
    id: "vg-tune-basic-bensin",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE BASIC Bensin",
    harga: "Rp150K - Rp200K",
    durasi: "45-60 Menit",
    deskripsi: "Servis berkala untuk menjaga performa mesin bensin melalui pemeriksaan dasar, scanning ECU, dan pengecekan sistem utama.",
    pekerjaan: [
      "Scanning ECU",
      "Pemeriksaan kondisi mesin",
      "Pemeriksaan aki dan sistem pengisian",
      "Pemeriksaan sistem udara",
      "Pemeriksaan sistem pengapian"
    ],
    manfaat: [
      "Menjaga performa mesin",
      "Mendeteksi gangguan awal",
      "Membantu efisiensi bahan bakar"
    ],
    tidakTermasuk: [
      "Spare part",
      "Oli mesin",
      "Biaya transportasi"
    ]
  },
  {
    id: "vg-tune-plus-bensin",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE PLUS Bensin",
    harga: "Rp250K - Rp350K",
    durasi: "60-90 Menit",
    deskripsi: "Paket lanjutan dengan tambahan pembersihan throttle body dan sistem udara.",
    pekerjaan: [
      "Semua layanan VG TUNE BASIC",
      "Pembersihan throttle body",
      "Pembersihan injector",
      "Reset ECU bila diperlukan"
    ],
    manfaat: [
      "Respons mesin lebih baik",
      "Idle lebih stabil",
      "Sistem udara lebih bersih"
    ],
    tidakTermasuk: [
      "Spare part",
      "Cairan pembersih tambahan",
      "Biaya transportasi"
    ]
  },
  {
    id: "vg-tune-pro-bensin",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE PRO Bensin",
    harga: "Rp400K - Rp600K",
    durasi: "90-150 Menit",
    deskripsi: "Paket lengkap dengan analisa scanner dan pemeriksaan performa mesin lebih detail.",
    pekerjaan: [
      "Scanning ECU",
      "Pemeriksaan Live Data",
      "Pemeriksaan Fuel Trim",
      "Pemeriksaan sensor mesin",
      "Pemeriksaan performa mesin"
    ],
    manfaat: [
      "Analisa kondisi mesin lebih detail",
      "Membantu menemukan penyebab masalah",
      "Menjaga performa kendaraan"
    ],
    tidakTermasuk: [
      "Spare part",
      "Perbaikan kerusakan besar",
      "Biaya transportasi"
    ]
  },
  {
    id: "vg-tune-basic-diesel",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE BASIC Diesel",
    harga: "Rp250K - Rp300K",
    durasi: "45-60 Menit",
    deskripsi: "Servis berkala kendaraan diesel dengan pemeriksaan mesin, scanning ECU, dan pembersihan sistem udara dasar.",
    pekerjaan: [
      "Scanning ECU",
      "Pemeriksaan Live Data dasar",
      "Pemeriksaan sistem udara",
      "Pembersihan throttle body",
      "Pembersihan EGR"
    ],
    manfaat: [
      "Menjaga performa mesin diesel",
      "Membantu respons akselerasi",
      "Mendeteksi gangguan lebih awal"
    ],
    tidakTermasuk: [
      "Filter solar",
      "Oli mesin",
      "Spare part"
    ]
  },
  {
    id: "vg-tune-plus-diesel",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE PLUS Diesel",
    harga: "Rp300K - Rp450K",
    durasi: "60-150 Menit",
    deskripsi: "Paket lanjutan servis diesel dengan pembersihan sistem udara lebih menyeluruh untuk membantu mengoptimalkan performa mesin.",
    pekerjaan: [
      "Semua layanan VG TUNE BASIC Diesel",
      "Pembersihan throttle body",
      "Pembersihan EGR Valve",
      "Pembersihan Intake Manifold",
      "Pemeriksaan sistem udara"
    ],
    manfaat: [
      "Membantu mengurangi endapan karbon",
      "Membantu memperbaiki respons mesin",
      "Menjaga efisiensi pembakaran"
    ],
    tidakTermasuk: [
      "Filter solar",
      "Oli mesin",
      "Spare part",
      "Biaya transportasi"
    ]
  },
  {
    id: "vg-tune-pro-diesel",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE PRO Diesel",
    harga: "Rp400K - Rp600K",
    durasi: "120-180 Menit",
    deskripsi: "Paket lengkap servis diesel dengan pembersihan sistem udara menyeluruh dan pemeriksaan performa mesin.",
    pekerjaan: [
      "Semua layanan VG TUNE PLUS Diesel",
      "Pembersihan Intercooler",
      "Pemeriksaan sistem intake",
      "Final Scan ECU",
      "Pemeriksaan respons mesin"
    ],
    manfaat: [
      "Membersihkan sistem udara diesel",
      "Membantu menjaga performa mesin",
      "Membantu mendeteksi gangguan mesin"
    ],
    tidakTermasuk: [
      "Spare part",
      "Servis injector diesel",
      "Servis turbocharger",
      "Biaya transportasi"
    ]
  },

  // =========================
  // VG ADD-ON (2 Layanan)
  // =========================
  {
    id: "vg-addon-gurah-karbon",
    kategori: "VG ADD-ON",
    icon: "🧪",
    nama: "VG ADD-ON Gurah Karbon Mesin",
    harga: "Rp75K - Rp150K",
    durasi: "45-90 Menit",
    deskripsi: "Layanan tambahan untuk membantu membersihkan endapan karbon pada sistem pembakaran mesin.",
    pekerjaan: [
      "Pemeriksaan kondisi awal mesin",
      "Proses carbon cleaner",
      "Monitoring kondisi mesin",
      "Pemeriksaan hasil pekerjaan"
    ],
    manfaat: [
      "Membantu membersihkan karbon",
      "Membantu meningkatkan respons mesin",
      "Mendukung performa mesin"
    ],
    tidakTermasuk: [
      "Kerusakan komponen mesin",
      "Spare part",
      "Biaya transportasi"
    ]
  },
  {
    id: "vg-addon-diesel-purging",
    kategori: "VG ADD-ON",
    icon: "⛽",
    nama: "Diesel Purging Treatment",
    harga: "Rp75K - Rp150K",
    durasi: "45-90 Menit",
    deskripsi: "Layanan tambahan untuk membantu membersihkan sistem bahan bakar diesel menggunakan cairan diesel purge.",
    pekerjaan: [
      "Pemeriksaan sistem bahan bakar",
      "Pemasangan alat purging",
      "Proses pembersihan sistem bahan bakar",
      "Pemeriksaan hasil purging"
    ],
    manfaat: [
      "Membantu membersihkan endapan bahan bakar",
      "Membantu menjaga respons mesin",
      "Mendukung efisiensi pembakaran"
    ],
    tidakTermasuk: [
      "Cairan Diesel Purge",
      "Penggantian injector",
      "Perbaikan pompa injeksi"
    ]
  },

  // =========================
  // VG CHECK (1 Layanan)
  // =========================
  {
    id: "vg-check",
    kategori: "VG CHECK",
    icon: "🔍",
    nama: "VG CHECK",
    harga: "Rp100K - Rp150K",
    durasi: "30-90 Menit",
    deskripsi: "Pemeriksaan menyeluruh kondisi kendaraan untuk mengetahui kondisi komponen, potensi kerusakan, dan prioritas perawatan.",
    pekerjaan: [
      "Pemeriksaan kondisi mesin",
      "Pemeriksaan kebocoran oli dan coolant",
      "Pemeriksaan sistem kelistrikan",
      "Pemeriksaan sistem pendingin",
      "Pemeriksaan sistem pengereman",
      "Pemeriksaan suspensi dan kemudi",
      "Scanning ECU kendaraan yang mendukung",
      "Pemeriksaan hasil dan penjelasan kepada pelanggan"
    ],
    manfaat: [
      "Mengetahui kondisi kendaraan secara menyeluruh",
      "Mendeteksi masalah lebih awal",
      "Membantu menentukan prioritas perbaikan",
      "Mengurangi risiko kerusakan mendadak"
    ],
    tidakTermasuk: [
      "Biaya perbaikan",
      "Spare part",
      "Jasa servis lanjutan",
      "Biaya transportasi"
    ]
  },

  // =========================
  // VG BRAKE SERVICE (1 Layanan)
  // =========================
  {
    id: "vg-brake-service",
    kategori: "VG BRAKE SERVICE",
    icon: "🛑",
    nama: "VG BRAKE SERVICE",
    harga: "Rp270K - Rp316K",
    durasi: "90-150 Menit",
    deskripsi: "Perawatan sistem pengereman untuk menjaga rem tetap aman, bersih, dan optimal.",
    pekerjaan: [
      "Bonus VG CHECK",
      "Pembongkaran sistem rem",
      "Pembersihan kaliper atau tromol",
      "Pembersihan kampas rem",
      "Pelumasan komponen rem",
      "Penyetelan rem",
      "Pemeriksaan minyak rem",
      "Pemeriksaan akhir dan uji fungsi"
    ],
    manfaat: [
      "Membantu menjaga performa pengereman",
      "Mengurangi bunyi rem",
      "Mendeteksi komponen rem yang mulai aus",
      "Meningkatkan keamanan berkendara"
    ],
    tidakTermasuk: [
      "Penggantian kampas rem",
      "Penggantian cakram atau tromol",
      "Penggantian komponen rem",
      "Minyak rem tambahan",
      "Biaya transportasi"
    ]
  },

  // =========================
  // VG OIL SERVICE (1 Layanan)
  // =========================
  {
    id: "vg-oil-service",
    kategori: "VG OIL SERVICE",
    icon: "🛢️",
    nama: "VG OIL SERVICE",
    harga: "Rp50K - Rp75K",
    durasi: "15-30 Menit",
    deskripsi: "Layanan penggantian oli kendaraan dengan pemeriksaan dasar sistem pelumasan.",
    pekerjaan: [
      "Penggantian oli mesin",
      "Pemeriksaan kondisi oli lama",
      "Pemeriksaan baut drain oli",
      "Penggantian ring baut drain bila diperlukan",
      "Pemeriksaan kebocoran oli",
      "Reset service reminder bila tersedia"
    ],
    manfaat: [
      "Menjaga pelumasan mesin",
      "Membantu menjaga performa mesin",
      "Membantu memperpanjang usia komponen mesin"
    ],
    tidakTermasuk: [
      "Oli mesin",
      "Filter oli",
      "Spare part tambahan",
      "Biaya transportasi"
    ]
  },

  // =========================
  // KATEGORI MESIN (4 Layanan)
  // =========================
  {
    id: "flushing-oli-mesin",
    kategori: "MESIN",
    icon: "⚙️",
    nama: "Flushing Oli Mesin",
    harga: "Rp150K - Rp300K",
    durasi: "30-60 Menit",
    deskripsi: "Perawatan untuk membantu membersihkan endapan lumpur oli dan jalur pelumasan mesin sebelum pengisian oli baru.",
    pekerjaan: [
      "Engine Flush",
      "Membersihkan endapan lumpur oli",
      "Membersihkan jalur pelumasan mesin",
      "Pembuangan oli lama",
      "Persiapan pengisian oli baru"
    ],
    manfaat: [
      "Membantu menjaga kebersihan sistem pelumasan",
      "Membantu sirkulasi oli lebih optimal",
      "Mendukung performa mesin"
    ],
    tidakTermasuk: [
      "Oli mesin baru",
      "Spare part",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-busi",
    kategori: "MESIN",
    icon: "⚡",
    nama: "Ganti Busi",
    harga: "Rp75K - Rp150K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian busi untuk membantu menjaga sistem pengapian dan performa mesin.",
    pekerjaan: [
      "Penggantian busi",
      "Pemeriksaan kondisi busi lama",
      "Pemeriksaan celah busi",
      "Pemeriksaan sistem pengapian",
      "Uji performa mesin"
    ],
    manfaat: [
      "Membantu pembakaran lebih optimal",
      "Menjaga respons mesin",
      "Membantu menjaga efisiensi bahan bakar"
    ],
    tidakTermasuk: [
      "Busi",
      "Kerusakan sistem pengapian lain",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-ignition-coil",
    kategori: "MESIN",
    icon: "⚡",
    nama: "Ganti Ignition Coil",
    harga: "Rp110K - Rp380K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian ignition coil untuk mengatasi gangguan sistem pengapian mesin.",
    pekerjaan: [
      "Penggantian ignition coil",
      "Pemeriksaan konektor coil",
      "Pemeriksaan sistem pengapian",
      "Uji percikan api",
      "Uji performa mesin"
    ],
    manfaat: [
      "Membantu mengatasi mesin brebet",
      "Membantu menjaga pembakaran mesin",
      "Meningkatkan respons mesin"
    ],
    tidakTermasuk: [
      "Ignition coil",
      "Kerusakan ECU",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-engine-mounting",
    kategori: "MESIN",
    icon: "🔧",
    nama: "Ganti Engine Mounting",
    harga: "Rp110K - Rp145K / sisi",
    durasi: "30-90 Menit",
    deskripsi: "Penggantian dudukan mesin untuk membantu mengurangi getaran berlebih pada kendaraan.",
    pekerjaan: [
      "Penggantian engine mounting",
      "Pemeriksaan mounting lainnya",
      "Pemeriksaan baut mounting",
      "Pemeriksaan getaran mesin",
      "Uji kendaraan"
    ],
    manfaat: [
      "Mengurangi getaran mesin",
      "Meningkatkan kenyamanan berkendara",
      "Menjaga posisi mesin"
    ],
    tidakTermasuk: [
      "Spare part",
      "Kerusakan dudukan lain",
      "Biaya transportasi"
    ]
  },

  // =========================
  // KATEGORI PELUMASAN (5 Layanan)
  // =========================
  {
    id: "ganti-oli-mesin",
    kategori: "PELUMASAN",
    icon: "🛢️",
    nama: "Ganti Oli Mesin",
    harga: "Rp75K - Rp125K",
    durasi: "15-30 Menit",
    deskripsi: "Layanan penggantian oli mesin dengan pemeriksaan dasar sistem pelumasan kendaraan.",
    pekerjaan: [
      "Penggantian oli mesin",
      "Pemeriksaan kondisi oli lama",
      "Pemeriksaan baut drain oli",
      "Penggantian ring baut drain bila diperlukan",
      "Pemeriksaan kebocoran oli",
      "Reset service reminder bila tersedia"
    ],
    manfaat: [
      "Menjaga pelumasan komponen mesin",
      "Membantu menjaga performa mesin",
      "Membantu mengurangi keausan komponen"
    ],
    tidakTermasuk: [
      "Oli mesin",
      "Filter oli",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-oli-transmisi-manual",
    kategori: "PELUMASAN",
    icon: "⚙️",
    nama: "Ganti Oli Transmisi Manual",
    harga: "Rp100K - Rp175K",
    durasi: "30-45 Menit",
    deskripsi: "Penggantian oli transmisi manual untuk menjaga kerja komponen transmisi tetap optimal.",
    pekerjaan: [
      "Penggantian oli transmisi manual",
      "Pemeriksaan baut drain dan fill",
      "Pemeriksaan kondisi oli lama",
      "Pemeriksaan kebocoran oli transmisi"
    ],
    manfaat: [
      "Membantu perpindahan gigi lebih nyaman",
      "Menjaga pelumasan gear transmisi",
      "Membantu memperpanjang usia transmisi"
    ],
    tidakTermasuk: [
      "Oli transmisi",
      "Perbaikan transmisi",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-oli-transmisi-at",
    kategori: "PELUMASAN",
    icon: "⚙️",
    nama: "Ganti Oli Transmisi Otomatis (AT)",
    harga: "Rp275K - Rp375K",
    durasi: "45-90 Menit",
    deskripsi: "Penggantian oli transmisi otomatis dengan pemeriksaan kondisi dasar transmisi.",
    pekerjaan: [
      "Penggantian oli transmisi otomatis",
      "Pemeriksaan baut drain dan fill",
      "Pemeriksaan kondisi oli AT",
      "Pemeriksaan kebocoran transmisi"
    ],
    manfaat: [
      "Membantu menjaga perpindahan gigi",
      "Menjaga sistem hidrolik transmisi",
      "Membantu menjaga performa transmisi"
    ],
    tidakTermasuk: [
      "Oli AT",
      "Filter transmisi",
      "Perbaikan transmisi"
    ]
  },
  {
    id: "ganti-oli-gardan",
    kategori: "PELUMASAN",
    icon: "⚙️",
    nama: "Ganti Oli Gardan",
    harga: "Rp100K - Rp175K",
    durasi: "30-45 Menit",
    deskripsi: "Penggantian oli gardan untuk menjaga pelumasan komponen penggerak roda.",
    pekerjaan: [
      "Penggantian oli gardan",
      "Pemeriksaan baut drain dan fill",
      "Pemeriksaan kondisi oli gardan",
      "Pemeriksaan kebocoran oli"
    ],
    manfaat: [
      "Menjaga kerja gardan",
      "Mengurangi gesekan komponen",
      "Membantu mencegah keausan"
    ],
    tidakTermasuk: [
      "Oli gardan",
      "Perbaikan gardan",
      "Biaya transportasi"
    ]
  },
  {
    id: "atasi-kebocoran-oli",
    kategori: "PELUMASAN",
    icon: "💧",
    nama: "Mengatasi Kebocoran Oli Mesin",
    harga: "Rp150K - Rp500K",
    durasi: "60-180 Menit",
    deskripsi: "Pemeriksaan dan penanganan awal kebocoran oli mesin berdasarkan sumber kebocoran.",
    pekerjaan: [
      "Pemeriksaan titik kebocoran oli",
      "Pemeriksaan seal dan gasket",
      "Penggantian seal/gasket bila diperlukan",
      "Pembersihan area kebocoran",
      "Pengujian setelah perbaikan"
    ],
    manfaat: [
      "Membantu mencegah kehilangan oli",
      "Menjaga kebersihan area mesin",
      "Mendeteksi sumber kebocoran"
    ],
    tidakTermasuk: [
      "Seal atau gasket",
      "Kerusakan besar mesin",
      "Biaya transportasi"
    ]
  },

  // =========================
  // KATEGORI BAHAN BAKAR (4 Layanan)
  // =========================
  {
    id: "pemeriksaan-sistem-bahan-bakar",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Pemeriksaan Sistem Bahan Bakar",
    harga: "Rp150K - Rp250K",
    durasi: "30-60 Menit",
    deskripsi: "Pemeriksaan kondisi sistem bahan bakar untuk mengetahui gangguan pada suplai bahan bakar kendaraan.",
    pekerjaan: [
      "Pemeriksaan fuel pump",
      "Pemeriksaan filter bahan bakar",
      "Pemeriksaan injector",
      "Pemeriksaan tekanan bahan bakar",
      "Pemeriksaan kebocoran sistem bahan bakar"
    ],
    manfaat: [
      "Mendeteksi gangguan sistem bahan bakar",
      "Membantu menjaga performa mesin",
      "Membantu efisiensi pembakaran"
    ],
    tidakTermasuk: [
      "Penggantian komponen",
      "Spare part",
      "Biaya transportasi"
    ]
  },
  {
    id: "fuel-system-cleaner",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Fuel System Cleaner",
    harga: "Rp250K - Rp500K",
    durasi: "60-120 Menit",
    deskripsi: "Perawatan sistem bahan bakar untuk membantu membersihkan endapan pada jalur bahan bakar dan injector.",
    pekerjaan: [
      "Pembersihan jalur bahan bakar",
      "Pembersihan injector",
      "Pembersihan ruang bakar",
      "Pemeriksaan sistem bahan bakar"
    ],
    manfaat: [
      "Membantu meningkatkan respons mesin",
      "Membantu menjaga pola pembakaran",
      "Membantu efisiensi bahan bakar"
    ],
    tidakTermasuk: [
      "Spare part",
      "Kerusakan injector",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-fuel-pump",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Ganti Fuel Pump",
    harga: "Rp190K - Rp260K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian fuel pump dengan pemeriksaan sistem suplai bahan bakar kendaraan.",
    pekerjaan: [
      "Penggantian fuel pump",
      "Pemeriksaan tekanan bahan bakar",
      "Pemeriksaan soket kelistrikan fuel pump",
      "Pemeriksaan kebocoran",
      "Uji sistem bahan bakar"
    ],
    manfaat: [
      "Membantu suplai bahan bakar optimal",
      "Membantu mengatasi mesin sulit hidup",
      "Menjaga performa mesin"
    ],
    tidakTermasuk: [
      "Fuel pump",
      "Perbaikan kelistrikan besar",
      "Biaya transportasi"
    ]
  },
  {
    id: "servis-injector",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Servis Injector",
    harga: "Rp300K - Rp600K",
    durasi: "90-180 Menit",
    deskripsi: "Pembersihan injector untuk membantu menjaga pola semprotan bahan bakar.",
    pekerjaan: [
      "Pemeriksaan injector",
      "Pembersihan injector",
      "Pengujian pola semprotan",
      "Pengujian debit injector",
      "Pemeriksaan kebocoran injector"
    ],
    manfaat: [
      "Membantu pembakaran lebih optimal",
      "Membantu respons mesin",
      "Membantu menjaga efisiensi bahan bakar"
    ],
    tidakTermasuk: [
      "Injector baru",
      "Kerusakan sistem bahan bakar",
      "Biaya transportasi"
    ]
  },

  // =========================
  // KATEGORI SUSPENSI (5 Layanan)
  // =========================
  {
    id: "ganti-shock-absorber-depan",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Shock Absorber Depan",
    harga: "Rp220K - Rp390K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian shock absorber depan untuk membantu menjaga kenyamanan dan kestabilan kendaraan.",
    pekerjaan: [
      "Penggantian shock absorber depan",
      "Pemeriksaan dudukan shock",
      "Pemeriksaan baut pengikat",
      "Pemeriksaan kondisi suspensi"
    ],
    manfaat: [
      "Mengurangi getaran kendaraan",
      "Meningkatkan kenyamanan berkendara",
      "Menjaga kestabilan kendaraan"
    ],
    tidakTermasuk: [
      "Spare part",
      "Kerusakan komponen lain",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-shock-belakang",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Shock Absorber Belakang",
    harga: "Rp165K - Rp400K",
    durasi: "45-90 Menit",
    deskripsi: "Penggantian shock absorber belakang untuk menjaga kestabilan dan kenyamanan kendaraan.",
    pekerjaan: [
      "Penggantian shock absorber belakang",
      "Pemeriksaan dudukan shock",
      "Pemeriksaan baut pengikat",
      "Uji kendaraan"
    ],
    manfaat: [
      "Mengurangi ayunan kendaraan",
      "Meningkatkan kenyamanan",
      "Membantu kestabilan saat berkendara"
    ],
    tidakTermasuk: [
      "Spare part",
      "Perbaikan kaki-kaki lain",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-ball-joint",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Ball Joint",
    harga: "Rp165K - Rp175K",
    durasi: "45-90 Menit",
    deskripsi: "Penggantian ball joint yang berfungsi menjaga pergerakan roda dan sistem suspensi.",
    pekerjaan: [
      "Penggantian ball joint",
      "Pemeriksaan steering knuckle",
      "Pemeriksaan lower arm",
      "Pemeriksaan baut pengikat"
    ],
    manfaat: [
      "Mengurangi bunyi kaki-kaki",
      "Menjaga kestabilan roda",
      "Meningkatkan keamanan berkendara"
    ],
    tidakTermasuk: [
      "Spare part",
      "Kerusakan komponen lain",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-link-stabilizer",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Link Stabilizer",
    harga: "Rp110K - Rp145K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian link stabilizer untuk membantu mengurangi bunyi dan menjaga kestabilan kendaraan.",
    pekerjaan: [
      "Penggantian link stabilizer",
      "Pemeriksaan karet stabilizer",
      "Pemeriksaan stabilizer bar",
      "Uji kendaraan"
    ],
    manfaat: [
      "Mengurangi bunyi kaki-kaki",
      "Meningkatkan kestabilan",
      "Membantu kenyamanan berkendara"
    ],
    tidakTermasuk: [
      "Spare part",
      "Perbaikan suspensi lain",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-bearing-roda",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Bearing Roda",
    harga: "Rp165K - Rp320K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian bearing roda untuk mengatasi bunyi dan menjaga putaran roda tetap optimal.",
    pekerjaan: [
      "Penggantian bearing roda",
      "Pemeriksaan hub roda",
      "Pemeriksaan as roda",
      "Pemeriksaan baut roda"
    ],
    manfaat: [
      "Mengurangi suara dengung roda",
      "Menjaga putaran roda",
      "Meningkatkan keamanan kendaraan"
    ],
    tidakTermasuk: [
      "Spare part",
      "Kerusakan hub roda",
      "Biaya transportasi"
    ]
  },

  // =========================
  // KATEGORI KEMUDI (5 Layanan)
  // =========================
  {
    id: "ganti-tie-rod",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Tie Rod",
    harga: "Rp140K - Rp145K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian tie rod untuk menjaga fungsi kemudi dan kestabilan arah kendaraan.",
    pekerjaan: [
      "Penggantian tie rod",
      "Pemeriksaan rack end",
      "Pemeriksaan boot steering rack",
      "Uji fungsi kemudi"
    ],
    manfaat: [
      "Mengurangi kelonggaran kemudi",
      "Meningkatkan kestabilan arah kendaraan",
      "Membantu kenyamanan berkendara"
    ],
    tidakTermasuk: [
      "Spare part",
      "Spooring",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-rack-end",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Rack End",
    harga: "Rp165K - Rp230K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian rack end untuk memperbaiki sistem penghubung kemudi kendaraan.",
    pekerjaan: [
      "Penggantian rack end",
      "Pemeriksaan tie rod",
      "Pemeriksaan steering rack",
      "Uji fungsi kemudi"
    ],
    manfaat: [
      "Mengurangi bunyi pada kemudi",
      "Menjaga respon kemudi",
      "Meningkatkan kestabilan kendaraan"
    ],
    tidakTermasuk: [
      "Spare part",
      "Spooring",
      "Biaya transportasi"
    ]
  },
  {
    id: "servis-steering-rack",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Servis Steering Rack",
    harga: "Rp825K - Rp1.450K",
    durasi: "1-2 Hari",
    deskripsi: "Servis steering rack untuk pemeriksaan dan perbaikan komponen sistem kemudi.",
    pekerjaan: [
      "Pembongkaran steering rack",
      "Pembersihan komponen",
      "Pemeriksaan gear rack",
      "Penggantian seal kit bila diperlukan",
      "Perakitan kembali",
      "Uji fungsi kemudi"
    ],
    manfaat: [
      "Membantu mengatasi kebocoran steering rack",
      "Mengembalikan fungsi kemudi",
      "Meningkatkan kenyamanan berkendara"
    ],
    tidakTermasuk: [
      "Spare part tambahan",
      "Kerusakan berat steering rack",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-power-steering-pump",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Power Steering Pump",
    harga: "Rp220K - Rp450K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian power steering pump untuk membantu sistem kemudi tetap ringan.",
    pekerjaan: [
      "Penggantian power steering pump",
      "Pemeriksaan belt power steering",
      "Pemeriksaan selang power steering",
      "Pemeriksaan kebocoran",
      "Uji sistem power steering"
    ],
    manfaat: [
      "Membantu kemudi lebih ringan",
      "Mengurangi suara abnormal",
      "Menjaga fungsi power steering"
    ],
    tidakTermasuk: [
      "Spare part",
      "Oli power steering",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-oli-power-steering",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Oli Power Steering",
    harga: "Rp100K - Rp175K",
    durasi: "30-45 Menit",
    deskripsi: "Penggantian oli power steering untuk menjaga sistem kemudi tetap bekerja optimal.",
    pekerjaan: [
      "Pengurasan oli lama",
      "Pengisian oli baru",
      "Pemeriksaan kebocoran sistem",
      "Uji fungsi kemudi"
    ],
    manfaat: [
      "Membantu menjaga pompa power steering",
      "Membantu kemudi lebih ringan",
      "Mengurangi risiko kerusakan sistem"
    ],
    tidakTermasuk: [
      "Kerusakan power steering",
      "Spare part",
      "Biaya transportasi"
    ]
  },

  // =========================
  // KATEGORI REM (5 Layanan)
  // =========================
  {
    id: "servis-rem",
    kategori: "REM",
    icon: "🛑",
    nama: "Servis Rem (Setel & Bersihkan)",
    harga: "Rp140K - Rp175K",
    durasi: "45-90 Menit",
    deskripsi: "Perawatan sistem pengereman untuk membersihkan komponen dan menjaga fungsi rem tetap optimal.",
    pekerjaan: [
      "Bongkar sistem rem",
      "Pembersihan kampas rem",
      "Pembersihan kaliper/tromol",
      "Pelumasan komponen rem",
      "Setel rem",
      "Pemeriksaan minyak rem"
    ],
    manfaat: [
      "Mengurangi bunyi rem",
      "Meningkatkan respons pengereman",
      "Menjaga keamanan berkendara"
    ],
    tidakTermasuk: [
      "Penggantian spare part",
      "Minyak rem",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-kampas-rem-depan",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Kampas Rem Depan",
    harga: "Rp140K - Rp175K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian kampas rem depan untuk menjaga daya pengereman kendaraan.",
    pekerjaan: [
      "Penggantian kampas rem depan",
      "Pembersihan kaliper",
      "Pelumasan pin kaliper",
      "Pemeriksaan cakram rem",
      "Uji fungsi rem"
    ],
    manfaat: [
      "Meningkatkan daya pengereman",
      "Mengurangi bunyi rem",
      "Menjaga keamanan kendaraan"
    ],
    tidakTermasuk: [
      "Kampas rem",
      "Kerusakan cakram",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-kampas-rem-belakang",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Kampas Rem Belakang",
    harga: "Rp140K - Rp175K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian kampas rem belakang untuk menjaga keseimbangan pengereman.",
    pekerjaan: [
      "Penggantian kampas rem belakang",
      "Pembersihan tromol/kaliper",
      "Pelumasan komponen rem",
      "Pemeriksaan cakram/tromol",
      "Uji fungsi rem"
    ],
    manfaat: [
      "Menjaga performa rem belakang",
      "Mengurangi risiko rem tidak merata",
      "Meningkatkan keamanan"
    ],
    tidakTermasuk: [
      "Kampas rem",
      "Kerusakan komponen lain",
      "Biaya transportasi"
    ]
  },
  {
    id: "servis-kaliper-rem",
    kategori: "REM",
    icon: "🛑",
    nama: "Servis Kaliper Rem",
    harga: "Rp140K - Rp200K",
    durasi: "60-120 Menit",
    deskripsi: "Perawatan kaliper rem untuk memastikan gerakan piston dan kampas tetap optimal.",
    pekerjaan: [
      "Pembongkaran kaliper",
      "Pembersihan piston kaliper",
      "Pemeriksaan seal kaliper",
      "Pelumasan pin kaliper",
      "Perakitan kembali",
      "Uji fungsi rem"
    ],
    manfaat: [
      "Membantu mencegah rem macet",
      "Mengurangi keausan tidak merata",
      "Menjaga performa pengereman"
    ],
    tidakTermasuk: [
      "Seal kit",
      "Kaliper baru",
      "Biaya transportasi"
    ]
  },
  {
    id: "flush-minyak-rem",
    kategori: "REM",
    icon: "🛑",
    nama: "Brake Fluid Flush",
    harga: "Rp150K - Rp250K",
    durasi: "60-90 Menit",
    deskripsi: "Penggantian minyak rem lama dan pembersihan sistem hidrolik rem.",
    pekerjaan: [
      "Menguras minyak rem lama",
      "Pengisian minyak rem baru",
      "Bleeding sistem rem",
      "Pemeriksaan tekanan pedal rem",
      "Pemeriksaan kebocoran"
    ],
    manfaat: [
      "Menjaga tekanan sistem rem",
      "Membantu pedal rem lebih responsif",
      "Mengurangi risiko gangguan pengereman"
    ],
    tidakTermasuk: [
      "Minyak rem",
      "Perbaikan komponen rem rusak",
      "Biaya transportasi"
    ]
  },

  // =========================
  // KATEGORI PENDINGIN (5 Layanan)
  // =========================
  {
    id: "kuras-radiator",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Kuras Radiator",
    harga: "Rp80K - Rp120K",
    durasi: "30-60 Menit",
    deskripsi: "Perawatan sistem pendingin dengan mengganti coolant lama dan membersihkan jalur pendinginan.",
    pekerjaan: [
      "Pengurasan coolant lama",
      "Flushing sistem pendingin",
      "Pengisian coolant baru",
      "Pemeriksaan kebocoran sistem pendingin",
      "Pemeriksaan tutup radiator"
    ],
    manfaat: [
      "Membantu menjaga suhu mesin",
      "Mengurangi risiko overheat",
      "Menjaga sistem pendingin tetap optimal"
    ],
    tidakTermasuk: [
      "Coolant",
      "Penggantian komponen pendingin",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-radiator",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Radiator",
    harga: "Rp140K - Rp200K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian radiator untuk memperbaiki sistem pendinginan mesin.",
    pekerjaan: [
      "Penggantian radiator",
      "Pemeriksaan selang radiator",
      "Pemeriksaan tutup radiator",
      "Pengisian coolant",
      "Uji kebocoran sistem pendingin"
    ],
    manfaat: [
      "Membantu mencegah overheat",
      "Menjaga suhu kerja mesin",
      "Mengoptimalkan sirkulasi coolant"
    ],
    tidakTermasuk: [
      "Radiator",
      "Coolant",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-water-pump",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Water Pump",
    harga: "Rp220K - Rp460K",
    durasi: "90-180 Menit",
    deskripsi: "Penggantian water pump untuk menjaga sirkulasi coolant mesin.",
    pekerjaan: [
      "Penggantian water pump",
      "Pemeriksaan gasket water pump",
      "Pemeriksaan drive belt/timing belt",
      "Pengisian coolant",
      "Uji sistem pendingin"
    ],
    manfaat: [
      "Menjaga sirkulasi coolant",
      "Membantu mencegah overheat",
      "Menjaga suhu mesin stabil"
    ],
    tidakTermasuk: [
      "Water pump",
      "Coolant",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-thermostat",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Thermostat",
    harga: "Rp165K - Rp230K",
    durasi: "45-90 Menit",
    deskripsi: "Penggantian thermostat untuk menjaga pengaturan suhu kerja mesin.",
    pekerjaan: [
      "Penggantian thermostat",
      "Pemeriksaan housing thermostat",
      "Pengisian coolant bila diperlukan",
      "Pemeriksaan suhu kerja mesin",
      "Pemeriksaan kebocoran"
    ],
    manfaat: [
      "Menjaga suhu mesin ideal",
      "Membantu efisiensi kerja mesin",
      "Mengurangi risiko gangguan pendinginan"
    ],
    tidakTermasuk: [
      "Thermostat",
      "Coolant",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-selang-radiator",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Selang Radiator",
    harga: "Rp85K - Rp145K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian selang radiator untuk mencegah kebocoran sistem pendingin.",
    pekerjaan: [
      "Penggantian selang radiator",
      "Pemeriksaan klem selang",
      "Pengisian coolant bila diperlukan",
      "Pemeriksaan kebocoran",
      "Uji sistem pendingin"
    ],
    manfaat: [
      "Mencegah kebocoran coolant",
      "Menjaga tekanan sistem pendingin",
      "Meningkatkan keandalan kendaraan"
    ],
    tidakTermasuk: [
      "Selang radiator",
      "Coolant",
      "Biaya transportasi"
    ]
  },

  // =========================
  // KATEGORI TRANSMISI (5 Layanan)
  // =========================
  {
    id: "ganti-oli-transmisi-manual-trans",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Oli Transmisi Manual",
    harga: "Rp100K - Rp175K",
    durasi: "30-45 Menit",
    deskripsi: "Penggantian oli transmisi manual untuk menjaga perpindahan gigi tetap halus.",
    pekerjaan: [
      "Penggantian oli transmisi manual",
      "Pemeriksaan baut drain & fill",
      "Pemeriksaan kondisi oli lama",
      "Pemeriksaan kebocoran oli transmisi"
    ],
    manfaat: [
      "Membantu perpindahan gigi lebih ringan",
      "Mengurangi gesekan komponen transmisi",
      "Menjaga umur transmisi"
    ],
    tidakTermasuk: [
      "Oli transmisi",
      "Perbaikan transmisi",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-oli-transmisi-otomatis-trans",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Oli Transmisi Otomatis (AT)",
    harga: "Rp275K - Rp375K",
    durasi: "45-90 Menit",
    deskripsi: "Penggantian oli transmisi otomatis untuk menjaga performa perpindahan gigi.",
    pekerjaan: [
      "Penggantian oli transmisi otomatis",
      "Pemeriksaan baut drain & fill",
      "Pemeriksaan kondisi oli AT",
      "Pemeriksaan kebocoran transmisi"
    ],
    manfaat: [
      "Membantu perpindahan gigi lebih halus",
      "Menjaga sistem hidrolik transmisi",
      "Membantu menjaga performa transmisi"
    ],
    tidakTermasuk: [
      "Oli AT",
      "Kerusakan internal transmisi",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-kopling",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Kopling",
    harga: "Rp300K - Rp900K",
    durasi: "240-480 Menit",
    deskripsi: "Penggantian komponen kopling untuk mengembalikan fungsi perpindahan tenaga mesin.",
    pekerjaan: [
      "Penggantian kampas kopling",
      "Pemeriksaan pressure plate",
      "Pemeriksaan release bearing",
      "Pemeriksaan flywheel",
      "Penyetelan sistem kopling",
      "Uji jalan kendaraan"
    ],
    manfaat: [
      "Mengurangi selip kopling",
      "Membantu perpindahan gigi lebih nyaman",
      "Mengembalikan performa sistem kopling"
    ],
    tidakTermasuk: [
      "Komponen kopling",
      "Kerusakan flywheel",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-master-kopling",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Master Kopling",
    harga: "Rp175K - Rp250K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian master kopling untuk memperbaiki sistem hidrolik kopling.",
    pekerjaan: [
      "Penggantian master kopling",
      "Pemeriksaan selang kopling",
      "Bleeding sistem kopling",
      "Uji fungsi kopling"
    ],
    manfaat: [
      "Membantu pedal kopling normal",
      "Mengurangi gangguan perpindahan gigi",
      "Menjaga sistem hidrolik kopling"
    ],
    tidakTermasuk: [
      "Master kopling",
      "Oli hidrolik",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-boot-drive-shaft",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Boot Drive Shaft",
    harga: "Rp165K - Rp250K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian boot drive shaft untuk melindungi CV Joint dari kotoran dan kehilangan grease.",
    pekerjaan: [
      "Penggantian boot drive shaft",
      "Penggantian grease CV Joint",
      "Pemeriksaan CV Joint",
      "Pembersihan area CV Joint",
      "Uji jalan kendaraan"
    ],
    manfaat: [
      "Mencegah kerusakan CV Joint",
      "Mengurangi bunyi saat berbelok",
      "Menjaga sistem penggerak roda"
    ],
    tidakTermasuk: [
      "Boot drive shaft",
      "Kerusakan CV Joint",
      "Biaya transportasi"
    ]
  },

  // =========================
  // KATEGORI KELISTRIKAN MESIN (5 Layanan)
  // =========================
  {
    id: "pemeriksaan-sistem-starter",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Pemeriksaan Sistem Starter",
    harga: "Rp200K - Rp320K",
    durasi: "30-60 Menit",
    deskripsi: "Pemeriksaan sistem starter untuk mengetahui penyebab kendaraan sulit hidup.",
    pekerjaan: [
      "Pemeriksaan kondisi aki",
      "Pemeriksaan dinamo starter",
      "Pemeriksaan relay starter",
      "Pemeriksaan jalur kelistrikan",
      "Pengukuran tegangan starter"
    ],
    manfaat: [
      "Mengetahui penyebab sulit starter",
      "Mendeteksi gangguan kelistrikan awal",
      "Menjaga sistem starter kendaraan"
    ],
    tidakTermasuk: [
      "Penggantian komponen",
      "Spare part",
      "Biaya transportasi"
    ]
  },
  {
    id: "pemeriksaan-sistem-charging",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Pemeriksaan Sistem Charging",
    harga: "Rp200K - Rp300K",
    durasi: "30-60 Menit",
    deskripsi: "Pemeriksaan sistem pengisian untuk memastikan alternator dan aki bekerja normal.",
    pekerjaan: [
      "Pemeriksaan alternator",
      "Pemeriksaan regulator",
      "Pemeriksaan tegangan pengisian",
      "Pemeriksaan aki",
      "Analisa sistem charging"
    ],
    manfaat: [
      "Mencegah aki cepat habis",
      "Mengetahui kondisi alternator",
      "Menjaga sistem kelistrikan kendaraan"
    ],
    tidakTermasuk: [
      "Penggantian alternator",
      "Penggantian aki",
      "Biaya transportasi"
    ]
  },
  {
    id: "ganti-aki",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Ganti Aki",
    harga: "Rp80K - Rp100K",
    durasi: "15-30 Menit",
    deskripsi: "Penggantian aki kendaraan dengan pemeriksaan sistem kelistrikan dasar.",
    pekerjaan: [
      "Penggantian aki",
      "Pemeriksaan terminal aki",
      "Pembersihan terminal aki",
      "Pemeriksaan tegangan pengisian",
      "Reset sistem elektronik bila diperlukan"
    ],
    manfaat: [
      "Mengembalikan daya starter",
      "Menjaga kestabilan kelistrikan",
      "Membantu sistem elektronik kendaraan"
    ],
    tidakTermasuk: [
      "Aki baru",
      "Kerusakan sistem charging",
      "Biaya transportasi"
    ]
  },
  {
    id: "servis-alternator",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Servis Alternator",
    harga: "Rp385K - Rp520K",
    durasi: "120-240 Menit",
    deskripsi: "Perawatan alternator untuk menjaga sistem pengisian listrik kendaraan.",
    pekerjaan: [
      "Pembongkaran alternator",
      "Pembersihan komponen",
      "Pemeriksaan rotor dan stator",
      "Pemeriksaan bearing",
      "Pemeriksaan carbon brush",
      "Pengujian alternator"
    ],
    manfaat: [
      "Menjaga sistem pengisian",
      "Membantu memperpanjang umur alternator",
      "Mencegah aki cepat tekor"
    ],
    tidakTermasuk: [
      "Komponen pengganti",
      "Alternator baru",
      "Biaya transportasi"
    ]
  },
  {
    id: "servis-dinamo-starter",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Servis Dinamo Starter",
    harga: "Rp275K - Rp390K",
    durasi: "120-240 Menit",
    deskripsi: "Perawatan dinamo starter untuk memperbaiki kinerja sistem starter kendaraan.",
    pekerjaan: [
      "Pembongkaran dinamo starter",
      "Pembersihan komponen",
      "Pemeriksaan carbon brush",
      "Pemeriksaan bendix",
      "Pemeriksaan armature",
      "Pengujian sistem starter"
    ],
    manfaat: [
      "Membantu starter lebih normal",
      "Mengurangi risiko kendaraan sulit hidup",
      "Menjaga performa dinamo starter"
    ],
    tidakTermasuk: [
      "Komponen pengganti",
      "Dinamo starter baru",
      "Biaya transportasi"
    ]
  }
];
