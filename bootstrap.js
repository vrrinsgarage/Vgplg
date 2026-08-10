(() => {
  'use strict';

  // ===== NAV TOGGLE =====
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-navigation');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  document.querySelectorAll('.main-nav .nav-link').forEach((a) =>
    a.addEventListener('click', () => nav?.classList.remove('is-open'))
  );

  // ===== SEARCH =====
  const input = document.getElementById('service-search');
  const results = document.getElementById('search-results');
  const clear = document.getElementById('search-clear');

  const normalize = (v) => String(v || '').toLowerCase();

  function render(q) {
    if (!results || !input) return;
    const query = normalize(q).trim();
    if (!query) {
      results.hidden = true;
      results.innerHTML = '';
      return;
    }

    const data = (window.services || []).map((s) => ({
      name: s.nama,
      cat: s.kategori,
      id: s.id,
      deskripsi: s.deskripsi || '',
    }));

    // VG TUNE adalah paket induk dan memang tidak punya 1 record layanan
    // khusus di services.js. Layanan lain sudah ada di database, jadi jangan
    // didaftarkan ulang di sini agar hasil pencarian tidak dobel.
    const extra = [
      { name: 'VG TUNE', cat: 'Paket VG', id: 'vg-tune', deskripsi: 'Tune up mesin bensin dan diesel' },
    ];

    const matches = [...extra, ...data]
      .filter((x) => normalize(`${x.name} ${x.cat} ${x.deskripsi}`).includes(query))
      .filter((x, i, arr) => arr.findIndex(y => y.id === x.id) === i)
      .slice(0, 8);

    results.innerHTML = matches.length
      ? matches
          .map(
            (x) =>
              `<div class="search-result" data-search-id="${x.id}">
                <div><strong>${x.name}</strong><small>${x.cat}</small></div>
                <span>→</span>
              </div>`
          )
          .join('')
      : `<div class="search-result"><div><strong>Tidak ditemukan</strong><small>Coba kata kunci lain.</small></div></div>`;

    results.hidden = false;
  }

  input?.addEventListener('input', (e) => render(e.target.value));
  clear?.addEventListener('click', () => {
    input.value = '';
    render('');
    input.focus();
  });

  document.addEventListener('click', (e) => {
    const r = e.target.closest('.search-result[data-search-id]');
    if (r) {
      const id = r.dataset.searchId;
      input.value = '';
      render('');
      if (typeof window.VGPopup !== 'undefined' && window.VGPopup) {
        if (id === 'vg-tune') {
          window.VGPopup.openPackage?.();
        } else {
          window.VGPopup.openService?.(id);
        }
      } else {
        console.warn('VGPopup belum siap, coba lagi nanti.');
      }
    }
    if (!e.target.closest('.search-wrap')) {
      if (results) results.hidden = true;
    }
  });

  // ===== ZONA CLICK =====
  document.querySelectorAll('.area-zone[data-zone]').forEach(el => {
    el.addEventListener('click', function(e) {
      const zone = parseInt(this.dataset.zone, 10);
      if (typeof window.openZonePopup === 'function') {
        window.openZonePopup(zone);
      } else {
        console.warn('openZonePopup belum tersedia');
      }
    });
    el.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // ===== SMOOTH SCROLL =====
  document.addEventListener('DOMContentLoaded', function() {
    const floating = document.querySelector('.hero-floating');
    if (floating) {
      floating.addEventListener('click', function() {
        const target = document.getElementById('wilayah-operasional');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
      floating.style.cursor = 'pointer';
    }
  });

})();