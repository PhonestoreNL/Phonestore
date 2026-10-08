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

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[char]));
}

function colorFor(name) {
  const colors = ['#168cff','#6e7bff','#20b8a6','#6c56d9','#3c7cff','#8995a5'];
  let total = 0;
  for (const char of name) total += char.charCodeAt(0);
  return colors[total % colors.length];
}

function productSvg(card) {
  const group = card.closest('[data-category-group]')?.dataset.categoryGroup || 'accessoires';
  const name = card.dataset.product || card.querySelector('h4')?.textContent || '';
  const accent = colorFor(name);
  const brand = card.querySelector('.product-brand')?.textContent || '';

  const base = '<rect width="600" height="420" rx="36" fill="#f5f8fc"/><circle cx="500" cy="80" r="140" fill="' + accent + '" opacity=".10"/><circle cx="100" cy="350" r="110" fill="' + accent + '" opacity=".06"/>';

  let art = '';
  if (group === 'smartphones') {
    art = '<g transform="translate(175 35) rotate(-7 95 165)"><rect width="190" height="340" rx="34" fill="#151e2b" stroke="#92a0b3" stroke-width="5"/><rect x="10" y="10" width="170" height="320" rx="27" fill="#102b50"/><circle cx="95" cy="166" r="62" fill="' + accent + '" opacity=".5"/><circle cx="145" cy="45" r="13" fill="#111827"/><rect x="18" y="18" width="154" height="75" rx="20" fill="' + accent + '" opacity=".16"/></g><g transform="translate(280 60) rotate(8 95 165)"><rect width="190" height="340" rx="34" fill="#0f1722" stroke="#7e8b9d" stroke-width="5"/><rect x="10" y="10" width="170" height="320" rx="27" fill="#ffffff"/><rect x="29" y="29" width="132" height="282" rx="21" fill="' + accent + '" opacity=".12"/><circle cx="61" cy="61" r="15" fill="#0a0f18"/><circle cx="98" cy="61" r="15" fill="#0a0f18"/><text x="95" y="198" text-anchor="middle" font-size="24" font-family="Arial" fill="#162033" font-weight="700">' + escapeXml(brand) + '</text></g>';
  } else if (group === 'audio') {
    art = '<rect x="145" y="85" width="310" height="210" rx="46" fill="#ffffff" stroke="#c8d1dc" stroke-width="5"/><path d="M165 135 Q300 220 435 135 L435 255 Q300 330 165 255Z" fill="#eef3f8"/><rect x="205" y="230" width="48" height="115" rx="24" fill="#ffffff" stroke="#c8d1dc" stroke-width="4"/><rect x="347" y="230" width="48" height="115" rx="24" fill="#ffffff" stroke="#c8d1dc" stroke-width="4"/><ellipse cx="229" cy="128" rx="35" ry="28" fill="#ffffff" stroke="#c8d1dc" stroke-width="4"/><ellipse cx="371" cy="128" rx="35" ry="28" fill="#ffffff" stroke="#c8d1dc" stroke-width="4"/><path d="M190 120 Q230 92 250 120" fill="none" stroke="' + accent + '" stroke-width="10" stroke-linecap="round"/><path d="M350 120 Q390 92 410 120" fill="none" stroke="' + accent + '" stroke-width="10" stroke-linecap="round"/>';
  } else if (group === 'tablets') {
    art = '<rect x="125" y="55" width="350" height="310" rx="30" fill="#172231" stroke="#78879a" stroke-width="5"/><rect x="140" y="70" width="320" height="280" rx="22" fill="' + accent + '" opacity=".28"/><path d="M165 265 Q295 90 430 230" fill="none" stroke="#ffffff" stroke-width="24" opacity=".55" stroke-linecap="round"/><circle cx="300" cy="340" r="4" fill="#748195"/>';
  } else if (group === 'smartwatches') {
    art = '<rect x="245" y="15" width="110" height="100" rx="22" fill="#111927"/><rect x="245" y="305" width="110" height="100" rx="22" fill="#111927"/><rect x="175" y="95" width="250" height="230" rx="60" fill="#151f2d" stroke="#8693a5" stroke-width="6"/><rect x="196" y="116" width="208" height="188" rx="45" fill="#080f18"/><circle cx="300" cy="210" r="68" fill="' + accent + '" opacity=".22"/><text x="300" y="225" text-anchor="middle" font-size="34" font-family="Arial" fill="#ffffff" font-weight="700">10:09</text>';
  } else if (group === 'screenprotectors') {
    art = '<rect x="205" y="35" width="190" height="350" rx="32" fill="#ffffff" fill-opacity=".35" stroke="' + accent + '" stroke-width="8"/><rect x="226" y="56" width="148" height="308" rx="23" fill="' + accent + '" opacity=".08"/><circle cx="300" cy="63" r="8" fill="#8391a4"/><path d="M240 120 L365 285" stroke="#ffffff" stroke-width="12" opacity=".75" stroke-linecap="round"/>';
  } else {
    art = '<rect x="190" y="80" width="220" height="240" rx="28" fill="#dfe7ef" stroke="#8d9bad" stroke-width="6"/><rect x="215" y="105" width="170" height="155" rx="20" fill="#ffffff"/><rect x="265" y="260" width="70" height="28" rx="10" fill="' + accent + '" opacity=".7"/><circle cx="360" cy="125" r="10" fill="' + accent + '"/>';
  }

  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 420">' + base + art + '</svg>';
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function setupProductImages() {
  document.querySelectorAll('.product-select').forEach(card => {
    const img = card.querySelector('.product-img');
    if (!img) return;
    const name = card.dataset.product || card.querySelector('h4')?.textContent || 'Product';
    img.src = productSvg(card);
    img.alt = name;
  });
}

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

setupProductImages();

const startTab = window.location.hash.replace('#', '');
showTab(startTab || 'home', false);
