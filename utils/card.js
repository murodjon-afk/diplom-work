export function createCard(item) {

    const datayear =document.querySelector('.data-year')
    const div = document.querySelector('.search-parent');
    const basketCount3 =document.querySelector('.basket-count3')
    const menucatalog =document.querySelector('.menu-catalog');
    const menubasket =document.querySelector('.menu-basket');
    const toHeart =document.querySelector('.toHeart');
    const searchingbtn=document.querySelector('.searching-btn'); 
    const pricecontainer2 =document.querySelector('.price-container2');
    const canselCtg = document.querySelector('.cansel-ctg');
    const openFilter = document.querySelector('.openFilter-ctg')
    const clothes = document.querySelector(".clothes");
    const tech = document.querySelector(".technieque");
    const shoe = document.querySelector(".shoes");
    const searchContainer = document.querySelector('.search-container');
    const input = document.querySelector("input");  
    const toPage = document.querySelector('.toPage ')
    const toPage2 = document.querySelector('.toPage2 ')
    const groceries = document.querySelector('.groceries');
    const overlay = document.querySelector('.overlay')
    const lovely = document.querySelector('.lovely')
    const tofovorite = document.querySelector('.tofovorite')
    const cardParent = document.querySelector('.card-parent')
    const toFovoriteParent = document.querySelector('.toFovorite-parent')
    const nothingheart =document.querySelector('.nothing-heart')
    const basketParent2 = document.querySelector('.basket-parent2');
   const lovelytext = document.querySelector('.lovely-text')
   const categoryBeauty = document.querySelector('.category-beaty');
   const categoryFragrances = document.querySelector('.category-fregrances');
   const categoryFurniture = document.querySelector('.category-furniture');
   const categoryGrociries = document.querySelector('.category-grociries');
   const techCategory = document.querySelector('.tech-category');
   const clothesCategory = document.querySelector('.clothes-category')
   const searchinglobby =document.querySelector('.searching-lobby')
   const shoeCategory = document.querySelector('.shoe-category')
   const groceriesCategory = document.querySelector('.groceries-category')
  const catalogPage =document.querySelector('.catalog-page')
  const catalog = document.querySelector('.catalog');
  const catalogContainer = document.querySelector('.catalog-container');
 const uzumSection = document.querySelector('.uzum-section')
 const beautyButton = document.querySelector('.beauty');
const groceriesButton = document.querySelector('.grocerie');
const fragrancesButton = document.querySelector('.fragrances');
const furnitureButton = document.querySelector('.furniture');
const ctgh1 =document.querySelector('.ctg-h1')
const basketBtn = document.querySelector('.basket');
const priceMin = document.getElementById('price-min');
const priceMax = document.getElementById('price-max');
const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');
const acceptBtn = document.querySelector('.accept-Filter')
const nothingBasket =document.querySelector('.nothing-basket')
const beauty = document.querySelector('.category-beaty');
const fragrances = document.querySelector('.category-fregrances');
const furniture = document.querySelector('.category-furniture');
const groceries2 = document.querySelector('.category-grociries');
const basketPrice = document.querySelector('.basket-price');
const basketSale = document.querySelector('.basket-sale');
const basketCount =document.querySelector('.basket-count');
const basketCount2 =document.querySelector('.basket-count2');
const btnPay = document.querySelector('.btn-pay');
const globalBtn = document.querySelector('.global-page');
const paymentModule =document.querySelector('.payment-module');
const orderBlock =document.querySelector('.order-block')
const forMoney = document.querySelector('.forMoney')
const forUzCard = document.querySelector('.forUzCard')
const forMaster = document.querySelector('.forMasterCard')
const forHumo =document.querySelector('.forHumo')
const infoPayContainer = document.querySelector('.info-pay');
const totalPriceElement = document.querySelector('.totalPrice');
const totalCountElement = document.querySelector('.totalCount');
const totalSaleElement = document.querySelector('.totalSale');
const totalPayButton = document.querySelector('.tatalPaybtn');
const ignore = document.querySelector('.ignore')
const payCansel = document.querySelector('.pay-cansel')
const canselProduct=document.querySelector('.cansel-product')
const cardNumberInput = document.querySelector('#card-number');     
const cardPasswordInput = document.querySelector('.card-password');
const cardDateInput = document.querySelector('.card-data');  
const btnpayproduct =document.querySelector('.btn-pay-product')

searchingbtn.onclick=()=>{
    window.location.href='./index.html'
}
globalBtn.onclick=()=>{
    window.location.href='./index.html'
}
function updateMin() {
  const minValue = Math.min(parseInt(rangeMin.value), parseInt(rangeMax.value));
  priceMin.value = minValue;
  rangeMin.value = minValue;
}
function updateMax() {
  const maxValue = Math.max(parseInt(rangeMin.value), parseInt(rangeMax.value));
  priceMax.value = maxValue;
  rangeMax.value = maxValue;
}
priceMin.addEventListener('input', () => {
  rangeMin.value = priceMin.value;
  updateMin();

  
});
priceMax.addEventListener('input', () => {
  rangeMax.value = priceMax.value;
  updateMax();
});
rangeMin.addEventListener('input', () => {
  priceMin.value = rangeMin.value;
  updateMin();
});
rangeMax.addEventListener('input', () => {
  priceMax.value = rangeMax.value;
  updateMax();
});
toPage2.onclick=()=>{
    window.location.href='./index.html'
}
 
openFilter.onclick=()=>{
    pricecontainer2.style.display='flex';
    overlay.style.display='block'
}

canselCtg.onclick=()=>{
       pricecontainer2.style.display='none';
    overlay.style.display='none'
    priceMax.value=3000;
    createCard(item)
    
    
}
acceptBtn.onclick=()=>{
           pricecontainer2.style.display='none';
    overlay.style.display='none'
}

toPage.onclick=()=>{
    window.location.href='./index.html'
}   
    const categoryTexts = {
        beauty: document.querySelector('.clothes-text'),
        fragrances: document.querySelector('.shoes-text'),
        furniture: document.querySelector('.technieque-text'),
        groceries: document.querySelector('.groceries-text'),
    };
    const card = document.createElement("div");


    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("p");
    const priceContainer = document.createElement("div");
    const oldPrice = document.createElement("p");
    const priceAndCart = document.createElement("div");
    const price = document.createElement("p");
   
   
    const cartIcon = document.createElement("span");
    const toLove = document.createElement('span');
    const backetAndSave = document.createElement('div');
    document.body.appendChild(cartIcon);

    toLove.innerHTML = "&#10084;";
    toLove.style.cursor = 'pointer';


    card.className = "card";
    imgContainer.className = "img-container";
    title.className = "title";
    priceContainer.className = "price-container";
    oldPrice.className = "old-price";
    priceAndCart.className = "price-and-cart";
    price.className = "price";
    cartIcon.className = "cart-icon";
    toLove.className = "toLove"
    document.body.appendChild(cartIcon);


    title.innerText = item.description.length > 20 
        ? item.title.slice(0, 20) + '...' 
        : item.title;

        const newPrice = (item.price * (1 - item.discountPercentage / 100)).toFixed(2);

        oldPrice.innerText = item.price + '$';
        price.innerText = newPrice + '$';
        cartIcon.innerHTML = `<svg width="25" height="25" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="26" height="26" rx="13" stroke="#ACACAC" fill="none"/>
        <g clip-path="url(#clip0_1_37)">
          <path d="M10.8752 19.9167C11.1743 19.9167 11.4168 19.6742 11.4168 19.375C11.4168 19.0759 11.1743 18.8334 10.8752 18.8334C10.576 18.8334 10.3335 19.0759 10.3335 19.375C10.3335 19.6742 10.576 19.9167 10.8752 19.9167Z" 
                stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.8332 19.9167C17.1323 19.9167 17.3748 19.6742 17.3748 19.375C17.3748 19.0759 17.1323 18.8334 16.8332 18.8334C16.534 18.8334 16.2915 19.0759 16.2915 19.375C16.2915 19.6742 16.534 19.9167 16.8332 19.9167Z" 
                stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.5415 8.54163H8.70817L10.1598 15.7945C10.2094 16.0439 10.345 16.2679 10.5431 16.4274C10.7411 16.5868 10.989 16.6715 11.2432 16.6666H16.5082C16.7624 16.6715 17.0102 16.5868 17.2083 16.4274C17.4063 16.2679 17.542 16.0439 17.5915 15.7945L18.4582 11.25H9.24984" 
                stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_1_37">
            <rect width="13" height="13" fill="white" transform="translate(6 8)"/>
          </clipPath>
        </defs>
      </svg>`;
      
        
        const shortNewPrice = newPrice < 1
            ? (newPrice * 1).toFixed(2) + "$" 
            : newPrice + "$";
        
        if (item.price < 1) {
            price.innerHTML = shortNewPrice;
        }

       

    img.setAttribute("src", item.images[0]);
    img.setAttribute("alt", "Продукт");
function updateLovelyDisplay() {
    if (lovely.children.length === 0) {
        nothingheart.style.display = 'block';
        lovely.style.display = 'none';
        lovelytext.innerHTML = ''; 
    } else {
        nothingheart.style.display = 'none';
        lovely.style.display = 'grid';
        lovelytext.innerHTML = 'Избранное'; 
    }
}
const loveKey = `toLoveColor-${item.id}`;
toLove.style.color = localStorage.getItem(loveKey) === "purple" ? "purple" : "grey";
toLove.onclick = () => { 
    const newColor = toLove.style.color === "purple" ? "grey" : "purple";
    toLove.style.color = newColor;
    localStorage.setItem(loveKey, newColor);
    const existingCard = lovely.querySelector(`[id="${item.id}"]`);
    if (newColor === "purple") {
        if (!existingCard) {
            const newCard = createCard(item); 
            newCard.setAttribute("id", item.id);
            lovely.appendChild(newCard);
            let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
            savedItems.push(item);
            localStorage.setItem('savedItems', JSON.stringify(savedItems));
        }
    } else {
        if (existingCard) {
            existingCard.remove();
            let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
            savedItems = savedItems.filter(savedItem => savedItem.id !== item.id);
            localStorage.setItem('savedItems', JSON.stringify(savedItems));
        }
    }
    updateLovelyDisplay();
};
tofovorite.onclick = () => {
    basketParent2.style.display='none'
    if (searchinglobby.style.display === 'block') {
        searchinglobby.style.display = 'none';
    }
    if (tofovorite.innerHTML === 'Избранное') {
        basketBtn.innerHTML='Корзина';
        basketItem.innerHTML='';
        basketParent2.style.display='none;'
        document.title = 'Избранное';
        tofovorite.innerHTML = 'Главная';
        cardParent.style.display = 'none';
        toFovoriteParent.style.display = 'block';
        let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
        savedItems.forEach(item => {
            const existingCard = lovely.querySelector(`[id="${item.id}"]`);
            if (!existingCard) {
                const newCard = createCard(item); 
                newCard.setAttribute("id", item.id);
                lovely.appendChild(newCard);
            }
        });
    } else {
      window.location.href='./index.html'
    }
    updateLovelyDisplay();
};
toHeart.onclick = () => {
    catalogPage.style.display='none';
  if (    menucatalog.innerText==='Главная') {
    menucatalog.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve"><defs> </defs>
    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
      <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #7000ff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
      <path d="M 39.205 56.741 c -4.518 0 -9.035 -1.72 -12.475 -5.159 c -6.879 -6.879 -6.879 -18.072 0 -24.95 c 6.877 -6.878 18.071 -6.879 24.95 0 v 0 c 6.878 6.878 6.878 18.071 0 24.95 C 48.24 55.021 43.723 56.741 39.205 56.741 z M 39.205 27.47 c -2.981 0 -5.962 1.135 -8.232 3.404 c -4.539 4.539 -4.539 11.925 0 16.465 c 4.539 4.538 11.925 4.538 16.465 0 c 4.539 -4.54 4.539 -11.926 0 -16.466 C 45.167 28.605 42.186 27.47 39.205 27.47 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      <path d="M 65.276 68.179 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 47.438 51.582 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 15.718 15.718 c 1.172 1.171 1.172 3.071 0 4.242 C 66.812 67.886 66.044 68.179 65.276 68.179 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g>
    </svg>Каталог`;
  }
    basketItem.innerHTML='';
    basketParent2.style.display='none';
    menubasket.innerHTML=`  <?xml version="1.0" encoding="iso-8859-1"?>
            <svg version="1.1" width="30" height="30" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 459.529 459.529" style="enable-background:new 0 0 459.529 459.529;" xml:space="preserve">
              <g>
                <path fill="#7000ff" d="M17,55.231h48.733l69.417,251.033c1.983,7.367,8.783,12.467,16.433,12.467h213.35c6.8,0,12.75-3.967,15.583-10.2
                  l77.633-178.5c2.267-5.383,1.7-11.333-1.417-16.15c-3.117-4.817-8.5-7.65-14.167-7.65H206.833c-9.35,0-17,7.65-17,17
                  s7.65,17,17,17H416.5l-62.9,144.5H164.333L94.917,33.698c-1.983-7.367-8.783-12.467-16.433-12.467H17c-9.35,0-17,7.65-17,17
                  S7.65,55.231,17,55.231z"/>
                <path fill="#7000ff" d="M135.433,438.298c21.25,0,38.533-17.283,38.533-38.533s-17.283-38.533-38.533-38.533S96.9,378.514,96.9,399.764
                  S114.183,438.298,135.433,438.298z"/>
                <path fill="#7000ff" d="M376.267,438.298c0.85,0,1.983,0,2.833,0c10.2-0.85,19.55-5.383,26.35-13.317c6.8-7.65,9.917-17.567,9.35-28.05
                  c-1.417-20.967-19.833-37.117-41.083-35.7c-21.25,1.417-37.117,20.117-35.7,41.083
                  C339.433,422.431,356.15,438.298,376.267,438.298z"/>
              </g>
            </svg>
            Корзина`
    if (searchinglobby.style.display === 'block') {
        searchinglobby.style.display = 'none';
    }
    if (toHeart.innerText === 'Избранное') {
        document.title = 'Избранное';
        toHeart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" fill="#7000ff"/></svg>Главное`;
        cardParent.style.display = 'none';
        toFovoriteParent.style.display = 'block';
        let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
        savedItems.forEach(item => {
            const existingCard = lovely.querySelector(`[id="${item.id}"]`);
            if (!existingCard) {
                const newCard = createCard(item); 
                newCard.setAttribute("id", item.id);
                lovely.appendChild(newCard);
            }
        });
    } else {
      window.location.href='./index.html'
    }
    updateLovelyDisplay();
};


    

    const currentColor = localStorage.getItem(loveKey) || "grey";
    toLove.style.color = currentColor;
    
    
    img.onclick = () => {
        window.location.href = `http://127.0.0.1:5500/utils/product.html?id=${item.id}`;
    };

    price.onclick = () => {
        window.location.href = `http://127.0.0.1:5500/utils/product.html?id=${item.id}`;
    };

    oldPrice.onclick = () => {
        window.location.href = `http://127.0.0.1:5500/utils/product.html?id=${item.id}`;
    };

    title.onclick = () => {
        window.location.href = `http://127.0.0.1:5500/utils/product.html?id=${item.id}`;
    };


    input.addEventListener("input", function () {
        toFovoriteParent.style.display='none';
        basketParent2.style.display='none';
        tofovorite.innerHTML='Избранноое';
        basketBtn.innerHTML='Корзина';
        if (/[a-zA-Zа-яА-Я]/.test(input.value)) {
            searchinglobby.style.display='block';
            div.style.display='grid';
            cardParent.style.display='none';
            div.append(card);
            if (catalog.innerHTML === 'Главная') {
                window.location.href='./index.html';
                return;
            }
    
            const searchQuery = input.value.toLowerCase();
            const cards = document.querySelectorAll(".card");
            searchContainer.innerHTML = '';
    
            cards.forEach(card => {
                const titleElement = card.querySelector(".title");
                if (titleElement.innerText.toLowerCase().includes(searchQuery)) {
                    card.style.display = "block";
                    const searchText = document.createElement('p');
                    searchText.style.cursor='pointer';
                    searchText.textContent = ` ${titleElement.innerText}` || 'Ничего не Найдено';
                    searchContainer.append(searchText);
                    searchText.className = 'search-text';
                } else {
                    card.style.display = "none";
                }
            });
    
            if (searchQuery) {
                overlay.style.display = 'block'; 
            } else {
                overlay.style.display = 'none'; 
            }
    
            searchContainer.style.display = searchQuery ? 'block' : 'none';
        } else {
            searchContainer.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
    

    backetAndSave.style.display = 'flex';
    backetAndSave.style.justifyContent = 'center';
    backetAndSave.style.alignItems = 'center';
    backetAndSave.style.gap = '10px';
    imgContainer.appendChild(img);
    imgContainer.append(toLove)
    backetAndSave.append( cartIcon);
    const ctgOldParent = document.createElement('div')
    const categoryP = document.createElement('p')
    categoryP.className = 'category-p'
    categoryP.innerHTML = item.category;
    ctgOldParent.className = 'old-ctg'
    ctgOldParent.append(oldPrice , categoryP)
    priceAndCart.append(price, backetAndSave);
    priceContainer.append(title, ctgOldParent ,  priceAndCart);
    card.append(imgContainer, priceContainer);
    if (cartIcon) {
        cartIcon.onclick = () => {
          alert('норм');
          cartIcon.style.backgroundColor = 'red';
        };
      } else {
        console.error('Элемент с id "cartIcon" не найден!');
      }
    const categoryContainers = {
        beauty: clothes,
        fragrances: shoe,
        furniture: tech,
        groceries: groceries,
    };

    if (categoryContainers[item.category]) {
        categoryContainers[item.category].appendChild(card);
        if (categoryTexts[item.category]) {
            categoryTexts[item.category].innerHTML = item.category;
        }
    } 



    const card2 = card.cloneNode(true);
const price2 = card2.querySelector('.price')
const toLove2 = card2.querySelector('.toLove')
const oldPrice2 = card2.querySelector('.old-price')
const img2 = card2.querySelector('img')
const title2 = card2.querySelector('.title')
img2.onclick = () => {
    window.location.href = `http://127.0.0.1:5500/utils/product.html?id=${item.id}`;
};

price2.onclick = () => {
    window.location.href = `http://127.0.0.1:5500/utils/product.html?id=${item.id}`;
};

oldPrice2.onclick = () => {
    window.location.href = `http://127.0.0.1:5500/utils/product.html?id=${item.id}`;
};

title2.onclick = () => {
    window.location.href = `http://127.0.0.1:5500/utils/product.html?id=${item.id}`;
};
card2.className='card';
if (categoryFurniture && item.category === 'furniture') {
    categoryFurniture.append(card2);
} else if (categoryBeauty && item.category === 'beauty') {
    categoryBeauty.append(card2);
} else if (categoryFragrances && item.category === 'fragrances') {
    categoryFragrances.append(card2);
} else if (categoryGrociries && item.category === 'groceries') {
    categoryGrociries.append(card2);
}
toLove2.style.color = localStorage.getItem(loveKey) === "purple" ? "purple" : "grey";

toLove2.onclick = () => {
  const newColor = toLove2.style.color === "purple" ? "grey" : "purple";
  toLove2.style.color = newColor;
  localStorage.setItem(loveKey, newColor);
  if (lovely.children.length === 0) {
    nothingheart.style.display = 'block';
    lovely.style.display = 'none';
    lovelytext.innerHTML = '';
  } else {
    nothingheart.style.display = 'none';
    lovely.style.display = 'grid';
  }

  if (lovely.contains(card2)) {
    toLove2.style.color = 'purple';
  }
};



beautyButton.onclick=()=>{
    categoryFurniture.style.display = 'none';
    categoryBeauty.style.display = 'grid'; 
    categoryFragrances.style.display = 'none'; 
    categoryGrociries.style.display = 'none';
    ctgh1.innerHTML = `Категория ${beautyButton.innerHTML}`;
    toFovoriteParent.style.display = 'none'
    if (beauty.children.length !== 0) {
        
    }
    

}

groceriesButton.onclick=()=>{
    categoryFurniture.style.display = 'none';
    categoryBeauty.style.display = 'none'; 
    categoryFragrances.style.display = 'none'; 
    categoryGrociries.style.display = 'grid';
      ctgh1.innerHTML = `Категория ${groceriesButton.innerHTML}`
      toFovoriteParent.style.display = 'none'

}

fragrancesButton.onclick=()=>{
    categoryFurniture.style.display = 'none';
    categoryBeauty.style.display = 'none'; 
    categoryFragrances.style.display = 'grid'; 
    categoryGrociries.style.display = 'none';
      ctgh1.innerHTML = `Категория ${fragrancesButton.innerHTML}`;
      toFovoriteParent.style.display = 'none'
     tofovorite.innerHTML = 'Избранное'
}

furnitureButton.onclick=()=>{
    categoryFurniture.style.display = 'grid';
    categoryBeauty.style.display = 'none'; 
    categoryFragrances.style.display = 'none'; 
    categoryGrociries.style.display = 'none';
      ctgh1.innerHTML = `Категория ${furnitureButton.innerHTML}`;
      toFovoriteParent.style.display = 'none'
 tofovorite.innerHTML = 'Избранное'
}
clothesCategory.onclick = () => {
    basketItem.innerHTML='';
    categoryFurniture.style.display = 'none';
    categoryBeauty.style.display = 'grid'; 
    categoryFragrances.style.display = 'none'; 
    categoryGrociries.style.display = 'none'; 
    catalogPage.style.display = 'flex';
    catalog.innerHTML = 'Каталог';
    catalogContainer.style.display = 'none'
    overlay.style.display = 'none'
    uzumSection.style.paddingBottom = '0px'
    cardParent.style.display = 'none'
    catalog.innerHTML = 'Главная';
    menucatalog.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve"><defs> </defs>
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
            <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #7000ff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
            <path d="M 39.205 56.741 c -4.518 0 -9.035 -1.72 -12.475 -5.159 c -6.879 -6.879 -6.879 -18.072 0 -24.95 c 6.877 -6.878 18.071 -6.879 24.95 0 v 0 c 6.878 6.878 6.878 18.071 0 24.95 C 48.24 55.021 43.723 56.741 39.205 56.741 z M 39.205 27.47 c -2.981 0 -5.962 1.135 -8.232 3.404 c -4.539 4.539 -4.539 11.925 0 16.465 c 4.539 4.538 11.925 4.538 16.465 0 c 4.539 -4.54 4.539 -11.926 0 -16.466 C 45.167 28.605 42.186 27.47 39.205 27.47 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 65.276 68.179 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 47.438 51.582 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 15.718 15.718 c 1.172 1.171 1.172 3.071 0 4.242 C 66.812 67.886 66.044 68.179 65.276 68.179 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g>
          </svg>Главная`;
      ctgh1.innerHTML = `Категория ${beautyButton.innerHTML}`
      toFovoriteParent.style.display = 'none'
      document.title = 'Каталог';
 tofovorite.innerHTML = 'Избранное'
 basketParent2.style.display='none'
  basketBtn.innerHTML='Корзина'
    menubasket.innerHTML= `    <?xml version="1.0" encoding="iso-8859-1"?>
    <svg version="1.1" width="30" height="30" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 459.529 459.529" style="enable-background:new 0 0 459.529 459.529;" xml:space="preserve">
      <g>
        <path fill="#7000ff" d="M17,55.231h48.733l69.417,251.033c1.983,7.367,8.783,12.467,16.433,12.467h213.35c6.8,0,12.75-3.967,15.583-10.2
          l77.633-178.5c2.267-5.383,1.7-11.333-1.417-16.15c-3.117-4.817-8.5-7.65-14.167-7.65H206.833c-9.35,0-17,7.65-17,17
          s7.65,17,17,17H416.5l-62.9,144.5H164.333L94.917,33.698c-1.983-7.367-8.783-12.467-16.433-12.467H17c-9.35,0-17,7.65-17,17
          S7.65,55.231,17,55.231z"/>
        <path fill="#7000ff" d="M135.433,438.298c21.25,0,38.533-17.283,38.533-38.533s-17.283-38.533-38.533-38.533S96.9,378.514,96.9,399.764
          S114.183,438.298,135.433,438.298z"/>
        <path fill="#7000ff" d="M376.267,438.298c0.85,0,1.983,0,2.833,0c10.2-0.85,19.55-5.383,26.35-13.317c6.8-7.65,9.917-17.567,9.35-28.05
          c-1.417-20.967-19.833-37.117-41.083-35.7c-21.25,1.417-37.117,20.117-35.7,41.083
          C339.433,422.431,356.15,438.298,376.267,438.298z"/>
      </g>
    </svg>
    Корзина`;
  if ( searchinglobby.style.display==='block') {
    alert('Перед тем как Что то сделать Выйдите с Режима Поиск')
     window.location.href='./index.html'
  }
};

techCategory.onclick = () => {
    basketItem.innerHTML='';
    categoryFurniture.style.display = 'grid';
    categoryBeauty.style.display = 'none'; 
    categoryFragrances.style.display = 'none'; 
    categoryGrociries.style.display = 'none'; 
    catalogPage.style.display = 'flex'
    catalog.innerHTML = 'Каталог';
    catalogContainer.style.display = 'none'
    overlay.style.display = 'none'
    uzumSection.style.paddingBottom = '0px'
    uzumSection.style.paddingBottom = '0px'
    cardParent.style.display = 'none'
     catalog.innerHTML = 'Главная'
     toFovoriteParent.style.display = 'none'
     document.title = 'Каталог';
 tofovorite.innerHTML = 'Избранное'
 basketParent2.style.display='none'
  basketBtn.innerHTML='Корзина'
  menucatalog.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve"><defs> </defs>
  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
    <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #7000ff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
    <path d="M 39.205 56.741 c -4.518 0 -9.035 -1.72 -12.475 -5.159 c -6.879 -6.879 -6.879 -18.072 0 -24.95 c 6.877 -6.878 18.071 -6.879 24.95 0 v 0 c 6.878 6.878 6.878 18.071 0 24.95 C 48.24 55.021 43.723 56.741 39.205 56.741 z M 39.205 27.47 c -2.981 0 -5.962 1.135 -8.232 3.404 c -4.539 4.539 -4.539 11.925 0 16.465 c 4.539 4.538 11.925 4.538 16.465 0 c 4.539 -4.54 4.539 -11.926 0 -16.466 C 45.167 28.605 42.186 27.47 39.205 27.47 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
    <path d="M 65.276 68.179 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 47.438 51.582 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 15.718 15.718 c 1.172 1.171 1.172 3.071 0 4.242 C 66.812 67.886 66.044 68.179 65.276 68.179 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g>
  </svg>Главная`;
     menubasket.innerHTML= `    <?xml version="1.0" encoding="iso-8859-1"?>
     <svg version="1.1" width="30" height="30" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 459.529 459.529" style="enable-background:new 0 0 459.529 459.529;" xml:space="preserve">
       <g>
         <path fill="#7000ff" d="M17,55.231h48.733l69.417,251.033c1.983,7.367,8.783,12.467,16.433,12.467h213.35c6.8,0,12.75-3.967,15.583-10.2
           l77.633-178.5c2.267-5.383,1.7-11.333-1.417-16.15c-3.117-4.817-8.5-7.65-14.167-7.65H206.833c-9.35,0-17,7.65-17,17
           s7.65,17,17,17H416.5l-62.9,144.5H164.333L94.917,33.698c-1.983-7.367-8.783-12.467-16.433-12.467H17c-9.35,0-17,7.65-17,17
           S7.65,55.231,17,55.231z"/>
         <path fill="#7000ff" d="M135.433,438.298c21.25,0,38.533-17.283,38.533-38.533s-17.283-38.533-38.533-38.533S96.9,378.514,96.9,399.764
           S114.183,438.298,135.433,438.298z"/>
         <path fill="#7000ff" d="M376.267,438.298c0.85,0,1.983,0,2.833,0c10.2-0.85,19.55-5.383,26.35-13.317c6.8-7.65,9.917-17.567,9.35-28.05
           c-1.417-20.967-19.833-37.117-41.083-35.7c-21.25,1.417-37.117,20.117-35.7,41.083
           C339.433,422.431,356.15,438.298,376.267,438.298z"/>
       </g>
     </svg>
     Корзина`;
  if ( searchinglobby.style.display==='block') {
    window.location.href='./index.html'
 }
};
  ctgh1.innerHTML = `Категория ${furnitureButton.innerHTML}`


shoeCategory.onclick = () => {
    basketItem.innerHTML='';
    categoryFurniture.style.display = 'none';
    categoryBeauty.style.display = 'none'; 
    categoryFragrances.style.display = 'grid'; 
    categoryGrociries.style.display = 'none'; 
    catalogPage.style.display = 'flex';
    catalog.innerHTML = 'Каталог';
    catalogContainer.style.display = 'none'
    overlay.style.display = 'none'
    menucatalog.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve"><defs> </defs>
    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
      <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #7000ff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
      <path d="M 39.205 56.741 c -4.518 0 -9.035 -1.72 -12.475 -5.159 c -6.879 -6.879 -6.879 -18.072 0 -24.95 c 6.877 -6.878 18.071 -6.879 24.95 0 v 0 c 6.878 6.878 6.878 18.071 0 24.95 C 48.24 55.021 43.723 56.741 39.205 56.741 z M 39.205 27.47 c -2.981 0 -5.962 1.135 -8.232 3.404 c -4.539 4.539 -4.539 11.925 0 16.465 c 4.539 4.538 11.925 4.538 16.465 0 c 4.539 -4.54 4.539 -11.926 0 -16.466 C 45.167 28.605 42.186 27.47 39.205 27.47 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      <path d="M 65.276 68.179 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 47.438 51.582 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 15.718 15.718 c 1.172 1.171 1.172 3.071 0 4.242 C 66.812 67.886 66.044 68.179 65.276 68.179 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g>
    </svg>Главная`;
    uzumSection.style.paddingBottom = '0px'
    cardParent.style.display = 'none'
     catalog.innerHTML = 'Главная'
       ctgh1.innerHTML = `Категория ${fragrancesButton.innerHTML}`
       document.title = 'Каталог';
 tofovorite.innerHTML = 'Избранное'
       toFovoriteParent.style.display = 'none'
  basketBtn.innerHTML='Корзина'
       basketParent2.style.display='none'
      menubasket.innerHTML= `    <?xml version="1.0" encoding="iso-8859-1"?>
      <svg version="1.1" width="30" height="30" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 459.529 459.529" style="enable-background:new 0 0 459.529 459.529;" xml:space="preserve">
        <g>
          <path fill="#7000ff" d="M17,55.231h48.733l69.417,251.033c1.983,7.367,8.783,12.467,16.433,12.467h213.35c6.8,0,12.75-3.967,15.583-10.2
            l77.633-178.5c2.267-5.383,1.7-11.333-1.417-16.15c-3.117-4.817-8.5-7.65-14.167-7.65H206.833c-9.35,0-17,7.65-17,17
            s7.65,17,17,17H416.5l-62.9,144.5H164.333L94.917,33.698c-1.983-7.367-8.783-12.467-16.433-12.467H17c-9.35,0-17,7.65-17,17
            S7.65,55.231,17,55.231z"/>
          <path fill="#7000ff" d="M135.433,438.298c21.25,0,38.533-17.283,38.533-38.533s-17.283-38.533-38.533-38.533S96.9,378.514,96.9,399.764
            S114.183,438.298,135.433,438.298z"/>
          <path fill="#7000ff" d="M376.267,438.298c0.85,0,1.983,0,2.833,0c10.2-0.85,19.55-5.383,26.35-13.317c6.8-7.65,9.917-17.567,9.35-28.05
            c-1.417-20.967-19.833-37.117-41.083-35.7c-21.25,1.417-37.117,20.117-35.7,41.083
            C339.433,422.431,356.15,438.298,376.267,438.298z"/>
        </g>
      </svg>
      Корзина`;
       if ( searchinglobby.style.display==='block') {
        window.location.href='./index.html'
     }


};


basketCount.innerHTML=0;
basketCount3.innerHTML=0;
groceriesCategory.onclick = () => {
    basketItem.innerHTML='';
    categoryFurniture.style.display = 'none';
    categoryBeauty.style.display = 'none'; 
    categoryFragrances.style.display = 'none'; 
    categoryGrociries.style.display = 'grid'; 
    catalogPage.style.display = 'flex'; 
    catalog.innerHTML = 'Каталог';
    catalogContainer.style.display = 'none'
    overlay.style.display = 'none'
    uzumSection.style.paddingBottom = '0px'
    cardParent.style.display = 'none'
    menucatalog.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve"><defs> </defs>
    <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
      <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #7000ff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
      <path d="M 39.205 56.741 c -4.518 0 -9.035 -1.72 -12.475 -5.159 c -6.879 -6.879 -6.879 -18.072 0 -24.95 c 6.877 -6.878 18.071 -6.879 24.95 0 v 0 c 6.878 6.878 6.878 18.071 0 24.95 C 48.24 55.021 43.723 56.741 39.205 56.741 z M 39.205 27.47 c -2.981 0 -5.962 1.135 -8.232 3.404 c -4.539 4.539 -4.539 11.925 0 16.465 c 4.539 4.538 11.925 4.538 16.465 0 c 4.539 -4.54 4.539 -11.926 0 -16.466 C 45.167 28.605 42.186 27.47 39.205 27.47 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      <path d="M 65.276 68.179 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 47.438 51.582 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 15.718 15.718 c 1.172 1.171 1.172 3.071 0 4.242 C 66.812 67.886 66.044 68.179 65.276 68.179 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g>
    </svg>Главная`;
     catalog.innerHTML = 'Главная'
       ctgh1.innerHTML = `Категория ${groceriesButton.innerHTML}`
       document.title = 'Каталог';
 tofovorite.innerHTML = 'Избранное'
       toFovoriteParent.style.display = 'none'
       basketParent2.style.display='none'
         basketBtn.innerHTML= 'Корзина';
            menubasket.innerHTML=`    <?xml version="1.0" encoding="iso-8859-1"?>
         <svg version="1.1" width="30" height="30" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 459.529 459.529" style="enable-background:new 0 0 459.529 459.529;" xml:space="preserve">
           <g>
             <path fill="#7000ff" d="M17,55.231h48.733l69.417,251.033c1.983,7.367,8.783,12.467,16.433,12.467h213.35c6.8,0,12.75-3.967,15.583-10.2
               l77.633-178.5c2.267-5.383,1.7-11.333-1.417-16.15c-3.117-4.817-8.5-7.65-14.167-7.65H206.833c-9.35,0-17,7.65-17,17
               s7.65,17,17,17H416.5l-62.9,144.5H164.333L94.917,33.698c-1.983-7.367-8.783-12.467-16.433-12.467H17c-9.35,0-17,7.65-17,17
               S7.65,55.231,17,55.231z"/>
             <path fill="#7000ff" d="M135.433,438.298c21.25,0,38.533-17.283,38.533-38.533s-17.283-38.533-38.533-38.533S96.9,378.514,96.9,399.764
               S114.183,438.298,135.433,438.298z"/>
             <path fill="#7000ff" d="M376.267,438.298c0.85,0,1.983,0,2.833,0c10.2-0.85,19.55-5.383,26.35-13.317c6.8-7.65,9.917-17.567,9.35-28.05
               c-1.417-20.967-19.833-37.117-41.083-35.7c-21.25,1.417-37.117,20.117-35.7,41.083
               C339.433,422.431,356.15,438.298,376.267,438.298z"/>
           </g>
         </svg>
         Корзина`;
         if ( searchinglobby.style.display==='block') {
            window.location.href='./index.html'
         }
  
};
rangeMin.addEventListener('input', () => {
 if (priceMin.value > parseFloat(price2.innerHTML.replace('$', ''))) {
    card2.style.display='none'
 } else{
     card2.style.display='block'
 }
  });

  priceMin.addEventListener('input', () => {
    if (priceMin.value > parseFloat(price2.innerHTML.replace('$', ''))) {
        card2.style.display='none'
     } else{
         card2.style.display='block'
     }
    
  });


  priceMax.addEventListener('input', () => {
if (priceMax.value < parseFloat(price2.innerHTML.replace('$', ''))) {
      card2.style.display='none'
} else{
    card2.style.display='block'

}
  });

  
  rangeMax.addEventListener('input', () => {
    if (priceMax.value < parseFloat(price2.innerHTML.replace('$', ''))) {
          card2.style.display='none'
    } else{
        card2.style.display='block'
    
    }
      });

let prices = document.querySelectorAll('.price');
let total = 0;


prices.forEach(priceElement => {
  total += parseFloat(priceElement.textContent); 
});


console.log("Total price:", total);

const basket2 =document.querySelector('.basket2')
basketBtn.onclick = () => {


    if ( searchinglobby.style.display==='block') {

        searchinglobby.style.display='none'
       }
    if ( catalog.innerHTML==='Главная') {
        catalog.innerHTML='Каталог';
    }
    
    let basketItems = JSON.parse(localStorage.getItem("basketItems"));
    console.log(basketItem);
    
    tofovorite.innerHTML='Избранное';
    
    if (!basketItems || basketItems.length === 0) {
       nothingBasket.style.display='flex';
       basket2.style.display='none';
    } else {
        nothingBasket.style.display='none';
        basket2.style.display='block';
    }
    if (basketBtn.innerHTML === 'Корзина') {
    document.title = 'Корзина';
    cardParent.style.display = 'none';
    toFovoriteParent.style.display = 'none';
    catalogPage.style.display = 'none';
    basketParent2.style.display = 'block';
    basketBtn.innerHTML = 'Главная';
    } else {

     window.location.href='./index.html'
    }
    if (basketItems) {
        let totalPrice = basketItems.reduce((sum, item) => {
            let price = parseFloat(item.price) || 0; 
            let quantity = parseInt(item.quantity) || 0; 
            return sum + (price * quantity); 
        }, 0);
        
        basketPrice.innerHTML = `${totalPrice}$`;
    
        let oldPrice = basketItems.reduce((sum, item) => {
            let price = parseFloat(item.oldPrice) || 0; 
            let quantity = parseInt(item.quantity) || 0;
            return sum + (price * quantity); 
        }, 0);
        let totalOld = (oldPrice - totalPrice).toFixed(2);
        basketSale.innerHTML = totalOld > 0 ? `Итоги Скидок: ${totalOld}$` : 'Нету Скидок';
    } else {
        basketSale.innerHTML = 'Нету Скидок';
    }

    
const basket = JSON.parse(localStorage.getItem('basketItems')) || [];

basket.forEach(item => {
    const basketCard = document.createElement('div');
    const basketInfo = document.createElement('div');
    const basketTitle = document.createElement('p');
    const basketPrice2 = document.createElement('p');
    const inputNumber = document.createElement('input');
    const removeBtn = document.createElement('button');
    const basketImg = document.createElement('img');
    const basketImgContainer = document.createElement('div');

    basketCard.className = 'basket-card';
    basketInfo.className = 'basket-info';
    basketTitle.className = 'basket-title';
    basketPrice2.className = 'basket-price2';
    inputNumber.className = 'stock-input';
    removeBtn.className = 'remove-btn';
    basketImg.className = 'basket-img';
    basketImgContainer.className = 'basket-img-con';
    const price = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : parseFloat(item.price) || 0;
const quantity = parseInt(item.quantity) || 0;  
const totalPrice2 = price * quantity;
basketPrice2.innerHTML = totalPrice2 ? `${totalPrice2.toFixed(2)} $` : 'Цена не указана';

    removeBtn.innerHTML = 'Удалить';
    basketTitle.innerHTML = item.title || 'Без названия';  
    basketImg.src = item.image || 'default.jpg';          
    basketCard.setAttribute('id', item.id);

    const quantityControl = document.createElement('div');
    quantityControl.className = 'quantity-control';
    const decreaseBtn = document.createElement('button');
    decreaseBtn.className = 'quantity-btn decrease-btn';
    decreaseBtn.textContent = '-';
    const quantityValue = document.createElement('span');
    quantityValue.className = 'quantity-value';
    quantityValue.textContent = '1';
    const increaseBtn = document.createElement('button');
    increaseBtn.className = 'quantity-btn increase-btn';
    increaseBtn.textContent = '+';
    basketCard.setAttribute('data-price', basketPrice2.textContent);
    
    let currentValue = item.quantity;

    

    decreaseBtn.addEventListener('click', () => {
        if (currentValue > 1) {
            currentValue--;
            quantityValue.textContent = currentValue;
            let basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];
            const updatedBasketItems = basketItems.map(basketItem => {
                if (basketItem.id === item.id) {
                    basketItem.quantity = currentValue; 
                }
                return basketItem;
            });
            localStorage.setItem("basketItems", JSON.stringify(updatedBasketItems));
            const price = parseFloat(String(item.price).replace('$', '')) || 0;
            const totalItemPrice = price * currentValue;
            basketPrice2.innerHTML = `$${totalItemPrice.toFixed(2)}`;
            let totalPrice = 0;
            updatedBasketItems.forEach(basketItem => {
                const itemPrice = parseFloat(String(basketItem.price).replace('$', '')) || 0;
                totalPrice += itemPrice * basketItem.quantity;
            });
            const basketPrice = document.querySelector('.basket-price');
            if (basketPrice) {
                basketPrice.textContent = `Итоги: ${totalPrice.toFixed(2)} $`;
            } else {
                console.error('Элемент .basket-price не найден!');
            }
        }
    });
    ;
    
    increaseBtn.addEventListener('click', () => {
        if (currentValue < item.stock) {
            currentValue++; 
            quantityValue.textContent = currentValue; 
            let basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];
            const updatedBasketItems = basketItems.map(basketItem => {
                if (basketItem.id === item.id) {
                    basketItem.quantity = currentValue;
                }
                return basketItem;
            });
    
            localStorage.setItem("basketItems", JSON.stringify(updatedBasketItems));
            const price = parseFloat(item.price) || 0;
            const totalItemPrice = price * currentValue;
            basketPrice2.innerHTML = `$${totalItemPrice.toFixed(2)}`;
            let totalPrice = 0;
            updatedBasketItems.forEach(basketItem => {
                totalPrice += parseFloat(basketItem.price) * basketItem.quantity;
            });
            const basketPrice = document.querySelector('.basket-price');
            if (basketPrice) {
                basketPrice.textContent = `Итоги: ${totalPrice.toFixed(2)} $`;
            } else {
                console.error('Элемент .basket-price не найден!');
            }
        }
    });
  
    
    
    removeBtn.onclick = () => {
        
        let basketItems = JSON.parse(localStorage.getItem("basketItems"));
        let length = 0;
        for (let key in basketItems) {if (basketItems[key] !== undefined) {length++;}}length--; 
        localStorage.setItem('basketLength', length);   
        basketCount.innerHTML=length     
        basketCount3.innerHTML=length     
        const cardId = basketCard.getAttribute('id'); 
        console.log(cardId);
    
        if (basketItems) {
            basketItems = basketItems.filter(item => item.id !== cardId); 
            localStorage.setItem("basketItems", JSON.stringify(basketItems));
        }
        basketCard.remove();
        if (!basketItems || basketItems.length === 0) {
            nothingBasket.style.display='flex';
            basket2.style.display='none';
         } else {
             nothingBasket.style.display='none';
             basket2.style.display='block';
         }
         const currentBasket = JSON.parse(localStorage.getItem('basketItems')) || [];
         let totalPrice = 0;
         currentBasket.forEach(item => {
             const price = parseFloat(item.price);
             const quantity = parseInt(item.quantity);
             if (isNaN(price) || isNaN(quantity)) {
                 console.error('Ошибка: Неверные данные для цены или количества', item);
                 return; 
             }
         
             totalPrice += price * quantity; 
         });
        
         const basketPrice = document.querySelector('.basket-price');
         if (basketPrice) {
             basketPrice.textContent = `Итоги: ${totalPrice.toFixed(2)} $`;
         } else {
             console.error('Элемент .basket-price не найден!');
         }

       
    };
    
    let basketLength = localStorage.getItem('basketLength');
    console.log(basketLength);
    
    if (basketCount2) basketCount2.innerHTML = `Итоги товаров: ${basketLength}`;
    if (basketCount) basketCount.innerHTML = basketLength;
    
    quantityControl.append(decreaseBtn, quantityValue, increaseBtn);
    basketImgContainer.append(basketImg);
    basketInfo.append(basketTitle, basketPrice2, quantityControl, removeBtn);
    basketCard.append(basketImgContainer, basketInfo);
    basketItem.append(basketCard);


    const currentBasket = JSON.parse(localStorage.getItem('basketItems')) || [];
    let totalPrice = 0;
    currentBasket.forEach(item => {
        const price = parseFloat(item.price);
        const quantity = parseInt(item.quantity);
        if (isNaN(price) || isNaN(quantity)) {
            console.error('Ошибка: Неверные данные для цены или количества', item);
            return; 
        }
    
        totalPrice += price * quantity; 
    });
    
    if (basketPrice) {
        basketPrice.textContent = `Итоги: ${totalPrice.toFixed(2)} $`;
    } else {
        console.error('Элемент .basket-price не найден!');
    }
});


};
menubasket.onclick = () => {
   
    toHeart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" fill="#7000ff"/></svg>Избранное`;
    if ( searchinglobby.style.display==='block') {

        searchinglobby.style.display='none'
       }
    if ( catalog.innerHTML==='Главная') {
        catalog.innerHTML='Каталог';
    }

    if ( menucatalog.innerText==='Главная') {
        menucatalog.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve"><defs> </defs>
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
            <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #7000ff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
            <path d="M 39.205 56.741 c -4.518 0 -9.035 -1.72 -12.475 -5.159 c -6.879 -6.879 -6.879 -18.072 0 -24.95 c 6.877 -6.878 18.071 -6.879 24.95 0 v 0 c 6.878 6.878 6.878 18.071 0 24.95 C 48.24 55.021 43.723 56.741 39.205 56.741 z M 39.205 27.47 c -2.981 0 -5.962 1.135 -8.232 3.404 c -4.539 4.539 -4.539 11.925 0 16.465 c 4.539 4.538 11.925 4.538 16.465 0 c 4.539 -4.54 4.539 -11.926 0 -16.466 C 45.167 28.605 42.186 27.47 39.205 27.47 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 65.276 68.179 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 47.438 51.582 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 15.718 15.718 c 1.172 1.171 1.172 3.071 0 4.242 C 66.812 67.886 66.044 68.179 65.276 68.179 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g>
          </svg> Каталог`;
    }
    
    let basketItems = JSON.parse(localStorage.getItem("basketItems"));
    tofovorite.innerHTML='Избранное';
    if (!basketItems || basketItems.length === 0) {
       nothingBasket.style.display='flex';
       basket2.style.display='none';
    } else {
        nothingBasket.style.display='none';
        basket2.style.display='block';
    }
    if (menubasket.innerText === 'Корзина') {
    document.title = 'Корзина';
    cardParent.style.display = 'none';
    toFovoriteParent.style.display = 'none';
    catalogPage.style.display = 'none';
    basketParent2.style.display = 'block';
    menubasket.innerHTML = `    <?xml version="1.0" encoding="iso-8859-1"?>
         <svg version="1.1" width="30" height="30" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 459.529 459.529" style="enable-background:new 0 0 459.529 459.529;" xml:space="preserve">
           <g>
             <path fill="#7000ff" d="M17,55.231h48.733l69.417,251.033c1.983,7.367,8.783,12.467,16.433,12.467h213.35c6.8,0,12.75-3.967,15.583-10.2
               l77.633-178.5c2.267-5.383,1.7-11.333-1.417-16.15c-3.117-4.817-8.5-7.65-14.167-7.65H206.833c-9.35,0-17,7.65-17,17
               s7.65,17,17,17H416.5l-62.9,144.5H164.333L94.917,33.698c-1.983-7.367-8.783-12.467-16.433-12.467H17c-9.35,0-17,7.65-17,17
               S7.65,55.231,17,55.231z"/>
             <path fill="#7000ff" d="M135.433,438.298c21.25,0,38.533-17.283,38.533-38.533s-17.283-38.533-38.533-38.533S96.9,378.514,96.9,399.764
               S114.183,438.298,135.433,438.298z"/>
             <path fill="#7000ff" d="M376.267,438.298c0.85,0,1.983,0,2.833,0c10.2-0.85,19.55-5.383,26.35-13.317c6.8-7.65,9.917-17.567,9.35-28.05
               c-1.417-20.967-19.833-37.117-41.083-35.7c-21.25,1.417-37.117,20.117-35.7,41.083
               C339.433,422.431,356.15,438.298,376.267,438.298z"/>
           </g>
         </svg>
         Главная`;
    } else {

     window.location.href='./index.html'
    }

    
const basket = JSON.parse(localStorage.getItem('basketItems')) || [];

basket.forEach(item => {
    const basketCard = document.createElement('div');
    const basketInfo = document.createElement('div');
    const basketTitle = document.createElement('p');
    const basketPrice2 = document.createElement('p');
    const inputNumber = document.createElement('input');
    const removeBtn = document.createElement('button');
    const basketImg = document.createElement('img');
    const basketImgContainer = document.createElement('div');

    basketCard.className = 'basket-card';
    basketInfo.className = 'basket-info';
    basketTitle.className = 'basket-title';
    basketPrice2.className = 'basket-price2';
    inputNumber.className = 'stock-input';
    removeBtn.className = 'remove-btn';
    basketImg.className = 'basket-img';
    basketImgContainer.className = 'basket-img-con';
    

    basketPrice2.innerHTML = `${item.price }`|| 'Цена не указана';
    removeBtn.innerHTML = 'Удалить';
    basketTitle.innerHTML = item.title || 'Без названия';  
    basketImg.src = item.image || 'default.jpg';          
    basketCard.setAttribute('id', item.id);
 
    const quantityControl = document.createElement('div');
    quantityControl.className = 'quantity-control';
    const decreaseBtn = document.createElement('button');
    decreaseBtn.className = 'quantity-btn decrease-btn';
    decreaseBtn.textContent = '-';
    const quantityValue = document.createElement('span');
    quantityValue.className = 'quantity-value';
    quantityValue.textContent = '1';
    const increaseBtn = document.createElement('button');
    increaseBtn.className = 'quantity-btn increase-btn';
    increaseBtn.textContent = '+';
    basketCard.setAttribute('data-price', basketPrice2.textContent);
    let currentValue = item.quantity;

    decreaseBtn.addEventListener('click', () => {
        if (currentValue > 1) {
            currentValue--;
            quantityValue.textContent = currentValue;
    
            const price = parseFloat(item.price.replace('$', '')) || 0; 
            const totalPrice = price * currentValue * 100 / 100;
            basketPrice2.innerHTML = totalPrice;
        }
    });
    
    increaseBtn.addEventListener('click', () => {
        if (currentValue < item.stock) {
            currentValue++;
            quantityValue.textContent = currentValue;
    
            const price = parseFloat(item.price.replace('$', '')) || 0; 
            const totalPrice = price * currentValue * 100 / 100; 
            basketPrice2.innerHTML = totalPrice; 
        }
    });
    
    removeBtn.onclick = () => {
        
        let basketItems = JSON.parse(localStorage.getItem("basketItems"));
        let length = 0;
        for (let key in basketItems) {if (basketItems[key] !== undefined) {length++;}}length--; 
        localStorage.setItem('basketLength', length);   
        basketCount.innerHTML=length  
        basketCount3.innerHTML=length     
        const cardId = basketCard.getAttribute('id'); 
        console.log(cardId);
    
        if (basketItems) {
            basketItems = basketItems.filter(item => item.id !== cardId); 
            localStorage.setItem("basketItems", JSON.stringify(basketItems));
        }
        basketCard.remove();
        if (!basketItems || basketItems.length === 0) {
            nothingBasket.style.display='flex';
            basket2.style.display='none';
         } else {
             nothingBasket.style.display='none';
             basket2.style.display='block';
         }
         const currentBasket = JSON.parse(localStorage.getItem('basketItems')) || [];
         let totalPrice = 0;
         currentBasket.forEach(item => {
             const price = parseFloat(item.price);
             const quantity = parseInt(item.quantity);
             if (isNaN(price) || isNaN(quantity)) {
                 console.error('Ошибка: Неверные данные для цены или количества', item);
                 return; 
             }
         
             totalPrice = price * quantity; 
         });
         
         const basketPrice = document.querySelector('.basket-price');
         if (basketPrice) {
             basketPrice.textContent = `Итоги: ${totalPrice.toFixed(2)} $`;
         } else {
             console.error('Элемент .basket-price не найден!');
         }
         
    };
    

    quantityControl.append(decreaseBtn, quantityValue, increaseBtn);
    basketImgContainer.append(basketImg);
    basketInfo.append(basketTitle, basketPrice2, quantityControl, removeBtn);
    basketCard.append(basketImgContainer, basketInfo);
    basketItem.append(basketCard);


    const currentBasket = JSON.parse(localStorage.getItem('basketItems')) || [];
    let totalPrice = 0;
    currentBasket.forEach(item => {
        const price = parseFloat(item.price);
        const quantity = parseInt(item.quantity);
        if (isNaN(price) || isNaN(quantity)) {
            console.error('Ошибка: Неверные данные для цены или количества', item);
            return; 
        }
    
        totalPrice += price * quantity; 
    });
    
    if (basketPrice) {
        basketPrice.textContent = `Итоги: ${totalPrice.toFixed(2)} $`;
    } else {
        console.error('Элемент .basket-price не найден!');
    }
});


};


const basketItem = document.querySelector('.basket-item');

cartIcon.onclick = () => {
    const currentBasket = JSON.parse(localStorage.getItem('basketItems')) || [];
    
    const basketData = {
        id: item.id,
        title: item.title || 'Без названия',
        price: shortNewPrice || 0,
        oldPrice:item.price,
        image: item.thumbnail || 'default.jpg',
        stock: item.stock,
        quantity:1
    };
   
    
    
    let alreadyInBasket = false;
    for (let i = 0; i < currentBasket.length; i++) {
        if (currentBasket[i].id === basketData.id) {
            alreadyInBasket = true;
            alert('Товар Уже в Корзине')
            return;
        }
    }

    if (alreadyInBasket) {
      
        return;
    }
    currentBasket.push(basketData);
    localStorage.setItem('basketItems', JSON.stringify(currentBasket));
    cartIcon.setAttribute('data-id', basketData.id);
    cartIcon.disabled = true;
    cartIcon.textContent = 'В Корзине';
    console.log(`Item added to localStorage with title: ${basketData.title}`);
    let length = currentBasket.length;
    localStorage.setItem('basketLength', length);
    basketCount.innerHTML = length;
    basketCount3.innerHTML = length;
};



const beautyCards = document.querySelectorAll('.beauty .card');
const fragrancesCards = document.querySelectorAll('.fragrances .card');
const techCards = document.querySelectorAll('.tech .card');
const grocerieCards = document.querySelectorAll('.groceries .card');
const beautyShowMore = document.querySelector('.showMore');
const fragrancesShowMore = document.querySelector('.showMore2');
const techShowMore = document.querySelector('.showMore3');
const grocerieShowMore = document.querySelector('.showMore4');
function hideExtraCards(cards) {
    cards.forEach((card, index) => {
        if (index >= 5) {
            card.style.display = 'none'; 
        }
    });
}

if (clothes.children.length > 5) {
    beautyShowMore.style.display='block'
}else{
       beautyShowMore.style.display='none'
}
if (shoe.children.length > 5) {
    fragrancesShowMore.style.display='block'
}else{
       fragrancesShowMore.style.display='none'
}
if (tech.children.length > 5) {
    techShowMore.style.display='block'
}else{
       techShowMore.style.display='none'
}
if (groceries.children.length > 5) {
    grocerieShowMore.style.display='block'
}else{
       grocerieShowMore.style.display='none'
}
hideExtraCards(beautyCards);
hideExtraCards(fragrancesCards);
hideExtraCards(techCards);
hideExtraCards(grocerieCards);
grocerieShowMore.onclick=()=>{
    grocerieShowMore.style.display='none';
    grocerieCards.forEach((card) => {
            card.style.display='block'
    });
}
beautyShowMore.onclick=()=>{
    beautyShowMore.style.display='none';
    beautyCards.forEach((card) => {
            card.style.display='block'
    });
}
fragrancesShowMore.onclick=()=>{
    fragrancesShowMore.style.display='none';
    fragrancesCards.forEach((card) => {
            card.style.display='block'
    });
}
techShowMore.onclick=()=>{
    techShowMore.style.display='none';
    techCards.forEach((card) => {
            card.style.display='block'
    });
}

let storedLength = localStorage.getItem('basketLength');

basketCount.innerHTML = storedLength || 0;
basketCount2.innerHTML = `Итого товаров: ${storedLength}`;
basketCount3.innerHTML = storedLength || 0;
card.setAttribute('id', item.id);
btnPay.onclick=()=>{
    paymentModule.style.display='block';
    overlay.style.display='block'
    totalPriceElement.innerHTML=basketPrice.innerHTML;
    totalSaleElement.innerHTML= basketSale.innerHTML;
    totalCountElement.innerHTML=basketCount2.innerHTML
}
payCansel.onclick=()=>{
    paymentModule.style.display='none'
    overlay.style.display='none'
}
forMoney.onclick=()=>{
        paymentModule.style.display='none';
        infoPayContainer.style.display='block'
}
ignore.onclick=()=>{
    infoPayContainer.style.display='none';
    overlay.style.display='none'
}

forHumo.onclick=()=>{
    paymentModule.style.display='none';
    orderBlock.style.display='block'
}
forMaster.onclick=()=>{
    paymentModule.style.display='none';
    orderBlock.style.display='block'
}

forUzCard.onclick=()=>{
    paymentModule.style.display='none';
    orderBlock.style.display='block'
}
canselProduct.onclick=()=>{
    orderBlock.style.display='none';
    overlay.style.display='none';

}

btnpayproduct.onclick = () => {
    const cardValue = cardNumberInput.value.trim(); 
    const cardPasswordValue = cardPasswordInput.value.trim();
    const cardDateValue = cardDateInput.value.trim();
    const datayearValue =datayear.value;
    if (cardValue.length !== 16) {
        alert('Номер карты должен содержать ровно 16 цифр!');
        return; 
    }
    if (cardPasswordValue.length !== 4) {
        alert('Пароль должен содержать ровно 4 цифры!');
        return;
    }
    const regex = /^[0-9]{2}$/;
    const monthMatch = cardDateValue.match(regex);
    if (!monthMatch || parseInt(cardDateValue) < 1 || parseInt(cardDateValue) > 12) {
        alert('Месяц должен быть от 01 до 12!');
        return;
    }
    const yearMatch = datayearValue.match(regex);
    if (!yearMatch) {
        alert('Год должен быть в формате YY!');
        return;
    }
    alert('Дата принята! ✅');
    orderBlock.style.display='none'
    infoPayContainer.style.display='block'
};
totalPayButton.onclick=()=>{
const basketItems = JSON.parse(localStorage.getItem('basketItems'));
const userPhone = localStorage.getItem('userPhone');

if (basketItems && userPhone) {
    fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.phone === userPhone);
            if (user) {
                user.orders = [...user.orders, ...basketItems];
                fetch(`http://localhost:3001/users/${user.id}`, {
                    method: 'PATCH',  
                    body: JSON.stringify({
                        orders: user.orders 
                    })
                })
                .then(response => response.json())
                .then(updatedUser => {
                    console.log('Данные обновлены', updatedUser);
                    localStorage.removeItem('basketItems'); 
                    localStorage.removeItem('basketLength'); 
                    alert('Корзина добавлена в заказ!');
                })  .catch(error => {
                    console.error('Ошибка обновления данных:', error);
                    alert('Не удалось обновить данные');
                });
            } else {
                alert('Пользователь с таким номером телефона не найден!');
            }
        })
        .catch(error => {
            console.error('Ошибка при получении пользователей:', error);
            alert('Не удалось получить данные пользователей');
        });
}

}

    return card;
}


