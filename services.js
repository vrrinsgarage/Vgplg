// =========================
// DATABASE LAYANAN
// VRRINS GARAGE — TOTAL 145 LAYANAN
// =========================

globalThis.services = [

  // =========================
  // VG TUNE PACKAGE (7)
  // =========================

  {
    id: "vg-tune-basic-bensin",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE BASIC Bensin",
    harga: "Rp150K - Rp200K",
    durasi: "45-60 Menit",
    deskripsi: "Servis berkala untuk menjaga performa mesin bensin melalui pemeriksaan dasar, scanning ECU, dan pengecekan sistem utama.",
    pekerjaan: ["Scanning ECU","Pemeriksaan kondisi mesin","Pemeriksaan aki dan sistem pengisian","Pemeriksaan sistem udara","Pemeriksaan sistem pengapian"],
    manfaat: ["Menjaga performa mesin","Mendeteksi gangguan awal","Membantu efisiensi bahan bakar"],
    tidakTermasuk: ["Spare part","Oli mesin","Biaya transportasi"]
  },
  {
    id: "vg-tune-plus-bensin",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE PLUS Bensin",
    harga: "Rp250K - Rp350K",
    durasi: "60-90 Menit",
    deskripsi: "Paket lanjutan dengan tambahan pembersihan throttle body dan sistem udara.",
    pekerjaan: ["Semua layanan VG TUNE BASIC","Pembersihan throttle body","Pembersihan injector","Reset ECU bila diperlukan"],
    manfaat: ["Respons mesin lebih baik","Idle lebih stabil","Sistem udara lebih bersih"],
    tidakTermasuk: ["Spare part","Cairan pembersih tambahan","Biaya transportasi"]
  },
  {
    id: "vg-tune-pro-bensin",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE PRO Bensin",
    harga: "Rp400K - Rp600K",
    durasi: "90-150 Menit",
    deskripsi: "Paket lengkap dengan analisa scanner dan pemeriksaan performa mesin lebih detail.",
    pekerjaan: ["Scanning ECU","Pemeriksaan Live Data","Pemeriksaan Fuel Trim","Pemeriksaan sensor mesin","Pemeriksaan performa mesin"],
    manfaat: ["Analisa kondisi mesin lebih detail","Membantu menemukan penyebab masalah","Menjaga performa kendaraan"],
    tidakTermasuk: ["Spare part","Perbaikan kerusakan besar","Biaya transportasi"]
  },
  {
    id: "vg-tune-basic-diesel",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE BASIC Diesel",
    harga: "Rp250K - Rp300K",
    durasi: "45-60 Menit",
    deskripsi: "Servis berkala kendaraan diesel dengan pemeriksaan mesin, scanning ECU, dan pembersihan sistem udara dasar.",
    pekerjaan: ["Scanning ECU","Pemeriksaan Live Data dasar","Pemeriksaan sistem udara","Pembersihan throttle body","Pembersihan EGR"],
    manfaat: ["Menjaga performa mesin diesel","Membantu respons akselerasi","Mendeteksi gangguan lebih awal"],
    tidakTermasuk: ["Filter solar","Oli mesin","Spare part"]
  },
  {
    id: "vg-tune-plus-diesel",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE PLUS Diesel",
    harga: "Rp300K - Rp450K",
    durasi: "60-150 Menit",
    deskripsi: "Paket lanjutan servis diesel dengan pembersihan sistem udara lebih menyeluruh untuk membantu mengoptimalkan performa mesin.",
    pekerjaan: ["Semua layanan VG TUNE BASIC Diesel","Pembersihan throttle body","Pembersihan EGR Valve","Pembersihan Intake Manifold","Pemeriksaan sistem udara"],
    manfaat: ["Membantu mengurangi endapan karbon","Membantu memperbaiki respons mesin","Menjaga efisiensi pembakaran"],
    tidakTermasuk: ["Filter solar","Oli mesin","Spare part","Biaya transportasi"]
  },
  {
    id: "vg-tune-pro-diesel",
    kategori: "VG TUNE",
    icon: "🔧",
    nama: "VG TUNE PRO Diesel",
    harga: "Rp400K - Rp600K",
    durasi: "120-180 Menit",
    deskripsi: "Paket lengkap servis diesel dengan pembersihan sistem udara menyeluruh dan pemeriksaan performa mesin.",
    pekerjaan: ["Semua layanan VG TUNE PLUS Diesel","Pembersihan Intercooler","Pemeriksaan sistem intake","Final Scan ECU","Pemeriksaan respons mesin"],
    manfaat: ["Membersihkan sistem udara diesel","Membantu menjaga performa mesin","Membantu mendeteksi gangguan mesin"],
    tidakTermasuk: ["Spare part","Servis injector diesel","Servis turbocharger","Biaya transportasi"]
  },
  {
    id: "vg-addon-gurah-karbon",
    kategori: "VG ADD-ON",
    icon: "🧪",
    nama: "VG ADD-ON Gurah Karbon Mesin",
    harga: "Rp75K - Rp150K",
    durasi: "45-90 Menit",
    deskripsi: "Layanan tambahan untuk membantu membersihkan endapan karbon pada sistem pembakaran mesin.",
    pekerjaan: ["Pemeriksaan kondisi awal mesin","Proses carbon cleaner","Monitoring kondisi mesin","Pemeriksaan hasil pekerjaan"],
    manfaat: ["Membantu membersihkan karbon","Membantu meningkatkan respons mesin","Mendukung performa mesin"],
    tidakTermasuk: ["Kerusakan komponen mesin","Spare part","Biaya transportasi"]
  },
  {
    id: "vg-addon-diesel-purging",
    kategori: "VG ADD-ON",
    icon: "⛽",
    nama: "Diesel Purging Treatment",
    harga: "Rp75K - Rp150K",
    durasi: "45-90 Menit",
    deskripsi: "Layanan tambahan untuk membantu membersihkan sistem bahan bakar diesel menggunakan cairan diesel purge.",
    pekerjaan: ["Pemeriksaan sistem bahan bakar","Pemasangan alat purging","Proses pembersihan sistem bahan bakar","Pemeriksaan hasil purging"],
    manfaat: ["Membantu membersihkan endapan bahan bakar","Membantu menjaga respons mesin","Mendukung efisiensi pembakaran"],
    tidakTermasuk: ["Cairan Diesel Purge","Penggantian injector","Perbaikan pompa injeksi"]
  },

  // =========================
  // VG CHECK (1)
  // =========================

  {
    id: "vg-check",
    kategori: "VG CHECK",
    icon: "🔍",
    nama: "VG CHECK",
    harga: "Rp100K - Rp150K",
    durasi: "30-90 Menit",
    deskripsi: "Pemeriksaan menyeluruh kondisi kendaraan untuk mengetahui kondisi komponen, potensi kerusakan, dan prioritas perawatan.",
    pekerjaan: ["Pemeriksaan kondisi mesin","Pemeriksaan kebocoran oli dan coolant","Pemeriksaan sistem kelistrikan","Pemeriksaan sistem pendingin","Pemeriksaan sistem pengereman","Pemeriksaan suspensi dan kemudi","Scanning ECU kendaraan yang mendukung","Pemeriksaan hasil dan penjelasan kepada pelanggan"],
    manfaat: ["Mengetahui kondisi kendaraan secara menyeluruh","Mendeteksi masalah lebih awal","Membantu menentukan prioritas perbaikan","Mengurangi risiko kerusakan mendadak"],
    tidakTermasuk: ["Biaya perbaikan","Spare part","Jasa servis lanjutan","Biaya transportasi"]
  },

  // =========================
  // VG BRAKE SERVICE (1)
  // =========================

  {
    id: "vg-brake-service",
    kategori: "VG BRAKE SERVICE",
    icon: "🛑",
    nama: "VG BRAKE SERVICE",
    harga: "Rp270.000",
    durasi: "60–120 Menit",
    deskripsi: "Perawatan sistem pengereman untuk menjaga rem tetap aman, bersih, dan optimal.",
    pekerjaan: ["Bonus VG CHECK","Pembongkaran sistem rem","Pembersihan kaliper atau tromol","Pembersihan kampas rem","Pelumasan komponen rem","Penyetelan rem","Pemeriksaan minyak rem","Pemeriksaan akhir dan uji fungsi"],
    manfaat: ["Membantu menjaga performa pengereman","Mengurangi bunyi rem","Mendeteksi komponen rem yang mulai aus","Meningkatkan keamanan berkendara"],
    tidakTermasuk: ["Penggantian kampas rem","Penggantian cakram atau tromol","Penggantian komponen rem","Minyak rem tambahan","Biaya transportasi"]
  },

  // =========================
  // VG OIL SERVICE (1)
  // =========================

  {
    id: "vg-oil-service",
    kategori: "VG OIL SERVICE",
    icon: "🛢️",
    nama: "VG OIL SERVICE",
    harga: "Rp50K - Rp75K",
    durasi: "15-30 Menit",
    deskripsi: "Layanan penggantian oli kendaraan dengan pemeriksaan dasar sistem pelumasan.",
    pekerjaan: ["Penggantian oli mesin","Pemeriksaan kondisi oli lama","Pemeriksaan baut drain oli","Penggantian ring baut drain bila diperlukan","Pemeriksaan kebocoran oli","Reset service reminder bila tersedia"],
    manfaat: ["Menjaga pelumasan mesin","Membantu menjaga performa mesin","Membantu memperpanjang usia komponen mesin"],
    tidakTermasuk: ["Oli mesin","Filter oli","Spare part tambahan","Biaya transportasi"]
  },

  // =========================
  // KATEGORI MESIN (LAMA: 5)
  // =========================

  {
    id: "flushing-oli-mesin",
    kategori: "MESIN",
    icon: "⚙️",
    nama: "Flushing Oli Mesin",
    harga: "Rp150K - Rp300K",
    durasi: "30-60 Menit",
    deskripsi: "Perawatan untuk membantu membersihkan endapan lumpur oli dan jalur pelumasan mesin sebelum pengisian oli baru.",
    pekerjaan: ["Engine Flush","Membersihkan endapan lumpur oli","Membersihkan jalur pelumasan mesin","Pembuangan oli lama","Persiapan pengisian oli baru"],
    manfaat: ["Membantu menjaga kebersihan sistem pelumasan","Membantu sirkulasi oli lebih optimal","Mendukung performa mesin"],
    tidakTermasuk: ["Oli mesin baru","Spare part","Biaya transportasi"]
  },
  {
    id: "ganti-busi",
    kategori: "MESIN",
    icon: "⚡",
    nama: "Ganti Busi",
    harga: "Rp75K - Rp150K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian busi untuk membantu menjaga sistem pengapian dan performa mesin.",
    pekerjaan: ["Penggantian busi","Pemeriksaan kondisi busi lama","Pemeriksaan celah busi","Pemeriksaan sistem pengapian","Uji performa mesin"],
    manfaat: ["Membantu pembakaran lebih optimal","Menjaga respons mesin","Membantu menjaga efisiensi bahan bakar"],
    tidakTermasuk: ["Busi","Kerusakan sistem pengapian lain","Biaya transportasi"]
  },
  {
    id: "ganti-ignition-coil",
    kategori: "MESIN",
    icon: "⚡",
    nama: "Ganti Ignition Coil",
    harga: "Rp110K - Rp380K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian ignition coil untuk mengatasi gangguan sistem pengapian mesin.",
    pekerjaan: ["Penggantian ignition coil","Pemeriksaan konektor coil","Pemeriksaan sistem pengapian","Uji percikan api","Uji performa mesin"],
    manfaat: ["Membantu mengatasi mesin brebet","Membantu menjaga pembakaran mesin","Meningkatkan respons mesin"],
    tidakTermasuk: ["Ignition coil","Kerusakan ECU","Biaya transportasi"]
  },
  {
    id: "ganti-engine-mounting",
    kategori: "MESIN",
    icon: "🔧",
    nama: "Ganti Engine Mounting",
    harga: "Rp110K - Rp145K / sisi",
    durasi: "30-90 Menit",
    deskripsi: "Penggantian dudukan mesin untuk membantu mengurangi getaran berlebih pada kendaraan.",
    pekerjaan: ["Penggantian engine mounting","Pemeriksaan mounting lainnya","Pemeriksaan baut mounting","Pemeriksaan getaran mesin","Uji kendaraan"],
    manfaat: ["Mengurangi getaran mesin","Meningkatkan kenyamanan berkendara","Menjaga posisi mesin"],
    tidakTermasuk: ["Spare part","Kerusakan dudukan lain","Biaya transportasi"]
  }
  ,
  // =========================
  // KATEGORI PELUMASAN (LAMA: 5)
  // =========================

  {
    id: "ganti-oli-mesin",
    kategori: "PELUMASAN",
    icon: "🛢️",
    nama: "Ganti Oli Mesin",
    harga: "Rp75K - Rp125K",
    durasi: "15-30 Menit",
    deskripsi: "Layanan penggantian oli mesin dengan pemeriksaan dasar sistem pelumasan kendaraan.",
    pekerjaan: ["Penggantian oli mesin","Pemeriksaan kondisi oli lama","Pemeriksaan baut drain oli","Penggantian ring baut drain bila diperlukan","Pemeriksaan kebocoran oli","Reset service reminder bila tersedia"],
    manfaat: ["Menjaga pelumasan komponen mesin","Membantu menjaga performa mesin","Membantu mengurangi keausan komponen"],
    tidakTermasuk: ["Oli mesin","Filter oli","Biaya transportasi"]
  },
  {
    id: "ganti-oli-transmisi-manual",
    kategori: "PELUMASAN",
    icon: "⚙️",
    nama: "Ganti Oli Transmisi Manual",
    harga: "Rp100K - Rp175K",
    durasi: "30-45 Menit",
    deskripsi: "Penggantian oli transmisi manual untuk menjaga kerja komponen transmisi tetap optimal.",
    pekerjaan: ["Penggantian oli transmisi manual","Pemeriksaan baut drain dan fill","Pemeriksaan kondisi oli lama","Pemeriksaan kebocoran oli transmisi"],
    manfaat: ["Membantu perpindahan gigi lebih nyaman","Menjaga pelumasan gear transmisi","Membantu memperpanjang usia transmisi"],
    tidakTermasuk: ["Oli transmisi","Perbaikan transmisi","Biaya transportasi"]
  },
  {
    id: "ganti-oli-transmisi-at",
    kategori: "PELUMASAN",
    icon: "⚙️",
    nama: "Ganti Oli Transmisi Otomatis (AT)",
    harga: "Rp275K - Rp375K",
    durasi: "45-90 Menit",
    deskripsi: "Penggantian oli transmisi otomatis dengan pemeriksaan kondisi dasar transmisi.",
    pekerjaan: ["Penggantian oli transmisi otomatis","Pemeriksaan baut drain dan fill","Pemeriksaan kondisi oli AT","Pemeriksaan kebocoran transmisi"],
    manfaat: ["Membantu menjaga perpindahan gigi","Menjaga sistem hidrolik transmisi","Membantu menjaga performa transmisi"],
    tidakTermasuk: ["Oli AT","Filter transmisi","Perbaikan transmisi"]
  },
  {
    id: "ganti-oli-gardan",
    kategori: "PELUMASAN",
    icon: "⚙️",
    nama: "Ganti Oli Gardan",
    harga: "Rp100K - Rp175K",
    durasi: "30-45 Menit",
    deskripsi: "Penggantian oli gardan untuk menjaga pelumasan komponen penggerak roda.",
    pekerjaan: ["Penggantian oli gardan","Pemeriksaan baut drain dan fill","Pemeriksaan kondisi oli gardan","Pemeriksaan kebocoran oli"],
    manfaat: ["Menjaga kerja gardan","Mengurangi gesekan komponen","Membantu mencegah keausan"],
    tidakTermasuk: ["Oli gardan","Perbaikan gardan","Biaya transportasi"]
  },
  {
    id: "atasi-kebocoran-oli",
    kategori: "PELUMASAN",
    icon: "💧",
    nama: "Mengatasi Kebocoran Oli Mesin",
    harga: "Rp150K - Rp500K",
    durasi: "60-180 Menit",
    deskripsi: "Pemeriksaan dan penanganan awal kebocoran oli mesin berdasarkan sumber kebocoran.",
    pekerjaan: ["Pemeriksaan titik kebocoran oli","Pemeriksaan seal dan gasket","Penggantian seal/gasket bila diperlukan","Pembersihan area kebocoran","Pengujian setelah perbaikan"],
    manfaat: ["Membantu mencegah kehilangan oli","Menjaga kebersihan area mesin","Mendeteksi sumber kebocoran"],
    tidakTermasuk: ["Seal atau gasket","Kerusakan besar mesin","Biaya transportasi"]
  },

  // =========================
  // KATEGORI BAHAN BAKAR (LAMA: 4)
  // =========================

  {
    id: "pemeriksaan-sistem-bahan-bakar",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Pemeriksaan Sistem Bahan Bakar",
    harga: "Rp150K - Rp250K",
    durasi: "30-60 Menit",
    deskripsi: "Pemeriksaan kondisi sistem bahan bakar untuk mengetahui gangguan pada suplai bahan bakar kendaraan.",
    pekerjaan: ["Pemeriksaan fuel pump","Pemeriksaan filter bahan bakar","Pemeriksaan injector","Pemeriksaan tekanan bahan bakar","Pemeriksaan kebocoran sistem bahan bakar"],
    manfaat: ["Mendeteksi gangguan sistem bahan bakar","Membantu menjaga performa mesin","Membantu efisiensi pembakaran"],
    tidakTermasuk: ["Penggantian komponen","Spare part","Biaya transportasi"]
  },
  {
    id: "fuel-system-cleaner",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Fuel System Cleaner",
    harga: "Rp250K - Rp500K",
    durasi: "60-120 Menit",
    deskripsi: "Perawatan sistem bahan bakar untuk membantu membersihkan endapan pada jalur bahan bakar dan injector.",
    pekerjaan: ["Pembersihan jalur bahan bakar","Pembersihan injector","Pembersihan ruang bakar","Pemeriksaan sistem bahan bakar"],
    manfaat: ["Membantu meningkatkan respons mesin","Membantu menjaga pola pembakaran","Membantu efisiensi bahan bakar"],
    tidakTermasuk: ["Spare part","Kerusakan injector","Biaya transportasi"]
  },
  {
    id: "ganti-fuel-pump",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Ganti Fuel Pump",
    harga: "Rp190K - Rp260K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian fuel pump dengan pemeriksaan sistem suplai bahan bakar kendaraan.",
    pekerjaan: ["Penggantian fuel pump","Pemeriksaan tekanan bahan bakar","Pemeriksaan soket kelistrikan fuel pump","Pemeriksaan kebocoran","Uji sistem bahan bakar"],
    manfaat: ["Membantu suplai bahan bakar optimal","Membantu mengatasi mesin sulit hidup","Menjaga performa mesin"],
    tidakTermasuk: ["Fuel pump","Perbaikan kelistrikan besar","Biaya transportasi"]
  },
  {
    id: "servis-injector",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Servis Injector",
    harga: "Rp300K - Rp600K",
    durasi: "90-180 Menit",
    deskripsi: "Pembersihan injector untuk membantu menjaga pola semprotan bahan bakar.",
    pekerjaan: ["Pemeriksaan injector","Pembersihan injector","Pengujian pola semprotan","Pengujian debit injector","Pemeriksaan kebocoran injector"],
    manfaat: ["Membantu pembakaran lebih optimal","Membantu respons mesin","Membantu menjaga efisiensi bahan bakar"],
    tidakTermasuk: ["Injector baru","Kerusakan sistem bahan bakar","Biaya transportasi"]
  },

  // =========================
  // KATEGORI SUSPENSI (LAMA: 5)
  // =========================

  {
    id: "ganti-shock-absorber-depan",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Shock Absorber Depan",
    harga: "Rp220K - Rp390K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian shock absorber depan untuk membantu menjaga kenyamanan dan kestabilan kendaraan.",
    pekerjaan: ["Penggantian shock absorber depan","Pemeriksaan dudukan shock","Pemeriksaan baut pengikat","Pemeriksaan kondisi suspensi"],
    manfaat: ["Mengurangi getaran kendaraan","Meningkatkan kenyamanan berkendara","Menjaga kestabilan kendaraan"],
    tidakTermasuk: ["Spare part","Kerusakan komponen lain","Biaya transportasi"]
  },
  {
    id: "ganti-shock-belakang",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Shock Absorber Belakang",
    harga: "Rp165K - Rp400K",
    durasi: "45-90 Menit",
    deskripsi: "Penggantian shock absorber belakang untuk menjaga kestabilan dan kenyamanan kendaraan.",
    pekerjaan: ["Penggantian shock absorber belakang","Pemeriksaan dudukan shock","Pemeriksaan baut pengikat","Uji kendaraan"],
    manfaat: ["Mengurangi ayunan kendaraan","Meningkatkan kenyamanan","Membantu kestabilan saat berkendara"],
    tidakTermasuk: ["Spare part","Perbaikan kaki-kaki lain","Biaya transportasi"]
  },
  {
    id: "ganti-ball-joint",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Ball Joint",
    harga: "Rp165K - Rp175K",
    durasi: "45-90 Menit",
    deskripsi: "Penggantian ball joint yang berfungsi menjaga pergerakan roda dan sistem suspensi.",
    pekerjaan: ["Penggantian ball joint","Pemeriksaan steering knuckle","Pemeriksaan lower arm","Pemeriksaan baut pengikat"],
    manfaat: ["Mengurangi bunyi kaki-kaki","Menjaga kestabilan roda","Meningkatkan keamanan berkendara"],
    tidakTermasuk: ["Spare part","Kerusakan komponen lain","Biaya transportasi"]
  },
  {
    id: "ganti-link-stabilizer",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Link Stabilizer",
    harga: "Rp110K - Rp145K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian link stabilizer untuk membantu mengurangi bunyi dan menjaga kestabilan kendaraan.",
    pekerjaan: ["Penggantian link stabilizer","Pemeriksaan karet stabilizer","Pemeriksaan stabilizer bar","Uji kendaraan"],
    manfaat: ["Mengurangi bunyi kaki-kaki","Meningkatkan kestabilan","Membantu kenyamanan berkendara"],
    tidakTermasuk: ["Spare part","Perbaikan suspensi lain","Biaya transportasi"]
  },
  {
    id: "ganti-bearing-roda",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Bearing Roda",
    harga: "Rp165K - Rp320K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian bearing roda untuk mengatasi bunyi dan menjaga putaran roda tetap optimal.",
    pekerjaan: ["Penggantian bearing roda","Pemeriksaan hub roda","Pemeriksaan as roda","Pemeriksaan baut roda"],
    manfaat: ["Mengurangi suara dengung roda","Menjaga putaran roda","Meningkatkan keamanan kendaraan"],
    tidakTermasuk: ["Spare part","Kerusakan hub roda","Biaya transportasi"]
  }
  ,
  // =========================
  // KATEGORI KEMUDI (LAMA: 5)
  // =========================

  {
    id: "ganti-tie-rod",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Tie Rod",
    harga: "Rp140K - Rp145K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian tie rod untuk menjaga fungsi kemudi dan kestabilan arah kendaraan.",
    pekerjaan: ["Penggantian tie rod","Pemeriksaan rack end","Pemeriksaan boot steering rack","Uji fungsi kemudi"],
    manfaat: ["Mengurangi kelonggaran kemudi","Meningkatkan kestabilan arah kendaraan","Membantu kenyamanan berkendara"],
    tidakTermasuk: ["Spare part","Spooring","Biaya transportasi"]
  },
  {
    id: "ganti-rack-end",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Rack End",
    harga: "Rp165K - Rp230K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian rack end untuk memperbaiki sistem penghubung kemudi kendaraan.",
    pekerjaan: ["Penggantian rack end","Pemeriksaan tie rod","Pemeriksaan steering rack","Uji fungsi kemudi"],
    manfaat: ["Mengurangi bunyi pada kemudi","Menjaga respon kemudi","Meningkatkan kestabilan kendaraan"],
    tidakTermasuk: ["Spare part","Spooring","Biaya transportasi"]
  },
  {
    id: "servis-steering-rack",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Servis Steering Rack",
    harga: "Rp825K - Rp1.450K",
    durasi: "1-2 Hari",
    deskripsi: "Servis steering rack untuk pemeriksaan dan perbaikan komponen sistem kemudi.",
    pekerjaan: ["Pembongkaran steering rack","Pembersihan komponen","Pemeriksaan gear rack","Penggantian seal kit bila diperlukan","Perakitan kembali","Uji fungsi kemudi"],
    manfaat: ["Membantu mengatasi kebocoran steering rack","Mengembalikan fungsi kemudi","Meningkatkan kenyamanan berkendara"],
    tidakTermasuk: ["Spare part tambahan","Kerusakan berat steering rack","Biaya transportasi"]
  },
  {
    id: "ganti-power-steering-pump",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Power Steering Pump",
    harga: "Rp220K - Rp450K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian power steering pump untuk membantu sistem kemudi tetap ringan.",
    pekerjaan: ["Penggantian power steering pump","Pemeriksaan belt power steering","Pemeriksaan selang power steering","Pemeriksaan kebocoran","Uji sistem power steering"],
    manfaat: ["Membantu kemudi lebih ringan","Mengurangi suara abnormal","Menjaga fungsi power steering"],
    tidakTermasuk: ["Spare part","Oli power steering","Biaya transportasi"]
  },
  {
    id: "ganti-oli-power-steering",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Oli Power Steering",
    harga: "Rp100K - Rp175K",
    durasi: "30-45 Menit",
    deskripsi: "Penggantian oli power steering untuk menjaga sistem kemudi tetap bekerja optimal.",
    pekerjaan: ["Pengurasan oli lama","Pengisian oli baru","Pemeriksaan kebocoran sistem","Uji fungsi kemudi"],
    manfaat: ["Membantu menjaga pompa power steering","Membantu kemudi lebih ringan","Mengurangi risiko kerusakan sistem"],
    tidakTermasuk: ["Kerusakan power steering","Spare part","Biaya transportasi"]
  },

  // =========================
  // KATEGORI REM (LAMA: 5)
  // =========================

  {
    id: "servis-rem",
    kategori: "REM",
    icon: "🛑",
    nama: "Servis Rem (Setel & Bersihkan)",
    harga: "Rp140K - Rp175K",
    durasi: "45-90 Menit",
    deskripsi: "Perawatan sistem pengereman untuk membersihkan komponen dan menjaga fungsi rem tetap optimal.",
    pekerjaan: ["Bongkar sistem rem","Pembersihan kampas rem","Pembersihan kaliper/tromol","Pelumasan komponen rem","Setel rem","Pemeriksaan minyak rem"],
    manfaat: ["Mengurangi bunyi rem","Meningkatkan respons pengereman","Menjaga keamanan berkendara"],
    tidakTermasuk: ["Penggantian spare part","Minyak rem","Biaya transportasi"]
  },
  {
    id: "ganti-kampas-rem-depan",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Kampas Rem Depan",
    harga: "Rp140K - Rp175K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian kampas rem depan untuk menjaga daya pengereman kendaraan.",
    pekerjaan: ["Penggantian kampas rem depan","Pembersihan kaliper","Pelumasan pin kaliper","Pemeriksaan cakram rem","Uji fungsi rem"],
    manfaat: ["Meningkatkan daya pengereman","Mengurangi bunyi rem","Menjaga keamanan kendaraan"],
    tidakTermasuk: ["Kampas rem","Kerusakan cakram","Biaya transportasi"]
  },
  {
    id: "ganti-kampas-rem-belakang",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Kampas Rem Belakang",
    harga: "Rp140K - Rp175K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian kampas rem belakang untuk menjaga keseimbangan pengereman.",
    pekerjaan: ["Penggantian kampas rem belakang","Pembersihan tromol/kaliper","Pelumasan komponen rem","Pemeriksaan cakram/tromol","Uji fungsi rem"],
    manfaat: ["Menjaga performa rem belakang","Mengurangi risiko rem tidak merata","Meningkatkan keamanan"],
    tidakTermasuk: ["Kampas rem","Kerusakan komponen lain","Biaya transportasi"]
  },
  {
    id: "servis-kaliper-rem",
    kategori: "REM",
    icon: "🛑",
    nama: "Servis Kaliper Rem",
    harga: "Rp140K - Rp200K",
    durasi: "60-120 Menit",
    deskripsi: "Perawatan kaliper rem untuk memastikan gerakan piston dan kampas tetap optimal.",
    pekerjaan: ["Pembongkaran kaliper","Pembersihan piston kaliper","Pemeriksaan seal kaliper","Pelumasan pin kaliper","Perakitan kembali","Uji fungsi rem"],
    manfaat: ["Membantu mencegah rem macet","Mengurangi keausan tidak merata","Menjaga performa pengereman"],
    tidakTermasuk: ["Seal kit","Kaliper baru","Biaya transportasi"]
  },
  {
    id: "flush-minyak-rem",
    kategori: "REM",
    icon: "🛑",
    nama: "Brake Fluid Flush",
    harga: "Rp150K - Rp250K",
    durasi: "60-90 Menit",
    deskripsi: "Penggantian minyak rem lama dan pembersihan sistem hidrolik rem.",
    pekerjaan: ["Menguras minyak rem lama","Pengisian minyak rem baru","Bleeding sistem rem","Pemeriksaan tekanan pedal rem","Pemeriksaan kebocoran"],
    manfaat: ["Menjaga tekanan sistem rem","Membantu pedal rem lebih responsif","Mengurangi risiko gangguan pengereman"],
    tidakTermasuk: ["Minyak rem","Perbaikan komponen rem rusak","Biaya transportasi"]
  },

  // =========================
  // KATEGORI PENDINGIN (LAMA: 5)
  // =========================

  {
    id: "kuras-radiator",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Kuras Radiator",
    harga: "Rp80K - Rp120K",
    durasi: "30-60 Menit",
    deskripsi: "Perawatan sistem pendingin dengan mengganti coolant lama dan membersihkan jalur pendinginan.",
    pekerjaan: ["Pengurasan coolant lama","Flushing sistem pendingin","Pengisian coolant baru","Pemeriksaan kebocoran sistem pendingin","Pemeriksaan tutup radiator"],
    manfaat: ["Membantu menjaga suhu mesin","Mengurangi risiko overheat","Menjaga sistem pendingin tetap optimal"],
    tidakTermasuk: ["Coolant","Penggantian komponen pendingin","Biaya transportasi"]
  },
  {
    id: "ganti-radiator",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Radiator",
    harga: "Rp140K - Rp200K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian radiator untuk memperbaiki sistem pendinginan mesin.",
    pekerjaan: ["Penggantian radiator","Pemeriksaan selang radiator","Pemeriksaan tutup radiator","Pengisian coolant","Uji kebocoran sistem pendingin"],
    manfaat: ["Membantu mencegah overheat","Menjaga suhu kerja mesin","Mengoptimalkan sirkulasi coolant"],
    tidakTermasuk: ["Radiator","Coolant","Biaya transportasi"]
  },
  {
    id: "ganti-water-pump",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Water Pump",
    harga: "Rp220K - Rp460K",
    durasi: "90-180 Menit",
    deskripsi: "Penggantian water pump untuk menjaga sirkulasi coolant mesin.",
    pekerjaan: ["Penggantian water pump","Pemeriksaan gasket water pump","Pemeriksaan drive belt/timing belt","Pengisian coolant","Uji sistem pendingin"],
    manfaat: ["Menjaga sirkulasi coolant","Membantu mencegah overheat","Menjaga suhu mesin stabil"],
    tidakTermasuk: ["Water pump","Coolant","Biaya transportasi"]
  },
  {
    id: "ganti-thermostat",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Thermostat",
    harga: "Rp165K - Rp230K",
    durasi: "45-90 Menit",
    deskripsi: "Penggantian thermostat untuk menjaga pengaturan suhu kerja mesin.",
    pekerjaan: ["Penggantian thermostat","Pemeriksaan housing thermostat","Pengisian coolant bila diperlukan","Pemeriksaan suhu kerja mesin","Pemeriksaan kebocoran"],
    manfaat: ["Menjaga suhu mesin ideal","Membantu efisiensi kerja mesin","Mengurangi risiko gangguan pendinginan"],
    tidakTermasuk: ["Thermostat","Coolant","Biaya transportasi"]
  },
  {
    id: "ganti-selang-radiator",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Selang Radiator",
    harga: "Rp85K - Rp145K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian selang radiator untuk mencegah kebocoran sistem pendingin.",
    pekerjaan: ["Penggantian selang radiator","Pemeriksaan klem selang","Pengisian coolant bila diperlukan","Pemeriksaan kebocoran","Uji sistem pendingin"],
    manfaat: ["Mencegah kebocoran coolant","Menjaga tekanan sistem pendingin","Meningkatkan keandalan kendaraan"],
    tidakTermasuk: ["Selang radiator","Coolant","Biaya transportasi"]
  }
  ,
  // =========================
  // KATEGORI TRANSMISI (LAMA: 5)
  // =========================

  {
    id: "ganti-oli-transmisi-manual-transmisi",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Oli Transmisi Manual",
    harga: "Rp100K - Rp175K",
    durasi: "30-45 Menit",
    deskripsi: "Penggantian oli transmisi manual untuk menjaga perpindahan gigi tetap halus.",
    pekerjaan: ["Penggantian oli transmisi manual","Pemeriksaan baut drain & fill","Pemeriksaan kondisi oli lama","Pemeriksaan kebocoran oli transmisi"],
    manfaat: ["Membantu perpindahan gigi lebih ringan","Mengurangi gesekan komponen transmisi","Menjaga umur transmisi"],
    tidakTermasuk: ["Oli transmisi","Perbaikan transmisi","Biaya transportasi"]
  },
  {
    id: "ganti-oli-transmisi-otomatis",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Oli Transmisi Otomatis (AT)",
    harga: "Rp275K - Rp375K",
    durasi: "45-90 Menit",
    deskripsi: "Penggantian oli transmisi otomatis untuk menjaga performa perpindahan gigi.",
    pekerjaan: ["Penggantian oli transmisi otomatis","Pemeriksaan baut drain & fill","Pemeriksaan kondisi oli AT","Pemeriksaan kebocoran transmisi"],
    manfaat: ["Membantu perpindahan gigi lebih halus","Menjaga sistem hidrolik transmisi","Membantu menjaga performa transmisi"],
    tidakTermasuk: ["Oli AT","Kerusakan internal transmisi","Biaya transportasi"]
  },
  {
    id: "ganti-kopling",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Kopling",
    harga: "Rp300K - Rp900K",
    durasi: "240-480 Menit",
    deskripsi: "Penggantian komponen kopling untuk mengembalikan fungsi perpindahan tenaga mesin.",
    pekerjaan: ["Penggantian kampas kopling","Pemeriksaan pressure plate","Pemeriksaan release bearing","Pemeriksaan flywheel","Penyetelan sistem kopling","Uji jalan kendaraan"],
    manfaat: ["Mengurangi selip kopling","Membantu perpindahan gigi lebih nyaman","Mengembalikan performa sistem kopling"],
    tidakTermasuk: ["Komponen kopling","Kerusakan flywheel","Biaya transportasi"]
  },
  {
    id: "ganti-master-kopling",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Master Kopling",
    harga: "Rp175K - Rp250K",
    durasi: "30-60 Menit",
    deskripsi: "Penggantian master kopling untuk memperbaiki sistem hidrolik kopling.",
    pekerjaan: ["Penggantian master kopling","Pemeriksaan selang kopling","Bleeding sistem kopling","Uji fungsi kopling"],
    manfaat: ["Membantu pedal kopling normal","Mengurangi gangguan perpindahan gigi","Menjaga sistem hidrolik kopling"],
    tidakTermasuk: ["Master kopling","Oli hidrolik","Biaya transportasi"]
  },
  {
    id: "ganti-boot-drive-shaft",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Boot Drive Shaft",
    harga: "Rp165K - Rp250K",
    durasi: "60-120 Menit",
    deskripsi: "Penggantian boot drive shaft untuk melindungi CV Joint dari kotoran dan kehilangan grease.",
    pekerjaan: ["Penggantian boot drive shaft","Penggantian grease CV Joint","Pemeriksaan CV Joint","Pembersihan area CV Joint","Uji jalan kendaraan"],
    manfaat: ["Mencegah kerusakan CV Joint","Mengurangi bunyi saat berbelok","Menjaga sistem penggerak roda"],
    tidakTermasuk: ["Boot drive shaft","Kerusakan CV Joint","Biaya transportasi"]
  },

  // =========================
  // KATEGORI KELISTRIKAN MESIN (LAMA: 5)
  // =========================

  {
    id: "pemeriksaan-sistem-starter",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Pemeriksaan Sistem Starter",
    harga: "Rp200K - Rp320K",
    durasi: "30-60 Menit",
    deskripsi: "Pemeriksaan sistem starter untuk mengetahui penyebab kendaraan sulit hidup.",
    pekerjaan: ["Pemeriksaan kondisi aki","Pemeriksaan dinamo starter","Pemeriksaan relay starter","Pemeriksaan jalur kelistrikan","Pengukuran tegangan starter"],
    manfaat: ["Mengetahui penyebab sulit starter","Mendeteksi gangguan kelistrikan awal","Menjaga sistem starter kendaraan"],
    tidakTermasuk: ["Penggantian komponen","Spare part","Biaya transportasi"]
  },
  {
    id: "pemeriksaan-sistem-charging",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Pemeriksaan Sistem Charging",
    harga: "Rp200K - Rp300K",
    durasi: "30-60 Menit",
    deskripsi: "Pemeriksaan sistem pengisian untuk memastikan alternator dan aki bekerja normal.",
    pekerjaan: ["Pemeriksaan alternator","Pemeriksaan regulator","Pemeriksaan tegangan pengisian","Pemeriksaan aki","Analisa sistem charging"],
    manfaat: ["Mencegah aki cepat habis","Mengetahui kondisi alternator","Menjaga sistem kelistrikan kendaraan"],
    tidakTermasuk: ["Penggantian alternator","Penggantian aki","Biaya transportasi"]
  },
  {
    id: "ganti-aki",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Ganti Aki",
    harga: "Rp80K - Rp100K",
    durasi: "15-30 Menit",
    deskripsi: "Penggantian aki kendaraan dengan pemeriksaan sistem kelistrikan dasar.",
    pekerjaan: ["Penggantian aki","Pemeriksaan terminal aki","Pembersihan terminal aki","Pemeriksaan tegangan pengisian","Reset sistem elektronik bila diperlukan"],
    manfaat: ["Mengembalikan daya starter","Menjaga kestabilan kelistrikan","Membantu sistem elektronik kendaraan"],
    tidakTermasuk: ["Aki baru","Kerusakan sistem charging","Biaya transportasi"]
  },
  {
    id: "servis-alternator",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Servis Alternator",
    harga: "Rp385K - Rp520K",
    durasi: "120-240 Menit",
    deskripsi: "Perawatan alternator untuk menjaga sistem pengisian listrik kendaraan.",
    pekerjaan: ["Pembongkaran alternator","Pembersihan komponen","Pemeriksaan rotor dan stator","Pemeriksaan bearing","Pemeriksaan carbon brush","Pengujian alternator"],
    manfaat: ["Menjaga sistem pengisian","Membantu memperpanjang umur alternator","Mencegah aki cepat tekor"],
    tidakTermasuk: ["Komponen pengganti","Alternator baru","Biaya transportasi"]
  },
  {
    id: "servis-dinamo-starter",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Servis Dinamo Starter",
    harga: "Rp275K - Rp390K",
    durasi: "120-240 Menit",
    deskripsi: "Perawatan dinamo starter untuk memperbaiki kinerja sistem starter kendaraan.",
    pekerjaan: ["Pembongkaran dinamo starter","Pembersihan komponen","Pemeriksaan carbon brush","Pemeriksaan bendix","Pemeriksaan armature","Pengujian sistem starter"],
    manfaat: ["Membantu starter lebih normal","Mengurangi risiko kendaraan sulit hidup","Menjaga performa dinamo starter"],
    tidakTermasuk: ["Komponen pengganti","Dinamo starter baru","Biaya transportasi"]
  },

  // =========================
  // BLOK TAMBAHAN: ENGINE (10) — DARI PDF BARU
  // =========================

  {
    id: "ganti-seal-crank-shaft-front",
    kategori: "MESIN",
    icon: "🔩",
    nama: "Ganti Seal Crank Shaft Front",
    harga: "Rp181.500 - Rp345.000",
    durasi: "2 Jam",
    deskripsi: "Ganti seal karet poros engkol depan.",
    pekerjaan: ["Buka pulley","Lepas seal lama","Bersihkan","Pasang seal baru"],
    manfaat: ["Bocor oli berhenti","Mesin lebih bersih"],
    tidakTermasuk: ["Seal","Oli mesin tambahan"]
  },
  {
    id: "ganti-seal-crank-shaft-rear-mt",
    kategori: "MESIN",
    icon: "🔩",
    nama: "Ganti Seal Crank Shaft Rear M/T",
    harga: "Rp440.000 - Rp718.750",
    durasi: "4 Jam",
    deskripsi: "Ganti seal belakang poros engkol (M/T).",
    pekerjaan: ["Turunkan transmisi","Lepas flywheel","Ganti seal","Pasang kembali"],
    manfaat: ["Bocor oli ke kopling berhenti"],
    tidakTermasuk: ["Seal","Oli transmisi","Gasket"]
  },
  {
    id: "ganti-seal-crank-shaft-rear-at",
    kategori: "MESIN",
    icon: "🔩",
    nama: "Ganti Seal Crank Shaft Rear A/T",
    harga: "Rp495.000 - Rp759.000",
    durasi: "4.5 Jam",
    deskripsi: "Ganti seal belakang poros engkol (A/T).",
    pekerjaan: ["Turunkan A/T","Lepas flexplate","Ganti seal","Pasang"],
    manfaat: ["Mesin kering","ATF tidak tercampur oli"],
    tidakTermasuk: ["Seal","ATF","Gasket"]
  },
  {
    id: "ganti-timing-belt",
    kategori: "MESIN",
    icon: "⏱️",
    nama: "Ganti Timing Belt",
    harga: "Rp275.000 - Rp460.000",
    durasi: "3 Jam",
    deskripsi: "Ganti sabuk timing mesin.",
    pekerjaan: ["Buka cover","Set TDC","Lepas belt lama","Pasang baru","Set timing"],
    manfaat: ["Sabuk baru","Mesin aman dari putus"],
    tidakTermasuk: ["Timing belt","Tensioner","Bearing"]
  },
  {
    id: "ganti-timing-chain",
    kategori: "MESIN",
    icon: "⛓️",
    nama: "Ganti Timing Chain",
    harga: "Rp40.000 - Rp772.750",
    durasi: "4 Jam",
    deskripsi: "Ganti rantai timing (mesin rantai).",
    pekerjaan: ["Buka cover chain","Lepas guide","Pasang chain baru","Set timing"],
    manfaat: ["Rantai baru","Suara berisik hilang","Timing akurat"],
    tidakTermasuk: ["Rantai","Guide","Tensioner"]
  }
  ,
  {
    id: "ganti-gasket-cover-valve",
    kategori: "MESIN",
    icon: "🧩",
    nama: "Ganti Gasket Cover Valve",
    harga: "Rp88.000 - Rp143.750",
    durasi: "1.5 Jam",
    deskripsi: "Ganti paking tutup kepala silinder.",
    pekerjaan: ["Buka cover valve","Bersihkan","Pasang gasket baru","Kencangkan"],
    manfaat: ["Bocor oli dari tutup kepala hilang"],
    tidakTermasuk: ["Gasket","Seal karet baut"]
  },
  {
    id: "ganti-transmisi-mounting-1-pc",
    kategori: "MESIN",
    icon: "🔧",
    nama: "Ganti Transmisi Mounting 1 pc",
    harga: "Rp110.000 - Rp143.750",
    durasi: "1.5 Jam",
    deskripsi: "Ganti support transmisi 1 unit.",
    pekerjaan: ["Dongkrak transmisi","Lepas support","Pasang baru"],
    manfaat: ["Transmisi mantap","Tidak bergeser"],
    tidakTermasuk: ["Mounting baru","Baut"]
  },
  {
    id: "ganti-all-v-belt",
    kategori: "MESIN",
    icon: "🌀",
    nama: "Ganti All V. Belt",
    harga: "Rp110.000 - Rp172.500",
    durasi: "2 Jam",
    deskripsi: "Ganti semua sabuk penggerak (AC, alternator, steering).",
    pekerjaan: ["Lepas semua v-belt","Pasang baru","Set tegangan"],
    manfaat: ["Aksesoris optimal"],
    tidakTermasuk: ["Set v-belt (3-5 pcs)"]
  },
  {
    id: "ganti-oli-pan-carter",
    kategori: "MESIN",
    icon: "🛢️",
    nama: "Ganti Oli Pan / Carter",
    harga: "Rp220.000 - Rp373.750",
    durasi: "2.5 Jam",
    deskripsi: "Ganti bak oli mesin (bocor/retak).",
    pekerjaan: ["Kuras oli","Turunkan pan","Bersihkan","Pasang bak baru","Isi oli"],
    manfaat: ["Bak baru","Kebocoran hilang"],
    tidakTermasuk: ["Bak oli","Seal/gasket","Oli mesin"]
  },
  {
    id: "over-houl-engine-half",
    kategori: "MESIN",
    icon: "🔧",
    nama: "Over Houl Engine 1/2 (Atas)",
    harga: "Rp1.650.000 - Rp2.875.000",
    durasi: "2 Hari",
    deskripsi: "Overhaul bagian atas (cylinder head).",
    pekerjaan: ["Buka head","Ganti valve seal","Laher klep","Gasket head","Setel"],
    manfaat: ["Bagian atas segar","Asap & boros oli hilang"],
    tidakTermasuk: ["Part top kit","Gasket head"]
  },

  // =========================
  // BLOK TAMBAHAN: COOLING (7) + KELISTRIKAN (7) + SILICON OIL
  // =========================

  {
    id: "ganti-motor-fan-radiator",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Motor Fan Radiator",
    harga: "Rp165.000 - Rp230.000",
    durasi: "1.5 Jam",
    deskripsi: "Ganti motor kipas pendingin radiator.",
    pekerjaan: ["Lepas motor","Cabut konektor","Pasang baru","Tes sirkulasi"],
    manfaat: ["Kipas kencang","Radiator cepat dingin"],
    tidakTermasuk: ["Motor fan baru"]
  },
  {
    id: "ganti-motor-fan-condensor",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Motor Fan Condensor A/C",
    harga: "Rp165.000 - Rp230.000",
    durasi: "1.5 Jam",
    deskripsi: "Ganti motor kipas pendingin kondensor AC.",
    pekerjaan: ["Lepas motor depan","Pasang baru","Tes nyala AC"],
    manfaat: ["AC kembali dingin"],
    tidakTermasuk: ["Motor fan condensor"]
  },
  {
    id: "ganti-slang-radiator-atas",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Slang Radiator Atas / Inlet",
    harga: "Rp82.500 - Rp86.250",
    durasi: "0.5 Jam",
    deskripsi: "Ganti selang atas radiator (masuk).",
    pekerjaan: ["Lepas klem","Tarik selang","Pasang baru","Isi coolant"],
    manfaat: ["Aliran coolant lancar"],
    tidakTermasuk: ["Selang atas","Klem"]
  },
  {
    id: "ganti-slang-radiator-bawah",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Slang Radiator Bawah / Outlet",
    harga: "Rp110.000 - Rp143.750",
    durasi: "0.5 Jam",
    deskripsi: "Ganti selang bawah radiator (keluar).",
    pekerjaan: ["Lepas klem","Tarik selang bawah","Pasang baru","Isi coolant"],
    manfaat: ["Aliran balik coolant lancar"],
    tidakTermasuk: ["Selang bawah","Klem","Coolant"]
  },
  {
    id: "ganti-slang-by-pass",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Slang By Pass",
    harga: "Rp82.500 - Rp86.250",
    durasi: "0.5 Jam",
    deskripsi: "Ganti selang by-pass kecil.",
    pekerjaan: ["Lepas selang","Bersihkan fitting","Pasang baru"],
    manfaat: ["Sirkulasi ke throttle/heater normal"],
    tidakTermasuk: ["Selang by-pass","Klem"]
  },
  {
    id: "ganti-water-outlet-inlet",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Water Outlet / Inlet",
    harga: "Rp137.500 - Rp230.000",
    durasi: "1.5 Jam",
    deskripsi: "Ganti rumah saluran air masuk/keluar.",
    pekerjaan: ["Buka selang","Lepas rumah","Pasang baru","Isi coolant"],
    manfaat: ["Tidak ada kebocoran coolant"],
    tidakTermasuk: ["Water outlet/inlet","Gasket","Coolant"]
  },
  {
    id: "ganti-visco-fan",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Ganti Visco Fan",
    harga: "Rp137.500 - Rp184.000",
    durasi: "1 Jam",
    deskripsi: "Ganti kipas visco (kopling kipas).",
    pekerjaan: ["Buka visco","Pasang baru","Kencangkan"],
    manfaat: ["Pendinginan optimal di putaran tinggi"],
    tidakTermasuk: ["Visco fan baru"]
  },
  {
    id: "tambah-silicon-oil",
    kategori: "PENDINGIN",
    icon: "🌡️",
    nama: "Tambah Silicon Oil",
    harga: "Rp192.500",
    durasi: "0.5 Jam",
    deskripsi: "Tambahkan cairan silicon ke visco fan.",
    pekerjaan: ["Buka visco","Tambahkan silicon oil","Tutup rapat"],
    manfaat: ["Kopling visco normal"],
    tidakTermasuk: ["Silicon oil"]
  },
  {
    id: "ganti-distributor-delco",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Ganti Distributor / Delco",
    harga: "Rp110.000 - Rp172.500",
    durasi: "1.5 Jam",
    deskripsi: "Ganti unit distributor (delco).",
    pekerjaan: ["Lepas kabel busi","Buka distributor","Pasang baru","Set timing"],
    manfaat: ["Pengapian tepat","Mesin halus"],
    tidakTermasuk: ["Distributor baru"]
  },
  {
    id: "over-houl-distributor-delco",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Over Houl Distributor / Delco",
    harga: "Rp214.500",
    durasi: "2 Jam",
    deskripsi: "Servis distributor (bearing, seal, platina).",
    pekerjaan: ["Buka distributor","Ganti bearing","Seal","Platina","Bersihkan"],
    manfaat: ["Distributor awet"],
    tidakTermasuk: ["Part service kit"]
  },
  {
    id: "ganti-soal-distributor-dalam",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Ganti Soal Distributor Dalam",
    harga: "Rp198.000",
    durasi: "1 Jam",
    deskripsi: "Ganti rotor & cap distributor internal.",
    pekerjaan: ["Buka cap","Ganti rotor","Cap","Pasang kembali"],
    manfaat: ["Pengapian stabil"],
    tidakTermasuk: ["Rotor","Cap distributor"]
  },
  {
    id: "starter-system",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Starter System",
    harga: "Rp198.000 - Rp316.250",
    durasi: "2 Jam",
    deskripsi: "Diagnosa & perbaikan sistem starter total.",
    pekerjaan: ["Cek kabel massa","Positif","Relay","Saklar","Motor starter"],
    manfaat: ["Sistem starter terjamin"],
    tidakTermasuk: ["Relay","Saklar","Kabel (jika ganti)"]
  },
  {
    id: "charging-system",
    kategori: "KELISTRIKAN MESIN",
    icon: "🔋",
    nama: "Charging System",
    harga: "Rp198.000 - Rp297.275",
    durasi: "2 Jam",
    deskripsi: "Diagnosa & perbaikan sistem pengisian.",
    pekerjaan: ["Cek tegangan","Dioda","Kabel utama","Fuse"],
    manfaat: ["Sistem charging optimal"],
    tidakTermasuk: ["Dioda","Regulator","Kabel"]
  }
  ,
  // =========================
  // BLOK TAMBAHAN: BRAKE (14)
  // =========================

  {
    id: "stel-bersihan-rem-4-roda",
    kategori: "REM",
    icon: "🛑",
    nama: "Stel Bersihan Rem 4 Roda",
    harga: "Rp275.000 - Rp316.259",
    durasi: "2 Jam",
    deskripsi: "Pembersihan & setel rem 4 roda.",
    pekerjaan: ["Buka roda","Bersihkan","Beri grease","Setel hand & pedal brake"],
    manfaat: ["Rem responsif","Tidak berdecit"],
    tidakTermasuk: ["Grease","Minyak rem"]
  },
  {
    id: "stel-bersihan-rem-2-roda",
    kategori: "REM",
    icon: "🛑",
    nama: "Stel Bersihan Rem 2 Roda",
    harga: "Rp137.500 - Rp172.500",
    durasi: "1 Jam",
    deskripsi: "Pembersihan & setel rem 2 roda.",
    pekerjaan: ["Buka 2 roda","Bersihkan","Setel"],
    manfaat: ["Rem bekerja ringan"],
    tidakTermasuk: ["Grease","Minyak rem"]
  },
  {
    id: "ganti-brake-shoes",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Brake Shoes",
    harga: "Rp137.500 - Rp207.000",
    durasi: "1.5 Jam",
    deskripsi: "Ganti sepatu rem tromol 1 set.",
    pekerjaan: ["Buka tromol","Lepas sepatu","Kait","Spring","Pasang baru","Setel"],
    manfaat: ["Rem tangan kuat"],
    tidakTermasuk: ["Sepatu","Spring kit","Minyak rem"]
  },
  {
    id: "ganti-disc-brake-1-sisi",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Disc Brake 1 Sisi",
    harga: "Rp137.500 - Rp172.500",
    durasi: "1.5 Jam",
    deskripsi: "Ganti cakram rem 1 sisi.",
    pekerjaan: ["Buka kaliper","Lepas disc","Pasang baru"],
    manfaat: ["Pengereman halus","Tidak getar"],
    tidakTermasuk: ["Disc rotor 1 pcs"]
  },
  {
    id: "over-houl-rem",
    kategori: "REM",
    icon: "🛑",
    nama: "Over Houl Rem",
    harga: "Rp440.000 - Rp517.500",
    durasi: "4 Jam",
    deskripsi: "Servis menyeluruh semua komponen rem.",
    pekerjaan: ["Bongkar kaliper/tromol","Ganti seal","Piston","Minyak rem baru","Bleed"],
    manfaat: ["Sistem rem seperti baru","Pedal empuk"],
    tidakTermasuk: ["Seal kit","Minyak rem","Piston"]
  },
  {
    id: "ganti-master-rem",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Master Rem",
    harga: "Rp137.500 - Rp201.250",
    durasi: "1.5 Jam",
    deskripsi: "Ganti silinder master rem utama.",
    pekerjaan: ["Lepas reservoir","Baut master","Pasang baru","Isi","Bleed"],
    manfaat: ["Pedal rem keras"],
    tidakTermasuk: ["Master rem","Minyak rem"]
  },
  {
    id: "over-houl-master-rem",
    kategori: "REM",
    icon: "🛑",
    nama: "Over Houl Master Rem",
    harga: "Rp192.500 - Rp230.000",
    durasi: "2 Jam",
    deskripsi: "Servis master rem (ganti kit seal).",
    pekerjaan: ["Buka master","Ganti seal","Piston","Bersihkan","Pasang","Bleed"],
    manfaat: ["Master berfungsi normal"],
    tidakTermasuk: ["Kit seal","Minyak rem"]
  },
  {
    id: "ganti-booster-rem",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Booster Rem",
    harga: "Rp247.500 - Rp316.250",
    durasi: "2 Jam",
    deskripsi: "Ganti power brake booster.",
    pekerjaan: ["Lepas master","Buka baut booster","Pasang baru"],
    manfaat: ["Pedal ringan"],
    tidakTermasuk: ["Booster","Minyak rem"]
  },
  {
    id: "over-houl-rem-depan-1-sisi",
    kategori: "REM",
    icon: "🛑",
    nama: "Over Houl Rem Depan 1 Sisi",
    harga: "Rp137.500 - Rp201.250",
    durasi: "1.5 Jam",
    deskripsi: "Servis kaliper rem depan 1 sisi.",
    pekerjaan: ["Buka kaliper","Ganti seal piston","Bersihkan","Pasang","Bleed"],
    manfaat: ["Pengereman seimbang"],
    tidakTermasuk: ["Seal kit piston","Minyak rem"]
  },
  {
    id: "over-houl-rem-belakang-1-sisi",
    kategori: "REM",
    icon: "🛑",
    nama: "Over Houl Rem Belakang 1 Sisi",
    harga: "Rp137.500 - Rp201.250",
    durasi: "1.5 Jam",
    deskripsi: "Servis kaliper/tromol belakang 1 sisi.",
    pekerjaan: ["Buka komponen","Ganti seal/piston","Bersihkan","Pasang"],
    manfaat: ["Rem belakang pakem"],
    tidakTermasuk: ["Seal kit","Piston","Minyak rem"]
  },
  {
    id: "ganti-kabel-parking-brake-1-sisi",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Kabel Parking Brake 1 Sisi",
    harga: "Rp203.500 - Rp258.750",
    durasi: "1.5 Jam",
    deskripsi: "Ganti kabel rem tangan 1 sisi.",
    pekerjaan: ["Buka konsol","Lepas kabel","Pasang baru","Setel"],
    manfaat: ["Rem tangan berfungsi"],
    tidakTermasuk: ["Kabel parking brake"]
  },
  {
    id: "ganti-motor-servo-brake",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Motor Servo Brake",
    harga: "Rp220.000 - Rp287.500",
    durasi: "1.5 Jam",
    deskripsi: "Ganti motor servo rem (hybrid/EV).",
    pekerjaan: ["Lepas motor servo","Pasang baru","Kalibrasi"],
    manfaat: ["Rem bekerja sesuai assist"],
    tidakTermasuk: ["Motor servo"]
  },
  {
    id: "ganti-master-pembagi-minyak-rem",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Master Pembagi Minyak Rem",
    harga: "Rp220.000 - Rp284.625",
    durasi: "1.5 Jam",
    deskripsi: "Ganti valve proporsi rem.",
    pekerjaan: ["Lepas sambungan","Ganti proporsioner","Bleed"],
    manfaat: ["Rem stabil"],
    tidakTermasuk: ["Proporsioner","Minyak rem"]
  },
  {
    id: "ganti-sensor-abs-1-sisi",
    kategori: "REM",
    icon: "🛑",
    nama: "Ganti Sensor ABS 1 Sisi",
    harga: "Rp110.000 - Rp115.000",
    durasi: "1 Jam",
    deskripsi: "Ganti sensor kecepatan roda ABS 1 sisi.",
    pekerjaan: ["Lepas sensor","Pasang baru","Tes scanner"],
    manfaat: ["ABS normal"],
    tidakTermasuk: ["Sensor ABS"]
  },

  // =========================
  // BLOK TAMBAHAN: POWER TRAIN (13) + STEERING (3)
  // =========================

  {
    id: "over-houl-master-clutch-atas",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Over Houl Master Clutch / Atas",
    harga: "Rp176.000 - Rp201.250",
    durasi: "1.5 Jam",
    deskripsi: "Servis master kopling (ganti seal kit).",
    pekerjaan: ["Bongkar master","Ganti seal","Bersihkan","Pasang","Bleed"],
    manfaat: ["Master berfungsi normal"],
    tidakTermasuk: ["Kit seal","Minyak rem"]
  },
  {
    id: "ganti-release-clutch-bawah",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Release Clutch / Bawah",
    harga: "Rp72.600 - Rp126.500",
    durasi: "1 Jam",
    deskripsi: "Ganti silinder slave kopling (bawah).",
    pekerjaan: ["Lepas slave","Pasang baru","Bleed"],
    manfaat: ["Kopling enteng"],
    tidakTermasuk: ["Slave silinder","Minyak rem"]
  },
  {
    id: "over-houl-transmisi-manual",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Over Houl Transmisi Manual",
    harga: "Rp1.045.000 - Rp1.265.000",
    durasi: "2 Hari",
    deskripsi: "Overhaul total transmisi manual.",
    pekerjaan: ["Turunkan","Bongkar total","Ganti bearing","Synchromesh","Seal","Gasket"],
    manfaat: ["Transmisi halus","Gigi masuk presisi"],
    tidakTermasuk: ["Kit overhaul M/T","Oli"]
  },
  {
    id: "over-houl-transmisi-automatic",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Over Houl Transmisi Automatic",
    harga: "Rp1.650.000 - Rp2.875.000",
    durasi: "3 Hari",
    deskripsi: "Overhaul total transmisi otomatis.",
    pekerjaan: ["Bongkar valve body","Ganti clutch pack","Band brake","Seal","ATF"],
    manfaat: ["A/T seperti baru","Shifting halus"],
    tidakTermasuk: ["Kit overhaul A/T","ATF","Filter"]
  }
  ,
  {
    id: "ganti-seal-drive-shaft-1-sisi",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Seal Drive Shaft 1 Sisi",
    harga: "Rp192.500 - Rp258.750",
    durasi: "1.5 Jam",
    deskripsi: "Ganti seal poros penggerak 1 sisi.",
    pekerjaan: ["Lepas drive shaft","Ganti seal di diff/transmisi","Pasang"],
    manfaat: ["Kebocoran berhenti"],
    tidakTermasuk: ["Seal","Oli/ATF"]
  },
  {
    id: "ganti-booth-drive-shaft-luar",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Booth Drive Shaft Luar 1 Sisi",
    harga: "Rp192.500 - Rp258.750",
    durasi: "1.5 Jam",
    deskripsi: "Ganti boot CV joint luar.",
    pekerjaan: ["Lepas as","Bongkar CV luar","Ganti boot","Grease baru"],
    manfaat: ["CV joint terlindungi"],
    tidakTermasuk: ["Boot kit","Grease"]
  },
  {
    id: "ganti-booth-drive-shaft-dalam",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Booth Drive Shaft Dalam 1 Sisi",
    harga: "Rp159.500 - Rp172.500",
    durasi: "1.5 Jam",
    deskripsi: "Ganti boot CV joint dalam.",
    pekerjaan: ["Lepas as","Bongkar joint dalam","Ganti boot","Grease"],
    manfaat: ["Joint dalam terlindung"],
    tidakTermasuk: ["Boot","Grease"]
  },
  {
    id: "ganti-drive-shaft-assy-1-sisi",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Drive Shaft Assy 1 Sisi",
    harga: "Rp159.500 - Rp201.250",
    durasi: "1.5 Jam",
    deskripsi: "Ganti set poros roda 1 sisi.",
    pekerjaan: ["Lepas as","Pasang baru","Isi oli diff"],
    manfaat: ["Tidak ada getaran saat belok"],
    tidakTermasuk: ["Drive shaft assy","Oli diff"]
  },
  {
    id: "ganti-bearing-roda-depan-1-sisi",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Bearing Roda Depan 1 Sisi",
    harga: "Rp165.000 - Rp201.250",
    durasi: "1.5 Jam",
    deskripsi: "Ganti bearing hub depan 1 sisi.",
    pekerjaan: ["Buka hub","Pres bearing","Pasang baru"],
    manfaat: ["Putaran halus","Dengung hilang"],
    tidakTermasuk: ["Bearing","Grease"]
  },
  {
    id: "ganti-bearing-roda-depan-2-sisi",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Bearing Roda Depan 2 Sisi",
    harga: "Rp29.700 - Rp316.250",
    durasi: "2.5 Jam",
    deskripsi: "Ganti bearing depan kiri+kanan.",
    pekerjaan: ["Ganti kedua bearing depan"],
    manfaat: ["Stabilitas sempurna"],
    tidakTermasuk: ["Bearing 2 pcs","Grease"]
  },
  {
    id: "ganti-bearing-roda-belakang-1-sisi",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Bearing Roda Belakang 1 Sisi",
    harga: "Rp154.000 - Rp201.250",
    durasi: "1.5 Jam",
    deskripsi: "Ganti bearing hub belakang 1 sisi.",
    pekerjaan: ["Buka hub","Pres bearing","Pasang"],
    manfaat: ["Bising hilang"],
    tidakTermasuk: ["Bearing","Grease"]
  },
  {
    id: "ganti-bearing-roda-belakang-2-sisi",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Bearing Roda Belakang 2 Sisi",
    harga: "Rp242.000 - Rp310.500",
    durasi: "2.5 Jam",
    deskripsi: "Ganti bearing belakang kiri+kanan.",
    pekerjaan: ["Ganti kedua bearing belakang"],
    manfaat: ["Kenyamanan meningkat"],
    tidakTermasuk: ["Bearing 2 pcs"]
  },
  {
    id: "ganti-transmisi-mounting",
    kategori: "TRANSMISI",
    icon: "⚙️",
    nama: "Ganti Transmisi Mounting",
    harga: "Rp137.500 - Rp143.750",
    durasi: "1.5 Jam",
    deskripsi: "Ganti support transmisi.",
    pekerjaan: ["Dongkrak","Lepas","Pasang"],
    manfaat: ["Shifting stabil"],
    tidakTermasuk: ["Mounting"]
  },
  {
    id: "ganti-steering-rack-assy",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Steering Rack Assy",
    harga: "Rp385.000 - Rp948.750",
    durasi: "3 Jam",
    deskripsi: "Ganti unit rack steering lengkap.",
    pekerjaan: ["Buka sambungan","Lepas rack","Pasang baru","Set alignment"],
    manfaat: ["Setir presisi","No play"],
    tidakTermasuk: ["Rack assy","Oli PS"]
  },
  {
    id: "over-houl-steering-rack",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Over Houl Steering Rack",
    harga: "Rp825.000 - Rp1.437.500",
    durasi: "4 Jam",
    deskripsi: "Servis rack steering (seal, bush, pinion).",
    pekerjaan: ["Bongkar rack","Ganti seal","Bush","Rack bar","Setel"],
    manfaat: ["Setir ringan","Tidak bocor"],
    tidakTermasuk: ["Kit overhaul rack","Oli PS"]
  },
  {
    id: "ganti-vane-pump-pompa-power-steer",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Vane Pump / Pompa P/W Steer",
    harga: "Rp242.000 - Rp460.000",
    durasi: "1.5 Jam",
    deskripsi: "Ganti pompa power steering.",
    pekerjaan: ["Lepas selang","Buka pompa","Pasang baru","Isi oli","Bleed"],
    manfaat: ["Setir ringan"],
    tidakTermasuk: ["Pompa PS","Oli PS"]
  },
  {
    id: "over-houl-pompa-power-steer",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Over Houl Pompa Power Steer",
    harga: "Rp302.500 - Rp402.500",
    durasi: "2.5 Jam",
    deskripsi: "Servis pompa PS (bearing, seal, rotor).",
    pekerjaan: ["Buka pompa","Ganti seal","Bearing","Rotor","Tes tekanan"],
    manfaat: ["Pompa normal","Pressure stabil"],
    tidakTermasuk: ["Kit overhaul PS","Oli PS"]
  },
  {
    id: "ganti-electronic-power-steer-epc",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Electronic Power Steer / EPC",
    harga: "Rp385.000 - Rp632.500",
    durasi: "2 Jam",
    deskripsi: "Ganti motor EPS / unit PS elektronik.",
    pekerjaan: ["Lepas motor EPS","Pasang baru","Kalibrasi"],
    manfaat: ["Setir ringan elektronik"],
    tidakTermasuk: ["Motor EPS / ECU"]
  },
  {
    id: "ganti-tie-rod-end-1-sisi",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Tie Rod End 1 Sisi",
    harga: "Rp110.000 - Rp143.750",
    durasi: "1 Jam",
    deskripsi: "Ganti ujung tie rod 1 sisi.",
    pekerjaan: ["Lepas tie rod end","Pasang baru","Set toe-in"],
    manfaat: ["Setir presisi","No play"],
    tidakTermasuk: ["Tie rod end"]
  },
  {
    id: "ganti-booth-rack-1-sisi",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Booth Rack 1 Sisi",
    harga: "Rp165.000 - Rp230.000",
    durasi: "1 Jam",
    deskripsi: "Ganti boot rack steer 1 sisi.",
    pekerjaan: ["Lepas tie rod","Ganti boot","Pasang"],
    manfaat: ["Rack terlindung dari debu"],
    tidakTermasuk: ["Boot rack"]
  },
  {
    id: "ganti-tie-rod-set-1-sisi",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Tie Rod Set 1 Sisi",
    harga: "Rp181.500 - Rp198.000",
    durasi: "1.5 Jam",
    deskripsi: "Ganti set tie rod (end+rack end) 1 sisi.",
    pekerjaan: ["Lepas end & rack end","Pasang set"],
    manfaat: ["Setir mantap"],
    tidakTermasuk: ["Set tie rod"]
  },
  {
    id: "ganti-gromed-steering-rack",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Gromed Steering Rack",
    harga: "Rp198.000 - Rp253.000",
    durasi: "1.5 Jam",
    deskripsi: "Ganti dudukan karet/bushing rack.",
    pekerjaan: ["Lepas rack","Ganti grommet","Pasang"],
    manfaat: ["Setir tidak oleng"],
    tidakTermasuk: ["Grommet"]
  },
  {
    id: "ganti-steering-gear-box",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Steering Gear Box",
    harga: "Rp423.500 - Rp632.500",
    durasi: "3 Jam",
    deskripsi: "Ganti gear box steering (tipe lawas).",
    pekerjaan: ["Lepas sambungan","Buka gear box","Pasang baru","Set play"],
    manfaat: ["Setir presisi"],
    tidakTermasuk: ["Steering gear box","Oli gear"]
  },
  {
    id: "over-houl-steering-gear-box",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Over Houl Steering Gear Box",
    harga: "Rp715.000 - Rp948.750",
    durasi: "4 Jam",
    deskripsi: "Servis steering gear box.",
    pekerjaan: ["Bongkar","Ganti bearing","Seal","Worm gear","Set backlash"],
    manfaat: ["Setir ringan"],
    tidakTermasuk: ["Kit overhaul","Oli gear"]
  },
  {
    id: "ganti-slang-high-pressure",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Slang High Pressure / Tek. Tinggi",
    harga: "Rp247.500 - Rp379.500",
    durasi: "1.5 Jam",
    deskripsi: "Ganti selang power steering tekanan tinggi.",
    pekerjaan: ["Lepas selang hi-pressure","Pasang baru","Isi oli","Bleed"],
    manfaat: ["Tekanan sempurna","Setir ringan"],
    tidakTermasuk: ["Selang hi-pressure","Oli PS"]
  },
  {
    id: "ganti-yoke-joint-steer",
    kategori: "KEMUDI",
    icon: "🎯",
    nama: "Ganti Yoke / Joint Steer",
    harga: "Rp192.500 - Rp253.000",
    durasi: "1.5 Jam",
    deskripsi: "Ganti sambungan universal setir.",
    pekerjaan: ["Lepas joint","Pasang baru","Kencangkan"],
    manfaat: ["Setir tidak getar"],
    tidakTermasuk: ["Yoke / joint"]
  },
  {
    id: "ganti-link-stabilizer-belakang-1-sisi",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Link Stabilizer 1 Sisi",
    harga: "Rp90.750 - Rp126.500",
    durasi: "0.5 Jam",
    deskripsi: "Ganti link stabilizer belakang 1 sisi.",
    pekerjaan: ["Lepas link","Pasang baru"],
    manfaat: ["Suara grok hilang"],
    tidakTermasuk: ["Link stabilizer"]
  },
  {
    id: "ganti-bushing-lateral-rod",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Bushing Lateral Rod",
    harga: "Rp90.750 - Rp126.500",
    durasi: "1 Jam",
    deskripsi: "Ganti bushing batang lateral belakang.",
    pekerjaan: ["Lepas lateral rod","Pres bushing","Pasang"],
    manfaat: ["As roda belakang stabil"],
    tidakTermasuk: ["Bushing lateral rod"]
  },
  {
    id: "ganti-karet-stabilizer-belakang",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Karet Stabilizer",
    harga: "Rp90.750 - Rp126.500",
    durasi: "0.5 Jam",
    deskripsi: "Ganti bushing karet stabilizer belakang.",
    pekerjaan: ["Lepas bracket","Ganti karet","Pasang"],
    manfaat: ["Body roll tertahan"],
    tidakTermasuk: ["Karet stabilizer"]
  },
  {
    id: "ganti-lower-arm-belakang",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Lower Arm",
    harga: "Rp181.500 - Rp221.375",
    durasi: "1.5 Jam",
    deskripsi: "Ganti lengan bawah suspensi belakang 1 sisi.",
    pekerjaan: ["Lepas lower arm","Pasang baru","Set alignment"],
    manfaat: ["Toe stabil"],
    tidakTermasuk: ["Lower arm"]
  },
  {
    id: "ganti-knuckle-as-roda-belakang",
    kategori: "SUSPENSI",
    icon: "🚙",
    nama: "Ganti Knuckle As Roda",
    harga: "Rp302.000 - Rp316.250",
    durasi: "2 Jam",
    deskripsi: "Ganti knuckle belakang 1 sisi.",
    pekerjaan: ["Buka hub","Lengan","Knuckle","Pasang"],
    manfaat: ["Sistem roda kokoh"],
    tidakTermasuk: ["Knuckle"]
  },
  {
    id: "ganti-carburator",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Ganti Carburator",
    harga: "Rp121.000",
    durasi: "1.5 Jam",
    deskripsi: "Ganti unit karburator (mesin lawas).",
    pekerjaan: ["Lepas karburator","Pasang baru","Set campuran"],
    manfaat: ["Mesin hidup mudah"],
    tidakTermasuk: ["Karburator","Gasket"]
  },
  {
    id: "over-houl-carburator",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Over Houl Carburator",
    harga: "Rp220.000",
    durasi: "2 Jam",
    deskripsi: "Servis karburator (gasket, jet, setel).",
    pekerjaan: ["Bongkar","Bersihkan jet","Ganti gasket","Set idle & mixture"],
    manfaat: ["Mesin halus"],
    tidakTermasuk: ["Kit overhaul"]
  },
  {
    id: "kuras-tangki-bahan-bakar",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Kuras Tangki Bahan Bakar",
    harga: "Rp287.500 - Rp330.000",
    durasi: "2 Jam",
    deskripsi: "Kuras & bersihkan tangki bensin.",
    pekerjaan: ["Turunkan tangki","Buang sisa","Bersihkan karat","Pasang"],
    manfaat: ["Tangki bersih","Mesin tidak mati"],
    tidakTermasuk: ["Tangki","Bensin baru"]
  },
  {
    id: "ganti-fuel-filter-saringan-bensin",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Ganti Fuel Filter / Saringan Bensin",
    harga: "Rp192.500 - Rp258.750",
    durasi: "0.5 Jam",
    deskripsi: "Ganti filter bahan bakar.",
    pekerjaan: ["Lepas filter","Pasang baru","Bleed"],
    manfaat: ["Aliran bersih"],
    tidakTermasuk: ["Fuel filter"]
  },
  {
    id: "ganti-injection-diesel",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "Ganti Injection Diesel",
    harga: "Rp275.000",
    durasi: "1.5 Jam",
    deskripsi: "Ganti nozzle injector diesel 1 unit.",
    pekerjaan: ["Lepas injector","Pasang baru","Cek pattern"],
    manfaat: ["Mesin diesel halus","Asap berkurang"],
    tidakTermasuk: ["Injector","Seal copper"]
  },
  {
    id: "bp-injection-pump-diesel",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "B/P Injection Pump Diesel",
    harga: "Rp544.500 - Rp660.000",
    durasi: "3 Jam",
    deskripsi: "Bench test & servis pompa injeksi diesel.",
    pekerjaan: ["Lepas pompa","Tes bench","Ganti part","Setel"],
    manfaat: ["Pompa normal"],
    tidakTermasuk: ["Part service","Oli diesel"]
  },
  {
    id: "bp-injection-bensin",
    kategori: "BAHAN BAKAR",
    icon: "⛽",
    nama: "B/P Injection Bensin",
    harga: "Rp193.600 - Rp253.000",
    durasi: "2 Jam",
    deskripsi: "Bench test & servis injector bensin.",
    pekerjaan: ["Lepas injector","Test ultrasonic","Ganti filter","O-ring"],
    manfaat: ["Semprotan merata","Irit BBM"],
    tidakTermasuk: ["Service kit","O-ring"]
  }
];
