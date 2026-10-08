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

const productDetails = {
  "iPhone 15": {brand:"Apple", price:"€ 549"},
  "iPhone 16": {brand:"Apple", price:"€ 599"},
  "iPhone 17": {brand:"Apple", price:"€ 749"},
  "Galaxy S25+": {brand:"Samsung", price:"€ 749"},
  "Galaxy Z Flip 7": {brand:"Samsung", price:"€ 849"},
  "Galaxy A56": {brand:"Samsung", price:"€ 349"},
  "Oppo Find X9": {brand:"Oppo", price:"€ 849"},
  "Oppo A5 Pro": {brand:"Oppo", price:"€ 229"},
  "Oppo Reno 14": {brand:"Oppo", price:"€ 499"},
  "AirPods 4": {brand:"Apple", price:"€ 149"},
  "AirPods Pro": {brand:"Apple", price:"€ 249"},
  "AirPods Max": {brand:"Apple", price:"€ 519"},
  "Samsung Buds 4 Pro": {brand:"Samsung", price:"€ 199"},
  "Oppo Enco X3": {brand:"Oppo", price:"€ 179"},
  "iPad A16": {brand:"Apple", price:"€ 449"},
  "iPad M2": {brand:"Apple", price:"€ 599"},
  "iPad A17 Pro": {brand:"Apple", price:"€ 699"},
  "Galaxy Tab S10+": {brand:"Samsung", price:"€ 749"},
  "Oppo Pad 3": {brand:"Oppo", price:"€ 449"},
  "Apple Watch serie 10": {brand:"Apple", price:"€ 399"},
  "Apple Watch serie 11": {brand:"Apple", price:"€ 449"},
  "Apple Watch SE 3": {brand:"Apple", price:"€ 249"},
  "Apple Watch Ultra 3": {brand:"Apple", price:"€ 749"},
  "Galaxy Watch 8": {brand:"Samsung", price:"€ 349"},
  "Oppo Watch X": {brand:"Oppo", price:"€ 299"},
  "iPhone 15 screenprotector": {brand:"Apple", price:"€ 17,50"},
  "iPhone 16 screenprotector": {brand:"Apple", price:"€ 17,50"},
  "iPhone 17 screenprotector": {brand:"Apple", price:"€ 17,50"},
  "Galaxy S25+ screenprotector": {brand:"Samsung", price:"€ 17,50"},
  "Galaxy Z Flip 7 screenprotector": {brand:"Samsung", price:"€ 17,50"},
  "Galaxy A56 screenprotector": {brand:"Samsung", price:"€ 17,50"},
  "Oppo Find X9 screenprotector": {brand:"Oppo", price:"€ 17,50"},
  "Oppo A5 Pro screenprotector": {brand:"Oppo", price:"€ 17,50"},
  "Oppo Reno 14 screenprotector": {brand:"Oppo", price:"€ 17,50"},
  "Powerbank zwart 20.000 mAh": {brand:"Accessoire", price:"€ 30"},
  "Powerbank roze 20.000 mAh": {brand:"Accessoire", price:"€ 30"},
  "Powerbank groen 20.000 mAh": {brand:"Accessoire", price:"€ 30"},
  "Apple oplader USB-C": {brand:"Apple", price:"€ 24,99"},
  "Samsung oplader USB-C": {brand:"Samsung", price:"€ 17,50"},
  "Oppo oplader USB-C": {brand:"Oppo", price:"€ 29,99"}
};

const productImages = {
  "iPhone 15":"https://marketplace.webuyanyphone.com/cdn/shop/files/iPhone_15.png?v=1757344627",
  "iPhone 16":"https://www.planeo.cz/-f52825---iVYgMLsS/iphone-16?field=data",
  "iPhone 17":"https://image.vandenborre.be/WEB/images/products/superzoom/apple_iphone-17-256gb-white_7654359_1.jpg",
  "Galaxy S25+":"https://i5.walmartimages.com/seo/AT-T-Samsung-S25-PLUS-Mint-512GB_8d97f4b8-4e26-4a84-93dd-1d8fcaa1307e.9b1de40d5046eaad0bdf39654df1e31a.jpeg",
  "Galaxy Z Flip 7":"https://s13emagst.akamaized.net/products/99055/99054934/images/res_3203477782b714378614fb5c0d8bbe39.jpg",
  "Galaxy A56":"https://www.samsung-online.com.ua/uploads/shop/products/large/8f83d93860572ccfc20de6f81911de66.jpg",
  "Oppo Find X9":"https://www.au.com/content/dam/au-com/common/graph/app/oppo_find_x9/oppo_find_x9_titaniumGray_01_535ad907fd6c596f.jpg",
  "Oppo A5 Pro":"https://smadshop.md/image/cache/product/telefony/mobilnye-telefony/oppo/mobilnyj-telefon-oppo-a5-pro-8-256gb-feather-blue-750x750.jpg",
  "Oppo Reno 14":"https://ehabgroup.com/wp-content/uploads/2025/08/Untitled-design-38.png",

  "AirPods 4":"https://youget.pt/190765-large_default/auriculares-apple-airpods-4-white.jpg",
  "AirPods Pro":"https://img.myshopline.com/image/store/1742938838999/pro2-b.png?h=2048&w=2048",
  "AirPods Max":"https://muzikercdn.com/uploads/products/6389/638917/main_c44c05b9.jpg",
  "Samsung Buds 4 Pro":"https://cellmigo.com/cdn/shop/files/r640-int-galaxy_buds-4_pro_black_1024x1024.jpg?v=1772598821",
  "Oppo Enco X3":"https://www.superplanshet.ru/images/OPPO_Enco_X3_82074144de5.jpg",

  "iPad A16":"https://istyle.ae/cdn/shop/files/IMG-16745587_m_jpg_1.jpg?v=1749028036",
  "iPad M2":"https://romex.ae/cdn/shop/files/iPadair2024SpaceGray.jpg",
  "iPad A17 Pro":"https://istore.ph/cdn/shop/files/iPad_mini_5G_Space_Gray_PDP_Image_Position_2_WiFi__ROSA-EN.jpg?v=1732691700&width=1100",
  "Galaxy Tab S10+":"https://smartkoshk.com/cdn/shop/files/2_962d3751-5f53-47c2-8e1a-20e7ba14ff48.png?v=1732449051&width=1920",
  "Oppo Pad 3":"https://metapod.com/cdn/shop/files/DM_20250119155559_001_23ef4f8c-df61-4359-8b47-a701f0784e27.jpg?v=1767860182&width=1946",

  "Apple Watch serie 10":"https://www.machines.com.my/cdn/shop/files/Apple_Watch_Series_10_46mm_GPS_Jet_Black_Aluminum_Sport_Band_Black_PDP_Image_Position_1__GBEN_77823829-f473-40ab-818d-07258bf4a524.jpg?v=1727184931",
  "Apple Watch serie 11":"https://vsprod.vijaysales.com/media/catalog/product/a/p/apple_watch_series_11_42mm_gps_jet_black_aluminum_sport_band_black_pdp_image_position_1__en-in_5.jpg?fit=bounds&height=500&optimize=medium&width=500",
  "Apple Watch SE 3":"https://media.binglee.com.au/cdn-cgi/image/fit%3Dscale-down%2Cf%3Dauto%2Cw%3D1079/a/f/8/3/af83fb2f9cbedb515b33a422f4c08a78cbfce5f9_Apple_MEH54XA_Smart_Watches_Hero_1.jpg",
  "Apple Watch Ultra 3":"https://www.humac.dk/sites/default/files/product-images/2025-09/Apple_Watch_Ultra_3_49mm_LTE_Natural_Titanium_Ocean_Band_Anchor_Blue_PDP_Image_Position_1__WWEN.jpg",
  "Galaxy Watch 8":"https://youget.pt/239264-large_default/smartwatch-samsung-galaxy-watch-8-40mm-gps-prateado.jpg",
  "Oppo Watch X":"https://img.pchome.com.tw/cs/items/DYAV3ZA900HAKOX/000001_1716864863.jpg",

  "iPhone 15 screenprotector":"https://www.mybat.com/cdn/shop/files/mybat-pro-tempered-glass-screen-protector-25d-for-apple-iphone-15-61-180730.jpg?v=1762441396",
  "iPhone 16 screenprotector":"https://www.mybat.com/cdn/shop/files/mybat-pro-tempered-glass-screen-protector-25d-for-apple-iphone-15-61-180730.jpg?v=1762441396",
  "iPhone 17 screenprotector":"https://www.mybat.com/cdn/shop/files/mybat-pro-tempered-glass-screen-protector-25d-for-apple-iphone-15-61-180730.jpg?v=1762441396",
  "Galaxy S25+ screenprotector":"https://www.mybat.com/cdn/shop/files/mybat-pro-tempered-glass-screen-protector-25d-for-apple-iphone-15-61-180730.jpg?v=1762441396",
  "Galaxy Z Flip 7 screenprotector":"https://www.mybat.com/cdn/shop/files/mybat-pro-tempered-glass-screen-protector-25d-for-apple-iphone-15-61-180730.jpg?v=1762441396",
  "Galaxy A56 screenprotector":"https://www.mybat.com/cdn/shop/files/mybat-pro-tempered-glass-screen-protector-25d-for-apple-iphone-15-61-180730.jpg?v=1762441396",
  "Oppo Find X9 screenprotector":"https://www.mybat.com/cdn/shop/files/mybat-pro-tempered-glass-screen-protector-25d-for-apple-iphone-15-61-180730.jpg?v=1762441396",
  "Oppo A5 Pro screenprotector":"https://www.mybat.com/cdn/shop/files/mybat-pro-tempered-glass-screen-protector-25d-for-apple-iphone-15-61-180730.jpg?v=1762441396",
  "Oppo Reno 14 screenprotector":"https://www.mybat.com/cdn/shop/files/mybat-pro-tempered-glass-screen-protector-25d-for-apple-iphone-15-61-180730.jpg?v=1762441396",

  "Powerbank zwart 20.000 mAh":"https://down-br.img.susercontent.com/file/br-11134275-7r98o-mad3ulx6d28f0e",
  "Powerbank roze 20.000 mAh":"https://media.falabella.com/falabellaPE/147490382_01/w%3D800%2Ch%3D800%2Cfit%3Dpad",
  "Powerbank groen 20.000 mAh":"https://www.cygnett.com/cdn/shop/files/CY4750PBCHE-1_1024x1024.png?v=1706762712",
  "Apple oplader USB-C":"https://britishmodules.com/cdn/shop/files/Apple20WUSB-CPowerAdapter.png?v=1775051934",
  "Samsung oplader USB-C":"https://media.falabella.com/falabellaPE/119143732_01/public",
  "Oppo oplader USB-C":"https://a.allegroimg.com/original/112e4a/1dc887574b2db083f1970ef514b5/Ladowarka-Sieciowa-Oppo-65W-USB-C-GaN-SuperVooc-VCA7JCEH-Kabel-USB-TYP-C"
};

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
    productPanels.forEach(panel => panel.classList.toggle('active', panel.dataset.categoryGroup === category));
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

document.querySelectorAll('[data-product-link]').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    const card = button.closest('.product-select');
    const name = card?.dataset.product || '';
    if (name) window.location.href = 'product.html?product=' + encodeURIComponent(name);
  });
});

document.querySelectorAll('.product-select').forEach(card => {
  const image = card.querySelector('.product-img');
  const name = card.dataset.product || card.querySelector('h4')?.textContent || '';
  if (image && productImages[name]) {
    image.src = productImages[name];
    image.alt = name;
    image.addEventListener('error', () => {
      image.classList.add('image-failed');
      if (!image.dataset.fallbackTried) {
        image.dataset.fallbackTried = '1';
        image.src = 'https://placehold.co/800x800/png?text=' + encodeURIComponent(name);
      }
    }, {once:true});
  }
});


const productPageImage = document.querySelector('#single-product-image');
const productPageName = document.querySelector('#single-product-name');
const productPageBrand = document.querySelector('#single-product-brand');
const productPagePrice = document.querySelector('#single-product-price');
const productPagePayment = document.querySelector('#single-product-payment');
const iphone15PaymentUrl = 'https://nl.penworldwide.org/buybuttons/nl01114/btn/7b961a93-d205-4d6c-a71c-ace218c286b9/';

if (productPageImage && productPageName) {
  const productParam = new URLSearchParams(window.location.search).get('product') || '';
  const productData = productParam;
  const brand = productDetails[productData]?.brand || '';
  const price = productDetails[productData]?.price || '';
  if (productData && productImages[productData]) {
    productPageName.textContent = productData;
    productPageBrand.textContent = brand;
    productPagePrice.textContent = price;
    if (productPagePayment) {
      productPagePayment.hidden = productData !== 'iPhone 15';
      productPagePayment.href = iphone15PaymentUrl;
    }
    productPageImage.src = productImages[productData];
    productPageImage.alt = productData;
    document.title = productData + ' | Phonestore';
  }
}

const startTab = window.location.hash.replace('#', '');
showTab(startTab || 'home', false);
