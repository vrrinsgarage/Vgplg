/* =========================================================
   VRRINS GARAGE — SCRIPT.JS
   Disesuaikan LANGSUNG dengan index.html + style.css.
   services.js tetap menjadi database layanan.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const WA_NUMBER = '62895622499262';
  const WA_BASE = `https://wa.me/${WA_NUMBER}`;

  const packageImages = {
    'vg-check': 'images/vg-check.jpg',
    'vg-tune': 'images/vg-tune.jpg',
    'vg-brake-service': 'images/vg-brake.jpg',
    'vg-oil-service': 'images/vg-oil-service.jpg'
  };

  const categoryImages = {
    'MESIN': 'images/category-mesin.jpg',
    'PELUMASAN': 'images/category-pelumasan.jpg',
    'BAHAN BAKAR': 'images/category-bahan-bakar.jpg',
    'SUSPENSI': 'images/category-suspensi.jpg',
    'KEMUDI': 'images/category-kemudi.jpg',
    'REM': 'images/category-rem.jpg',
    'PENDINGIN': 'images/category-pendingin.jpg',
    'TRANSMISI': 'images/category-transmisi.jpg',
    'KELISTRIKAN MESIN': 'images/category-kelistrikan.jpg'
  };

  const serviceImageOverrides = {
    'vg-check': 'images/services/vg-check.webp',
    'vg-brake-service': 'images/services/vg-brake-service.webp',
    'vg-oil-service': 'images/services/vg-oil-service.webp'
  };

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  const navToggle = $('#nav-toggle');
  const navigation = $('#main-navigation');
  const packageModal = $('#package-modal');
  const categoryModal = $('#category-modal');
  const serviceModal = $('#service-modal');
  const tuneGrid = $('#tune-package-grid');
  const categoryContent = $('#category-detail-content');
  const detailImage = $('#detail-service-image');
  const detailCategory = $('#detail-service-category');
  const detailTitle = $('#service-modal-title');
  const detailDescription = $('#detail-service-description');
  const detailPrice = $('#detail-service-price');
  const detailDuration = $('#detail-service-duration');
  const detailWork = $('#detail-service-work');
  const detailExcluded = $('#detail-service-excluded');
  const detailNote = $('#detail-service-note');
  const detailWhatsApp = $('#detail-service-whatsapp');
  const loader = $('#page-loader');
  const header = $('#site-header');

  let activeService = null;
  let lastFocused = null;
  let toastTimer = null;

  const getServices = () => {
    try {
      if (typeof services !== 'undefined' && Array.isArray(services)) {
        return services;
      }
    } catch (error) {
      console.warn('services.js belum tersedia.', error);
    }
    return [];
  };

  const findService = (id) => {
    if (!id) return null;
    return getServices().find(item => String(item.id).toLowerCase() === String(id).toLowerCase()) || null;
  };

  const getCategoryServices = (category) => {
    return getServices().filter(item => String(item.kategori || '').toUpperCase() === String(category || '').toUpperCase());
  };

  const getTuneServices = (type) => {
    const suffix = `-${String(type).toLowerCase()}`;
    return getServices().filter(item => item.kategori === 'VG TUNE' && String(item.id).toLowerCase().endsWith(suffix));
  };

  const getAddons = () => getServices().filter(item => item.kategori === 'VG ADD-ON');

  const esc = (value) => String(value ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const list = value => Array.isArray(value) ? value : (value ? [value] : []);

  const bookingMessage = serviceName => [
    'Halo, kak. 👋', '', 'Biso bantu jadwalkan booking?', '', `Aku nak booking layanan ${serviceName}.`, '', 'Terima kasih. 🙏'
  ].join('\n');

  const waURL = message => `${WA_BASE}?text=${encodeURIComponent(message)}`;
  const serviceImage = service => serviceImageOverrides[service.id] || `images/services/${service.id}.webp`;
  const categoryImage = category => categoryImages[category] || 'images/hero.jpg';

  const modals = () => [packageModal, categoryModal, serviceModal].filter(Boolean);

  const openModal = (modal, trigger) => {
    if (!modal) return;
    lastFocused = trigger || document.activeElement;
    modals().forEach(item => {
      if (item !== modal) {
        item.classList.remove('is-open');
        item.setAttribute('aria-hidden', 'true');
      }
    });
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    const close = $('.modal__close', modal);
    window.setTimeout(() => close?.focus(), 20);
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (!modals().some(item => item.classList.contains('is-open'))) {
      document.body.classList.remove('modal-open');
    }
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    lastFocused = null;
  };

  $$('.js-modal-close').forEach(button => {
    button.addEventListener('click', () => closeModal(button.closest('.modal')));
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const opened = modals().find(item => item.classList.contains('is-open'));
    if (opened) closeModal(opened);
    navigation?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });

  navToggle?.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  });

  $$('.nav-link').forEach(link => link.addEventListener('click', () => {
    navigation?.classList.remove('is-open');
    navToggle?.classList.remove('is-active');
    navToggle?.setAttribute('aria-expanded', 'false');
  }));

  const renderList = (element, values, emptyText) => {
    if (!element) return;
    element.innerHTML = '';
    const valuesArray = list(values);
    if (!valuesArray.length) {
      const li = document.createElement('li');
      li.textContent = emptyText;
      element.appendChild(li);
      return;
    }
    valuesArray.forEach(value => {
      const li = document.createElement('li');
      li.textContent = value;
      element.appendChild(li);
    });
  };

  const renderServiceDetail = service => {
    activeService = service;
    if (detailImage) {
      detailImage.src = serviceImage(service);
      detailImage.alt = service.nama || 'Detail layanan VRRINS GARAGE';
    }
    if (detailCategory) detailCategory.textContent = service.kategori || 'LAYANAN VG';
    if (detailTitle) detailTitle.textContent = service.nama || 'Detail Layanan';
    if (detailDescription) detailDescription.textContent = service.deskripsi || '';
    if (detailPrice) detailPrice.textContent = service.harga || '-';
    if (detailDuration) detailDuration.textContent = service.durasi || '-';
    renderList(detailWork, service.pekerjaan, 'Pekerjaan akan dijelaskan setelah pemeriksaan.');
    renderList(detailExcluded, service.tidakTermasuk, 'Detail pengecualian akan dijelaskan sebelum pengerjaan.');
    if (detailNote) detailNote.textContent = 'Estimasi dapat disesuaikan berdasarkan kondisi kendaraan dan hasil pemeriksaan.';
    if (detailWhatsApp) detailWhatsApp.href = waURL(bookingMessage(service.nama));
  };

  const openServiceDetail = (id, trigger) => {
    const service = findService(id);
    if (!service) {
      showToast('Data layanan belum ditemukan.');
      return;
    }
    renderServiceDetail(service);
    openModal(serviceModal, trigger);
  };

  $$('.js-service-detail').forEach(button => button.addEventListener('click', () => {
    openServiceDetail(button.dataset.serviceId, button);
  }));

  $$('[data-service-price]').forEach(element => {
    const service = findService(element.dataset.servicePrice);
    if (service?.harga) element.textContent = service.harga;
  });
  $$('[data-service-duration]').forEach(element => {
    const service = findService(element.dataset.serviceDuration);
    if (service?.durasi) element.textContent = service.durasi;
  });

  const tuneCard = service => {
    const article = document.createElement('article');
    article.className = 'tune-package-card';
    article.innerHTML = `
      <div class="tune-package-card__icon">${esc(service.icon || '🔧')}</div>
      <div>
        <h3>${esc(service.nama)}</h3>
        <p>${esc(service.deskripsi || '')}</p>
        <div class="service-card__meta"><span>⏱ ${esc(service.durasi || '-')}</span> <strong>💰 ${esc(service.harga || '-')}</strong></div>
      </div>
      <button type="button" class="tune-package-card__button js-tune-service-detail" data-service-id="${esc(service.id)}">Detail</button>
    `;
    return article;
  };

  const renderTune = type => {
    if (!tuneGrid) return;
    tuneGrid.innerHTML = '';
    const items = getTuneServices(type);
    items.forEach(service => tuneGrid.appendChild(tuneCard(service)));
    const addons = getAddons();
    if (addons.length) {
      const heading = document.createElement('div');
      heading.className = 'tune-addon-heading';
      heading.innerHTML = '<span class="eyebrow">TAMBAHAN</span><h3>VG ADD-ON</h3>';
      tuneGrid.appendChild(heading);
      addons.forEach(service => tuneGrid.appendChild(tuneCard(service)));
    }
  };

  $$('.js-package-detail').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.packageId !== 'vg-tune') return;
    renderTune('bensin');
    $$('[data-tune-type]').forEach(tab => tab.classList.toggle('is-active', tab.dataset.tuneType === 'bensin'));
    openModal(packageModal, button);
  }));

  $$('[data-tune-type]').forEach(tab => tab.addEventListener('click', () => {
    $$('[data-tune-type]').forEach(item => item.classList.remove('is-active'));
    tab.classList.add('is-active');
    renderTune(tab.dataset.tuneType);
  }));

  document.addEventListener('click', event => {
    const button = event.target.closest('.js-tune-service-detail');
    if (!button) return;
    closeModal(packageModal);
    window.setTimeout(() => openServiceDetail(button.dataset.serviceId, button), 120);
  });

  const categoryServiceCard = service => {
    const article = document.createElement('article');
    article.className = 'category-detail__service';
    article.innerHTML = `
      <div class="category-detail__service-media">
        <img src="${esc(serviceImage(service))}" alt="${esc(service.nama)}" width="1000" height="700" loading="lazy">
      </div>
      <div class="category-detail__service-body">
        <div>
          <h3>${esc(service.nama)}</h3>
          <p>${esc(service.deskripsi || '')}</p>
        </div>
        <button type="button" class="category-detail__service-button js-category-service-detail" data-service-id="${esc(service.id)}">Lihat Detail</button>
      </div>
    `;
    return article;
  };

  const renderCategory = category => {
    if (!categoryContent) return;
    const items = getCategoryServices(category);
    categoryContent.innerHTML = `
      <div class="category-detail__hero">
        <img src="${esc(categoryImage(category))}" alt="${esc(category)}" width="1200" height="800" loading="eager">
      </div>
      <div class="category-detail__content">
        <span class="service-detail__category">${esc(category)}</span>
        <h2 id="category-modal-title">${esc(category)}</h2>
        <p class="category-detail__description">Pilih layanan sesuai kondisi atau keluhan kendaraan pada kategori ${esc(category)}.</p>
        <span class="category-detail__count">${items.length} layanan tersedia</span>
        <div class="category-detail__services"></div>
      </div>
    `;
    const container = $('.category-detail__services', categoryContent);
    items.forEach(service => container.appendChild(categoryServiceCard(service)));
  };

  $$('.js-category-detail').forEach(button => button.addEventListener('click', () => {
    renderCategory(button.dataset.categoryId);
    openModal(categoryModal, button);
  }));

  document.addEventListener('click', event => {
    const button = event.target.closest('.js-category-service-detail');
    if (!button) return;
    closeModal(categoryModal);
    window.setTimeout(() => openServiceDetail(button.dataset.serviceId, button), 120);
  });

  $$('.js-whatsapp').forEach(button => {
    button.addEventListener('click', event => {
      const raw = button.dataset.waMessage;
      if (!raw) return;
      event.preventDefault();
      let message = raw;
      try { message = decodeURIComponent(raw); } catch (_) {}
      window.open(waURL(message), '_blank', 'noopener,noreferrer');
    });
  });

  detailWhatsApp?.addEventListener('click', event => {
    if (!activeService) return;
    event.preventDefault();
    window.open(waURL(bookingMessage(activeService.nama)), '_blank', 'noopener,noreferrer');
  });

  $$('.faq-item').forEach(item => item.addEventListener('toggle', () => {
    if (!item.open) return;
    $$('.faq-item').forEach(other => {
      if (other !== item) other.removeAttribute('open');
    });
  }));

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 20);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const hideLoader = () => {
    if (!loader) return;
    loader.classList.add('is-hidden');
    window.setTimeout(() => loader.remove(), 500);
  };
  window.addEventListener('load', hideLoader, { once: true });
  if (document.readyState === 'complete') hideLoader();

  function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;
    const text = $('.toast__message', toast);
    if (text) text.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  }

  detailImage?.addEventListener('error', () => {
    if (!activeService) return;
    const fallback = packageImages[activeService.id];
    if (fallback && !detailImage.dataset.fallback) {
      detailImage.dataset.fallback = 'true';
      detailImage.src = fallback;
    }
  });
});