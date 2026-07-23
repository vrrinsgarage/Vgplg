/* ==========================================
   1. DATABASE LAYANAN VRRINS GARAGE
   ========================================== */
const servicesDatabase = {
  mesin: {
    title: "Mesin",
    subtitle: "Perawatan & Perbaikan Sistem Mesin",
    categories: {
      "Perawatan": [
        {
          name: "Flushing Oli Mesin",
          price: "Rp150K – Rp300K",
          time: "30–60 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Engine Flush", "Membersihkan Endapan Lumpur Oli", "Membersihkan Jalur Pelumasan Mesin", "Pembuangan Oli Lama", "Persiapan Pengisian Oli Baru"]
        }
      ],
      "Penggantian": [
        {
          name: "Ganti Busi",
          price: "Rp75K – Rp150K",
          time: "30–60 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Busi", "Pemeriksaan Kondisi Busi Lama", "Pemeriksaan Celah Busi", "Pemeriksaan Sistem Pengapian", "Uji Performa Mesin"]
        },
        {
          name: "Ganti Ignition Coil",
          price: "Rp110K – Rp380K",
          time: "30–60 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Ignition Coil", "Pemeriksaan Sistem Pengapian", "Pemeriksaan Konektor Ignition Coil", "Pemeriksaan Percikan Api", "Uji Performa Mesin"]
        },
        {
          name: "Ganti Kabel Busi",
          price: "Rp110K – Rp130K",
          time: "30–45 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Kabel Busi", "Pemeriksaan Jalur Pengapian", "Pemeriksaan Konektor Kabel Busi", "Pemeriksaan Percikan Api", "Uji Performa Mesin"]
        },
        {
          name: "Ganti Timing Belt",
          price: "Rp275K – Rp460K",
          time: "180–300 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Timing Belt", "Pemeriksaan Timing Pulley", "Pemeriksaan Timing Belt Tensioner", "Pemeriksaan Idler Pulley", "Penyetelan Timing Mesin", "Uji Performa Mesin"]
        },
        {
          name: "Ganti Timing Chain",
          price: "Rp385K – Rp775K",
          time: "240–420 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Timing Chain", "Pemeriksaan Chain Guide", "Pemeriksaan Chain Tensioner", "Pemeriksaan Timing Sprocket", "Penyetelan Timing Mesin", "Uji Performa Mesin"]
        },
        {
          name: "Ganti Engine Mounting",
          price: "Rp110K – Rp145K (Per Sisi)",
          time: "30–90 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Engine Mounting", "Pemeriksaan Engine Mounting Lainnya", "Pemeriksaan Baut Mounting", "Pemeriksaan Getaran Mesin", "Uji Kendaraan"]
        }
      ]
    }
  },
  pelumasan: {
    title: "Pelumasan",
    subtitle: "Ganti Oli & Perawatan Sistem Pelumasan",
    categories: {
      "Penggantian": [
        {
          name: "Ganti Oli Mesin",
          price: "Rp75K – Rp125K",
          time: "15–30 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Oli Mesin", "Pemeriksaan Kondisi Oli Lama", "Pemeriksaan Baut Drain Oli", "Penggantian Ring Baut Drain (bila diperlukan)", "Pemeriksaan Kebocoran Oli", "Reset Service Reminder (jika tersedia)"]
        },
        {
          name: "Ganti Oli Transmisi Manual",
          price: "Rp75K – Rp100K",
          time: "30–45 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Oli Transmisi Manual", "Pemeriksaan Baut Drain & Fill", "Pemeriksaan Kondisi Oli Lama", "Pemeriksaan Kebocoran Oli Transmisi"]
        },
        {
          name: "Ganti Oli Transmisi Otomatis (AT)",
          price: "Rp275K – Rp375K",
          time: "45–90 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Oli Transmisi Otomatis", "Pemeriksaan Baut Drain & Fill", "Pemeriksaan Kondisi Oli AT", "Pemeriksaan Kebocoran Oli Transmisi"]
        },
        {
          name: "Ganti Filter Oli Transmisi",
          price: "Rp150K – Rp350K",
          time: "60–120 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Filter Oli Transmisi", "Pembersihan Bak Oli Transmisi", "Pembersihan Magnet Penampung Serbuk Logam", "Pemeriksaan Kebocoran Oli"]
        },
        {
          name: "Ganti Oli Gardan",
          price: "Rp100K – Rp175K",
          time: "30–45 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Oli Gardan", "Pemeriksaan Baut Drain & Fill", "Pemeriksaan Kondisi Oli Gardan", "Pemeriksaan Kebocoran Oli"]
        }
      ],
      "Perawatan": [
        {
          name: "Flushing Oli Mesin",
          price: "Rp50K – Rp150K",
          time: "30–60 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Engine Flush", "Membersihkan Endapan Lumpur Oli", "Membersihkan Jalur Pelumasan Mesin", "Pembuangan Oli Lama", "Persiapan Pengisian Oli Baru"]
        }
      ],
      "Perbaikan": [
        {
          name: "Mengatasi Kebocoran Oli Mesin",
          price: "Rp150K – Rp500K",
          time: "60–180 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Pemeriksaan Titik Kebocoran Oli", "Pemeriksaan Seal & Gasket", "Penggantian Seal/Gasket (bila diperlukan)", "Pembersihan Area Kebocoran", "Pengujian Setelah Perbaikan"]
        }
      ]
    }
  },
  bahan_bakar: {
    title: "Bahan Bakar",
    subtitle: "Perawatan & Perbaikan Sistem Bahan Bakar",
    categories: {
      "Pemeriksaan": [
        {
          name: "Pemeriksaan Sistem Bahan Bakar",
          price: "Rp150K – Rp250K",
          time: "30–60 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Pemeriksaan Fuel Pump", "Pemeriksaan Filter Bahan Bakar", "Pemeriksaan Injector", "Pemeriksaan Tekanan Bahan Bakar", "Pemeriksaan Kebocoran Sistem Bahan Bakar", "Analisa Sistem Bahan Bakar"]
        }
      ],
      "Perawatan": [
        {
          name: "Fuel System Cleaner",
          price: "Rp250K – Rp500K",
          time: "60–120 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Pembersihan Jalur Bahan Bakar", "Pembersihan Injector", "Pembersihan Ruang Bakar", "Pembersihan Katup Intake", "Pemeriksaan Sistem Bahan Bakar"]
        },
        {
          name: "Kuras Tangki Bahan Bakar",
          price: "Rp290K – Rp330K",
          time: "90–180 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Pengurasan Tangki Bahan Bakar", "Pembersihan Endapan Kotoran", "Pembersihan Tangki Bahan Bakar", "Pemeriksaan Fuel Pump", "Pemeriksaan Saringan Fuel Pump"]
        }
      ],
      "Penggantian": [
        {
          name: "Ganti Fuel Pump",
          price: "Rp190K – Rp260K",
          time: "60–120 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Fuel Pump", "Pemeriksaan Tekanan Bahan Bakar", "Pemeriksaan Soket Kelistrikan Fuel Pump", "Pemeriksaan Kebocoran", "Uji Sistem Bahan Bakar"]
        },
        {
          name: "Ganti Filter Bahan Bakar",
          price: "Rp190K – Rp260K",
          time: "30–60 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Filter Bahan Bakar", "Pemeriksaan Jalur Bahan Bakar", "Pemeriksaan Kebocoran", "Uji Aliran Bahan Bakar"]
        },
        {
          name: "Ganti Injector",
          price: "Rp275K – Rp400K",
          time: "60–120 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Injector", "Penggantian O-Ring Injector (bila diperlukan)", "Pemeriksaan Tekanan Bahan Bakar", "Pemeriksaan Kebocoran Injector", "Uji Performa Mesin"]
        },
        {
          name: "Ganti Karburator",
          price: "Rp120K – Rp200K",
          time: "45–90 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Penggantian Karburator", "Setelan Idle", "Setelan Campuran Udara & Bahan Bakar", "Pemeriksaan Kebocoran", "Uji Performa Mesin"]
        }
      ],
      "Servis": [
        {
          name: "Servis Injector",
          price: "Rp300K – Rp600K",
          time: "90–180 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Pembongkaran Injector (bila diperlukan)", "Pembersihan Injector dengan Injector Cleaner", "Pengujian Pola Semprotan", "Pengujian Debit Injector", "Pemeriksaan Kebocoran Injector"]
        },
        {
          name: "Servis Karburator",
          price: "Rp220K – Rp350K",
          time: "60–120 Menit",
          desc: "Tergantung jenis kendaraan",
          items: ["Pembongkaran Karburator", "Pembersihan Seluruh Jalur Karburator", "Pemeriksaan Pelampung", "Setelan Idle", "Setelan Campuran Udara & Bahan Bakar", "Uji Performa Mesin"]
        }
      ]
    }
  },
  suspensi: {
    title: "Suspensi",
    subtitle: "Menjaga Kenyamanan & Kestabilan Kendaraan",
    categories: {
      "Penggantian": [
        { name: "Ganti Shock Absorber Depan", price: "Rp220K – Rp390K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Shock Absorber Depan", "Pemeriksaan Dudukan Shock (Mounting)", "Pemeriksaan Per Shock", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"] },
        { name: "Ganti Shock Absorber Belakang", price: "Rp165K – Rp400K", time: "45–90 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Shock Absorber Belakang", "Pemeriksaan Dudukan Shock", "Pemeriksaan Per Shock", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"] },
        { name: "Ganti Ball Joint", price: "Rp165K – Rp175K", time: "45–90 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Ball Joint", "Pemeriksaan Steering Knuckle", "Pemeriksaan Lower Arm", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"] },
        { name: "Ganti Lower Arm", price: "Rp220K – Rp290K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Lower Arm", "Pemeriksaan Ball Joint", "Pemeriksaan Bushing Lower Arm", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"] },
        { name: "Ganti Upper Arm", price: "Rp190K – Rp210K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Upper Arm", "Pemeriksaan Ball Joint", "Pemeriksaan Bushing Upper Arm", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"] },
        { name: "Ganti Link Stabilizer", price: "Rp110K – Rp145K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Link Stabilizer", "Pemeriksaan Karet Stabilizer", "Pemeriksaan Stabilizer Bar", "Uji Kendaraan"] },
        { name: "Ganti Bushing Lower Arm", price: "Rp165K – Rp250K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Bushing Lower Arm", "Pemeriksaan Lower Arm", "Pemeriksaan Dudukan Bushing", "Uji Kendaraan"] },
        { name: "Ganti Bushing Upper Arm", price: "Rp165K – Rp250K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Bushing Upper Arm", "Pemeriksaan Upper Arm", "Pemeriksaan Dudukan Bushing", "Uji Kendaraan"] },
        { name: "Ganti Karet Stabilizer", price: "Rp85K – Rp120K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Karet Stabilizer", "Pemeriksaan Stabilizer Bar", "Pemeriksaan Bracket Stabilizer", "Uji Kendaraan"] },
        { name: "Ganti Bearing Roda", price: "Rp165K – Rp320K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Bearing Roda", "Pemeriksaan Hub Roda", "Pemeriksaan As Roda", "Pemeriksaan Baut Roda", "Uji Kendaraan"] }
      ]
    }
  },
  kemudi: {
    title: "Kemudi",
    subtitle: "Perawatan & Perbaikan Sistem Kemudi",
    categories: {
      "Penggantian": [
        { name: "Ganti Steering Rack", price: "Rp385K – Rp950K", time: "180–360 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Steering Rack", "Pemeriksaan Tie Rod", "Pemeriksaan Rack End", "Pemeriksaan Bushing Steering", "Uji Fungsi Kemudi"] },
        { name: "Ganti Tie Rod", price: "Rp140K – Rp145K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Tie Rod", "Pemeriksaan Rack End", "Pemeriksaan Boot Steering Rack", "Uji Fungsi Kemudi"] },
        { name: "Ganti Rack End", price: "Rp165K – Rp230K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Rack End", "Pemeriksaan Tie Rod", "Pemeriksaan Steering Rack", "Uji Fungsi Kemudi"] },
        { name: "Ganti Power Steering Pump", price: "Rp220K – Rp450K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Power Steering Pump", "Pemeriksaan Belt Power Steering", "Pemeriksaan Selang Power Steering", "Pengisian Oli Power Steering (bila diperlukan)", "Uji Sistem Power Steering"] },
        { name: "Ganti Selang Power Steering", price: "Rp165K – Rp250K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Selang Power Steering", "Pemeriksaan Clamp Selang", "Pengisian Oli Power Steering (bila diperlukan)", "Pemeriksaan Kebocoran", "Uji Sistem Power Steering"] },
        { name: "Ganti Oli Power Steering", price: "Rp100K – Rp175K", time: "30–45 Menit", desc: "Tergantung jenis kendaraan", items: ["Pengurasan Oli Power Steering Lama", "Pengisian Oli Power Steering Baru", "Pemeriksaan Kebocoran Sistem", "Uji Fungsi Kemudi"] }
      ],
      "Servis": [
        { name: "Servis Steering Rack", price: "Rp825K – Rp1.450K", time: "1–2 Hari", desc: "Tergantung jenis kendaraan", items: ["Pembongkaran Steering Rack", "Pembersihan Komponen", "Pemeriksaan Gear Rack", "Penggantian Seal Kit (bila diperlukan)", "Perakitan Kembali", "Uji Fungsi Kemudi"] },
        { name: "Servis Power Steering Pump", price: "Rp450K – Rp900K", time: "180–360 Menit", desc: "Tergantung jenis kendaraan", items: ["Pembongkaran Power Steering Pump", "Pembersihan Komponen", "Pemeriksaan Bearing", "Penggantian Seal (bila diperlukan)", "Perakitan & Uji Fungsi"] }
      ],
      "Perawatan": [
        { name: "Steering System Flush", price: "Rp250K – Rp450K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Flushing Sistem Power Steering", "Pembersihan Jalur Oli Power Steering", "Pengisian Oli Baru", "Pemeriksaan Kebocoran", "Uji Fungsi Kemudi"] }
      ]
    }
  },
  rem: {
    title: "Rem",
    subtitle: "Perawatan & Perbaikan Sistem Pengereman",
    categories: {
      "Servis": [
        { name: "Servis Rem (Setel & Bersihkan 2 Roda)", price: "Rp140K – Rp175K", time: "45–90 Menit", desc: "Tergantung jenis kendaraan", items: ["Bongkar Rem", "Pembersihan Kampas Rem", "Pembersihan Kaliper/Tromol", "Pelumasan Komponen Rem", "Setel Rem", "Pemeriksaan Minyak Rem"] },
        { name: "Servis Kaliper Rem", price: "Rp140K – Rp200K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Pembongkaran Kaliper", "Pembersihan Piston Kaliper", "Pemeriksaan Seal Kaliper", "Pelumasan Pin Kaliper", "Perakitan Kembali", "Uji Fungsi Rem"] },
        { name: "Servis Master Rem", price: "Rp190K – Rp230K", time: "90–180 Menit", desc: "Tergantung jenis kendaraan", items: ["Pembongkaran Master Rem", "Pembersihan Komponen", "Penggantian Seal Kit (bila diperlukan)", "Bleeding Sistem Rem", "Uji Fungsi Rem"] }
      ],
      "Penggantian": [
        { name: "Ganti Kampas Rem Depan", price: "Rp140K – Rp175K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Kampas Rem Depan", "Pembersihan Kaliper", "Pelumasan Pin Kaliper", "Pemeriksaan Cakram Rem", "Uji Fungsi Rem"] },
        { name: "Ganti Kampas Rem Belakang", price: "Rp140K – Rp175K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Kampas Rem Belakang", "Pembersihan Kaliper/Tromol", "Pelumasan Komponen Rem", "Pemeriksaan Cakram/Tromol", "Uji Fungsi Rem"] },
        { name: "Ganti Kampas Rem Tromol (Brake Shoe)", price: "Rp140K – Rp210K", time: "45–90 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Kampas Rem Tromol", "Pembersihan Tromol", "Pelumasan Titik Gesek", "Setel Rem Tromol", "Uji Fungsi Rem"] },
        { name: "Ganti Cakram Rem", price: "Rp140K – Rp175K", time: "45–90 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Cakram Rem", "Pembersihan Hub Roda", "Pemeriksaan Kaliper", "Uji Fungsi Rem"] },
        { name: "Ganti Master Rem", price: "Rp140K – Rp200K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Master Rem", "Bleeding Sistem Rem", "Pemeriksaan Kebocoran", "Uji Fungsi Rem"] },
        { name: "Ganti Booster Rem", price: "Rp250K – Rp320K", time: "90–180 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Booster Rem", "Pemeriksaan Selang Vakum", "Pemeriksaan Master Rem", "Bleeding Sistem Rem", "Uji Fungsi Rem"] },
        { name: "Ganti Selang Minyak Rem", price: "Rp110K – Rp120K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Selang Minyak Rem", "Bleeding Sistem Rem", "Pemeriksaan Kebocoran", "Uji Fungsi Rem"] },
        { name: "Ganti Sensor ABS", price: "Rp110K – Rp120K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Sensor ABS", "Scan Sistem ABS", "Hapus Kode Error (jika memungkinkan)", "Uji Fungsi Sistem ABS"] }
      ]
    }
  },
  pendingin: {
    title: "Pendingin",
    subtitle: "Menjaga Suhu Mesin Tetap Stabil",
    categories: {
      "Perawatan": [
        { name: "Kuras Radiator", price: "Rp80K – Rp120K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Pengurasan Coolant Lama", "Flushing Sistem Pendingin", "Pengisian Coolant Baru", "Pemeriksaan Kebocoran Sistem Pendingin", "Pemeriksaan Tutup Radiator"] }
      ],
      "Penggantian": [
        { name: "Ganti Radiator", price: "Rp140K – Rp200K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Radiator", "Penggantian Coolant (bila diperlukan)", "Pemeriksaan Selang Radiator", "Pemeriksaan Tutup Radiator", "Uji Kebocoran Sistem Pendingin"] },
        { name: "Ganti Water Pump", price: "Rp220K – Rp460K", time: "90–180 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Water Pump", "Pemeriksaan Gasket Water Pump", "Pemeriksaan Drive Belt/Timing Belt", "Pengisian Coolant Baru", "Uji Sistem Pendingin"] },
        { name: "Ganti Thermostat", price: "Rp165K – Rp230K", time: "45–90 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Thermostat", "Pemeriksaan Housing Thermostat", "Penggantian Coolant (bila diperlukan)", "Uji Suhu Kerja Mesin", "Pemeriksaan Kebocoran"] },
        { name: "Ganti Selang Radiator", price: "Rp85K – Rp145K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Selang Radiator", "Pemeriksaan Klem Selang", "Pengisian Coolant", "Pemeriksaan Kebocoran", "Uji Sistem Pendingin"] },
        { name: "Ganti Tutup Radiator", price: "Rp50K – Rp100K", time: "15–30 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Tutup Radiator", "Pemeriksaan Tekanan Sistem Pendingin", "Pemeriksaan Kebocoran"] },
        { name: "Ganti Motor Fan Radiator", price: "Rp165K – Rp230K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Motor Fan Radiator", "Pemeriksaan Fan Blade", "Pemeriksaan Relay Fan", "Pemeriksaan Sekring Fan", "Uji Kinerja Kipas Radiator"] },
        { name: "Ganti Motor Fan Kondensor AC", price: "Rp165K – Rp230K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Motor Fan Kondensor AC", "Pemeriksaan Relay Fan", "Pemeriksaan Sekring Fan", "Uji Kinerja Kipas Kondensor"] },
        { name: "Ganti Water Outlet/Inlet", price: "Rp165K – Rp230K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Water Outlet/Inlet", "Pemeriksaan Gasket", "Pemeriksaan Selang Radiator", "Pemeriksaan Kebocoran", "Uji Sistem Pendingin"] }
      ]
    }
  },
  transmisi: {
    title: "Transmisi",
    subtitle: "Perawatan & Perbaikan Perubahan Gigi",
    categories: {
      "Penggantian": [
        { name: "Ganti Kopling", price: "Rp300K – Rp900K", time: "240–480 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Kampas Kopling", "Pemeriksaan Pressure Plate", "Pemeriksaan Release Bearing", "Pemeriksaan Flywheel", "Penyetelan Sistem Kopling", "Uji Jalan Kendaraan"] },
        { name: "Ganti Master Kopling Atas", price: "Rp175K – Rp250K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Master Kopling Atas", "Pemeriksaan Selang Kopling", "Bleeding Sistem Kopling", "Uji Fungsi Kopling"] },
        { name: "Ganti Master Kopling Bawah", price: "Rp175K – Rp250K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Master Kopling Bawah", "Pemeriksaan Selang Kopling", "Bleeding Sistem Kopling", "Uji Fungsi Kopling"] },
        { name: "Ganti Release Bearing", price: "Rp450K – Rp700K", time: "240–480 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Release Bearing", "Pemeriksaan Kampas Kopling", "Pemeriksaan Pressure Plate", "Pemeriksaan Flywheel", "Uji Fungsi Kopling"] },
        { name: "Ganti Pilot Bearing", price: "Rp450K – Rp700K", time: "240–480 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Pilot Bearing", "Pemeriksaan Flywheel", "Pemeriksaan Poros Input Transmisi", "Uji Fungsi Kopling"] },
        { name: "Ganti Drive Shaft", price: "Rp220K – Rp385K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Drive Shaft", "Pemeriksaan CV Joint", "Pemeriksaan Boot Drive Shaft", "Pemeriksaan Oli Transmisi", "Uji Jalan Kendaraan"] },
        { name: "Ganti Boot Drive Shaft", price: "Rp165K – Rp250K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Boot Drive Shaft", "Penggantian Grease CV Joint", "Pemeriksaan CV Joint", "Pembersihan Area CV Joint", "Uji Jalan Kendaraan"] },
        { name: "Ganti Bearing Roda", price: "Rp165K – Rp320K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Bearing Roda", "Pemeriksaan Hub Roda", "Pemeriksaan As Roda", "Pemeriksaan Kekencangan Baut Roda", "Uji Jalan Kendaraan"] }
      ],
      "Servis": [
        { name: "Servis Transmisi Manual", price: "Rp1.200K – Rp3.500K", time: "1–3 Hari", desc: "Tergantung jenis kendaraan", items: ["Pembongkaran Transmisi", "Pemeriksaan Gear Transmisi", "Pemeriksaan Bearing", "Pemeriksaan Synchronizer", "Penggantian Komponen Rusak", "Perakitan & Uji Jalan"] },
        { name: "Servis Transmisi Otomatis", price: "Rp2.500K – Rp8.000K", time: "2–5 Hari", desc: "Tergantung jenis kendaraan", items: ["Pemeriksaan Awal Transmisi", "Pembongkaran Transmisi Otomatis", "Pemeriksaan Valve Body", "Pemeriksaan Clutch Pack", "Pemeriksaan Torque Converter", "Perakitan & Pengujian"] }
      ]
    }
  },
  kelistrikan_mesin: {
    title: "Kelistrikan Mesin",
    subtitle: "Perawatan & Perbaikan Kelistrikan Utama",
    categories: {
      "Pemeriksaan": [
        { name: "Pemeriksaan Sistem Starter", price: "Rp200K – Rp320K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Pemeriksaan Kondisi Aki", "Pemeriksaan Dinamo Starter", "Pemeriksaan Relay Starter", "Pemeriksaan Jalur Kelistrikan Starter", "Pengukuran Tegangan Starter", "Analisa Penyebab Gangguan"] },
        { name: "Pemeriksaan Sistem Charging", price: "Rp200K – Rp300K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Pemeriksaan Alternator", "Pemeriksaan Regulator", "Pemeriksaan Tegangan Pengisian", "Pemeriksaan Aki", "Analisa Sistem Charging"] }
      ],
      "Penggantian": [
        { name: "Ganti Aki", price: "Rp80K – Rp100K", time: "15–30 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Aki", "Pemeriksaan Terminal Aki", "Pembersihan Terminal Aki", "Pemeriksaan Tegangan Pengisian", "Reset Sistem Elektronik"] },
        { name: "Ganti Alternator", price: "Rp190K – Rp230K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Alternator", "Pemeriksaan Belt Alternator", "Pemeriksaan Jalur Kelistrikan", "Pemeriksaan Tegangan Pengisian", "Uji Sistem Charging"] },
        { name: "Ganti Dinamo Starter", price: "Rp190K – Rp290K", time: "60–120 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Dinamo Starter", "Pemeriksaan Relay Starter", "Pemeriksaan Jalur Kelistrikan", "Uji Sistem Starter"] },
        { name: "Ganti Ignition Coil", price: "Rp110K – Rp380K", time: "30–60 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Ignition Coil", "Pemeriksaan Soket Coil", "Pemeriksaan Sistem Pengapian", "Uji Percikan Api", "Uji Performa Mesin"] },
        { name: "Ganti Kabel Busi", price: "Rp110K – Rp130K", time: "30–45 Menit", desc: "Tergantung jenis kendaraan", items: ["Penggantian Kabel Busi", "Pemeriksaan Jalur Pengapian", "Pemeriksaan Soket Kabel Busi", "Uji Percikan Api", "Uji Performa Mesin"] }
      ],
      "Servis": [
        { name: "Servis Alternator", price: "Rp385K – Rp520K", time: "120–240 Menit", desc: "Tergantung jenis kendaraan", items: ["Pembongkaran Alternator", "Pembersihan Komponen", "Pemeriksaan Rotor & Stator", "Pemeriksaan Bearing", "Pemeriksaan Carbon Brush", "Perakitan & Pengujian"] },
        { name: "Servis Dinamo Starter", price: "Rp275K – Rp390K", time: "120–240 Menit", desc: "Tergantung jenis kendaraan", items: ["Pembongkaran Dinamo Starter", "Pembersihan Komponen", "Pemeriksaan Carbon Brush", "Pemeriksaan Bendix", "Pemeriksaan Armature", "Perakitan & Pengujian"] }
      ]
    }
  }
};

let currentSystemKey = null;
let currentCategoryName = null;

function openSystemFlow(systemKey) {
  currentSystemKey = systemKey;
  const sysData = servicesDatabase[systemKey];
  if (!sysData) return;
  const modalBody = document.getElementById('modal-content-body');
  if (!modalBody) return;

  let html = `<div class="popup-header"><h3 class="popup-title">${sysData.title}</h3><p class="popup-subtitle">${sysData.subtitle}</p></div><div class="popup-body"><p style="font-size:0.85rem; color:#888; margin-bottom:15px;">Pilih kategori layanan:</p>`;
  for (let catName in sysData.categories) {
    const count = sysData.categories[catName].length;
    html += `<div class="list-menu-item" onclick="renderServiceList('${catName}')"><div><div class="item-title">${catName}</div><span class="item-badge">${count} Layanan</span></div><i class="fas fa-chevron-right text-primary"></i></div>`;
  }
  html += `</div>`;
  modalBody.innerHTML = html;
  
  const modal = document.getElementById('service-modal');
  if(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function renderServiceList(catName) {
  currentCategoryName = catName;
  const sysData = servicesDatabase[currentSystemKey];
  const list = sysData.categories[catName];
  const modalBody = document.getElementById('modal-content-body');

  let html = `<div class="popup-header"><button class="btn-back" onclick="openSystemFlow('${currentSystemKey}')"><i class="fas fa-arrow-left"></i> Kembali ke Sistem</button><h3 class="popup-title">${catName} ${sysData.title}</h3></div><div class="popup-body">`;
  list.forEach((item, index) => {
    html += `<div class="list-menu-item" onclick="renderServiceDetail(${index})"><div><div class="item-title">${item.name}</div><span class="item-time"><i class="far fa-clock"></i> ${item.time}</span></div><div class="text-right"><div class="item-price">${item.price}</div><i class="fas fa-chevron-right text-primary" style="font-size:0.8rem;"></i></div></div>`;
  });
  html += `</div>`;
  modalBody.innerHTML = html;
}

function renderServiceDetail(index) {
  const item = servicesDatabase[currentSystemKey].categories[currentCategoryName][index];
  const modalBody = document.getElementById('modal-content-body');
  const waText = encodeURIComponent(`Halo VRRINS GARAGE, saya mau konsultasi / booking layanan *${item.name}* untuk mobil saya.`);

  let html = `<div class="popup-header"><button class="btn-back" onclick="renderServiceList('${currentCategoryName}')"><i class="fas fa-arrow-left"></i> Kembali ke List</button><h3 class="popup-title">${item.name}</h3></div><div class="popup-body"><div class="detail-card"><div class="detail-row"><span class="label">ESTIMASI BIAYA</span><span class="value price">${item.price}</span></div><div class="detail-row"><span class="label">ESTIMASI WAKTU</span><span class="value">${item.time}</span></div><div class="detail-row"><span class="label">KETERANGAN</span><span class="value">${item.desc}</span></div></div><div class="detail-list"><h4><i class="fas fa-search text-primary"></i> MELIPUTI:</h4><ul>`;
  item.items.forEach(sub => {
    html += `<li><i class="fas fa-check-circle"></i> ${sub}</li>`;
  });
  html += `</ul></div></div><div class="modal-footer-cta"><a href="https://wa.me/62895622499262?text=${waText}" target="_blank" class="btn-wa-booking"><i class="fab fa-whatsapp" style="font-size:1.2rem;"></i> BOOKING LAYANAN INI VIA WA</a></div>`;
  modalBody.innerHTML = html;
}

function openDirectDetail(sysKey, catName, itemIndex) {
  currentSystemKey = sysKey;
  currentCategoryName = catName;
  const searchResults = document.getElementById('searchResults');
  if(searchResults) searchResults.style.display = 'none';

  const modal = document.getElementById('service-modal');
  if(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  renderServiceDetail(itemIndex);
}

function closeModal() {
  const modal = document.getElementById('service-modal');
  if(modal) modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}
/* ==========================================
   3. FITUR UTAMA & INTERAKTIF LAINNYA
   ========================================== */
function toggleMenu() {
  const drawer = document.getElementById('navDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if(drawer) drawer.classList.toggle('active');
  if(overlay) overlay.classList.toggle('active');
}

function openPopup(modalId) {
  const modal = document.getElementById(modalId);
  if(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    const generic = document.getElementById('popup-generic');
    if(generic) {
      generic.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
}

function closePopup(modalId) {
  const modal = document.getElementById(modalId);
  if(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function switchTab(btn, tabId) {
  const parent = btn.closest('.modal-content');
  if(!parent) return;

  const buttons = parent.querySelectorAll('.tab-btn');
  const contents = parent.querySelectorAll('.tab-content');
  
  buttons.forEach(b => b.classList.remove('active'));
  contents.forEach(c => c.style.display = 'none');
  
  btn.classList.add('active');
  const targetContent = parent.querySelector('.' + tabId);
  if(targetContent) {
    targetContent.style.display = 'block';
  }
}

function toggleFaq(button) {
  const faqItem = button.parentElement;
  const answer = faqItem.querySelector('.faq-answer');
  const arrow = button.querySelector('.faq-arrow');
  
  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    if(arrow) arrow.style.transform = 'rotate(0deg)';
  } else {
    answer.style.display = 'block';
    if(arrow) arrow.style.transform = 'rotate(180deg)';
  }
}

function filterServices() {
  const inputEl = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');
  if(!inputEl || !resultsContainer) return;

  const input = inputEl.value.toLowerCase().trim();
  
  if (input === '') {
    resultsContainer.style.display = 'none';
    resultsContainer.innerHTML = '';
    return;
  }
  
  let matches = [];

  for (let sysKey in servicesDatabase) {
    const sys = servicesDatabase[sysKey];
    for (let catName in sys.categories) {
      sys.categories[catName].forEach((item, index) => {
        if (item.name.toLowerCase().includes(input)) {
          matches.push({
            name: item.name,
            systemTitle: sys.title,
            sysKey: sysKey,
            catName: catName,
            index: index
          });
        }
      });
    }
  }
  
  if (matches.length > 0) {
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = matches.map(m => `
      <div class="search-item" onclick="openDirectDetail('${m.sysKey}', '${m.catName}', ${m.index})">
        <span>${m.name}</span>
        <small style="color:#888;">${m.systemTitle} &rarr;</small>
      </div>
    `).join('');
  } else {
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `
      <div class="search-item" style="color:#888;">
        Layanan tidak ditemukan. <a href="https://wa.me/62895622499262" target="_blank" style="color:#e63946; font-weight:bold;">Tanyakan di WA &rarr;</a>
      </div>
    `;
  }
}

/* ==========================================
   4. EVENT LISTENERS & GLOBAL HANDLERS
   ========================================== */
window.onclick = function(event) {
  if (event.target.classList.contains('custom-modal') || event.target.classList.contains('modal-overlay') || event.target.id === 'service-modal') {
    closeModal();
    const activeModals = document.querySelectorAll('.custom-modal.active, .modal.active');
    activeModals.forEach(m => m.classList.remove('active'));
    document.body.style.overflow = 'auto';
  }
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
    const activeModals = document.querySelectorAll('.custom-modal.active, .modal.active');
    activeModals.forEach(m => m.classList.remove('active'));
    document.body.style.overflow = 'auto';
  }
});
