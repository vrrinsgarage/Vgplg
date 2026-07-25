/* =======================================================
VRRINS GARAGE
script.js
======================================================= */

/* =======================================================
LOADER
======================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 800);

    }

});

/* =======================================================
MENU MOBILE
======================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

/* =======================================================
TUTUP MENU SETELAH KLIK
======================================================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

/* =======================================================
SCROLL HEADER
======================================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

/* =======================================================
SCROLL TO TOP
======================================================= */

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (!scrollTopBtn) return;

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* =======================================================
SCROLL ANIMATION
======================================================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section,.package-card,.service-card,.why-card,.testimonial-card,.keunggulan .item").forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

/* =======================================================
FAQ
======================================================= */

document.querySelectorAll(".faq-item").forEach(item => {

    const btn = item.querySelector(".faq-question");

    if (!btn) return;

    btn.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

/* =======================================================
POPUP MULTI STEP
======================================================= */

const popup = document.getElementById("popup");
const popupContent = document.getElementById("popupContent");

let currentCategory = "";
let currentSymptom = "";
let currentService = "";

/* =======================================================
BUKA POPUP
======================================================= */

function openPopup(html){

    popupContent.innerHTML = html;

    popup.classList.add("active");

}

/* =======================================================
TUTUP POPUP
======================================================= */

function closePopup(){

    popup.classList.remove("active");

}

/* =======================================================
TOMBOL CLOSE
======================================================= */

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("popup-close")){

        closePopup();

    }

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        closePopup();

    }

});

/* =======================================================
POPUP 1
PILIH KATEGORI
======================================================= */

function showCategoryPopup(){

openPopup(`

<div class="popup-box">

<div class="popup-header">

<h2>Pilih Kategori Sistem Kendaraan</h2>

<button class="popup-close">&times;</button>

</div>

<p>

Pilih bagian mobil yang mengalami gejala atau ingin diperiksa.

</p>

<div class="service-grid">

<div class="service-card" onclick="showSymptomPopup('Mesin')">

⚙<br>Mesin

</div>

<div class="service-card" onclick="showSymptomPopup('Pelumasan')">

💧<br>Pelumasan

</div>

<div class="service-card" onclick="showSymptomPopup('Bahan Bakar')">

⛽<br>Bahan Bakar

</div>

<div class="service-card" onclick="showSymptomPopup('Suspensi')">

🚙<br>Suspensi

</div>

<div class="service-card" onclick="showSymptomPopup('Kemudi')">

🎯<br>Kemudi

</div>

<div class="service-card" onclick="showSymptomPopup('Rem')">

🛑<br>Rem

</div>

<div class="service-card" onclick="showSymptomPopup('Pendingin')">

🌡<br>Pendingin

</div>

<div class="service-card" onclick="showSymptomPopup('Transmisi')">

⚙<br>Transmisi

</div>

<div class="service-card" onclick="showSymptomPopup('Kelistrikan Mesin')">

🔋<br>Kelistrikan

</div>

</div>

</div>

`);

}

/* =======================================================
TOMBOL LIHAT LAYANAN
======================================================= */

const layananBtn=document.getElementById("lihatLayanan");

if(layananBtn){

layananBtn.onclick=showCategoryPopup;

}

/* =======================================================
DATABASE GEJALA
======================================================= */

const symptomDatabase = {

Mesin: [

"Mobil susah hidup",
"Mesin pincang",
"Tenaga berkurang",
"Mesin cepat panas",
"Lampu Check Engine menyala",
"Mesin bergetar",
"Oli mesin bocor",
"Asap putih",
"Asap hitam",
"Suara mesin kasar"

],

Pelumasan: [

"Oli mesin bocor",
"Oli cepat berkurang",
"Oli mesin kotor",
"Lampu oli menyala",
"Tekanan oli rendah",
"Oli bercampur coolant",
"Oli transmisi bocor"

],

"Bahan Bakar":[

"Tarikan berat",
"Konsumsi BBM boros",
"Mesin brebet",
"Mesin tersendat",
"Mesin mati mendadak",
"Bau bensin menyengat",
"Injektor kotor",
"Pompa bensin lemah"

],

Suspensi:[

"Mobil limbung",
"Shockbreaker bocor",
"Bunyi jedug",
"Bunyi gluduk",
"Ban aus tidak rata",
"Mobil miring",
"Getaran berlebih",
"Suspensi keras"

],

Kemudi:[

"Setir berat",
"Setir bergetar",
"Setir lari",
"Setir tidak kembali",
"Bunyi saat belok",
"Power steering bocor",
"Rack steer bermasalah"

],

Rem:[

"Rem blong",
"Rem bunyi",
"Pedal rem dalam",
"Mobil menarik saat mengerem",
"ABS menyala",
"Kampas rem habis",
"Minyak rem bocor",
"Rem bergetar"

],

Pendingin:[

"Mesin overheat",
"Coolant berkurang",
"Radiator bocor",
"Kipas radiator mati",
"Thermostat rusak",
"Water pump bocor",
"Selang radiator bocor"

],

Transmisi:[

"Gigi susah masuk",
"Kopling selip",
"Transmisi bunyi",
"Perpindahan gigi kasar",
"Oli transmisi bocor",
"CV Joint bunyi",
"Drive Shaft rusak"

],

"Kelistrikan Mesin":[

"Aki tekor",
"Starter tidak hidup",
"Alternator rusak",
"Lampu redup",
"Mesin tidak bisa distarter",
"Ignition Coil rusak",
"Charging bermasalah"

]

};

/* =======================================================
POPUP 2
DAFTAR GEJALA
======================================================= */

function showSymptomPopup(category){

currentCategory = category;

const symptoms = symptomDatabase[category] || [];

let html = "";

symptoms.forEach(item=>{

html += `
<button class="symptom-item"
onclick="showRecommendationPopup('${item}')">

${item}

</button>
`;

});

openPopup(`

<div class="popup-box">

<div class="popup-header">

<h2>${category}</h2>

<button class="popup-close">&times;</button>

</div>

<p>Apa gejala mobil Anda?</p>

<div class="symptom-list">

${html}

</div>

<div style="margin-top:25px">

<button class="btn-whatsapp"

onclick="showServiceDetail('VG CHECK')">

⭐ VG CHECK (Rekomendasi)

</button>

</div>

</div>

`);

}

/* =======================================================
DATABASE REKOMENDASI LAYANAN
======================================================= */

const recommendationDatabase = {

"Mobil susah hidup":[
"VG CHECK",
"TUNE BASIC",
"TUNE PLUS",
"TUNE PRO"
],

"Mesin pincang":[
"VG CHECK",
"TUNE BASIC",
"TUNE PLUS",
"TUNE PRO"
],

"Tenaga berkurang":[
"VG CHECK",
"TUNE BASIC",
"TUNE PLUS",
"TUNE PRO"
],

"Mesin cepat panas":[
"VG CHECK",
"Kuras Radiator",
"Ganti Thermostat",
"Ganti Water Pump"
],

"Lampu Check Engine menyala":[
"VG CHECK",
"TUNE BASIC",
"TUNE PLUS",
"TUNE PRO"
],

"Mesin bergetar":[
"VG CHECK",
"TUNE BASIC",
"TUNE PLUS",
"TUNE PRO"
],

"Oli mesin bocor":[
"VG CHECK"
],

"Asap putih":[
"VG CHECK",
"TUNE PRO"
],

"Asap hitam":[
"VG CHECK",
"TUNE PRO"
],

"Suara mesin kasar":[
"VG CHECK"
],

"Tarikan berat":[
"VG CHECK",
"TUNE BASIC",
"TUNE PLUS",
"TUNE PRO"
],

"Konsumsi BBM boros":[
"VG CHECK",
"TUNE PLUS",
"TUNE PRO"
],

"Mesin brebet":[
"VG CHECK",
"TUNE PLUS",
"TUNE PRO"
],

"Mesin tersendat":[
"VG CHECK",
"TUNE PLUS",
"TUNE PRO"
],

"Shockbreaker bocor":[
"VG CHECK"
],

"Bunyi jedug":[
"VG CHECK"
],

"Bunyi gluduk":[
"VG CHECK"
],

"Ban aus tidak rata":[
"VG CHECK"
],

"Setir berat":[
"VG CHECK"
],

"Setir bergetar":[
"VG CHECK"
],

"Setir lari":[
"VG CHECK"
],

"Rem blong":[
"VG CHECK",
"Servis Rem"
],

"Rem bunyi":[
"VG CHECK",
"Servis Rem",
"Ganti Kampas Rem Depan",
"Ganti Kampas Rem Belakang"
],

"Pedal rem dalam":[
"VG CHECK",
"Servis Master Rem"
],

"ABS menyala":[
"VG CHECK",
"Ganti Sensor ABS"
],

"Kampas rem habis":[
"Ganti Kampas Rem Depan",
"Ganti Kampas Rem Belakang",
"Ganti Kampas Rem Tromol"
],

"Mesin overheat":[
"VG CHECK",
"Kuras Radiator",
"Ganti Thermostat",
"Ganti Water Pump"
],

"Radiator bocor":[
"Ganti Radiator"
],

"Kipas radiator mati":[
"Ganti Motor Fan Radiator"
],

"Coolant berkurang":[
"Kuras Radiator"
],

"Gigi susah masuk":[
"VG CHECK",
"Ganti Kopling",
"Servis Transmisi Manual"
],

"Kopling selip":[
"Ganti Kopling"
],

"CV Joint bunyi":[
"Ganti Drive Shaft",
"Ganti Boot Drive Shaft"
],

"Aki tekor":[
"Ganti Aki"
],

"Starter tidak hidup":[
"Pemeriksaan Sistem Starter",
"Ganti Dinamo Starter",
"Servis Dinamo Starter"
],

"Alternator rusak":[
"Pemeriksaan Sistem Charging",
"Ganti Alternator",
"Servis Alternator"
]

};

/* =======================================================
POPUP 3
LAYANAN YANG DIREKOMENDASIKAN
======================================================= */

function showRecommendationPopup(symptom){

currentSymptom = symptom;

const services = recommendationDatabase[symptom] || ["VG CHECK"];

let html = "";

services.forEach(service=>{

html += `

<div class="recommend-card">

<h3>${service}</h3>

<button class="btn-detail"

onclick="showServiceDetail('${service}')">

Lihat Detail

</button>

</div>

`;

});

openPopup(`

<div class="popup-box">

<div class="popup-header">

<h2>Rekomendasi Layanan</h2>

<button class="popup-close">&times;</button>

</div>

<p><strong>Gejala:</strong> ${symptom}</p>

${html}

</div>

`);

}

/* =======================================================
DATABASE DETAIL LAYANAN
======================================================= */

const serviceDatabase = {

"VG CHECK":{

label:"⭐ MULAI DARI SINI",

title:"VG CHECK",

subtitle:"Pemeriksaan Menyeluruh Kondisi Kendaraan",

price:"Rp100.000 – Rp150.000",

time:"30–90 Menit",

description:"Layanan inspeksi menyeluruh untuk mengetahui kondisi kendaraan secara detail sebelum dilakukan perbaikan.",

includes:[

"Pemeriksaan Mesin",

"Pemeriksaan Sistem Kelistrikan",

"Pemeriksaan Sistem Pendingin",

"Pemeriksaan Sistem Pengereman",

"Pemeriksaan Sistem Suspensi",

"Pemeriksaan Sistem Kemudi",

"Pemeriksaan Sistem Roda",

"Pemeriksaan Sistem Transmisi",

"Pemeriksaan Sistem Pembuangan",

"Pemeriksaan Bawah Kendaraan",

"Scanning ECU (kendaraan yang mendukung)",

"Road Test"

],

exclude:[

"Biaya perbaikan",

"Spare part",

"Oli",

"Coolant",

"Consumable"

],

benefit:[

"Mengetahui kondisi kendaraan secara menyeluruh",

"Mendeteksi kerusakan lebih awal",

"Mengurangi risiko salah diagnosis",

"Estimasi biaya lebih akurat",

"Lebih aman sebelum perjalanan jauh"

]

},

"TUNE BASIC":{

label:"💚 REKOMENDASI",

title:"TUNE BASIC",

subtitle:"Servis Berkala Dasar Mesin",

price:"Rp150.000 – Rp200.000",

time:"45–60 Menit",

description:"Paket servis berkala kendaraan bensin yang mencakup pemeriksaan mesin, scanning ECU, dan pengecekan komponen penting.",

includes:[

"Scanning ECU",

"Pembacaan DTC",

"Final Scan ECU",

"Pemeriksaan busi",

"Pemeriksaan koil",

"Pembersihan Throttle Body",

"Pemeriksaan filter udara",

"Pemeriksaan oli mesin",

"Pemeriksaan coolant",

"Pemeriksaan aki",

"Pemeriksaan alternator",

"Pemeriksaan starter",

"Pemeriksaan kebocoran mesin"

],

exclude:[

"Penggantian oli",

"Penggantian sparepart",

"Penggantian busi",

"Penggantian filter",

"Perbaikan kerusakan"

],

benefit:[

"Menjaga performa mesin",

"Deteksi gangguan lebih awal",

"Menjaga efisiensi bahan bakar",

"Mengetahui kondisi kendaraan"

]

},

"TUNE PLUS":{

label:"🔥 BEST SELLER",

title:"TUNE PLUS",

subtitle:"Servis Berkala + Sistem Udara & Fuel System",

price:"Rp250.000 – Rp350.000",

time:"60–90 Menit",

description:"Semua layanan TUNE BASIC ditambah pembersihan sistem udara dan sistem bahan bakar.",

includes:[

"Semua layanan TUNE BASIC",

"Pembersihan Throttle Body",

"Bongkar Injektor",

"Pembersihan Injektor",

"Pemeriksaan O-ring",

"Reset ECU",

"Idle Learning",

"Throttle Learning",

"Pemeriksaan PCV",

"Pemeriksaan Vacuum Leak",

"Final Scan ECU"

],

exclude:[

"Penggantian sparepart",

"Penggantian oli",

"Consumable",

"Perbaikan kerusakan"

],

benefit:[

"Tarikan lebih ringan",

"Idle stabil",

"Pembakaran lebih optimal",

"Efisiensi bahan bakar meningkat"

]

},

"TUNE PRO":{

label:"🔴 PREMIUM",

title:"TUNE PRO",

subtitle:"Servis Berkala + Analisis Scanning ECU",

price:"Rp400.000 – Rp600.000",

time:"90–150 Menit",

description:"Paket servis paling lengkap dengan analisis data ECU secara real-time.",

includes:[

"Semua layanan TUNE PLUS",

"Fuel Trim",

"Live Data",

"RPM",

"ECT",

"IAT",

"MAF / MAP",

"Oxygen Sensor",

"TPS",

"APP",

"Battery Voltage",

"Misfire Counter",

"Ignition Timing",

"Injector Balance",

"Fuel Pressure",

"Test Drive",

"Laporan Hasil Pemeriksaan"

],

exclude:[

"Overhaul",

"Perbaikan besar",

"Penggantian sparepart"

],

benefit:[

"Diagnosis lebih akurat",

"Analisis sensor lengkap",

"Mengurangi salah diagnosis",

"Rekomendasi perbaikan lebih tepat"

]

}

};

/* =======================================================
POPUP 4
DETAIL LAYANAN
======================================================= */

function showServiceDetail(serviceName){

currentService = serviceName;

const service = serviceDatabase[serviceName];

if(!service){

openPopup(`

<div class="popup-box">

<div class="popup-header">

<h2>Layanan</h2>

<button class="popup-close">&times;</button>

</div>

<p>Detail layanan belum tersedia.</p>

</div>

`);

return;

}

let includeHTML = "";

service.includes.forEach(item=>{

includeHTML += `<li>✔ ${item}</li>`;

});

let excludeHTML = "";

service.exclude.forEach(item=>{

excludeHTML += `<li>• ${item}</li>`;

});

let benefitHTML = "";

service.benefit.forEach(item=>{

benefitHTML += `<li>✅ ${item}</li>`;

});

openPopup(`

<div class="popup-box detail-popup">

<div class="popup-header">

<h2>${service.title}</h2>

<button class="popup-close">&times;</button>

</div>

<div class="detail-image">

<img src="assets/services/${serviceName.toLowerCase().replace(/\s+/g,"-")}.jpg"
alt="${service.title}">

</div>

<div class="service-label">

${service.label}

</div>

<h3>${service.subtitle}</h3>

<p>

${service.description}

</p>

<div class="detail-price">

<div>

<strong>💰 Estimasi Biaya</strong>

<p>${service.price}</p>

</div>

<div>

<strong>⏱ Estimasi Waktu</strong>

<p>${service.time}</p>

</div>

</div>

<h4>Yang Dikerjakan</h4>

<ul>

${includeHTML}

</ul>

<h4>Tidak Termasuk</h4>

<ul>

${excludeHTML}

</ul>

<h4>Manfaat</h4>

<ul>

${benefitHTML}

</ul>

<div style="margin-top:30px">

<button class="btn-whatsapp"

onclick="showBookingPopup()">

Booking via WhatsApp

</button>

</div>

</div>

`);

}

/* =======================================================
POPUP 5
BOOKING WHATSAPP
======================================================= */

const whatsappNumber = "628XXXXXXXXXX"; // Ganti dengan nomor WhatsApp Anda

function showBookingPopup(){

openPopup(`

<div class="popup-box booking-popup">

<div class="popup-header">

<h2>Booking via WhatsApp</h2>

<button class="popup-close">&times;</button>

</div>

<p>

Anda akan diarahkan ke WhatsApp untuk mengirim data kendaraan.

</p>

<div class="booking-form">

<label>Nama</label>

<input type="text" id="bookingName" placeholder="Nama Anda">

<label>Lokasi</label>

<input type="text" id="bookingLocation" placeholder="Alamat / Lokasi">

<label>Jenis Mobil</label>

<input type="text" id="bookingCar" placeholder="Contoh: Avanza 2020">

<label>Menu Dipilih</label>

<input type="text"

id="bookingService"

value="${currentService}"

readonly>

<label>Keluhan</label>

<textarea

id="bookingComplaint"

rows="5"

placeholder="Tuliskan keluhan kendaraan">

${currentSymptom}

</textarea>

</div>

<div class="popup-button">

<button

class="btn-whatsapp"

onclick="sendWhatsapp()">

Lanjut ke WhatsApp

</button>

</div>

</div>

`);

}

/* =======================================================
KIRIM KE WHATSAPP
======================================================= */

function sendWhatsapp(){

const nama=document.getElementById("bookingName").value;

const lokasi=document.getElementById("bookingLocation").value;

const mobil=document.getElementById("bookingCar").value;

const layanan=document.getElementById("bookingService").value;

const keluhan=document.getElementById("bookingComplaint").value;

const pesan=

`Halo kak 👋

Aku nak booking servis mobil.

Nama : ${nama}

Lokasi : ${lokasi}

Jenis Mobil : ${mobil}

Menu Dipilih : ${layanan}

Keluhan :

${keluhan}

Kalau ado jadwal kosong, mohon dibantu yo.
Terimo kasih 😊`;

window.open(

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pesan)}`,

"_blank"

);

}

/* =======================================================
DATABASE LAYANAN REM
======================================================= */

Object.assign(serviceDatabase,{

"Servis Rem":{

label:"🛑 REM",

title:"Servis Rem",

subtitle:"Setel & Bersihkan 2 Roda",

price:"Rp140K – Rp175K",

time:"45–90 Menit",

description:"Servis rem untuk menjaga performa pengereman tetap optimal.",

includes:[

"Bongkar Rem",

"Pembersihan Kampas Rem",

"Pembersihan Kaliper / Tromol",

"Pelumasan Komponen Rem",

"Setel Rem",

"Pemeriksaan Minyak Rem"

],

exclude:[

"Spare Part",

"Minyak Rem",

"Biaya Transportasi"

],

benefit:[

"Pengereman lebih pakem",

"Rem lebih halus",

"Mengurangi bunyi rem",

"Menjaga umur komponen"

]

},

"Ganti Kampas Rem Depan":{

label:"🛑 REM",

title:"Ganti Kampas Rem Depan",

subtitle:"Penggantian Kampas Rem Depan",

price:"Rp140K – Rp175K",

time:"30–60 Menit",

description:"Penggantian kampas rem depan disertai pemeriksaan sistem rem.",

includes:[

"Penggantian Kampas Rem Depan",

"Pembersihan Kaliper",

"Pelumasan Pin Kaliper",

"Pemeriksaan Cakram",

"Uji Fungsi Rem"

],

exclude:[

"Harga Kampas Rem",

"Biaya Transportasi"

],

benefit:[

"Pengereman lebih aman",

"Mengurangi bunyi",

"Respons rem lebih baik"

]

},

"Ganti Kampas Rem Belakang":{

label:"🛑 REM",

title:"Ganti Kampas Rem Belakang",

subtitle:"Penggantian Kampas Rem Belakang",

price:"Rp140K – Rp175K",

time:"30–60 Menit",

description:"Penggantian kampas rem belakang.",

includes:[

"Penggantian Kampas",

"Pembersihan Kaliper/Tromol",

"Pelumasan",

"Pemeriksaan Cakram",

"Uji Rem"

],

exclude:[

"Spare Part"

],

benefit:[

"Pengereman lebih stabil",

"Mengurangi keausan"

]

},

"Ganti Kampas Rem Tromol":{

label:"🛑 REM",

title:"Ganti Kampas Rem Tromol",

subtitle:"Brake Shoe",

price:"Rp140K – Rp210K",

time:"45–90 Menit",

description:"Penggantian brake shoe rem tromol.",

includes:[

"Penggantian Brake Shoe",

"Pembersihan Tromol",

"Pelumasan Titik Gesek",

"Setel Rem",

"Uji Rem"

],

exclude:[

"Spare Part"

],

benefit:[

"Pengereman lebih optimal"

]

},

"Ganti Cakram Rem":{

label:"🛑 REM",

title:"Ganti Cakram Rem",

subtitle:"Penggantian Disc Brake",

price:"Rp140K – Rp175K",

time:"45–90 Menit",

description:"Penggantian cakram rem.",

includes:[

"Penggantian Cakram",

"Pembersihan Hub",

"Pemeriksaan Kaliper",

"Uji Rem"

],

exclude:[

"Spare Part"

],

benefit:[

"Pengereman lebih stabil"

]

}

});

Object.assign(serviceDatabase,{

"Servis Kaliper Rem":{

label:"🛑 REM",

title:"Servis Kaliper Rem",

subtitle:"Pembongkaran & Pembersihan Kaliper",

price:"Rp140K – Rp200K",

time:"60–120 Menit",

description:"Servis kaliper rem untuk menjaga kinerja pengereman tetap optimal.",

includes:[
"Pembongkaran Kaliper",
"Pembersihan Piston Kaliper",
"Pemeriksaan Seal Kaliper",
"Pelumasan Pin Kaliper",
"Perakitan Kembali",
"Uji Fungsi Rem"
],

exclude:[
"Seal Kit",
"Spare Part",
"Biaya Transportasi"
],

benefit:[
"Kaliper bekerja lebih lancar",
"Mengurangi rem seret",
"Menjaga performa pengereman"
]

},

"Servis Master Rem":{

label:"🛑 REM",

title:"Servis Master Rem",

subtitle:"Perbaikan Sistem Master Rem",

price:"Rp190K – Rp230K",

time:"90–180 Menit",

description:"Servis master rem untuk mengembalikan tekanan hidrolik pengereman.",

includes:[
"Pembongkaran Master Rem",
"Pembersihan Komponen",
"Penggantian Seal Kit (bila diperlukan)",
"Bleeding Sistem Rem",
"Uji Fungsi Rem"
],

exclude:[
"Master Rem Baru",
"Minyak Rem",
"Biaya Transportasi"
],

benefit:[
"Tekanan rem kembali normal",
"Pedal rem lebih responsif"
]

},

"Ganti Master Rem":{

label:"🛑 REM",

title:"Ganti Master Rem",

subtitle:"Penggantian Master Rem",

price:"Rp140K – Rp200K",

time:"60–120 Menit",

description:"Penggantian master rem kendaraan.",

includes:[
"Penggantian Master Rem",
"Bleeding Sistem Rem",
"Pemeriksaan Kebocoran",
"Uji Fungsi Rem"
],

exclude:[
"Master Rem",
"Minyak Rem"
],

benefit:[
"Sistem rem kembali optimal"
]

},

"Ganti Booster Rem":{

label:"🛑 REM",

title:"Ganti Booster Rem",

subtitle:"Penggantian Brake Booster",

price:"Rp250K – Rp320K",

time:"90–180 Menit",

description:"Penggantian brake booster kendaraan.",

includes:[
"Penggantian Booster Rem",
"Pemeriksaan Selang Vakum",
"Pemeriksaan Master Rem",
"Bleeding Sistem Rem",
"Uji Fungsi Rem"
],

exclude:[
"Brake Booster",
"Minyak Rem"
],

benefit:[
"Pedal rem lebih ringan",
"Pengereman lebih maksimal"
]

},

"Ganti Selang Minyak Rem":{

label:"🛑 REM",

title:"Ganti Selang Minyak Rem",

subtitle:"Penggantian Brake Hose",

price:"Rp110K – Rp120K",

time:"30–60 Menit",

description:"Penggantian selang minyak rem.",

includes:[
"Penggantian Selang",
"Bleeding Sistem Rem",
"Pemeriksaan Kebocoran",
"Uji Fungsi Rem"
],

exclude:[
"Selang Rem",
"Minyak Rem"
],

benefit:[
"Mencegah kebocoran minyak rem"
]

},

"Ganti Sensor ABS":{

label:"🛑 REM",

title:"Ganti Sensor ABS",

subtitle:"Penggantian Sensor ABS",

price:"Rp110K – Rp120K",

time:"30–60 Menit",

description:"Penggantian sensor ABS kendaraan.",

includes:[
"Penggantian Sensor ABS",
"Scan Sistem ABS",
"Hapus Kode Error (jika memungkinkan)",
"Uji Sistem ABS"
],

exclude:[
"Sensor ABS"
],

benefit:[
"Sistem ABS kembali normal",
"Indikator ABS padam"
]

}

});

/* =======================================================
DATABASE LAYANAN PENDINGIN
======================================================= */

Object.assign(serviceDatabase,{

"Kuras Radiator":{

label:"🌡 PENDINGIN",

title:"Kuras Radiator",

subtitle:"Flushing & Penggantian Coolant",

price:"Rp80K – Rp120K",

time:"30–60 Menit",

description:"Menguras coolant lama, membersihkan sistem pendingin, dan mengisi coolant baru agar suhu kerja mesin tetap optimal.",

includes:[
"Pengurasan Coolant Lama",
"Flushing Sistem Pendingin",
"Pengisian Coolant Baru",
"Pemeriksaan Kebocoran Sistem Pendingin",
"Pemeriksaan Tutup Radiator"
],

exclude:[
"Harga Coolant",
"Spare Part",
"Biaya Transportasi"
],

benefit:[
"Menjaga suhu kerja mesin",
"Mencegah overheat",
"Memperpanjang umur radiator"
]

},

"Ganti Radiator":{

label:"🌡 PENDINGIN",

title:"Ganti Radiator",

subtitle:"Penggantian Radiator",

price:"Rp140K – Rp200K",

time:"60–120 Menit",

description:"Penggantian radiator kendaraan beserta pemeriksaan sistem pendingin.",

includes:[
"Penggantian Radiator",
"Pemeriksaan Selang Radiator",
"Pemeriksaan Tutup Radiator",
"Pengisian Coolant (bila diperlukan)",
"Uji Kebocoran Sistem Pendingin"
],

exclude:[
"Radiator",
"Coolant",
"Biaya Transportasi"
],

benefit:[
"Sistem pendingin kembali optimal",
"Mengurangi risiko overheat"
]

},

"Ganti Water Pump":{

label:"🌡 PENDINGIN",

title:"Ganti Water Pump",

subtitle:"Penggantian Water Pump",

price:"Rp220K – Rp460K",

time:"90–180 Menit",

description:"Penggantian water pump untuk menjaga sirkulasi coolant tetap normal.",

includes:[
"Penggantian Water Pump",
"Pemeriksaan Gasket Water Pump",
"Pemeriksaan Drive Belt / Timing Belt",
"Pengisian Coolant (bila diperlukan)",
"Uji Sistem Pendingin"
],

exclude:[
"Water Pump",
"Coolant",
"Gasket"
],

benefit:[
"Sirkulasi coolant kembali normal",
"Mencegah overheat"
]

},

"Ganti Thermostat":{

label:"🌡 PENDINGIN",

title:"Ganti Thermostat",

subtitle:"Penggantian Thermostat",

price:"Rp165K – Rp230K",

time:"45–90 Menit",

description:"Penggantian thermostat agar suhu mesin kembali stabil.",

includes:[
"Penggantian Thermostat",
"Pemeriksaan Housing Thermostat",
"Penggantian Coolant (bila diperlukan)",
"Uji Suhu Kerja Mesin",
"Pemeriksaan Kebocoran"
],

exclude:[
"Thermostat",
"Coolant"
],

benefit:[
"Suhu mesin stabil",
"Mesin lebih efisien"
]

},

"Ganti Selang Radiator":{

label:"🌡 PENDINGIN",

title:"Ganti Selang Radiator",

subtitle:"Penggantian Selang Radiator",

price:"Rp85K – Rp145K",

time:"30–60 Menit",

description:"Penggantian selang radiator yang bocor atau rusak.",

includes:[
"Penggantian Selang Radiator",
"Pemeriksaan Klem Selang",
"Pengisian Coolant (bila diperlukan)",
"Pemeriksaan Kebocoran",
"Uji Sistem Pendingin"
],

exclude:[
"Selang Radiator",
"Coolant"
],

benefit:[
"Mencegah kebocoran coolant",
"Menjaga tekanan sistem pendingin"
]

},

"Ganti Tutup Radiator":{

label:"🌡 PENDINGIN",

title:"Ganti Tutup Radiator",

subtitle:"Penggantian Radiator Cap",

price:"Rp50K – Rp100K",

time:"15–30 Menit",

description:"Penggantian tutup radiator.",

includes:[
"Penggantian Tutup Radiator",
"Pemeriksaan Tekanan Sistem Pendingin",
"Pemeriksaan Kebocoran"
],

exclude:[
"Tutup Radiator"
],

benefit:[
"Tekanan radiator kembali normal"
]

}

});

/* =======================================================
DATABASE LAYANAN PENDINGIN (LANJUTAN)
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Motor Fan Radiator":{

label:"🌡 PENDINGIN",

title:"Ganti Motor Fan Radiator",

subtitle:"Penggantian Motor Fan Radiator",

price:"Rp165K – Rp230K",

time:"60–120 Menit",

description:"Penggantian motor kipas radiator agar sistem pendingin bekerja optimal.",

includes:[
"Penggantian Motor Fan Radiator",
"Pemeriksaan Fan Blade",
"Pemeriksaan Relay Fan",
"Pemeriksaan Sekring Fan",
"Uji Kinerja Kipas Radiator"
],

exclude:[
"Motor Fan",
"Relay",
"Sekring",
"Biaya Transportasi"
],

benefit:[
"Kipas radiator bekerja normal",
"Mencegah overheat",
"Menjaga suhu kerja mesin"
]

},

"Ganti Motor Fan Kondensor AC":{

label:"🌡 PENDINGIN",

title:"Ganti Motor Fan Kondensor AC",

subtitle:"Penggantian Motor Fan Kondensor",

price:"Rp165K – Rp230K",

time:"60–120 Menit",

description:"Penggantian motor kipas kondensor AC.",

includes:[
"Penggantian Motor Fan Kondensor",
"Pemeriksaan Relay Fan",
"Pemeriksaan Sekring Fan",
"Uji Kinerja Kipas Kondensor"
],

exclude:[
"Motor Fan",
"Relay",
"Sekring"
],

benefit:[
"Kinerja pendinginan AC lebih optimal",
"Sirkulasi udara kondensor lebih baik"
]

},

"Ganti Water Outlet/Inlet":{

label:"🌡 PENDINGIN",

title:"Ganti Water Outlet / Inlet",

subtitle:"Penggantian Water Outlet / Inlet",

price:"Rp165K – Rp230K",

time:"60–120 Menit",

description:"Penggantian water outlet atau water inlet beserta pemeriksaan sistem pendingin.",

includes:[
"Penggantian Water Outlet/Inlet",
"Pemeriksaan Gasket",
"Pemeriksaan Selang Radiator",
"Pemeriksaan Kebocoran",
"Uji Sistem Pendingin"
],

exclude:[
"Water Outlet",
"Gasket",
"Coolant"
],

benefit:[
"Mencegah kebocoran coolant",
"Sirkulasi pendingin kembali normal"
]

}

});

/* =======================================================
DATABASE LAYANAN TRANSMISI
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Kopling":{

label:"⚙ TRANSMISI",

title:"Ganti Kopling",

subtitle:"Penggantian Sistem Kopling",

price:"Rp300K – Rp900K",

time:"240–480 Menit",

description:"Penggantian sistem kopling untuk mengembalikan performa pemindahan gigi kendaraan.",

includes:[

"Penggantian Kampas Kopling",

"Pemeriksaan Pressure Plate",

"Pemeriksaan Release Bearing",

"Pemeriksaan Flywheel",

"Penyetelan Sistem Kopling",

"Uji Jalan Kendaraan"

],

exclude:[

"Kampas Kopling",

"Pressure Plate",

"Release Bearing",

"Flywheel",

"Biaya Transportasi"

],

benefit:[

"Perpindahan gigi lebih halus",

"Mengurangi selip kopling",

"Meningkatkan kenyamanan berkendara"

]

},

"Ganti Master Kopling Atas":{

label:"⚙ TRANSMISI",

title:"Ganti Master Kopling Atas",

subtitle:"Penggantian Master Kopling Atas",

price:"Rp175K – Rp250K",

time:"30–60 Menit",

description:"Penggantian master kopling atas untuk mengembalikan tekanan hidrolik sistem kopling.",

includes:[

"Penggantian Master Kopling Atas",

"Pemeriksaan Selang Kopling",

"Bleeding Sistem Kopling",

"Uji Fungsi Kopling"

],

exclude:[

"Master Kopling",

"Minyak Kopling"

],

benefit:[

"Pedal kopling lebih ringan",

"Sistem kopling kembali normal"

]

},

"Ganti Master Kopling Bawah":{

label:"⚙ TRANSMISI",

title:"Ganti Master Kopling Bawah",

subtitle:"Penggantian Master Kopling Bawah",

price:"Rp175K – Rp250K",

time:"30–60 Menit",

description:"Penggantian master kopling bawah.",

includes:[

"Penggantian Master Kopling Bawah",

"Pemeriksaan Selang Kopling",

"Bleeding Sistem Kopling",

"Uji Fungsi Kopling"

],

exclude:[

"Master Kopling",

"Minyak Kopling"

],

benefit:[

"Sistem kopling kembali normal",

"Perpindahan gigi lebih nyaman"

]

}

});

/* =======================================================
DATABASE LAYANAN TRANSMISI (LANJUTAN)
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Release Bearing":{

label:"⚙ TRANSMISI",

title:"Ganti Release Bearing",

subtitle:"Penggantian Release Bearing",

price:"Rp450K – Rp700K",

time:"240–480 Menit",

description:"Penggantian release bearing untuk menjaga sistem kopling bekerja dengan baik.",

includes:[

"Penggantian Release Bearing",

"Pemeriksaan Kampas Kopling",

"Pemeriksaan Pressure Plate",

"Pemeriksaan Flywheel",

"Uji Fungsi Kopling"

],

exclude:[

"Release Bearing",

"Kampas Kopling",

"Pressure Plate",

"Flywheel"

],

benefit:[

"Pedal kopling lebih halus",

"Mengurangi bunyi pada kopling",

"Menjaga performa sistem kopling"

]

},

"Ganti Pilot Bearing":{

label:"⚙ TRANSMISI",

title:"Ganti Pilot Bearing",

subtitle:"Penggantian Pilot Bearing",

price:"Rp450K – Rp700K",

time:"240–480 Menit",

description:"Penggantian pilot bearing untuk menjaga putaran poros input transmisi tetap stabil.",

includes:[

"Penggantian Pilot Bearing",

"Pemeriksaan Flywheel",

"Pemeriksaan Poros Input Transmisi",

"Uji Fungsi Kopling"

],

exclude:[

"Pilot Bearing",

"Flywheel"

],

benefit:[

"Perpindahan gigi lebih halus",

"Mengurangi getaran transmisi"

]

},

"Ganti Drive Shaft":{

label:"⚙ TRANSMISI",

title:"Ganti Drive Shaft",

subtitle:"Penggantian Drive Shaft",

price:"Rp220K – Rp385K",

time:"60–120 Menit",

description:"Penggantian drive shaft kendaraan.",

includes:[

"Penggantian Drive Shaft",

"Pemeriksaan CV Joint",

"Pemeriksaan Boot Drive Shaft",

"Pemeriksaan Oli Transmisi (jika diperlukan)",

"Uji Jalan Kendaraan"

],

exclude:[

"Drive Shaft",

"Oli Transmisi"

],

benefit:[

"Tenaga tersalurkan dengan baik",

"Mengurangi getaran saat berkendara"

]

},

"Ganti Boot Drive Shaft":{

label:"⚙ TRANSMISI",

title:"Ganti Boot Drive Shaft",

subtitle:"Penggantian Boot Drive Shaft",

price:"Rp165K – Rp250K",

time:"60–120 Menit",

description:"Penggantian boot drive shaft untuk melindungi CV Joint.",

includes:[

"Penggantian Boot Drive Shaft",

"Penggantian Grease CV Joint",

"Pemeriksaan CV Joint",

"Pembersihan Area CV Joint",

"Uji Jalan Kendaraan"

],

exclude:[

"Boot Drive Shaft",

"Grease"

],

benefit:[

"Melindungi CV Joint",

"Mencegah grease keluar"

]

},

"Ganti Bearing Roda":{

label:"⚙ TRANSMISI",

title:"Ganti Bearing Roda",

subtitle:"Penggantian Bearing Roda",

price:"Rp165K – Rp320K",

time:"60–120 Menit",

description:"Penggantian bearing roda kendaraan.",

includes:[

"Penggantian Bearing Roda",

"Pemeriksaan Hub Roda",

"Pemeriksaan As Roda",

"Pemeriksaan Kekencangan Baut Roda",

"Uji Jalan Kendaraan"

],

exclude:[

"Bearing Roda"

],

benefit:[

"Putaran roda lebih halus",

"Menghilangkan dengung bearing"

]

}

});

/* =======================================================
DATABASE LAYANAN TRANSMISI (SELESAI)
======================================================= */

Object.assign(serviceDatabase,{

"Servis Transmisi Manual":{

label:"⚙ TRANSMISI",

title:"Servis Transmisi Manual",

subtitle:"Overhaul & Perbaikan Transmisi Manual",

price:"Rp1.200K – Rp3.500K",

time:"1–3 Hari",

description:"Servis transmisi manual untuk mengatasi gangguan perpindahan gigi, bunyi transmisi, maupun kerusakan komponen internal.",

includes:[

"Pembongkaran Transmisi",

"Pemeriksaan Gear Transmisi",

"Pemeriksaan Bearing",

"Pemeriksaan Synchronizer",

"Penggantian Komponen Rusak (jika diperlukan)",

"Perakitan Kembali",

"Uji Jalan Kendaraan"

],

exclude:[

"Spare Part",

"Oli Transmisi",

"Biaya Transportasi"

],

benefit:[

"Perpindahan gigi lebih halus",

"Mengurangi bunyi transmisi",

"Mengembalikan performa transmisi"

]

},

"Servis Transmisi Otomatis":{

label:"⚙ TRANSMISI",

title:"Servis Transmisi Otomatis",

subtitle:"Overhaul & Perbaikan Transmisi Otomatis",

price:"Rp2.500K – Rp8.000K",

time:"2–5 Hari",

description:"Servis transmisi otomatis untuk mengatasi slip, hentakan, perpindahan gigi tidak normal, maupun kerusakan komponen internal.",

includes:[

"Pemeriksaan Awal Transmisi",

"Pembongkaran Transmisi Otomatis",

"Pemeriksaan Valve Body",

"Pemeriksaan Clutch Pack",

"Pemeriksaan Torque Converter (bila diperlukan)",

"Perakitan Kembali",

"Pengujian Transmisi"

],

exclude:[

"Spare Part",

"ATF",

"Biaya Transportasi"

],

benefit:[

"Perpindahan gigi lebih halus",

"Mengurangi hentakan",

"Mengembalikan performa transmisi otomatis"

]

}

});

/* =======================================================
DATABASE LAYANAN KELISTRIKAN MESIN
======================================================= */

Object.assign(serviceDatabase,{

"Pemeriksaan Sistem Starter":{

label:"🔋 KELISTRIKAN MESIN",

title:"Pemeriksaan Sistem Starter",

subtitle:"Diagnosis Sistem Starter",

price:"Rp200K – Rp320K",

time:"30–60 Menit",

description:"Pemeriksaan menyeluruh sistem starter untuk mengetahui penyebab kendaraan sulit atau tidak dapat dihidupkan.",

includes:[

"Pemeriksaan Kondisi Aki",

"Pemeriksaan Dinamo Starter",

"Pemeriksaan Relay Starter",

"Pemeriksaan Jalur Kelistrikan Starter",

"Pengukuran Tegangan Starter",

"Analisa Penyebab Gangguan"

],

exclude:[

"Penggantian Spare Part",

"Biaya Transportasi"

],

benefit:[

"Mengetahui penyebab kendaraan sulit distarter",

"Mencegah salah penggantian komponen",

"Diagnosis lebih akurat"

]

},

"Pemeriksaan Sistem Charging":{

label:"🔋 KELISTRIKAN MESIN",

title:"Pemeriksaan Sistem Charging",

subtitle:"Diagnosis Sistem Pengisian",

price:"Rp200K – Rp300K",

time:"30–60 Menit",

description:"Pemeriksaan sistem pengisian untuk memastikan aki mendapatkan tegangan pengisian yang normal.",

includes:[

"Pemeriksaan Alternator",

"Pemeriksaan Regulator",

"Pemeriksaan Tegangan Pengisian",

"Pemeriksaan Kondisi Aki",

"Analisa Sistem Charging"

],

exclude:[

"Penggantian Spare Part",

"Biaya Transportasi"

],

benefit:[

"Mengetahui kondisi sistem charging",

"Mencegah aki tekor",

"Mendeteksi kerusakan alternator lebih awal"

]

},

"Ganti Aki":{

label:"🔋 KELISTRIKAN MESIN",

title:"Ganti Aki",

subtitle:"Penggantian Aki",

price:"Rp80K – Rp100K",

time:"15–30 Menit",

description:"Penggantian aki kendaraan disertai pemeriksaan sistem pengisian.",

includes:[

"Penggantian Aki",

"Pemeriksaan Terminal Aki",

"Pembersihan Terminal Aki",

"Pemeriksaan Tegangan Pengisian",

"Reset Sistem Elektronik (jika diperlukan)"

],

exclude:[

"Harga Aki",

"Biaya Transportasi"

],

benefit:[

"Starter lebih ringan",

"Sistem kelistrikan lebih stabil",

"Mengurangi risiko mogok"

]

}

});

/* =======================================================
DATABASE LAYANAN KELISTRIKAN MESIN (LANJUTAN)
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Alternator":{

label:"🔋 KELISTRIKAN MESIN",

title:"Ganti Alternator",

subtitle:"Penggantian Alternator",

price:"Rp190K – Rp230K",

time:"60–120 Menit",

description:"Penggantian alternator kendaraan beserta pemeriksaan sistem pengisian.",

includes:[

"Penggantian Alternator",
"Pemeriksaan Belt Alternator",
"Pemeriksaan Jalur Kelistrikan",
"Pemeriksaan Tegangan Pengisian",
"Uji Sistem Charging"

],

exclude:[

"Alternator",
"Biaya Transportasi"

],

benefit:[

"Sistem pengisian kembali normal",
"Mencegah aki tekor",
"Kelistrikan kendaraan lebih stabil"

]

},

"Servis Alternator":{

label:"🔋 KELISTRIKAN MESIN",

title:"Servis Alternator",

subtitle:"Perbaikan Alternator",

price:"Rp385K – Rp520K",

time:"120–240 Menit",

description:"Servis alternator untuk mengatasi gangguan sistem pengisian.",

includes:[

"Pembongkaran Alternator",
"Pembersihan Komponen",
"Pemeriksaan Rotor & Stator",
"Pemeriksaan Bearing",
"Pemeriksaan Carbon Brush",
"Perakitan & Pengujian"

],

exclude:[

"Spare Part",
"Carbon Brush",
"Bearing",
"Biaya Transportasi"

],

benefit:[

"Mengembalikan performa alternator",
"Menjaga sistem charging tetap optimal"

]

},

"Ganti Dinamo Starter":{

label:"🔋 KELISTRIKAN MESIN",

title:"Ganti Dinamo Starter",

subtitle:"Penggantian Dinamo Starter",

price:"Rp190K – Rp290K",

time:"60–120 Menit",

description:"Penggantian dinamo starter kendaraan.",

includes:[

"Penggantian Dinamo Starter",
"Pemeriksaan Relay Starter",
"Pemeriksaan Jalur Kelistrikan",
"Uji Sistem Starter"

],

exclude:[

"Dinamo Starter",
"Biaya Transportasi"

],

benefit:[

"Starter kembali normal",
"Mesin lebih mudah dihidupkan"

]

}

});

/* =======================================================
DATABASE LAYANAN KELISTRIKAN MESIN (SELESAI)
======================================================= */

Object.assign(serviceDatabase,{

"Servis Dinamo Starter":{

label:"🔋 KELISTRIKAN MESIN",

title:"Servis Dinamo Starter",

subtitle:"Perbaikan Dinamo Starter",

price:"Rp275K – Rp390K",

time:"120–240 Menit",

description:"Servis dinamo starter untuk mengatasi gangguan saat mesin sulit atau tidak dapat distarter.",

includes:[

"Pembongkaran Dinamo Starter",
"Pembersihan Komponen",
"Pemeriksaan Carbon Brush",
"Pemeriksaan Bendix",
"Pemeriksaan Armature",
"Perakitan & Pengujian"

],

exclude:[

"Carbon Brush",
"Bendix",
"Armature",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Mengembalikan performa starter",
"Mengurangi risiko gagal starter",
"Memperpanjang usia dinamo starter"

]

},

"Ganti Ignition Coil":{

label:"🔋 KELISTRIKAN MESIN",

title:"Ganti Ignition Coil",

subtitle:"Penggantian Ignition Coil",

price:"Rp110K – Rp380K",

time:"30–60 Menit",

description:"Penggantian ignition coil untuk mengembalikan performa sistem pengapian mesin bensin.",

includes:[

"Penggantian Ignition Coil",
"Pemeriksaan Soket Coil",
"Pemeriksaan Sistem Pengapian",
"Uji Percikan Api",
"Uji Performa Mesin"

],

exclude:[

"Ignition Coil",
"Biaya Transportasi"

],

benefit:[

"Percikan api kembali optimal",
"Tarikan mesin lebih responsif",
"Mengurangi gejala brebet"

]

},

"Ganti Kabel Busi":{

label:"🔋 KELISTRIKAN MESIN",

title:"Ganti Kabel Busi",

subtitle:"Penggantian Kabel Busi",

price:"Rp110K – Rp130K",

time:"30–45 Menit",

description:"Penggantian kabel busi untuk menjaga sistem pengapian bekerja secara optimal.",

includes:[

"Penggantian Kabel Busi",
"Pemeriksaan Jalur Pengapian",
"Pemeriksaan Soket Kabel Busi",
"Uji Percikan Api",
"Uji Performa Mesin"

],

exclude:[

"Kabel Busi",
"Biaya Transportasi"

],

benefit:[

"Percikan api lebih stabil",
"Pembakaran lebih sempurna",
"Mesin lebih halus"

]

}

});

/* =======================================================
DATABASE VG OIL SERVICE (Bagian 1)
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Oli Mesin":{

label:"💧 PELUMASAN",

title:"Ganti Oli Mesin",

subtitle:"Penggantian Oli Mesin",

price:"Rp50K – Rp75K",

time:"15–30 Menit",

description:"Layanan penggantian oli mesin untuk menjaga pelumasan, pendinginan, dan perlindungan komponen mesin agar tetap bekerja optimal.",

includes:[

"Pengurasan Oli Mesin Lama",
"Pengisian Oli Mesin Baru",
"Pemeriksaan Kebocoran Oli",
"Pemeriksaan Level Oli",
"Reset Reminder Oli (jika didukung kendaraan)"

],

exclude:[

"Oli Mesin",
"Filter Oli",
"Biaya Transportasi"

],

benefit:[

"Menjaga pelumasan mesin",
"Mengurangi keausan komponen",
"Menjaga performa mesin tetap optimal"

]

},

"Ganti Oli Transmisi Manual":{

label:"💧 PELUMASAN",

title:"Ganti Oli Transmisi Manual",

subtitle:"Penggantian Oli Transmisi Manual",

price:"Rp50K – Rp75K",

time:"15–30 Menit",

description:"Penggantian oli transmisi manual untuk menjaga perpindahan gigi tetap halus dan melindungi komponen transmisi.",

includes:[

"Pengurasan Oli Lama",
"Pengisian Oli Baru",
"Pemeriksaan Kebocoran",
"Pemeriksaan Baut Drain & Fill"

],

exclude:[

"Oli Transmisi",
"Biaya Transportasi"

],

benefit:[

"Perpindahan gigi lebih halus",
"Melindungi gear transmisi",
"Memperpanjang usia transmisi"

]

},

"Ganti Oli Transmisi Otomatis":{

label:"💧 PELUMASAN",

title:"Ganti Oli Transmisi Otomatis",

subtitle:"Penggantian Oli Transmisi Otomatis",

price:"Rp50K – Rp75K",

time:"15–30 Menit",

description:"Penggantian oli transmisi otomatis sesuai prosedur kendaraan.",

includes:[

"Pengurasan Oli AT",
"Pengisian Oli AT Baru",
"Pemeriksaan Level Oli AT",
"Pemeriksaan Kebocoran"

],

exclude:[

"ATF",

"Biaya Transportasi"

],

benefit:[

"Perpindahan gigi lebih halus",

"Menjaga performa transmisi otomatis",

"Melindungi komponen transmisi"

]

}

});

/* =======================================================
DATABASE VG OIL SERVICE (SELESAI)
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Oli Gardan":{

label:"💧 PELUMASAN",

title:"Ganti Oli Gardan",

subtitle:"Penggantian Oli Gardan",

price:"Rp50K – Rp75K",

time:"15–30 Menit",

description:"Penggantian oli gardan untuk menjaga pelumasan gear gardan sehingga tenaga dapat disalurkan dengan baik dan komponen tetap awet.",

includes:[

"Pengurasan Oli Gardan Lama",

"Pengisian Oli Gardan Baru",

"Pemeriksaan Baut Drain & Fill",

"Pemeriksaan Kebocoran Gardan"

],

exclude:[

"Oli Gardan",

"Biaya Transportasi"

],

benefit:[

"Melindungi gear gardan",

"Mengurangi keausan komponen",

"Menjaga performa gardan"

]

},

"Ganti Filter Oli":{

label:"💧 PELUMASAN",

title:"Ganti Filter Oli",

subtitle:"Penggantian Filter Oli Mesin",

price:"Rp30K – Rp50K",

time:"15–30 Menit",

description:"Penggantian filter oli agar sirkulasi oli tetap bersih dan mampu menyaring kotoran sebelum bersirkulasi ke dalam mesin.",

includes:[

"Melepas Filter Oli Lama",

"Memasang Filter Oli Baru",

"Pemeriksaan Kebocoran",

"Pemeriksaan Level Oli"

],

exclude:[

"Filter Oli",

"Oli Mesin",

"Biaya Transportasi"

],

benefit:[

"Menjaga oli tetap bersih",

"Mengurangi endapan kotoran",

"Memperpanjang umur mesin"

]

},

"VG OIL SERVICE":{

label:"💧 PELUMASAN",

title:"VG OIL SERVICE",

subtitle:"Layanan Penggantian Oli Kendaraan",

price:"Rp50K – Rp75K",

time:"15–30 Menit",

description:"VG OIL SERVICE merupakan layanan penggantian oli kendaraan yang meliputi oli mesin, transmisi manual, transmisi otomatis maupun gardan sesuai kebutuhan kendaraan.",

includes:[

"Ganti Oli Mesin",

"Ganti Oli Transmisi Manual",

"Ganti Oli Transmisi Otomatis",

"Ganti Oli Gardan",

"Pemeriksaan Kebocoran",

"Pemeriksaan Level Oli"

],

exclude:[

"Oli",

"Filter Oli",

"Consumable",

"Biaya Transportasi"

],

benefit:[

"Menjaga performa kendaraan",

"Mengurangi keausan mesin",

"Menjaga sistem pelumasan tetap optimal",

"Memperpanjang usia komponen"

]

}

});

/* =======================================================
DATABASE VG BRAKE SERVICE
======================================================= */

Object.assign(serviceDatabase,{

"VG BRAKE SERVICE":{

label:"🛑 REM",

badge:"🔥 BEST SELLER",

title:"VG BRAKE SERVICE",

subtitle:"Perawatan Sistem Pengereman",

price:"Rp270K",

time:"60–120 Menit",

description:"VG BRAKE SERVICE merupakan paket perawatan sistem pengereman yang menggabungkan servis rem, pembersihan seluruh komponen rem, serta penggantian minyak rem untuk menjaga performa pengereman tetap optimal.",

includes:[

"Setel & Bersihkan Rem 4 Roda",

"Pembersihan Kampas Rem",

"Pembersihan Kaliper Rem",

"Pembersihan Tromol Rem (bila ada)",

"Pelumasan Pin Kaliper",

"Pelumasan Titik Gesek",

"Pemeriksaan Cakram Rem",

"Pemeriksaan Tromol Rem",

"Pemeriksaan Kampas Rem",

"Pemeriksaan Master Rem",

"Pemeriksaan Booster Rem",

"Pemeriksaan Selang Rem",

"Pemeriksaan Minyak Rem",

"Kuras Minyak Rem",

"Bleeding Sistem Rem",

"Uji Fungsi Rem"

],

exclude:[

"Spare Part",

"Minyak Rem",

"Seal Kit",

"Biaya Transportasi"

],

benefit:[

"Pengereman lebih pakem",

"Pedal rem lebih responsif",

"Mengurangi bunyi rem",

"Membantu memperpanjang usia komponen rem",

"Meningkatkan keselamatan berkendara"

]

}

});

/* =======================================================
DATABASE LAYANAN MESIN (Bagian 1)
======================================================= */

Object.assign(serviceDatabase,{

"Pemeriksaan Mesin":{

label:"⚙ MESIN",

title:"Pemeriksaan Mesin",

subtitle:"Diagnosis Kondisi Mesin",

price:"Rp100K – Rp150K",

time:"30–90 Menit",

description:"Pemeriksaan menyeluruh kondisi mesin untuk mengetahui sumber gangguan sebelum dilakukan perbaikan.",

includes:[

"Pemeriksaan Kondisi Mesin",
"Pemeriksaan Kebocoran Oli",
"Pemeriksaan Kebocoran Coolant",
"Pemeriksaan Kebocoran Bahan Bakar",
"Pemeriksaan Getaran Mesin",
"Pemeriksaan Suara Mesin",
"Scanning ECU (jika didukung)",
"Penjelasan Hasil Pemeriksaan"

],

exclude:[

"Perbaikan",
"Spare Part",
"Consumable",
"Biaya Transportasi"

],

benefit:[

"Mengetahui sumber masalah",
"Mencegah salah diagnosis",
"Estimasi biaya lebih akurat"

]

},

"Perbaikan Mesin Sulit Hidup":{

label:"⚙ MESIN",

title:"Perbaikan Mesin Sulit Hidup",

subtitle:"Diagnosis & Perbaikan",

price:"Rp150K – Rp500K",

time:"60–180 Menit",

description:"Diagnosis dan penanganan awal untuk kendaraan yang sulit distarter atau tidak dapat hidup.",

includes:[

"Pemeriksaan Sistem Starter",
"Pemeriksaan Sistem Pengapian",
"Pemeriksaan Sistem Bahan Bakar",
"Scanning ECU",
"Pemeriksaan Tegangan Aki",
"Verifikasi Setelah Perbaikan"

],

exclude:[

"Spare Part",
"Consumable",
"Biaya Transportasi"

],

benefit:[

"Mesin kembali mudah dihidupkan",
"Diagnosis lebih akurat",
"Mengurangi risiko mogok"

]

},

"Perbaikan Mesin Pincang":{

label:"⚙ MESIN",

title:"Perbaikan Mesin Pincang",

subtitle:"Diagnosis Mesin Pincang",

price:"Rp150K – Rp500K",

time:"60–180 Menit",

description:"Pemeriksaan dan penanganan mesin yang bekerja tidak normal karena salah satu silinder tidak bekerja dengan baik.",

includes:[

"Scanning ECU",

"Pemeriksaan Busi",

"Pemeriksaan Ignition Coil",

"Pemeriksaan Injektor",

"Pemeriksaan Kompresi",

"Analisa Penyebab Mesin Pincang"

],

exclude:[

"Spare Part",

"Consumable",

"Biaya Transportasi"

],

benefit:[

"Mesin kembali halus",

"Tenaga mesin kembali normal",

"Mengurangi konsumsi bahan bakar"

]

}

});

/* =======================================================
DATABASE LAYANAN MESIN (Bagian 2)
======================================================= */

Object.assign(serviceDatabase,{

"Perbaikan Mesin Brebet":{

label:"⚙ MESIN",

title:"Perbaikan Mesin Brebet",

subtitle:"Diagnosis & Perbaikan Mesin Brebet",

price:"Rp150K – Rp500K",

time:"60–180 Menit",

description:"Pemeriksaan dan penanganan mesin yang mengalami brebet, tersendat, atau kehilangan tenaga saat akselerasi.",

includes:[

"Scanning ECU",
"Pemeriksaan Sistem Pengapian",
"Pemeriksaan Injektor",
"Pemeriksaan Throttle Body",
"Pemeriksaan Sensor Mesin",
"Pemeriksaan Sistem Bahan Bakar",
"Final Scan ECU"

],

exclude:[

"Spare Part",
"Consumable",
"Biaya Transportasi"

],

benefit:[

"Tarikan mesin kembali normal",
"Respons akselerasi lebih baik",
"Mengurangi gejala brebet"

]

},

"Perbaikan Mesin Overheat":{

label:"⚙ MESIN",

title:"Perbaikan Mesin Overheat",

subtitle:"Diagnosis Mesin Cepat Panas",

price:"Rp150K – Rp600K",

time:"60–180 Menit",

description:"Pemeriksaan penyebab mesin cepat panas atau overheat sebelum dilakukan perbaikan.",

includes:[

"Pemeriksaan Radiator",
"Pemeriksaan Coolant",
"Pemeriksaan Water Pump",
"Pemeriksaan Thermostat",
"Pemeriksaan Motor Fan",
"Pemeriksaan Kebocoran Sistem Pendingin"

],

exclude:[

"Coolant",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Mencegah kerusakan mesin lebih parah",
"Mengetahui penyebab overheat",
"Menjaga suhu kerja mesin"

]

},

"Perbaikan Kebocoran Oli Mesin":{

label:"⚙ MESIN",

title:"Perbaikan Kebocoran Oli Mesin",

subtitle:"Diagnosis Kebocoran Oli",

price:"Rp150K – Rp500K",

time:"60–180 Menit",

description:"Pemeriksaan sumber kebocoran oli mesin serta rekomendasi tindakan perbaikan.",

includes:[

"Pemeriksaan Seal Mesin",
"Pemeriksaan Gasket",
"Pemeriksaan Filter Oli",
"Pemeriksaan Baut Drain",
"Pembersihan Area Kebocoran"

],

exclude:[

"Seal",
"Gasket",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Mencegah oli cepat berkurang",
"Menjaga ruang mesin tetap bersih",
"Mencegah kerusakan komponen"

]

}

});

/* =======================================================
DATABASE LAYANAN MESIN (Bagian 3 - SELESAI)
======================================================= */

Object.assign(serviceDatabase,{

"Perbaikan Mesin Bergetar":{

label:"⚙ MESIN",

title:"Perbaikan Mesin Bergetar",

subtitle:"Diagnosis Getaran Mesin",

price:"Rp150K – Rp500K",

time:"60–180 Menit",

description:"Pemeriksaan dan diagnosis penyebab getaran mesin saat idle maupun saat kendaraan berjalan.",

includes:[

"Pemeriksaan Engine Mounting",
"Pemeriksaan Idle Mesin",
"Pemeriksaan Sistem Pengapian",
"Pemeriksaan Injektor",
"Pemeriksaan Throttle Body",
"Scanning ECU (jika didukung)"

],

exclude:[

"Spare Part",
"Consumable",
"Biaya Transportasi"

],

benefit:[

"Mesin lebih halus",
"Meningkatkan kenyamanan berkendara",
"Mengurangi risiko kerusakan lanjutan"

]

},

"Perbaikan Lampu Check Engine":{

label:"⚙ MESIN",

title:"Perbaikan Lampu Check Engine",

subtitle:"Diagnosis Check Engine",

price:"Rp150K – Rp500K",

time:"60–180 Menit",

description:"Pemeriksaan penyebab lampu Check Engine menyala menggunakan Scanning ECU dan analisis data kendaraan.",

includes:[

"Scanning ECU",
"Pembacaan DTC",
"Analisis Live Data",
"Pemeriksaan Sensor Mesin",
"Final Scan ECU",
"Penjelasan Hasil Diagnosis"

],

exclude:[

"Spare Part",
"Perbaikan Komponen",
"Biaya Transportasi"

],

benefit:[

"Mengetahui penyebab Check Engine",
"Mengurangi risiko salah diagnosis",
"Rekomendasi perbaikan lebih akurat"

]

},

"Perbaikan Asap Putih":{

label:"⚙ MESIN",

title:"Perbaikan Asap Putih",

subtitle:"Diagnosis Asap Putih",

price:"Rp200K – Rp700K",

time:"90–240 Menit",

description:"Pemeriksaan kendaraan yang mengeluarkan asap putih dari knalpot untuk mengetahui sumber gangguan.",

includes:[

"Pemeriksaan Sistem Pendingin",
"Pemeriksaan Kompresi Mesin",
"Pemeriksaan Gasket Cylinder Head",
"Pemeriksaan Oli Mesin",
"Pemeriksaan Knalpot"

],

exclude:[

"Spare Part",
"Overhaul Mesin",
"Biaya Transportasi"

],

benefit:[

"Mengetahui penyebab asap putih",
"Mencegah kerusakan mesin lebih besar",
"Perbaikan lebih tepat sasaran"

]

},

"Perbaikan Asap Hitam":{

label:"⚙ MESIN",

title:"Perbaikan Asap Hitam",

subtitle:"Diagnosis Asap Hitam",

price:"Rp150K – Rp600K",

time:"60–180 Menit",

description:"Pemeriksaan kendaraan yang mengeluarkan asap hitam akibat gangguan sistem pembakaran atau bahan bakar.",

includes:[

"Scanning ECU",
"Pemeriksaan Injektor",
"Pemeriksaan Filter Udara",
"Pemeriksaan Sensor MAF/MAP",
"Pemeriksaan Throttle Body",
"Analisis Fuel Trim"

],

exclude:[

"Spare Part",
"Consumable",
"Biaya Transportasi"

],

benefit:[

"Pembakaran lebih sempurna",
"Mengurangi asap hitam",
"Meningkatkan efisiensi bahan bakar"

]

},

"Perbaikan Suara Mesin Kasar":{

label:"⚙ MESIN",

title:"Perbaikan Suara Mesin Kasar",

subtitle:"Diagnosis Bunyi Mesin",

price:"Rp150K – Rp600K",

time:"60–180 Menit",

description:"Pemeriksaan untuk mengetahui penyebab suara kasar atau bunyi tidak normal pada mesin.",

includes:[

"Pemeriksaan Oli Mesin",
"Pemeriksaan Valve Train",
"Pemeriksaan Drive Belt",
"Pemeriksaan Timing System",
"Pemeriksaan Pulley",
"Pemeriksaan Komponen Pendukung Mesin"

],

exclude:[

"Spare Part",
"Overhaul Mesin",
"Biaya Transportasi"

],

benefit:[

"Mengetahui sumber bunyi mesin",
"Mencegah kerusakan lebih parah",
"Meningkatkan kenyamanan berkendara"

]

}

});

/* =======================================================
DATABASE LAYANAN BAHAN BAKAR (Bagian 1)
======================================================= */

Object.assign(serviceDatabase,{

"Pemeriksaan Sistem Bahan Bakar":{

label:"⛽ BAHAN BAKAR",

title:"Pemeriksaan Sistem Bahan Bakar",

subtitle:"Diagnosis Sistem Bahan Bakar",

price:"Rp100K – Rp150K",

time:"30–90 Menit",

description:"Pemeriksaan menyeluruh sistem bahan bakar untuk mengetahui penyebab gangguan performa mesin sebelum dilakukan perbaikan.",

includes:[

"Pemeriksaan Jalur Bahan Bakar",
"Pemeriksaan Kebocoran",
"Pemeriksaan Filter Bahan Bakar",
"Pemeriksaan Fuel Pump",
"Pemeriksaan Injektor",
"Scanning ECU (jika didukung)"

],

exclude:[

"Spare Part",
"Consumable",
"Biaya Transportasi"

],

benefit:[

"Mengetahui kondisi sistem bahan bakar",
"Mencegah kerusakan lebih besar",
"Diagnosis lebih akurat"

]

},

"Servis Injektor":{

label:"⛽ BAHAN BAKAR",

title:"Servis Injektor",

subtitle:"Pembersihan & Pemeriksaan Injektor",

price:"Rp250K – Rp350K",

time:"60–90 Menit",

description:"Pembersihan injektor untuk membantu mengembalikan pola semprotan bahan bakar agar pembakaran lebih optimal.",

includes:[

"Pembongkaran Injektor",
"Pembersihan Injektor",
"Pemeriksaan Pola Semprotan",
"Pemeriksaan O-ring",
"Pemasangan Kembali",
"Final Scan ECU"

],

exclude:[

"O-ring",

"Spare Part",

"Consumable",

"Biaya Transportasi"

],

benefit:[

"Pembakaran lebih sempurna",

"Tarikan mesin lebih ringan",

"Membantu menghemat bahan bakar"

]

},

"Ganti Fuel Pump":{

label:"⛽ BAHAN BAKAR",

title:"Ganti Fuel Pump",

subtitle:"Penggantian Pompa Bahan Bakar",

price:"Rp180K – Rp350K",

time:"60–120 Menit",

description:"Penggantian fuel pump untuk mengembalikan suplai bahan bakar ke mesin sesuai spesifikasi kendaraan.",

includes:[

"Penggantian Fuel Pump",
"Pemeriksaan Tekanan Bahan Bakar",
"Pemeriksaan Jalur Bahan Bakar",
"Uji Fungsi Sistem"

],

exclude:[

"Fuel Pump",

"Biaya Transportasi"

],

benefit:[

"Suplai bahan bakar kembali normal",

"Mesin lebih mudah hidup",

"Performa mesin meningkat"

]

}

});

/* =======================================================
DATABASE LAYANAN BAHAN BAKAR (Bagian 2)
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Injektor":{

label:"⛽ BAHAN BAKAR",

title:"Ganti Injektor",

subtitle:"Penggantian Injektor Mesin",

price:"Rp180K – Rp350K",

time:"60–120 Menit",

description:"Penggantian injektor yang mengalami kerusakan, kebocoran, atau penyemprotan bahan bakar tidak normal agar performa mesin kembali optimal.",

includes:[

"Penggantian Injektor",
"Pemeriksaan O-ring Injektor",
"Pemeriksaan Soket Injektor",
"Final Scan ECU (jika didukung)",
"Uji Idle Mesin",
"Uji Respons Pedal Gas"

],

exclude:[

"Injektor",
"O-ring",
"Consumable",
"Biaya Transportasi"

],

benefit:[

"Semprotan bahan bakar kembali optimal",
"Tarikan mesin lebih responsif",
"Pembakaran lebih sempurna"

]

},

"Ganti Filter Bahan Bakar":{

label:"⛽ BAHAN BAKAR",

title:"Ganti Filter Bahan Bakar",

subtitle:"Penggantian Filter Bensin / Solar",

price:"Rp80K – Rp150K",

time:"30–60 Menit",

description:"Penggantian filter bahan bakar agar aliran bahan bakar menuju mesin tetap bersih dan lancar.",

includes:[

"Penggantian Filter",
"Pemeriksaan Jalur Bahan Bakar",
"Pemeriksaan Kebocoran",
"Uji Tekanan Sistem"

],

exclude:[

"Filter Bahan Bakar",
"Biaya Transportasi"

],

benefit:[

"Aliran bahan bakar lebih lancar",
"Mengurangi risiko injektor tersumbat",
"Menjaga performa mesin"

]

},

"Perbaikan Fuel Pump":{

label:"⛽ BAHAN BAKAR",

title:"Perbaikan Fuel Pump",

subtitle:"Diagnosis Fuel Pump",

price:"Rp200K – Rp450K",

time:"60–180 Menit",

description:"Pemeriksaan fuel pump yang mengalami tekanan lemah, tidak bekerja normal, atau menyebabkan mesin sulit hidup.",

includes:[

"Pemeriksaan Fuel Pump",
"Pemeriksaan Relay Fuel Pump",
"Pemeriksaan Jalur Kelistrikan",
"Pengukuran Tekanan Bahan Bakar",
"Scanning ECU (jika didukung)"

],

exclude:[

"Fuel Pump",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Mengetahui kondisi fuel pump",
"Diagnosis lebih akurat",
"Mencegah mogok mendadak"

]

}

});

/* =======================================================
DATABASE LAYANAN BAHAN BAKAR (Bagian 3 - SELESAI)
======================================================= */

Object.assign(serviceDatabase,{

"Perbaikan Kebocoran Sistem Bahan Bakar":{

label:"⛽ BAHAN BAKAR",

title:"Perbaikan Kebocoran Sistem Bahan Bakar",

subtitle:"Diagnosis Kebocoran Sistem Bahan Bakar",

price:"Rp150K – Rp350K",

time:"60–120 Menit",

description:"Pemeriksaan untuk menemukan sumber kebocoran pada sistem bahan bakar sebelum dilakukan perbaikan.",

includes:[

"Pemeriksaan Selang Bahan Bakar",
"Pemeriksaan Sambungan Pipa",
"Pemeriksaan Fuel Rail",
"Pemeriksaan Injektor",
"Pemeriksaan Tangki (Visual)",
"Pemeriksaan Tekanan Sistem"

],

exclude:[

"Spare Part",
"Consumable",
"Biaya Transportasi"

],

benefit:[

"Mencegah kebocoran bahan bakar",
"Meningkatkan keamanan kendaraan",
"Diagnosis lebih akurat"

]

},

"Perbaikan Mesin Boros Bahan Bakar":{

label:"⛽ BAHAN BAKAR",

title:"Perbaikan Mesin Boros Bahan Bakar",

subtitle:"Diagnosis Konsumsi BBM",

price:"Rp150K – Rp450K",

time:"60–180 Menit",

description:"Pemeriksaan penyebab konsumsi bahan bakar yang meningkat secara tidak normal.",

includes:[

"Scanning ECU",
"Analisis Fuel Trim",
"Pemeriksaan Sensor O₂",
"Pemeriksaan Sensor MAF/MAP",
"Pemeriksaan Injektor",
"Pemeriksaan Throttle Body"

],

exclude:[

"Spare Part",
"Consumable",
"Biaya Transportasi"

],

benefit:[

"Membantu menghemat bahan bakar",
"Pembakaran lebih optimal",
"Performa mesin meningkat"

]

},

"Perbaikan Mesin Sulit Hidup":{

label:"⛽ BAHAN BAKAR",

title:"Perbaikan Mesin Sulit Hidup",

subtitle:"Diagnosis Sistem Bahan Bakar",

price:"Rp150K – Rp450K",

time:"60–180 Menit",

description:"Diagnosis kendaraan yang sulit dihidupkan akibat gangguan sistem bahan bakar maupun sistem pendukungnya.",

includes:[

"Pemeriksaan Fuel Pump",
"Pemeriksaan Tekanan Bahan Bakar",
"Pemeriksaan Filter",
"Pemeriksaan Injektor",
"Scanning ECU",
"Pemeriksaan Sensor Mesin"

],

exclude:[

"Spare Part",
"Consumable",
"Biaya Transportasi"

],

benefit:[

"Mesin lebih mudah hidup",
"Mengetahui penyebab gangguan",
"Mengurangi risiko mogok"

]

}

});

/* =======================================================
DATABASE LAYANAN SUSPENSI (Bagian 1)
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Shockbreaker Depan":{

label:"🛞 SUSPENSI",

title:"Ganti Shockbreaker Depan",

subtitle:"Penggantian Shockbreaker Depan",

price:"Rp180K – Rp320K",

time:"60–120 Menit",

description:"Penggantian shockbreaker depan untuk mengembalikan kenyamanan, kestabilan, dan kemampuan meredam guncangan saat berkendara.",

includes:[

"Penggantian Shockbreaker Depan",
"Pemeriksaan Dudukan Shock",
"Pemeriksaan Per Keong",
"Pemeriksaan Baut Pengikat",
"Uji Fungsi Suspensi"

],

exclude:[

"Shockbreaker",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Kenyamanan berkendara meningkat",
"Mengurangi getaran",
"Stabilitas kendaraan lebih baik"

]

},

"Ganti Shockbreaker Belakang":{

label:"🛞 SUSPENSI",

title:"Ganti Shockbreaker Belakang",

subtitle:"Penggantian Shockbreaker Belakang",

price:"Rp180K – Rp320K",

time:"60–120 Menit",

description:"Penggantian shockbreaker belakang untuk menjaga kestabilan kendaraan dan meningkatkan kenyamanan berkendara.",

includes:[

"Penggantian Shockbreaker Belakang",
"Pemeriksaan Dudukan Shock",
"Pemeriksaan Per Belakang",
"Pemeriksaan Baut Pengikat",
"Uji Fungsi Suspensi"

],

exclude:[

"Shockbreaker",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Kendaraan lebih stabil",
"Mengurangi ayunan kendaraan",
"Kenyamanan meningkat"

]

},

"Ganti Lower Arm":{

label:"🛞 SUSPENSI",

title:"Ganti Lower Arm",

subtitle:"Penggantian Lower Arm",

price:"Rp220K – Rp420K",

time:"60–120 Menit",

description:"Penggantian lower arm yang aus atau bengkok untuk menjaga kestabilan dan geometri roda.",

includes:[

"Penggantian Lower Arm",
"Pemeriksaan Ball Joint",
"Pemeriksaan Bushing",
"Pemeriksaan Baut Pengikat",
"Uji Fungsi Suspensi"

],

exclude:[

"Lower Arm",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Setir lebih stabil",
"Mengurangi bunyi kaki-kaki",
"Handling kendaraan lebih baik"

]

}

});

/* =======================================================
DATABASE LAYANAN SUSPENSI (Bagian 2)
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Ball Joint":{

label:"🛞 SUSPENSI",

title:"Ganti Ball Joint",

subtitle:"Penggantian Ball Joint",

price:"Rp180K – Rp320K",

time:"60–120 Menit",

description:"Penggantian ball joint yang aus atau longgar untuk menjaga kestabilan kemudi dan menghilangkan bunyi pada kaki-kaki.",

includes:[

"Penggantian Ball Joint",
"Pemeriksaan Lower Arm",
"Pemeriksaan Boot Ball Joint",
"Pemeriksaan Baut Pengikat",
"Uji Fungsi Suspensi"

],

exclude:[

"Ball Joint",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Setir lebih stabil",
"Menghilangkan bunyi kaki-kaki",
"Meningkatkan keamanan berkendara"

]

},

"Ganti Tie Rod":{

label:"🛞 SUSPENSI",

title:"Ganti Tie Rod",

subtitle:"Penggantian Tie Rod",

price:"Rp180K – Rp300K",

time:"60–120 Menit",

description:"Penggantian tie rod yang aus untuk mengembalikan kestabilan kemudi dan mengurangi free play pada setir.",

includes:[

"Penggantian Tie Rod",
"Pemeriksaan Rack End",
"Pemeriksaan Boot Steering",
"Pemeriksaan Baut Pengikat",
"Uji Fungsi Kemudi"

],

exclude:[

"Tie Rod",
"Spare Part",
"Biaya Transportasi",
"Wheel Alignment"

],

benefit:[

"Kemudi lebih presisi",
"Mengurangi oblak setir",
"Handling kendaraan lebih baik"

]

},

"Ganti Long Tie Rod":{

label:"🛞 SUSPENSI",

title:"Ganti Long Tie Rod",

subtitle:"Penggantian Rack End / Long Tie Rod",

price:"Rp200K – Rp350K",

time:"60–120 Menit",

description:"Penggantian long tie rod (rack end) yang aus agar sistem kemudi kembali stabil.",

includes:[

"Penggantian Long Tie Rod",
"Pemeriksaan Tie Rod",
"Pemeriksaan Steering Rack",
"Pemeriksaan Boot Steering",
"Uji Fungsi Kemudi"

],

exclude:[

"Long Tie Rod",
"Spare Part",
"Biaya Transportasi",
"Wheel Alignment"

],

benefit:[

"Kemudi lebih stabil",
"Mengurangi bunyi kaki-kaki",
"Meningkatkan kenyamanan berkendara"

]

},

"Ganti Stabilizer Link":{

label:"🛞 SUSPENSI",

title:"Ganti Stabilizer Link",

subtitle:"Penggantian Stabilizer Link",

price:"Rp150K – Rp250K",

time:"45–90 Menit",

description:"Penggantian stabilizer link yang aus untuk mengurangi bunyi pada suspensi dan menjaga kestabilan kendaraan.",

includes:[

"Penggantian Stabilizer Link",
"Pemeriksaan Stabilizer Bar",
"Pemeriksaan Bushing Stabilizer",
"Pemeriksaan Baut Pengikat",
"Uji Fungsi Suspensi"

],

exclude:[

"Stabilizer Link",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Mengurangi bunyi gluduk",
"Suspensi lebih stabil",
"Kenyamanan berkendara meningkat"

]

},

"Ganti Bushing Arm":{

label:"🛞 SUSPENSI",

title:"Ganti Bushing Arm",

subtitle:"Penggantian Bushing Arm",

price:"Rp180K – Rp320K",

time:"60–120 Menit",

description:"Penggantian bushing arm yang retak atau aus untuk mengurangi getaran dan menjaga geometri suspensi.",

includes:[

"Penggantian Bushing Arm",
"Pemeriksaan Lower Arm",
"Pemeriksaan Dudukan Arm",
"Pemeriksaan Baut Pengikat",
"Uji Fungsi Suspensi"

],

exclude:[

"Bushing Arm",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Mengurangi getaran",
"Menghilangkan bunyi kaki-kaki",
"Handling kendaraan lebih baik"

]

}

});

/* =======================================================
DATABASE LAYANAN SUSPENSI (Bagian 3 - SELESAI)
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Bushing Stabilizer":{

label:"🛞 SUSPENSI",

title:"Ganti Bushing Stabilizer",

subtitle:"Penggantian Bushing Stabilizer",

price:"Rp120K – Rp220K",

time:"45–90 Menit",

description:"Penggantian bushing stabilizer yang aus untuk mengurangi bunyi pada suspensi dan menjaga kestabilan kendaraan saat bermanuver.",

includes:[

"Penggantian Bushing Stabilizer",
"Pemeriksaan Stabilizer Bar",
"Pemeriksaan Stabilizer Link",
"Pemeriksaan Dudukan Stabilizer",
"Uji Fungsi Suspensi"

],

exclude:[

"Bushing Stabilizer",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Mengurangi bunyi gluduk",
"Handling lebih stabil",
"Meningkatkan kenyamanan berkendara"

]

},

"Servis Suspensi":{

label:"🛞 SUSPENSI",

title:"Servis Suspensi",

subtitle:"Pemeriksaan & Perbaikan Sistem Suspensi",

price:"Rp300K – Rp800K",

time:"120–300 Menit",

description:"Pemeriksaan menyeluruh sistem suspensi untuk mengetahui komponen yang aus, rusak, atau memerlukan penggantian.",

includes:[

"Pemeriksaan Shockbreaker",
"Pemeriksaan Lower Arm",
"Pemeriksaan Ball Joint",
"Pemeriksaan Tie Rod",
"Pemeriksaan Long Tie Rod",
"Pemeriksaan Stabilizer Link",
"Pemeriksaan Bushing Arm",
"Pemeriksaan Bushing Stabilizer",
"Pemeriksaan Bearing Roda",
"Uji Jalan Kendaraan"

],

exclude:[

"Spare Part",
"Wheel Alignment",
"Biaya Transportasi"

],

benefit:[

"Mengetahui kondisi kaki-kaki",
"Meningkatkan kenyamanan",
"Mengurangi risiko kerusakan lanjutan"

]

},

"Pemeriksaan Kaki-kaki":{

label:"🛞 SUSPENSI",

title:"Pemeriksaan Kaki-kaki",

subtitle:"Diagnosis Sistem Suspensi",

price:"Rp100K – Rp150K",

time:"30–60 Menit",

description:"Pemeriksaan seluruh komponen kaki-kaki kendaraan untuk mengetahui sumber bunyi, getaran, atau ketidakstabilan kendaraan.",

includes:[

"Pemeriksaan Shockbreaker",
"Pemeriksaan Lower Arm",
"Pemeriksaan Ball Joint",
"Pemeriksaan Tie Rod",
"Pemeriksaan Long Tie Rod",
"Pemeriksaan Stabilizer Link",
"Pemeriksaan Bearing Roda",
"Pemeriksaan Ban"

],

exclude:[

"Perbaikan",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Diagnosis lebih akurat",
"Mengetahui komponen yang aus",
"Mengurangi risiko kerusakan lebih besar"

]

},

"Rekomendasi Spooring & Balancing":{

label:"🛞 SUSPENSI",

title:"Rekomendasi Spooring & Balancing",

subtitle:"Pemeriksaan Geometri Roda",

price:"Sesuai Bengkel Rekanan",

time:"30–60 Menit",

description:"Apabila hasil pemeriksaan menunjukkan geometri roda berubah atau keausan ban tidak merata, pelanggan akan direkomendasikan melakukan spooring dan balancing.",

includes:[

"Pemeriksaan Sudut Roda",
"Pemeriksaan Keausan Ban",
"Pemeriksaan Kemudi",
"Rekomendasi Spooring",
"Rekomendasi Balancing"

],

exclude:[

"Biaya Spooring",
"Biaya Balancing"

],

benefit:[

"Ban lebih awet",
"Kemudi lebih lurus",
"Kendaraan lebih stabil"

]

}

});

/* =======================================================
DATABASE LAYANAN KEMUDI (Bagian 1)
======================================================= */

Object.assign(serviceDatabase,{

"Pemeriksaan Sistem Kemudi":{

label:"🎯 KEMUDI",

title:"Pemeriksaan Sistem Kemudi",

subtitle:"Diagnosis Sistem Kemudi",

price:"Rp100K – Rp150K",

time:"30–60 Menit",

description:"Pemeriksaan menyeluruh sistem kemudi untuk mengetahui penyebab setir terasa berat, oblak, bergetar, atau tidak stabil sebelum dilakukan perbaikan.",

includes:[

"Pemeriksaan Rack Steer",
"Pemeriksaan Tie Rod",
"Pemeriksaan Long Tie Rod",
"Pemeriksaan Steering Shaft",
"Pemeriksaan Steering Joint",
"Pemeriksaan Power Steering",
"Pemeriksaan Boot Rack Steer",
"Uji Fungsi Kemudi"

],

exclude:[

"Perbaikan",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Mengetahui kondisi sistem kemudi",
"Diagnosis lebih akurat",
"Meningkatkan keamanan berkendara"

]

},

"Ganti Rack Steer":{

label:"🎯 KEMUDI",

title:"Ganti Rack Steer",

subtitle:"Penggantian Rack Steer",

price:"Rp450K – Rp900K",

time:"180–360 Menit",

description:"Penggantian rack steer yang mengalami kebocoran, aus, atau oblak sehingga kemudi kembali stabil dan presisi.",

includes:[

"Penggantian Rack Steer",
"Pemeriksaan Tie Rod",
"Pemeriksaan Long Tie Rod",
"Pemeriksaan Boot Rack",
"Pemeriksaan Power Steering",
"Uji Fungsi Kemudi"

],

exclude:[

"Rack Steer",
"Wheel Alignment",
"Biaya Transportasi"

],

benefit:[

"Setir kembali presisi",
"Mengurangi oblak",
"Meningkatkan kestabilan kendaraan"

]

},

"Servis Rack Steer":{

label:"🎯 KEMUDI",

title:"Servis Rack Steer",

subtitle:"Perbaikan Rack Steer",

price:"Rp600K – Rp1.500K",

time:"1–2 Hari",

description:"Servis rack steer untuk mengatasi kebocoran, oblak, atau gangguan pada mekanisme kemudi tanpa mengganti seluruh unit.",

includes:[

"Pembongkaran Rack Steer",
"Pemeriksaan Gear Rack",
"Pemeriksaan Seal",
"Pemeriksaan Bushing",
"Perakitan Kembali",
"Uji Fungsi Kemudi"

],

exclude:[

"Seal Kit",
"Spare Part",
"Wheel Alignment",
"Biaya Transportasi"

],

benefit:[

"Mengurangi kebocoran",
"Kemudi lebih stabil",
"Memperpanjang usia rack steer"

]

}

});

/* =======================================================
DATABASE LAYANAN KEMUDI (Bagian 2)
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Power Steering Pump":{

label:"🎯 KEMUDI",

title:"Ganti Power Steering Pump",

subtitle:"Penggantian Pompa Power Steering",

price:"Rp250K – Rp450K",

time:"90–180 Menit",

description:"Penggantian power steering pump yang mengalami kebocoran, bunyi, atau tekanan hidrolik melemah sehingga kemudi kembali ringan.",

includes:[

"Penggantian Power Steering Pump",
"Pemeriksaan Selang Power Steering",
"Pemeriksaan Reservoir",
"Pemeriksaan Belt Penggerak",
"Pemeriksaan Kebocoran",
"Uji Fungsi Kemudi"

],

exclude:[

"Power Steering Pump",
"Minyak Power Steering",
"Biaya Transportasi"

],

benefit:[

"Setir kembali ringan",
"Tekanan hidrolik normal",
"Meningkatkan kenyamanan berkendara"

]

},

"Servis Power Steering Pump":{

label:"🎯 KEMUDI",

title:"Servis Power Steering Pump",

subtitle:"Perbaikan Pompa Power Steering",

price:"Rp350K – Rp700K",

time:"120–240 Menit",

description:"Servis power steering pump untuk mengatasi bunyi, kebocoran, atau tekanan yang menurun tanpa mengganti seluruh unit.",

includes:[

"Pembongkaran Power Steering Pump",
"Pemeriksaan Rotor",
"Pemeriksaan Vanes",
"Pemeriksaan Seal",
"Pembersihan Komponen",
"Perakitan & Uji Fungsi"

],

exclude:[

"Seal Kit",
"Spare Part",
"Minyak Power Steering",
"Biaya Transportasi"

],

benefit:[

"Mengurangi bunyi pompa",
"Tekanan hidrolik kembali normal",
"Memperpanjang umur pompa"

]

},

"Ganti Selang Power Steering":{

label:"🎯 KEMUDI",

title:"Ganti Selang Power Steering",

subtitle:"Penggantian Selang Hidrolik",

price:"Rp180K – Rp300K",

time:"60–120 Menit",

description:"Penggantian selang power steering yang bocor atau retak agar sistem hidrolik kembali bekerja normal.",

includes:[

"Penggantian Selang",
"Pemeriksaan Klem",
"Pemeriksaan Reservoir",
"Pemeriksaan Kebocoran",
"Uji Fungsi Kemudi"

],

exclude:[

"Selang Power Steering",
"Minyak Power Steering",
"Biaya Transportasi"

],

benefit:[

"Menghilangkan kebocoran",
"Setir lebih ringan",
"Menjaga sistem hidrolik"

]

},

"Ganti Boot Rack Steer":{

label:"🎯 KEMUDI",

title:"Ganti Boot Rack Steer",

subtitle:"Penggantian Boot Rack",

price:"Rp150K – Rp250K",

time:"45–90 Menit",

description:"Penggantian boot rack steer yang sobek untuk melindungi rack steer dari debu dan air.",

includes:[

"Penggantian Boot Rack",
"Pemeriksaan Rack Steer",
"Pemeriksaan Tie Rod",
"Pembersihan Area Rack",
"Uji Fungsi Kemudi"

],

exclude:[

"Boot Rack",
"Biaya Transportasi"

],

benefit:[

"Melindungi rack steer",
"Mencegah kotoran masuk",
"Memperpanjang usia rack steer"

]

}

});

/* =======================================================
DATABASE LAYANAN KEMUDI (Bagian 3 - SELESAI)
======================================================= */

Object.assign(serviceDatabase,{

"Ganti Steering Joint":{

label:"🎯 KEMUDI",

title:"Ganti Steering Joint",

subtitle:"Penggantian Steering Joint",

price:"Rp180K – Rp320K",

time:"60–120 Menit",

description:"Penggantian steering joint yang aus atau longgar agar putaran kemudi kembali halus, presisi, dan aman digunakan.",

includes:[

"Penggantian Steering Joint",
"Pemeriksaan Steering Shaft",
"Pemeriksaan Rack Steer",
"Pemeriksaan Baut Pengikat",
"Uji Fungsi Kemudi"

],

exclude:[

"Steering Joint",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Setir lebih presisi",
"Mengurangi bunyi pada kemudi",
"Meningkatkan keamanan berkendara"

]

},

"Ganti Steering Shaft":{

label:"🎯 KEMUDI",

title:"Ganti Steering Shaft",

subtitle:"Penggantian Steering Shaft",

price:"Rp300K – Rp600K",

time:"120–240 Menit",

description:"Penggantian steering shaft yang mengalami keausan, oblak, atau kerusakan agar sistem kemudi kembali bekerja dengan baik.",

includes:[

"Penggantian Steering Shaft",
"Pemeriksaan Steering Joint",
"Pemeriksaan Rack Steer",
"Pemeriksaan Baut Pengikat",
"Uji Fungsi Kemudi"

],

exclude:[

"Steering Shaft",
"Spare Part",
"Biaya Transportasi"

],

benefit:[

"Putaran setir lebih halus",
"Mengurangi free play",
"Meningkatkan kenyamanan berkendara"

]

},

"Perbaikan Setir Berat":{

label:"🎯 KEMUDI",

title:"Perbaikan Setir Berat",

subtitle:"Diagnosis Setir Berat",

price:"Rp150K – Rp400K",

time:"60–120 Menit",

description:"Pemeriksaan menyeluruh untuk mengetahui penyebab setir terasa berat saat diputar, baik pada sistem hidrolik maupun elektrik.",

includes:[

"Pemeriksaan Power Steering",
"Pemeriksaan Rack Steer",
"Pemeriksaan Steering Shaft",
"Pemeriksaan Tekanan Hidrolik",
"Pemeriksaan Minyak Power Steering",
"Uji Fungsi Kemudi"

],

exclude:[

"Spare Part",
"Minyak Power Steering",
"Biaya Transportasi"

],

benefit:[

"Setir kembali ringan",
"Diagnosis lebih akurat",
"Meningkatkan kenyamanan berkendara"

]

},

"Perbaikan Setir Oblak":{

label:"🎯 KEMUDI",

title:"Perbaikan Setir Oblak",

subtitle:"Diagnosis Free Play Kemudi",

price:"Rp150K – Rp450K",

time:"60–180 Menit",

description:"Pemeriksaan komponen sistem kemudi untuk mengetahui penyebab setir oblak atau tidak presisi.",

includes:[

"Pemeriksaan Rack Steer",
"Pemeriksaan Tie Rod",
"Pemeriksaan Long Tie Rod",
"Pemeriksaan Steering Joint",
"Pemeriksaan Steering Shaft",
"Uji Fungsi Kemudi"

],

exclude:[

"Spare Part",
"Wheel Alignment",
"Biaya Transportasi"

],

benefit:[

"Setir lebih presisi",
"Meningkatkan stabilitas kendaraan",
"Mengurangi risiko kerusakan lanjutan"

]

}

});

/* =======================================================
DATABASE GEJALA KENDARAAN
POPUP STEP 2
======================================================= */

const symptomDatabase = {

mesin: [

{
title:"Mesin susah hidup",
recommend:[
"VG CHECK",
"TUNE BASIC",
"TUNE PRO",
"Perbaikan Mesin Sulit Hidup"
]
},

{
title:"Mesin pincang",
recommend:[
"VG CHECK",
"TUNE BASIC",
"TUNE PLUS",
"TUNE PRO"
]
},

{
title:"Mesin brebet",
recommend:[
"VG CHECK",
"TUNE PLUS",
"TUNE PRO",
"Perbaikan Mesin Brebet"
]
},

{
title:"Tenaga berkurang",
recommend:[
"VG CHECK",
"TUNE BASIC",
"TUNE PLUS",
"TUNE PRO"
]
},

{
title:"Mesin cepat panas",
recommend:[
"VG CHECK",
"Perbaikan Mesin Overheat"
]
},

{
title:"Lampu Check Engine menyala",
recommend:[
"VG CHECK",
"TUNE PRO",
"Perbaikan Lampu Check Engine"
]
},

{
title:"Mesin bergetar",
recommend:[
"VG CHECK",
"TUNE BASIC",
"Perbaikan Mesin Bergetar"
]
},

{
title:"Oli mesin bocor",
recommend:[
"VG CHECK",
"Perbaikan Kebocoran Oli Mesin"
]
},

{
title:"Asap putih",
recommend:[
"VG CHECK",
"Perbaikan Asap Putih"
]
},

{
title:"Asap hitam",
recommend:[
"VG CHECK",
"TUNE PRO",
"Perbaikan Asap Hitam"
]
},

{
title:"Suara mesin kasar",
recommend:[
"VG CHECK",
"Perbaikan Suara Mesin Kasar"
]
}

],

bahanBakar:[

{
title:"Mesin boros bahan bakar",
recommend:[
"VG CHECK",
"TUNE BASIC",
"TUNE PLUS",
"TUNE PRO",
"Perbaikan Mesin Boros Bahan Bakar"
]
},

{
title:"Tarikan berat",
recommend:[
"VG CHECK",
"TUNE PLUS",
"TUNE PRO",
"Servis Injektor"
]
},

{
title:"Mesin brebet saat akselerasi",
recommend:[
"VG CHECK",
"TUNE PLUS",
"TUNE PRO",
"Servis Injektor"
]
},

{
title:"Fuel Pump lemah",
recommend:[
"VG CHECK",
"Perbaikan Fuel Pump",
"Ganti Fuel Pump"
]
},

{
title:"Kebocoran bahan bakar",
recommend:[
"VG CHECK",
"Perbaikan Kebocoran Sistem Bahan Bakar"
]
},

{
title:"Filter bahan bakar kotor",
recommend:[
"VG CHECK",
"Ganti Filter Bahan Bakar"
]
},

{
title:"Injektor rusak",
recommend:[
"VG CHECK",
"Ganti Injektor"
]
}

]

};

/* =======================================================
DATABASE GEJALA REM
POPUP STEP 2
======================================================= */

Object.assign(symptomDatabase,{

rem:[

{
title:"Rem kurang pakem",
recommend:[
"VG CHECK",
"Servis Rem (Setel & Bersihkan 2 Roda)"
]
},

{
title:"Rem berbunyi",
recommend:[
"VG CHECK",
"Servis Rem (Setel & Bersihkan 2 Roda)",
"Servis Kaliper Rem"
]
},

{
title:"Pedal rem dalam",
recommend:[
"VG CHECK",
"Servis Master Rem",
"Ganti Master Rem"
]
},

{
title:"Pedal rem keras",
recommend:[
"VG CHECK",
"Ganti Booster Rem"
]
},

{
title:"Rem bergetar saat mengerem",
recommend:[
"VG CHECK",
"Ganti Cakram Rem"
]
},

{
title:"Mobil menarik ke satu sisi saat mengerem",
recommend:[
"VG CHECK",
"Servis Kaliper Rem"
]
},

{
title:"Minyak rem bocor",
recommend:[
"VG CHECK",
"Ganti Selang Minyak Rem",
"Ganti Master Rem"
]
},

{
title:"Kampas rem habis",
recommend:[
"VG CHECK",
"Ganti Kampas Rem Depan",
"Ganti Kampas Rem Belakang",
"Ganti Kampas Rem Tromol (Brake Shoe)"
]
},

{
title:"Lampu ABS menyala",
recommend:[
"VG CHECK",
"Ganti Sensor ABS"
]
},

{
title:"Rem parkir kurang pakem",
recommend:[
"VG CHECK",
"Servis Rem (Setel & Bersihkan 2 Roda)"
]
},

{
title:"Kaliper rem macet",

recommend:[

"VG CHECK",

"Servis Kaliper Rem"

]

},

{

title:"Master rem bocor",

recommend:[

"VG CHECK",

"Servis Master Rem",

"Ganti Master Rem"

]

},

{

title:"Booster rem bermasalah",

recommend:[

"VG CHECK",

"Ganti Booster Rem"

]

}

]

});

/* =======================================================
DATABASE GEJALA SUSPENSI
POPUP STEP 2
======================================================= */

Object.assign(symptomDatabase,{

suspensi:[

{
title:"Bunyi gluduk pada kaki-kaki",
recommend:[
"VG CHECK",
"Pemeriksaan Kaki-kaki",
"Servis Suspensi"
]
},

{
title:"Mobil limbung",
recommend:[
"VG CHECK",
"Ganti Shockbreaker Depan",
"Ganti Shockbreaker Belakang"
]
},

{
title:"Shockbreaker bocor",
recommend:[
"VG CHECK",
"Ganti Shockbreaker Depan",
"Ganti Shockbreaker Belakang"
]
},

{
title:"Shockbreaker lemah",
recommend:[
"VG CHECK",
"Ganti Shockbreaker Depan",
"Ganti Shockbreaker Belakang"
]
},

{
title:"Mobil memantul berlebihan",
recommend:[
"VG CHECK",
"Ganti Shockbreaker Depan",
"Ganti Shockbreaker Belakang"
]
},

{
title:"Ban aus tidak merata",
recommend:[
"VG CHECK",
"Pemeriksaan Kaki-kaki",
"Rekomendasi Spooring & Balancing"
]
},

{
title:"Getaran dari roda depan",
recommend:[
"VG CHECK",
"Pemeriksaan Kaki-kaki",
"Ganti Ball Joint",
"Ganti Tie Rod"
]
},

{
title:"Getaran dari roda belakang",
recommend:[
"VG CHECK",
"Pemeriksaan Kaki-kaki"
]
},

{
title:"Lower arm rusak",
recommend:[
"VG CHECK",
"Ganti Lower Arm"
]
},

{
title:"Ball joint aus",
recommend:[
"VG CHECK",
"Ganti Ball Joint"
]
},

{
title:"Tie rod oblak",
recommend:[
"VG CHECK",
"Ganti Tie Rod"
]
},

{
title:"Long tie rod aus",
recommend:[
"VG CHECK",
"Ganti Long Tie Rod"
]
},

{
title:"Stabilizer link rusak",
recommend:[
"VG CHECK",
"Ganti Stabilizer Link"
]
},

{
title:"Bushing arm rusak",
recommend:[
"VG CHECK",
"Ganti Bushing Arm"
]
},

{
title:"Bushing stabilizer rusak",
recommend:[
"VG CHECK",
"Ganti Bushing Stabilizer"
]
},

{
title:"Mobil tidak stabil saat menikung",
recommend:[
"VG CHECK",
"Servis Suspensi",
"Rekomendasi Spooring & Balancing"
]
},

{
title:"Setelah menghantam lubang terasa bunyi",
recommend:[
"VG CHECK",
"Pemeriksaan Kaki-kaki",
"Servis Suspensi"
]
}

]

});


/* =======================================================
DATABASE GEJALA KEMUDI
POPUP STEP 2
======================================================= */

Object.assign(symptomDatabase,{

kemudi:[

{
title:"Setir terasa berat",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Kemudi",
"Perbaikan Setir Berat"
]
},

{
title:"Setir oblak",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Kemudi",
"Perbaikan Setir Oblak"
]
},

{
title:"Setir bergetar",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Kemudi",
"Servis Rack Steer"
]
},

{
title:"Setir tidak kembali lurus",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Kemudi",
"Rekomendasi Spooring & Balancing"
]
},

{
title:"Setir berbunyi saat diputar",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Kemudi",
"Servis Rack Steer"
]
},

{
title:"Power steering bocor",
recommend:[
"VG CHECK",
"Ganti Selang Power Steering",
"Ganti Power Steering Pump"
]
},

{
title:"Power steering berbunyi",
recommend:[
"VG CHECK",
"Servis Power Steering Pump"
]
},

{
title:"Minyak power steering berkurang",
recommend:[
"VG CHECK",
"Ganti Selang Power Steering",
"Servis Power Steering Pump"
]
},

{
title:"Rack steer bocor",
recommend:[
"VG CHECK",
"Servis Rack Steer",
"Ganti Rack Steer"
]
},

{
title:"Rack steer oblak",
recommend:[
"VG CHECK",
"Servis Rack Steer",
"Ganti Rack Steer"
]
},

{
title:"Boot rack steer sobek",
recommend:[
"VG CHECK",
"Ganti Boot Rack Steer"
]
},

{
title:"Steering joint rusak",
recommend:[
"VG CHECK",
"Ganti Steering Joint"
]
},

{
title:"Steering shaft rusak",
recommend:[
"VG CHECK",
"Ganti Steering Shaft"
]
},

{
title:"Kemudi tidak stabil saat jalan lurus",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Kemudi",
"Rekomendasi Spooring & Balancing"
]
},

{
title:"Kemudi terasa longgar",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Kemudi",
"Perbaikan Setir Oblak"
]
}

]

});

/* =======================================================
DATABASE GEJALA PENDINGIN
POPUP STEP 2
======================================================= */

Object.assign(symptomDatabase,{

pendingin:[

{
title:"Mesin cepat panas (Overheat)",
recommend:[
"VG CHECK",
"Kuras Radiator",
"Perbaikan Mesin Overheat"
]
},

{
title:"Coolant sering berkurang",
recommend:[
"VG CHECK",
"Ganti Selang Radiator",
"Ganti Tutup Radiator",
"Ganti Water Outlet/Inlet"
]
},

{
title:"Radiator bocor",
recommend:[
"VG CHECK",
"Ganti Radiator"
]
},

{
title:"Water Pump bocor",
recommend:[
"VG CHECK",
"Ganti Water Pump"
]
},

{
title:"Thermostat rusak",
recommend:[
"VG CHECK",
"Ganti Thermostat"
]
},

{
title:"Kipas radiator tidak berputar",
recommend:[
"VG CHECK",
"Ganti Motor Fan Radiator"
]
},

{
title:"Kipas kondensor AC tidak berputar",
recommend:[
"VG CHECK",
"Ganti Motor Fan Kondensor AC"
]
},

{
title:"Selang radiator bocor",

recommend:[
"VG CHECK",
"Ganti Selang Radiator"
]
},

{
title:"Tutup radiator rusak",

recommend:[
"VG CHECK",
"Ganti Tutup Radiator"
]
},

{
title:"Reservoir coolant cepat kosong",

recommend:[
"VG CHECK",
"Ganti Tutup Radiator",
"Ganti Selang Radiator",
"Ganti Water Outlet/Inlet"
]
},

{
title:"Mesin lama mencapai suhu kerja",

recommend:[
"VG CHECK",
"Ganti Thermostat"
]
},

{
title:"Mesin cepat panas saat macet",

recommend:[
"VG CHECK",
"Ganti Motor Fan Radiator",
"Ganti Motor Fan Kondensor AC"
]
},

{
title:"AC kurang dingin saat kendaraan berhenti",

recommend:[
"VG CHECK",
"Ganti Motor Fan Kondensor AC"
]
},

{
title:"Terdapat endapan karat pada coolant",

recommend:[
"VG CHECK",
"Kuras Radiator"
]
},

{
title:"Air radiator keruh",

recommend:[
"VG CHECK",
"Kuras Radiator"
]
}

]

});

/* =======================================================
DATABASE GEJALA TRANSMISI
POPUP STEP 2
======================================================= */

Object.assign(symptomDatabase,{

transmisi:[

{
title:"Kopling selip",
recommend:[
"VG CHECK",
"Ganti Kopling"
]
},

{
title:"Gigi susah masuk",
recommend:[
"VG CHECK",
"Servis Transmisi Manual",
"Ganti Master Kopling Atas",
"Ganti Master Kopling Bawah"
]
},

{
title:"Pedal kopling keras",
recommend:[
"VG CHECK",
"Ganti Master Kopling Atas",
"Ganti Master Kopling Bawah"
]
},

{
title:"Pedal kopling dalam",
recommend:[
"VG CHECK",
"Ganti Master Kopling Atas",
"Ganti Master Kopling Bawah"
]
},

{
title:"Kopling bergetar saat dilepas",
recommend:[
"VG CHECK",
"Ganti Kopling",
"Ganti Release Bearing"
]
},

{
title:"Bunyi saat injak kopling",
recommend:[
"VG CHECK",
"Ganti Release Bearing",
"Ganti Pilot Bearing"
]
},

{
title:"Transmisi manual berbunyi",
recommend:[
"VG CHECK",
"Servis Transmisi Manual"
]
},

{
title:"Transmisi otomatis menghentak",
recommend:[
"VG CHECK",
"Servis Transmisi Otomatis"
]
},

{
title:"Transmisi otomatis selip",
recommend:[
"VG CHECK",
"Servis Transmisi Otomatis"
]
},

{
title:"Perpindahan gigi otomatis terlambat",
recommend:[
"VG CHECK",
"Servis Transmisi Otomatis"
]
},

{
title:"Drive Shaft berbunyi",
recommend:[
"VG CHECK",
"Ganti Drive Shaft",
"Ganti Boot Drive Shaft"
]
},

{
title:"CV Joint berbunyi tek-tek",
recommend:[
"VG CHECK",
"Ganti Boot Drive Shaft",
"Ganti Drive Shaft"
]
},

{
title:"Bearing roda berdengung",
recommend:[
"VG CHECK",
"Ganti Bearing Roda"
]
},

{
title:"Getaran saat akselerasi",

recommend:[
"VG CHECK",
"Ganti Drive Shaft",
"Ganti Bearing Roda"
]
},

{
title:"Boot Drive Shaft sobek",

recommend:[
"VG CHECK",
"Ganti Boot Drive Shaft"
]
},

{
title:"Oli transmisi bocor",

recommend:[
"VG CHECK",
"Servis Transmisi Manual",
"Servis Transmisi Otomatis"
]
}

]

});

/* =======================================================
DATABASE GEJALA KELISTRIKAN MESIN
POPUP STEP 2
======================================================= */

Object.assign(symptomDatabase,{

kelistrikan:[

{
title:"Mesin tidak bisa distarter",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Starter"
]
},

{
title:"Starter lemah",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Starter",
"Servis Dinamo Starter"
]
},

{
title:"Dinamo starter tidak berputar",
recommend:[
"VG CHECK",
"Ganti Dinamo Starter",
"Servis Dinamo Starter"
]
},

{
title:"Aki cepat tekor",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Charging",
"Ganti Aki"
]
},

{
title:"Lampu indikator aki menyala",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Charging",
"Ganti Alternator",
"Servis Alternator"
]
},

{
title:"Alternator tidak mengisi",
recommend:[
"VG CHECK",
"Servis Alternator",
"Ganti Alternator"
]
},

{
title:"Lampu kendaraan redup",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Charging",
"Ganti Alternator"
]
},

{
title:"Tegangan aki rendah",
recommend:[
"VG CHECK",
"Pemeriksaan Sistem Charging",
"Ganti Aki"
]
},

{
title:"Mesin pincang",

recommend:[
"VG CHECK",
"TUNE BASIC",
"TUNE PRO",
"Ganti Ignition Coil"
]
},

{
title:"Mesin brebet karena pengapian",

recommend:[
"VG CHECK",
"TUNE BASIC",
"TUNE PRO",
"Ganti Ignition Coil",
"Ganti Kabel Busi"
]
},

{
title:"Ignition Coil rusak",

recommend:[
"VG CHECK",
"Ganti Ignition Coil"
]
},

{
title:"Kabel busi rusak",

recommend:[
"VG CHECK",
"Ganti Kabel Busi"
]
},

{
title:"Starter berbunyi klik",

recommend:[
"VG CHECK",
"Pemeriksaan Sistem Starter",
"Servis Dinamo Starter"
]
},

{
title:"Pengisian aki tidak stabil",

recommend:[
"VG CHECK",
"Pemeriksaan Sistem Charging",
"Servis Alternator"
]
},

{
title:"Mobil mati mendadak saat berjalan",

recommend:[
"VG CHECK",
"Pemeriksaan Sistem Charging",
"Pemeriksaan Sistem Starter"
]
}

]

});

/* =======================================================
POPUP DIAGNOSIS ENGINE
STEP 1 → STEP 2
======================================================= */

const diagnosis = {

currentSystem:null,

currentSymptom:null,

currentServices:[]

};

function openDiagnosis(system){

diagnosis.currentSystem=system;

const symptoms=symptomDatabase[system]||[];

const symptomContainer=document.getElementById("symptomList");

symptomContainer.innerHTML="";

symptoms.forEach(item=>{

const button=document.createElement("button");

button.className="symptom-card";

button.innerHTML=`
<div class="symptom-title">${item.title}</div>
`;

button.onclick=()=>selectSymptom(item);

symptomContainer.appendChild(button);

});

document.getElementById("popupSystem").classList.remove("active");

document.getElementById("popupSymptom").classList.add("active");

}

function selectSymptom(symptom){

diagnosis.currentSymptom=symptom.title;

diagnosis.currentServices=symptom.recommend;

renderRecommendation();

}

/* =======================================================
POPUP REKOMENDASI LAYANAN
STEP 3
======================================================= */

function renderRecommendation(){

const container=document.getElementById("serviceRecommendation");

container.innerHTML="";

diagnosis.currentServices.forEach(serviceName=>{

const data=serviceDatabase[serviceName];

if(!data) return;

const card=document.createElement("div");

card.className="service-card";

card.innerHTML=`

<div class="service-badge">

${data.label}

</div>

<h3>

${data.title}

</h3>

<p>

${data.subtitle}

</p>

<div class="service-price">

${data.price}

</div>

<div class="service-time">

⏱ ${data.time}

</div>

<button class="btn-detail">

Lihat Detail

</button>

`;

card.querySelector(".btn-detail").onclick=()=>{

openServiceDetail(serviceName);

};

container.appendChild(card);

});

document.getElementById("popupSymptom").classList.remove("active");

document.getElementById("popupRecommendation").classList.add("active");

}

/* =======================================================
POPUP DETAIL LAYANAN
STEP 4
======================================================= */

function openServiceDetail(serviceName){

const data = serviceDatabase[serviceName];

if(!data){

alert("Detail layanan tidak ditemukan.");

return;

}

document.getElementById("detailBadge").textContent = data.label;

document.getElementById("detailTitle").textContent = data.title;

document.getElementById("detailSubtitle").textContent = data.subtitle;

document.getElementById("detailPrice").textContent = data.price;

document.getElementById("detailTime").textContent = data.time;

document.getElementById("detailDescription").textContent = data.description;

/* ===========================
LAYANAN YANG TERMASUK
=========================== */

const includeList=document.getElementById("detailInclude");

includeList.innerHTML="";

data.includes.forEach(item=>{

const li=document.createElement("li");

li.textContent=item;

includeList.appendChild(li);

});

/* ===========================
TIDAK TERMASUK
=========================== */

const excludeList=document.getElementById("detailExclude");

excludeList.innerHTML="";

data.exclude.forEach(item=>{

const li=document.createElement("li");

li.textContent=item;

excludeList.appendChild(li);

});

/* ===========================
MANFAAT
=========================== */

const benefitList=document.getElementById("detailBenefit");

benefitList.innerHTML="";

data.benefit.forEach(item=>{

const li=document.createElement("li");

li.textContent=item;

benefitList.appendChild(li);

});

/* ===========================
TOMBOL BOOKING
=========================== */

const bookingButton=document.getElementById("bookingService");

bookingButton.onclick=function(){

openBooking(serviceName);

};

document.getElementById("popupRecommendation").classList.remove("active");

document.getElementById("popupDetail").classList.add("active");

}

/* =======================================================
BOOKING WHATSAPP
======================================================= */

const whatsappNumber = "62895622499262";

function openBooking(serviceName){

const message =
`Halo kak. 👋

Biso bantu jadwalkan servis mobil aku?

Aku nak booking • ${serviceName}

Terimo kasih. 🙏`;

const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

window.open(url,"_blank");

}

