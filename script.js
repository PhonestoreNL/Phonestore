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
  "iPhone 15": {brand:"Apple", price:"€ 664,29"},
  "iPhone 16": {brand:"Apple", price:"€ 724,79"},
  "iPhone 17": {brand:"Apple", price:"€ 906,29"},
  "Galaxy S25+": {brand:"Samsung", price:"€ 906,29"},
  "Galaxy Z Flip 7": {brand:"Samsung", price:"€ 1.027,29"},
  "Galaxy A56": {brand:"Samsung", price:"€ 422,29"},
  "Oppo Find X9": {brand:"Oppo", price:"€ 1.027,29"},
  "Oppo A5 Pro": {brand:"Oppo", price:"€ 277,09"},
  "Oppo Reno 14": {brand:"Oppo", price:"€ 603,79"},
  "AirPods 4": {brand:"Apple", price:"€ 180,29"},
  "AirPods Pro": {brand:"Apple", price:"€ 301,29"},
  "AirPods Max": {brand:"Apple", price:"€ 627,99"},
  "Samsung Buds 4 Pro": {brand:"Samsung", price:"€ 240,79"},
  "Oppo Enco X3": {brand:"Oppo", price:"€ 216,59"},
  "iPad A16": {brand:"Apple", price:"€ 543,29"},
  "iPad M2": {brand:"Apple", price:"€ 724,79"},
  "iPad A17 Pro": {brand:"Apple", price:"€ 845,79"},
  "Galaxy Tab S10+": {brand:"Samsung", price:"€ 906,29"},
  "Oppo Pad 3": {brand:"Oppo", price:"€ 543,29"},
  "Apple Watch serie 10": {brand:"Apple", price:"€ 482,79"},
  "Apple Watch serie 11": {brand:"Apple", price:"€ 543,29"},
  "Apple Watch SE 3": {brand:"Apple", price:"€ 301,29"},
  "Apple Watch Ultra 3": {brand:"Apple", price:"€ 906,29"},
  "Galaxy Watch 8": {brand:"Samsung", price:"€ 422,29"},
  "Oppo Watch X": {brand:"Oppo", price:"€ 361,79"},
  "iPhone 15 screenprotector": {brand:"Apple", price:"€ 21,18"},
  "iPhone 16 screenprotector": {brand:"Apple", price:"€ 21,18"},
  "iPhone 17 screenprotector": {brand:"Apple", price:"€ 21,18"},
  "Galaxy S25+ screenprotector": {brand:"Samsung", price:"€ 21,18"},
  "Galaxy Z Flip 7 screenprotector": {brand:"Samsung", price:"€ 21,18"},
  "Galaxy A56 screenprotector": {brand:"Samsung", price:"€ 21,18"},
  "Oppo Find X9 screenprotector": {brand:"Oppo", price:"€ 21,18"},
  "Oppo A5 Pro screenprotector": {brand:"Oppo", price:"€ 21,18"},
  "Oppo Reno 14 screenprotector": {brand:"Oppo", price:"€ 21,18"},
  "Powerbank zwart 20.000 mAh": {brand:"Accessoire", price:"€ 32,70"},
  "Powerbank roze 20.000 mAh": {brand:"Accessoire", price:"€ 32,70"},
  "Powerbank groen 20.000 mAh": {brand:"Accessoire", price:"€ 32,70"},
  "Apple oplader USB-C": {brand:"Apple", price:"€ 30,24"},
  "Samsung oplader USB-C": {brand:"Samsung", price:"€ 21,18"},
  "Oppo oplader USB-C": {brand:"Oppo", price:"€ 36,29"}
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
const paymentLinks = {
  "iPhone 15": "https://nl.penworldwide.org/buybuttons/nl01114/btn/7b961a93-d205-4d6c-a71c-ace218c286b9/",
  "iPhone 16": "https://nl.penworldwide.org/buybuttons/nl01114/btn/4bb340a5-3f65-4ea2-8761-cf287b7a6e3f/",
  "iPhone 17": "https://nl.penworldwide.org/buybuttons/nl01114/btn/c64d9937-fe61-44b4-9911-28cdd8272bd1/",
  "Galaxy S25+": "https://nl.penworldwide.org/buybuttons/nl01114/btn/e6bbbcf4-daf2-49b5-8105-2461991aacd1/",
  "Galaxy Z Flip 7": "https://nl.penworldwide.org/buybuttons/nl01114/btn/878725e1-f351-4d16-8345-ef3a3cee158b/",
  "Galaxy A56": "https://nl.penworldwide.org/buybuttons/nl01114/btn/afb72202-3ec6-4f70-9b64-16a80511f428/",
  "Oppo Find X9": "https://nl.penworldwide.org/buybuttons/nl01114/btn/532c8610-a621-4c97-a463-ef2e3d341dd0/",
  "Oppo A5 Pro": "https://nl.penworldwide.org/buybuttons/nl01114/btn/abf6cb7e-bea9-4211-9a57-270bc5deef1f/",
  "Oppo Reno 14": "https://nl.penworldwide.org/buybuttons/nl01114/btn/2e213e1c-d1cc-499c-bf26-2fceab90ad4a/",
  "AirPods 4": "https://nl.penworldwide.org/buybuttons/nl01114/btn/56ebeff9-ff5a-444a-ab9b-818f5b4181b8/",
  "AirPods Pro": "https://nl.penworldwide.org/buybuttons/nl01114/btn/7a1b7c97-fd07-467d-8641-afb4a5358adf/",
  "AirPods Max": "https://nl.penworldwide.org/buybuttons/nl01114/btn/a14772ad-d443-4414-9ff6-00341381e9c5/",
  "Samsung Buds 4 Pro": "https://nl.penworldwide.org/buybuttons/nl01114/btn/0578d44d-812f-4f92-81ed-b0b0152bc287/",
  "Oppo Enco X3": "https://nl.penworldwide.org/buybuttons/nl01114/btn/fc2e6571-3359-40ca-9f0c-55e5015b6c24/",
  "iPad A16": "https://nl.penworldwide.org/buybuttons/nl01114/btn/9c539c74-4c57-46ac-8a7e-d3b6515dba5a/",
  "iPad M2": "https://nl.penworldwide.org/buybuttons/nl01114/btn/d2464711-95dd-444d-a98f-b03fcab4afad/",
  "iPad A17 Pro": "https://nl.penworldwide.org/buybuttons/nl01114/btn/6c594fdd-b5d7-445e-8a8f-9bd1e371e355/",
  "Galaxy Tab S10+": "https://nl.penworldwide.org/buybuttons/nl01114/btn/0681baf8-f81f-456b-8c94-6dd6e3b96d9e/",
  "Oppo Pad 3": "https://nl.penworldwide.org/buybuttons/nl01114/btn/ffbcf706-4de0-41f1-8c7f-3dab55baf590/",
  "Apple Watch serie 10": "https://nl.penworldwide.org/buybuttons/nl01114/btn/52265a8d-f55f-4a06-a9c9-39272a604fec/",
  "Apple Watch serie 11": "https://nl.penworldwide.org/buybuttons/nl01114/btn/3a3e322a-0470-464a-938e-7a72490072c6/",
  "Apple Watch SE 3": "https://nl.penworldwide.org/buybuttons/nl01114/btn/f1545e15-2cdf-4106-bc89-a17a40035369/",
  "Apple Watch Ultra 3": "https://nl.penworldwide.org/buybuttons/nl01114/btn/51a93688-53b3-45ef-b70e-b097d2736efe/",
  "Galaxy Watch 8": "https://nl.penworldwide.org/buybuttons/nl01114/btn/277d818d-8faa-4748-8b8a-86939215f521/",
  "Oppo Watch X": "https://nl.penworldwide.org/buybuttons/nl01114/btn/a6710a38-f46d-4253-a260-bdb2440ed341/",
  "iPhone 15 screenprotector": "https://nl.penworldwide.org/buybuttons/nl01114/btn/fab860d3-6b52-4e90-bc0c-0683bdb0656d/",
  "iPhone 16 screenprotector": "https://nl.penworldwide.org/buybuttons/nl01114/btn/800ee841-e1f6-4b4d-ab4c-199178a83f35/",
  "iPhone 17 screenprotector": "https://nl.penworldwide.org/buybuttons/nl01114/btn/01939b8f-0903-4536-985e-3efccfdf84a8/",
  "Galaxy S25+ screenprotector": "https://nl.penworldwide.org/buybuttons/nl01114/btn/d2d82df6-b70e-420d-98bf-a080948a890b/",
  "Galaxy Z Flip 7 screenprotector": "https://nl.penworldwide.org/buybuttons/nl01114/btn/e907f576-a213-4082-99a2-5056a145ca5d/",
  "Galaxy A56 screenprotector": "https://nl.penworldwide.org/buybuttons/nl01114/btn/d0c5506a-4ba4-42be-a41d-14fedb8bc875/",
  "Oppo Find X9 screenprotector": "https://nl.penworldwide.org/buybuttons/nl01114/btn/1650e07e-886d-401b-ae3b-232089a90818/",
  "Oppo A5 Pro screenprotector": "https://nl.penworldwide.org/buybuttons/nl01114/btn/e867f1fe-7af2-45a9-834a-960481451222/",
  "Oppo Reno 14 screenprotector": "https://nl.penworldwide.org/buybuttons/nl01114/btn/923e5713-e399-4432-a313-639058466100/",
  "Powerbank zwart 20.000 mAh": "https://nl.penworldwide.org/buybuttons/nl01114/btn/55479977-0b31-42db-bfb1-b1973a52d26d/",
  "Powerbank roze 20.000 mAh": "https://nl.penworldwide.org/buybuttons/nl01114/btn/b6106d7a-fa64-4dc7-9de9-e9ff4414fb04/",
  "Powerbank groen 20.000 mAh": "https://nl.penworldwide.org/buybuttons/nl01114/btn/2b17ada6-e404-465f-9346-3f99c6cbff43/",
  "Apple oplader USB-C": "https://nl.penworldwide.org/buybuttons/nl01114/btn/179d9a05-5c1f-40df-b0e5-c74dea3c9682/",
  "Samsung oplader USB-C": "https://nl.penworldwide.org/buybuttons/nl01114/btn/3ea60490-fbc7-4dea-b482-41f5cf7abfc0/",
  "Oppo oplader USB-C": "https://nl.penworldwide.org/buybuttons/nl01114/btn/69611dfd-8f1c-468b-8ef1-c6e6c9890e95/"
};

const productPagePayment = document.querySelector('#single-product-payment');

if (productPageImage && productPageName) {
  const productParam = new URLSearchParams(window.location.search).get('product') || '';
  const productData = productParam;
  const brand = productDetails[productData]?.brand || '';
  const price = productDetails[productData]?.price || '';
  if (productData && productImages[productData]) {
    productPageName.textContent = productData;
    document.body.classList.toggle('screenprotector-detail', /screenprotector$/i.test(productData));
    productPageBrand.textContent = brand;
    productPagePrice.textContent = price;
    if (productPagePayment) {
      const paymentUrl = paymentLinks[productData] || '';
      productPagePayment.hidden = !paymentUrl;
      if (paymentUrl) productPagePayment.href = paymentUrl;
    }
    productPageImage.src = productImages[productData];
    productPageImage.alt = productData;
    document.title = productData + ' | Phonestore';
  }
}

const startTab = window.location.hash.replace('#', '');
showTab(startTab || 'home', false);
