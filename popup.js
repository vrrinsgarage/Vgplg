/* VRRINS GARAGE — FINAL POPUP FLOW
   Paket Perawatan VG → Tune → Bensin/Diesel → Paket → Detail
   Kondisi Mobil → Kategori → Subkategori → Detail
   Navigasi bertingkat (stack) untuk tombol kembali
*/
(() => {
  'use strict';

  // ===== PASTIKAN ELEMEN ADA =====
  const modal = document.getElementById('vg-modal');
  const content = document.getElementById('vg-modal-content');

  if (!modal || !content) {
    console.error('Popup elements not found! Check IDs: vg-modal, vg-modal-content');
    return;
  }

  const WA_NUMBER = '62895622499262';
  const WA_BASE = `https://wa.me/${WA_NUMBER}`;

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' } [c]));
  const arr = v => Array.isArray(v) ? v : (v ? [v] : []);
  const all = () => Array.isArray(window.services) ? window.services : [];
  const find = id => all().find(s => String(s.id) === String(id));
  const byCategory = cat => all().filter(s => String(s.kategori || '').toUpperCase() === String(cat).toUpperCase());

  const CATEGORY_META = {
    'MESIN': { title: 'MESIN', desc: 'Pemeriksaan & perawatan sistem mesin kendaraan.', image: 'images/category-mesin.webp' },
    'PELUMASAN': { title: 'PELUMASAN', desc: 'Pemeriksaan & perawatan sistem pelumasan kendaraan.', image: 'images/category-pelumasan.webp' },
    'BAHAN BAKAR': { title: 'BAHAN BAKAR', desc: 'Pemeriksaan & perawatan sistem bahan bakar.', image: 'images/category-bahan-bakar.webp' },
    'SUSPENSI': { title: 'SUSPENSI', desc: 'Pemeriksaan & perawatan sistem suspensi.', image: 'images/category-suspensi.webp' },
    'KEMUDI': { title: 'KEMUDI', desc: 'Pemeriksaan & perawatan sistem kemudi kendaraan.', image: 'images/category-kemudi.webp' },
    'REM': { title: 'REM', desc: 'Pemeriksaan & perawatan sistem pengereman.', image: 'images/category-rem.webp' },
    'PENDINGIN': { title: 'PENDINGIN', desc: 'Pemeriksaan & perawatan sistem pendingin kendaraan.', image: 'images/category-pendingin.webp' },
    'TRANSMISI': { title: 'TRANSMISI', desc: 'Pemeriksaan & perawatan sistem transmisi.', image: 'images/category-transmisi.webp' },
    'KELISTRIKAN MESIN': { title: 'KELISTRIKAN', desc: 'Pemeriksaan kelistrikan & komponen elektronik.', image: 'images/category-kelistrikan.webp' }
  };

  const TUNE_META = {
    bensin: { title: 'VG TUNE BENSIN', image: 'images/vg-tune-bensin.webp', desc: 'Paket tune untuk kendaraan bermesin bensin.' },
    diesel: { title: 'VG TUNE DIESEL', image: 'images/vg-tune-diesel.webp', desc: 'Paket tune untuk kendaraan bermesin diesel.' }
  };

  const image = (src, alt = '') =>
    `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.src='images/placeholder.webp'">`;

  const head = (title, eyebrow = '') =>
    `<div class="vg-popup-head"><span class="vg-popup-eyebrow">${esc(eyebrow)}</span><h2 id="vg-modal-title">${esc(title)}</h2></div>`;

  const backButton = () =>
    `<button class="vg-back" type="button" data-popup-back>← Kembali</button>`;

  const card = ({ imageSrc, title, desc = '', badge = '', meta = '', action, button = 'DETAIL' }) =>
    `<article class="vg-popup-card">
      <div class="vg-popup-card__media">
        ${image(imageSrc, title)}
        ${badge ? `<span class="vg-popup-badge">${esc(badge)}</span>` : ''}
      </div>
      <div class="vg-popup-card__body">
        <h3>${esc(title)}</h3>
        <p>${esc(desc)}</p>
        ${meta ? `<div class="vg-popup-meta">${meta}</div>` : ''}
        <button class="vg-popup-button" type="button" data-action="${esc(action)}">${esc(button)}</button>
      </div>
    </article>`;

  // ===== HISTORY POPUP (BROWSER + INTERNAL) =====
  // Setiap halaman popup memiliki 1 history entry. Tombol Back HP,
  // tombol Kembali, ESC, dan tombol X sekarang memakai history yang sama.
  let popupHistoryActive = false;
  let isNavigating = false;
  let isClosing = false;
  let restoringFromHistory = false;

  const renderPopup = (html) => {
    content.innerHTML = html;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('popup-open');
    content.scrollTop = 0;
  };

  const closeVisual = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('popup-open');
    content.innerHTML = '';
    popupHistoryActive = false;
  };

  const open = (html, pushState = false) => {
    if (isNavigating || isClosing) return;
    isNavigating = true;

    const popupAlreadyOpen = modal.classList.contains('is-open');
    // Buka pertama kali atau pindah halaman di dalam popup = history baru.
    // State menyimpan HTML agar popstate bisa mengembalikan halaman tepat.
    if (!restoringFromHistory && (pushState || popupAlreadyOpen)) {
      history.pushState({ vgPopup: true, vgHtml: html }, '', location.href);
      popupHistoryActive = true;
    }

    renderPopup(html);
    isNavigating = false;
  };

  const goBack = () => {
    if (isNavigating || isClosing) return;

    if (popupHistoryActive && window.history.state?.vgPopup) {
      history.back();
    } else {
      closeVisual();
    }
  };

  const close = () => {
    if (isClosing) return;
    isClosing = true;

    // Jangan replaceState: browser harus benar-benar kembali ke entry
    // sebelum popup dibuka. popstate yang akan menutup visual popup.
    if (popupHistoryActive && window.history.state?.vgPopup) {
      history.back();
    } else {
      closeVisual();
    }

    setTimeout(() => {
      isClosing = false;
    }, 0);
  };

  // ===== RENDER FUNCTIONS =====
  function renderPackageRoot() {
    const p = id => find(id);
    const tune = card({
      imageSrc: 'images/vg-tune.webp',
      title: 'VG TUNE',
      desc: 'Tune up mesin bensin & diesel.',
      badge: 'POPULER',
      meta: '2 Jenis Mesin • 8 pilihan paket',
      action: 'tune-root',
      button: 'LIHAT PAKET'
    });
    return `${head('PAKET PERAWATAN VG', 'LAYANAN VG')}
      <p class="vg-popup-intro">Pilih paket perawatan sesuai kebutuhan mobilnyo.</p>
      <div class="vg-popup-grid vg-popup-grid--package">
        ${card({
          imageSrc: 'images/vg-check.webp',
          title: 'VG CHECK',
          desc: p('vg-check')?.deskripsi || 'Pemeriksaan kondisi kendaraan.',
          badge: 'REKOMENDASI',
          meta: 'Rp100.000–Rp150.000 • 30–90 menit',
          action: 'service:vg-check'
        })}
        ${tune}
        ${card({
          imageSrc: 'images/vg-brake-service.webp',
          title: 'VG BRAKE SERVICE',
          desc: 'Perawatan sistem rem agar pengereman tetap optimal dan aman.',
          badge: 'POPULER',
          meta: 'Rp270.000 • 60–120 menit',
          action: 'service:vg-brake-service'
        })}
        ${card({
          imageSrc: 'images/vg-oil-service.webp',
          title: 'VG OIL SERVICE',
          desc: p('vg-oil-service')?.deskripsi || 'Penggantian oli kendaraan.',
          badge: 'REKOMENDASI',
          meta: 'Rp50.000–Rp75.000 • 15–30 menit',
          action: 'service:vg-oil-service'
        })}
      </div>`;
  }

  function renderTuneRoot() {
    return `${head('VG TUNE', 'PAKET PERAWATAN VG')}
      ${backButton()}
      <div class="vg-popup-cover">
        ${image('images/vg-tune.webp', 'VG TUNE')}
        <div>
          <h3>VG TUNE</h3>
          <p>Servis tune untuk kendaraan bensin maupun diesel.</p>
          <strong>2 Jenis Mesin</strong>
        </div>
      </div>
      <div class="vg-popup-grid">
        ${card({
          imageSrc: TUNE_META.bensin.image,
          title: 'VG TUNE BENSIN',
          desc: TUNE_META.bensin.desc,
          meta: '4 Paket',
          action: 'tune:bensin',
          button: 'LIHAT PAKET'
        })}
        ${card({
          imageSrc: TUNE_META.diesel.image,
          title: 'VG TUNE DIESEL',
          desc: TUNE_META.diesel.desc,
          meta: '4 Paket',
          action: 'tune:diesel',
          button: 'LIHAT PAKET'
        })}
      </div>`;
  }

  function tuneItems(type) {
    const base = all().filter(s => s.kategori === 'VG TUNE' && (s.id.endsWith(`-${type}`) || s.id === `vg-tune-${type}`));
    const addon = find(type === 'bensin' ? 'vg-addon-gurah-karbon' : 'vg-addon-diesel-purging');
    return [...base, ...(addon ? [addon] : [])].slice(0, 4);
  }

  function renderTuneList(type) {
    const m = TUNE_META[type],
      items = tuneItems(type);
    return `${head(m.title, 'VG TUNE')}
      ${backButton()}
      <div class="vg-popup-cover">
        ${image(m.image, m.title)}
        <div>
          <h3>${esc(m.title)}</h3>
          <p>${esc(m.desc)}</p>
          <strong>${items.length} Paket</strong>
        </div>
      </div>
      <div class="vg-popup-grid">
        ${items.map(s => card({
          imageSrc: `images/services/${s.id}.webp`,
          title: s.nama,
          desc: s.deskripsi || '',
          badge: s.id.includes('addon') ? 'ADD-ON' : s.id.includes('pro') ? 'PREMIUM' : s.id.includes('plus') ? 'REKOMENDASI' : 'HEMAT',
          meta: `${esc(s.harga || '-')} • ${esc(s.durasi || '-')}`,
          action: `service:${s.id}`,
          button: 'DETAIL'
        })).join('')}
      </div>`;
  }

  function renderSystemRoot() {
    const cats = Object.entries(CATEGORY_META);
    return `${head('LAYANAN BERDASARKAN KONDISI MOBIL ANDA', 'PILIH SISTEM KENDARAAN')}
      <p class="vg-popup-intro">Pilih bagian mobil yang mengalami keluhan. Kito bantu arahkan ke layanan yang sesuai.</p>
      <div class="vg-popup-grid vg-popup-grid--system">
        ${cats.map(([k, m]) => card({
          imageSrc: m.image,
          title: m.title,
          desc: m.desc,
          meta: `${byCategory(k).length} Layanan`,
          action: `category:${k}`,
          button: 'DETAIL'
        })).join('')}
      </div>`;
  }

  function renderCategory(cat) {
    const m = CATEGORY_META[cat],
      items = byCategory(cat);
    if (!m) return renderSystemRoot();
    return `${head(m.title, 'LAYANAN BERDASARKAN KONDISI MOBIL ANDA')}
      ${backButton()}
      <div class="vg-popup-cover">
        ${image(m.image, m.title)}
        <div>
          <h3>${esc(m.title)}</h3>
          <p>${esc(m.desc)}</p>
          <strong>${items.length} Layanan</strong>
        </div>
      </div>
      <div class="vg-popup-grid">
        ${items.map(s => card({
          imageSrc: `images/services/${s.id}.webp`,
          title: s.nama,
          desc: s.deskripsi || '',
          meta: `${esc(s.harga || '-')} • ${esc(s.durasi || '-')}`,
          action: `service:${s.id}`,
          button: 'DETAIL'
        })).join('')}
      </div>`;
  }

  function renderService(id) {
    const s = find(id);
    if (!s) return `${head('LAYANAN TIDAK DITEMUKAN')}${backButton()}`;
    const work = arr(s.pekerjaan).map(x => `<li>${esc(x)}</li>`).join('');
    const excluded = arr(s.tidakTermasuk).map(x => `<li>${esc(x)}</li>`).join('');
    const note = s.catatan || 'Estimasi biaya dapat berubah sesuai kondisi kendaraan. Pekerjaan tambahan akan dikonfirmasi terlebih dahulu.';
    const gallery = [1, 2, 3].map(n => image(`images/gallery/${s.id}-${n}.webp`, `${s.nama} ${n}`)).join('');

    const msg = `Halo, kak. 👋

Biso bantu jadwalkan booking?

Aku nak booking layanan ${s.nama}.

Terima kasih. 🙏`;

    return `${head(s.nama, s.kategori)}
      ${backButton()}
      <div class="vg-detail-media">${image(`images/services/${s.id}.webp`, s.nama)}</div>
      <div class="vg-detail-head">
        <span class="vg-popup-label">${esc(s.kategori)}</span>
        <h3>${esc(s.nama)}</h3>
        <p>${esc(s.deskripsi || '')}</p>
      </div>
      <div class="vg-detail-stats">
        <div><small>Estimasi Biaya</small><strong>${esc(s.harga || '-')}</strong></div>
        <div><small>Estimasi Waktu</small><strong>${esc(s.durasi || '-')}</strong></div>
      </div>
      <div class="vg-detail-section">
        <h4>PEKERJAAN YANG DILAKUKAN</h4>
        <ul>${work || '<li>Disesuaikan berdasarkan hasil pemeriksaan.</li>'}</ul>
      </div>
      <div class="vg-detail-section">
        <h4>YANG TIDAK TERMASUK</h4>
        <ul class="is-excluded">${excluded || '<li>Sparepart/material pengganti.</li>'}</ul>
      </div>
      <div class="vg-detail-section">
        <h4>CATATAN</h4>
        <p>${esc(note)}</p>
      </div>
      <div class="vg-gallery">
        <h4>GALERI HASIL PEKERJAAN</h4>
        <div class="vg-gallery-grid">${gallery}</div>
      </div>
      <a class="vg-wa-button vg-service-booking" target="_blank" rel="noopener" href="${WA_BASE}?text=${encodeURIComponent(msg)}" aria-label="Booking layanan ${esc(s.nama)}">
        <img class="vg-service-booking__img" src="images/booking-layanan-ini.webp" alt="Booking layanan ini" loading="lazy" onerror="this.closest('.vg-service-booking')?.classList.add('is-fallback')">
        <span class="vg-service-booking__fallback"><span class="wa-icon"></span> BOOKING WHATSAPP</span>
      </a>`;
  }

  // ===== STYLE BANNER BOOKING LAYANAN =====
  // Khusus tombol booking pada Detail Layanan. Tidak memengaruhi
  // VG BOOKING Header/Hero maupun BOOK NOW Floating.
  if (!document.getElementById('vg-service-booking-style')) {
    const style = document.createElement('style');
    style.id = 'vg-service-booking-style';
    style.textContent = `
      .vg-service-booking {
        display: block !important;
        position: relative !important;
        box-sizing: border-box !important;
        width: 88% !important;
        max-width: 520px !important;
        height: auto !important;
        aspect-ratio: 6.15 / 1 !important;
        margin: 24px auto 6px !important;
        padding: 0 !important;
        overflow: hidden !important;
        border: 0 !important;
        border-radius: 12px !important;
        background: transparent !important;
        line-height: 0 !important;
        text-decoration: none !important;
        box-shadow: none !important;
      }

      .vg-service-booking__img {
        display: block !important;
        position: absolute !important;
        left: 0 !important;
        top: 50% !important;
        width: 100% !important;
        height: auto !important;
        max-width: none !important;
        margin: 0 !important;
        transform: translateY(-50%) !important;
        object-fit: contain !important;
      }

      .vg-service-booking__fallback {
        display: none;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        height: 100%;
        line-height: 1.2;
      }

      .vg-service-booking.is-fallback .vg-service-booking__img {
        display: none !important;
      }

      .vg-service-booking.is-fallback .vg-service-booking__fallback {
        display: flex !important;
      }

      /* Desktop: cukup besar untuk menjadi CTA, tetapi tidak memenuhi popup. */
      @media (min-width: 769px) {
        .vg-service-booking {
          width: 58% !important;
          max-width: 560px !important;
          aspect-ratio: 6.15 / 1 !important;
          margin-top: 26px !important;
        }
      }

      /* Mobile: dibuat dominan tetapi tetap menyisakan ruang kiri-kanan. */
      @media (max-width: 768px) {
        .vg-service-booking {
          width: 65% !important;
          max-width: 520px !important;
          aspect-ratio: 6.15 / 1 !important;
          margin-top: 24px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ===== EVENT LISTENER =====

  document.addEventListener('click', e => {
    // Tutup popup (X atau backdrop)
    if (e.target.closest('[data-popup-close]')) {
      close();
      return;
    }

    // Tombol kembali internal
    if (e.target.closest('[data-popup-back]')) {
      goBack();
      return;
    }

    // Buka paket dari card (halaman utama)
    const packageEl = e.target.closest('[data-open-package]');
    if (packageEl) {
      const id = packageEl.dataset.openPackage;
      const isFirstOpen = !modal.classList.contains('is-open');
      if (id === 'vg-tune') {
        open(renderTuneRoot(), isFirstOpen);
      } else {
        open(renderService(id), isFirstOpen);
      }
      return;
    }

    // Buka sistem dari card (halaman utama)
    const systemEl = e.target.closest('[data-open-system]');
    if (systemEl) {
      const isFirstOpen = !modal.classList.contains('is-open');
      open(renderCategory(systemEl.dataset.openSystem), isFirstOpen);
      return;
    }

    // Navigasi dari tombol aksi (dalam popup).
    // open() otomatis membuat history entry untuk setiap halaman popup.
    const actionEl = e.target.closest('[data-action]');
    if (actionEl) {
      const a = actionEl.dataset.action;

      if (a === 'package-root') {
        open(renderPackageRoot(), false);
      } else if (a === 'tune-root') {
        open(renderTuneRoot(), false);
      } else if (a === 'system-root') {
        open(renderSystemRoot(), false);
      } else if (a.startsWith('tune:')) {
        open(renderTuneList(a.split(':')[1]), false);
      } else if (a.startsWith('category:')) {
        open(renderCategory(a.substring(9)), false);
      } else if (a.startsWith('service:')) {
        const parts = a.split(':');
        const id = parts[1];
        open(renderService(id), false);
      }
      return;
    }

    // --- TAMBAHAN: CEK LOKASI SAYA ---
    const checkBtn = e.target.closest('.vg-location-check');
    if (checkBtn) {
      e.preventDefault();
      const serviceId = checkBtn.dataset.serviceId;
      const serviceName = checkBtn.dataset.serviceName;
      if (window.VGLocation) {
        window.VGLocation.checkLocation(serviceName, serviceId);
      }
      return;
    }
  });

  // ===== TOMBOL KEMBALI FISIK HP & ESC =====
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      e.preventDefault();
      goBack();
    }
  });

  // ===== TOMBOL KEMBALI BROWSER (POPSTATE) =====
  window.addEventListener('popstate', (event) => {
    const state = event.state;

    if (state?.vgPopup && typeof state.vgHtml === 'string') {
      restoringFromHistory = true;
      popupHistoryActive = true;
      renderPopup(state.vgHtml);
      restoringFromHistory = false;
      return;
    }

    // Kembali ke history halaman normal = popup selesai.
    closeVisual();
  });

  // ===== WHATSAPP LINKS =====
  document.querySelectorAll('.js-whatsapp').forEach(a => {
    const m = a.dataset.waMessage;
    if (!m) return;
    const url = `${WA_BASE}?text=${encodeURIComponent(m)}`;
    a.href = url;
    a.addEventListener('click', e => {
      a.href = url;
    });
  });

  // ===== EXPOSE GLOBAL =====
  window.VGPopup = {
    openPackage: () => open(renderPackageRoot(), true),
    openSystem: () => open(renderSystemRoot(), true),
    openService: (id) => {
      const s = find(id);
      if (!s) return;
      open(renderService(id), true);
    },
    close
  };

  // ===== ZONA POPUP =====
  function renderZonePopup(zoneNumber) {
    if (!window.zonaData) {
      return `<div class="empty-state">Data zona belum dimuat.</div>`;
    }
    const filtered = window.zonaData.filter(item => item.zone === zoneNumber);
    if (filtered.length === 0) {
      return `<div class="empty-state">Belum ada data perumahan untuk zona ini.</div>`;
    }
    const sorted = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    let html = `<div class="vg-popup-head">
      <span class="vg-popup-eyebrow">WILAYAH OPERASIONAL</span>
      <h2 id="vg-modal-title">Zona ${zoneNumber} <span style="font-size:16px;background:#e10606;padding:2px 12px;border-radius:30px;color:#fff;margin-left:8px;">${filtered.length} perumahan</span></h2>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;">`;
    sorted.forEach(item => {
      html += `<span style="background:#111316;padding:6px 16px;border-radius:20px;border:1px solid #2a2d31;font-size:13px;display:inline-block;">
        ${esc(item.name)}
      </span>`;
    });
    html += `</div>`;
    return html;
  }

  window.openZonePopup = function(zoneNumber) {
    const html = renderZonePopup(zoneNumber);
    const isFirstOpen = !modal.classList.contains('is-open');
    open(html, isFirstOpen);
  };

})();