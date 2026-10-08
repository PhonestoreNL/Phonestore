const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const panels = document.querySelectorAll('.page-panel');
const tabLinks = document.querySelectorAll('[data-tab]');

const assortmentTabs = document.querySelectorAll('.assortment-tab');
const productPanels = document.querySelectorAll('[data-category-group]');
const catalogOverview = document.querySelectorAll('.catalog-overview');
const catalogProductsView = document.querySelector('#catalog-products-view');
const categoryTitle = document.querySelector('#selected-category-title');
const productDetail = document.querySelector('#selected-product');
const productName = document.querySelector('#selected-product-name');
const productBrand = document.querySelector('#selected-product-brand');
const productPrice = document.querySelector('#selected-product-price');

function resetAssortmentView() {
  catalogOverview.forEach(item => item.hidden = false);
  if (catalogProductsView) catalogProductsView.hidden = true;
  productPanels.forEach(panel => panel.classList.remove('active'));
  if (productDetail) productDetail.hidden = true;
  document.querySelectorAll('.product-select').forEach(item => item.classList.remove('selected'));
}

function showTab(tabName, updateUrl = true) {
  const panel = document.querySelector(`[data-panel="${tabName}"]`);
  if (!panel) return;

  panels.forEach(item => item.classList.toggle('active', item === panel));

  document.querySelectorAll('.nav a[data-tab]').forEach(link => {
    const active = link.dataset.tab === tabName;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  window.scrollTo({top:0,behavior:'auto'});

  if (tabName === 'assortiment') resetAssortmentView();

  if (updateUrl) history.replaceState(null, '', `#${tabName}`);
}

tabLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    showTab(link.dataset.tab);
  });
});

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

assortmentTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const category = tab.dataset.category;

    catalogOverview.forEach(item => item.hidden = true);
    if (catalogProductsView) catalogProductsView.hidden = false;

    productPanels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.categoryGroup === category);
    });

    if (categoryTitle) categoryTitle.textContent = tab.querySelector('strong')?.textContent || '';

    if (productDetail) productDetail.hidden = true;
    document.querySelectorAll('.product-select').forEach(item => item.classList.remove('selected'));
    window.scrollTo({top:0,behavior:'smooth'});
  });
});

document.querySelectorAll('.product-select').forEach(card => {
  const selectProduct = () => {
    document.querySelectorAll('.product-select').forEach(item => item.classList.remove('selected'));
    card.classList.add('selected');
    const name = card.dataset.product || card.querySelector('h4')?.textContent || '';
    const brand = card.querySelector('.product-brand')?.textContent || '';
    const price = card.querySelector('.product-price')?.textContent || '';
    if (productDetail) productDetail.hidden = false;
    if (productName) productName.textContent = name;
    if (productBrand) productBrand.textContent = brand;
    if (productPrice) productPrice.textContent = price || '—';
  };

  card.addEventListener('click', selectProduct);
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectProduct();
    }
  });
});

const startTab = window.location.hash.replace('#', '');
showTab(startTab || 'home', false);
