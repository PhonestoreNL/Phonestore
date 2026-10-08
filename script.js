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

const productImages = {
  "iPhone 15":"https://shopit.co.tz/images/detailed/122/iPhone-15.jpg",
  "iPhone 16":"https://images.snoonu.com/brand_product/2025-03/2eaf2320-e32e-4f7c-ba06-442428e699fd_output.png",
  "iPhone 17":"https://image.vandenborre.be/WEB/images/products/superzoom/apple_iphone-17-256gb-white_7654359_1.jpg",
  "Galaxy S25+":"https://www.chip.cz/sites/default/files/excel_import_zip/Samsung%20Galaxy%20S25%20Plus.jpg",
  "Galaxy Z Flip 7":"https://images.price.tools/images/samsung-galaxy-z-flip7-cell-phone-l-Sv1jjCpK2.jpg",
  "Galaxy A56":"https://www.samsung-online.com.ua/uploads/shop/products/large/8f83d93860572ccfc20de6f81911de66.jpg",
  "Oppo Find X9":"https://www.mistermobile.com.sg/wp-content/uploads/2025/10/Oppo-Find-X9-Titanium-Grey-1.png",
  "Oppo A5 Pro":"https://felixindoshops.com/image/cache/catalog/OPPO/A5%20PRO/BLUE-550x550h.png",
  "Oppo Reno 14":"https://media.power-cdn.net/images/h-005823fd5a1cc38392bbeede92d4330b/products/4162358/4162358_14_1200x1200_w_g.jpg",

  "AirPods 4":"https://cdn.ballicom.co.uk/?r=peyJpbWciOiJcL1wvaW1hZ2VzXC9jZG5cLzZiXC85MFwvNmI5MDcxYjctOWJiNy00Nzc0LWFjM2ItOGQyNzA3YTM5YTQ3LmpwZyIsInNpemUiOjg1MCwiZXh0ZW5zaW9uIjoianBnIn0%3Db",
  "AirPods Pro":"https://product.hstatic.net/200000722513/product/mwp22_c3552981274e43acaa2fa999645a1b18_a93e0fa0e0334e0e907bda97d5fd5c90_master.png",
  "AirPods Max":"https://ipac31.ru/image/cache/data/product/AirPods/8d44e630b31eb5105aa9b4bbd1a88413-1500x1500-700x700.jpeg",
  "Samsung Buds 4 Pro":"https://media.ldlc.com/r1600/ld/products/00/06/32/30/LD0006323019.jpg",
  "Oppo Enco X3":"https://www.superplanshet.ru/images/OPPO_Enco_X3_82074144de5.jpg",

  "iPad A16":"https://istyle.ae/cdn/shop/files/IMG-16745587_m_jpg_1.jpg?v=1749028036",
  "iPad M2":"https://nama.vn/img/upload/images/products/Apple/iPad/Air%20M2/space-gray.png",
  "iPad A17 Pro":"https://www.usucampusstore.com/Website-Images/Item%20Images/Apple%20iPad%20Mini%20A17%20Pro.1.jpeg?resizeh=1200&resizeid=5&resizew=1200",
  "Galaxy Tab S10+":"https://smartkoshk.com/cdn/shop/files/2_962d3751-5f53-47c2-8e1a-20e7ba14ff48.png?v=1732449051&width=1920",
  "Oppo Pad 3":"https://metapod.com/cdn/shop/files/DM_20250119155559_001_23ef4f8c-df61-4359-8b47-a701f0784e27.jpg?v=1767860182&width=1946",

  "Apple Watch serie 10":"https://www.machines.com.my/cdn/shop/files/Apple_Watch_Series_10_46mm_GPS_Jet_Black_Aluminum_Sport_Band_Black_PDP_Image_Position_1__GBEN_77823829-f473-40ab-818d-07258bf4a524.jpg?v=1727184931",
  "Apple Watch serie 11":"https://www.switch.sg/cdn/shop/files/IMG-18079955_m_jpeg_1_2c5492f3-d18f-4be6-bc56-e3e936776eff.jpg?v=1757490035",
  "Apple Watch SE 3":"https://static01.galaxus.com/productimages/3/4/6/7/4/6/4/2/4/7/1/9/4/4/2/8/3/0/7/019933ad-b655-768e-907f-5146395f5b2e_sea.jpeg",
  "Apple Watch Ultra 3":"https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/194/19451/19451651.jpg",
  "Galaxy Watch 8":"https://dam.elcorteingles.es/producto/www-001089060018788-00.jpg?height=1200&impolicy=Resize&width=1200",
  "Oppo Watch X":"https://img.pchome.com.tw/cs/items/DYAV3ZA900HAKOX/000001_1716864863.jpg",

  "iPhone 15 screenprotector":"https://i5.walmartimages.com/seo/Tempered-Glass-Screen-Protector-2-5D-for-Apple-iPhone-16-6-1-Clear_dbeadd4c-00fc-4f62-b1a5-983a51b4ca7e.63fa620cca0a36503123aa9baba75723.jpeg",
  "iPhone 16 screenprotector":"https://i5.walmartimages.com/seo/Tempered-Glass-Screen-Protector-2-5D-for-Apple-iPhone-16-6-1-Clear_dbeadd4c-00fc-4f62-b1a5-983a51b4ca7e.63fa620cca0a36503123aa9baba75723.jpeg",
  "iPhone 17 screenprotector":"https://i5.walmartimages.com/seo/Tempered-Glass-Screen-Protector-2-5D-for-Apple-iPhone-16-6-1-Clear_dbeadd4c-00fc-4f62-b1a5-983a51b4ca7e.63fa620cca0a36503123aa9baba75723.jpeg",
  "Galaxy S25+ screenprotector":"https://i5.walmartimages.com/seo/Tempered-Glass-Screen-Protector-2-5D-for-Apple-iPhone-16-6-1-Clear_dbeadd4c-00fc-4f62-b1a5-983a51b4ca7e.63fa620cca0a36503123aa9baba75723.jpeg",
  "Galaxy Z Flip 7 screenprotector":"https://i5.walmartimages.com/seo/Tempered-Glass-Screen-Protector-2-5D-for-Apple-iPhone-16-6-1-Clear_dbeadd4c-00fc-4f62-b1a5-983a51b4ca7e.63fa620cca0a36503123aa9baba75723.jpeg",
  "Galaxy A56 screenprotector":"https://i5.walmartimages.com/seo/Tempered-Glass-Screen-Protector-2-5D-for-Apple-iPhone-16-6-1-Clear_dbeadd4c-00fc-4f62-b1a5-983a51b4ca7e.63fa620cca0a36503123aa9baba75723.jpeg",
  "Oppo Find X9 screenprotector":"https://i5.walmartimages.com/seo/Tempered-Glass-Screen-Protector-2-5D-for-Apple-iPhone-16-6-1-Clear_dbeadd4c-00fc-4f62-b1a5-983a51b4ca7e.63fa620cca0a36503123aa9baba75723.jpeg",
  "Oppo A5 Pro screenprotector":"https://i5.walmartimages.com/seo/Tempered-Glass-Screen-Protector-2-5D-for-Apple-iPhone-16-6-1-Clear_dbeadd4c-00fc-4f62-b1a5-983a51b4ca7e.63fa620cca0a36503123aa9baba75723.jpeg",
  "Oppo Reno 14 screenprotector":"https://i5.walmartimages.com/seo/Tempered-Glass-Screen-Protector-2-5D-for-Apple-iPhone-16-6-1-Clear_dbeadd4c-00fc-4f62-b1a5-983a51b4ca7e.63fa620cca0a36503123aa9baba75723.jpeg",

  "Powerbank zwart 20.000 mAh":"https://uk.cygnett.com/cdn/shop/files/CY4345PBCHE-1_2835bd88-0f97-4a5b-9995-e76679fee60f_2376x.png?v=1737590386",
  "Powerbank roze 20.000 mAh":"https://media.falabella.com/falabellaPE/147490382_01/w%3D800%2Ch%3D800%2Cfit%3Dpad",
  "Powerbank groen 20.000 mAh":"https://www.anacondastores.com/medias/productHero-SPOTWF-BP90229116-green.jpg?context=bWFzdGVyfGltYWdlc3wxODUwNHxpbWFnZS9qcGVnfGltYWdlcy9oMDkvaGEzLzE2ODAwMzk3MTY0NTc0L3Byb2R1Y3RIZXJvX1NQT1RXRl9CUDkwMjI5MTE2LWdyZWVuLmpwZ3w3ZDU5Yjk3ZGI5ZDdhMWViY2ZhZWU0ZTU1NDk0N2M2NzQ0NGMzMzQ3ZDRkMjdiMDUyMDM1YmFhYjc1ZTJlODlm",
  "Apple oplader USB-C":"https://cdn-assets.office-partner.de/media/image/3e/09/d1/27422722_3P8jOGAvpjaj3E_600x600%402x.jpg?quality=90",
  "Samsung oplader USB-C":"https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/936/PMP00002151790/full_image-1.jpeg",
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

document.querySelectorAll('.product-select').forEach(card => {
  const image = card.querySelector('.product-img');
  const name = card.dataset.product || card.querySelector('h4')?.textContent || '';
  if (image && productImages[name]) {
    image.src = productImages[name];
    image.alt = name;
    image.addEventListener('error', () => {
      image.classList.add('image-failed');
    }, {once:true});
  }
});

const startTab = window.location.hash.replace('#', '');
showTab(startTab || 'home', false);
