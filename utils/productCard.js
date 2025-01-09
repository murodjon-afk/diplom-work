export function createProductCard(item) {
    const mainImg = document.querySelector('.main-image');
    const quantityInput = document.querySelector('.quantity-input');
    const btnMinus = document.querySelector('.minus');
    const btnPlus = document.querySelector('.plus');
    const productThumnail = document.querySelector('.product-thumbnails');
    const productName = document.querySelector('.product-name');
    const currentPrice = document.querySelector('.current-price');
    const oldPrice = document.querySelector('.old-price');
    const productDescription = document.querySelector('.product-description');
    const information = document.querySelector('.information');
    const simBeautyParent = document.querySelector('.sim-beauty-parent');
    const simFragrancesParent = document.querySelector('.sim-fragrances-parent');
    const simGroceriesParent = document.querySelector('.sim-groceries-parent');
    const simFurnitureParent = document.querySelector('.sim-furniture-parent');
    const profieleNick = document.querySelector('.profile-nick')
    const signin = document.querySelector('.signin')
    const addtocart =document.querySelector('.add-to-cart')
    const storedName = localStorage.getItem('userName');
    const storedPhone = localStorage.getItem('userPhone'); 
    const moreinfo =document.querySelector('.more-info')
    const lovely = document.querySelector('.lovely')


    if (storedName) {
      profieleNick.textContent = ` ${storedName}`;
    } else {
      profieleNick.textContent = 'Войти';
    }
    
 
    signin.onclick = () => {
      if (profieleNick.innerHTML === 'Войти') {
        alert('К сожалению, регистрация на сайте происходит на главной странице.');
        window.location.href = './index.html'; 
      } else {
        alert(`Привет ${storedName}, ваши данные: ${storedName}, ${storedPhone}`);
      }
    };
    

    const img = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');
    const img5 = document.createElement('img');


    simBeautyParent.style.display = 'none';
    simFragrancesParent.style.display = 'none';
    simFurnitureParent.style.display = 'none';
    simGroceriesParent.style.display = 'none';

    if (item.category === 'beauty') {
        simBeautyParent.style.display = 'block';
    } else if (item.category === 'fragrances') {
        simFragrancesParent.style.display = 'block';
    } else if (item.category === 'furniture') {
        simFurnitureParent.style.display = 'block';
    } else if (item.category === 'groceries') {
        simGroceriesParent.style.display = 'block';
    }

    btnPlus.onclick = () => {
        quantityInput.value++;
        quantityInput.max=item.stock;
        if (quantityInput.value > item.stock) {
            quantityInput.value = item.stock;
        }
        updatePrice();
    };

    btnMinus.onclick = () => {
        quantityInput.value--;
        if (quantityInput.value < 1) {
            quantityInput.value = 1;
        }
        updatePrice();
    };

    function updatePrice() {
        const quantity = parseInt(quantityInput.value, 10); 
        const price = shortNewPrice;
        const totalPrice = price * quantity;
        currentPrice.textContent = `${totalPrice} $ `;
        
    }
    img.onclick=()=>{
        mainImg.src = item.images[0] || item.thumbnail;
    }
    img2.onclick=()=>{
        mainImg.src = item.images[1] || item.thumbnail;
    }
    img3.onclick=()=>{
        mainImg.src = item.images[2] || item.thumbnail;
    }
    img4.onclick=()=>{
        mainImg.src = item.images[0] || item.thumbnail;
    }
    img5.onclick=()=>{
        mainImg.src = item.images[2] || item.thumbnail;
    }
    img.setAttribute('src', item.images[0] || item.thumbnail) ;
    img2.setAttribute('src', item.images[1]|| item.thumbnail);
    img3.setAttribute('src', item.images[2]|| item.thumbnail);
    img4.setAttribute('src', item.images[0]|| item.thumbnail);
    img5.setAttribute('src', item.images[2]|| item.thumbnail);
    const newPrice = Math.round(item.price * (1 - item.discountPercentage / 100));
    const shortNewPrice = newPrice.length > 6 ? newPrice.slice(0, 6) + '...' : newPrice;
    mainImg.src = item.thumbnail;
    productName.innerHTML = item.title;
    currentPrice.innerHTML = `${shortNewPrice} $`;
    oldPrice.innerHTML = `${item.price} $`;
    productDescription.innerHTML = `Бренд товара - ${item.brand || 'неизвестно'}`;
    information.innerHTML = item.description;


const cards = document.querySelectorAll(".card");
const cardsArray = [...cards]; 
cardsArray.forEach(card => {
    card.addEventListener('click', () => {
        lovely.append(card); 
    });
});

 
 
    img.className = 'thubnail';
    productThumnail.append(img, img2, img3, img4, img5);
    addtocart.onclick=()=>{
        addtocart.style.backgroundColor = 'white';
        addtocart.style.color='purple';
        addtocart.style.border = '2px solid purple'; 
        addtocart.innerHTML='В Корзине';
        const quantityValue=quantityInput.value;
        if (addtocart.innerHTML==='В Корзине') {
            const currentBasket = JSON.parse(localStorage.getItem('basketItems')) || [];
            let price =shortNewPrice;

            
           const basketp =shortNewPrice * quantityValue;
           
            
            const basketData = {
                id: item.id,
                title: item.title || 'Без названия',
                price: basketp,
                oldPrice:item.price,
                image: item.thumbnail || 'default.jpg',
                stock: item.stock,
                quantity:1 
            };
            currentBasket.push(basketData);
            localStorage.setItem('basketItems', JSON.stringify(currentBasket));
        }
    }

    return productThumnail;
}



export function createSimilar(item) {
    const nothingBasket =document.querySelector('.nothing-basket')

    const basketBtn = document.querySelector('.basket');
    const simParent = document.querySelector('.sim-parent')
    const productPage = document.querySelector('.product-page')
    const groceries2 = document.querySelector(".similar-groceries");
    const beauty = document.querySelector(".similar-beauty");
    const fragrances = document.querySelector(".similar-fragrances");
    const furniture = document.querySelector(".similar-furniture");;
    const searchContainer = document.querySelector('.search-container');
    const input = document.querySelector("input");
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
     const tofovorite = document.querySelector('.tofovorite')
    const nothingheart =document.querySelector('.nothing-heart')
    const lovelytext = document.querySelector('.lovely-text')
    const lovely = document.querySelector('.lovely')
    const toFovoriteParent = document.querySelector('.toFovorite-parent')
    const basketPrice = document.querySelector('.basket-price');
const basketSale = document.querySelector('.basket-sale');
const basketCount =document.querySelector('.basket-count');
const basketCount2 =document.querySelector('.basket-count2');
const btnPay = document.querySelector('.btn-pay');
const basketParent2 = document.querySelector('.basket-parent2');
const toPage = document.querySelector('.toPage ')
const toPage2 = document.querySelector('.toPage2 ')
toPage2.onclick=()=>{
    window.location.href=`http://127.0.0.1:5500/utils/product.html?id=${productId}`
}
 

toPage.onclick=()=>{
    window.location.href=`http://127.0.0.1:5500/utils/product.html?id=${productId}`
} 
const href =window.location.href;
const url = new URL(href);
const productId = url.searchParams.get('id')
    toLove.innerHTML = "&#10084;";
    toLove.style.cursor = 'pointer';
    toLove.style.fontSize = '24px';
    card.className = "card";
    imgContainer.className = "img-container";
    title.className = "title";
    priceContainer.className = "price-container";
    oldPrice.className = "old-price";
    priceAndCart.className = "price-and-cart";
    price.className = "price";
    cartIcon.className = "cart-icon";

    title.innerText = item.description.length > 18 ? item.title.slice(0, 18) + '...' : item.title;
    const newPrice = Math.round(item.price * (1 - item.discountPercentage / 100));
    const shortNewPrice = newPrice.length > 6 ? newPrice.slice(0, 6) + '...' : newPrice ;


    price.innerText = shortNewPrice + "$";
    cartIcon.innerHTML = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    toLove.style.color = 'grey'
    img.setAttribute("src", item.images[0]);
    img.setAttribute("alt", "Продукт");
    toLove.onclick = () => { 
        if (  toLove.style.color ==='purple') {
            if (lovely.children.length===0) {
                lovelytext.innerHTML='';
                nothingheart.style.display='block'
            }
        }
        
        const loveKey = `toLoveColor-${item.id}`;
        const newColor = toLove.style.color === "purple" ? "grey" : "purple";
        toLove.style.color = newColor;
        localStorage.setItem(loveKey, newColor);
    
        let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
        const existingCard = lovely.querySelector(`[id="${item.id}"]`);
    
        if (newColor === "purple") {
            if (!existingCard) {
                const newCard = createSimilar(item); 
                newCard.setAttribute("id", item.id);
                lovely.appendChild(newCard);
    
                savedItems.push(item);
                localStorage.setItem('savedItems', JSON.stringify(savedItems));
            }
        } else {
            if (existingCard) {
                existingCard.remove();
                savedItems = savedItems.filter(savedItem => savedItem.id !== item.id);
                localStorage.setItem('savedItems', JSON.stringify(savedItems));
            }
        }
    };
 tofovorite.onclick = () => {

        lovelytext.innerHTML = 'Избранное';
    
        let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
        lovely.innerHTML = ''; 
        if (savedItems.length === 0) {
            lovelytext.innerHTML = '';
            nothingheart.style.display = 'block';
            lovely.style.display = 'none';
        } else {
            nothingheart.style.display = 'none';
            lovely.style.display = 'grid';
            savedItems.forEach(item => {
                const newCard = createSimilar(item);
                newCard.setAttribute('id', item.id);
                lovely.appendChild(newCard);
            });
        }
    
        if (tofovorite.innerHTML === 'Избранное') { 
            productPage.style.display = 'none';
            simParent.style.display = 'none';
            basketParent2.style.display='none';
            basketBtn.innerHTML='Корзина';
    
            document.title = 'Избранное';
            tofovorite.innerHTML = 'Главная';
    
            toFovoriteParent.style.display = 'flex';
            toFovoriteParent.style.justifyContent = 'center';
            toFovoriteParent.style.alignItems = 'center';
        } else {
            productPage.style.display = 'flex';
            simParent.style.display = 'block';
    
            document.title = 'Uzum Market Clone';
            tofovorite.innerHTML = 'Избранное';
    
            toFovoriteParent.style.display = 'none';
        }
    };
    
  
    const redirectToProduct = () => {
        window.location.href = `http://127.0.0.1:5500/utils/product.html?id=${item.id}`;
    };

    [img, price, oldPrice, title].forEach(element => {
        element.style.cursor = 'pointer';
        element.onclick = redirectToProduct;
    });

    input.addEventListener("input", function () {
    alert('К Сожелению Поиск Присутствует в Главном странице')
    window.location.href='./index.html'
    });
    
   const basketItem = document.querySelector('.basket-item');
   toLove.className = 'toLove'
    oldPrice.innerHTML = `${item.price}$`
    backetAndSave.style.display = 'flex';
    backetAndSave.style.justifyContent = 'center';
    backetAndSave.style.alignItems = 'center';
    backetAndSave.style.gap = '10px'
    imgContainer.appendChild(img);
    imgContainer.appendChild(toLove);
    backetAndSave.append( cartIcon);
    priceAndCart.append(price, backetAndSave);
    const ctgOldParent = document.createElement('div')
    const categoryP = document.createElement('p')
    categoryP.className = 'category-p'
    categoryP.innerHTML = item.category;
    ctgOldParent.className = 'old-ctg'
    ctgOldParent.append(oldPrice , categoryP)
    priceAndCart.append(price, backetAndSave);
    priceContainer.append(title, ctgOldParent ,  priceAndCart);
    card.append(imgContainer, priceContainer);
      

    if (item.category === "beauty") {
        beauty.appendChild(card);
    } else if (item.category === "fragrances") {
    fragrances.appendChild(card);
    } else if (item.category === "furniture") {
        furniture.appendChild(card);
    } else if (item.category === "groceries") {
        groceries2.append(card);
    } 

   
const basket2 =document.querySelector('.basket2')
basketBtn.onclick = () => {
    let basketItems = JSON.parse(localStorage.getItem("basketItems"));

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
    simParent.style.display = 'none';
    toFovoriteParent.style.display = 'none';
    productPage.style.display = 'none';
    basketParent2.style.display = 'flex';console.log(basketParent2);
    
    basketBtn.innerHTML = 'Главная';
    } else {

        window.location.href = `http://127.0.0.1:5500/utils/product.html?id=${productId}`;    }

    
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
    

    basketPrice2.innerHTML = `${item.price}$` || 'Цена не указана';
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
        let basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];
        if (basketItems.length > 0) {
            let totalPrice = basketItems.reduce((sum, item) => sum + (+item.price * +item.quantity), 0);
            basketPrice.innerHTML = `${totalPrice}$`;
            let oldPrice = basketItems.reduce((sum, item) => sum + (+item.oldPrice * +item.quantity), 0);
            let totalOld = (oldPrice - totalPrice).toFixed(2);
            basketSale.innerHTML = `Итоги Скидок: ${totalOld}$`;
        }
        if (basketCard) {
            const cardId = basketCard.getAttribute('id');
            console.log(cardId);
            basketItems = basketItems.filter(item => item.id !== cardId);
            localStorage.setItem("basketItems", JSON.stringify(basketItems));
            basketCard.remove();
            let length = basketItems.length;
            localStorage.setItem('basketLength', length);
            if (basketCount2) basketCount2.innerHTML = `Итоги товаров: ${length}`;
            if (basketCount) basketCount.innerHTML = length;
        }
        if (basketItems.length === 0) {
            nothingBasket.style.display = 'flex';
            basket2.style.display = 'none';
        } else {
            nothingBasket.style.display = 'none';
            basket2.style.display = 'block';
        }
        let newTotalPrice = basketItems.reduce((sum, item) => sum + (+item.price * +item.quantity), 0);
        basketPrice.innerHTML = `${newTotalPrice}$`;
        let newOldPrice = basketItems.reduce((sum, item) => sum + (+item.oldPrice * +item.quantity), 0);
        let newTotalOld = (newOldPrice - newTotalPrice).toFixed(2);
        basketSale.innerHTML = `Итоги Скидок: ${newTotalOld}$`;
    };
    
    
    quantityControl.append(decreaseBtn, quantityValue, increaseBtn);
    basketImgContainer.append(basketImg);
    basketInfo.append(basketTitle, basketPrice2, quantityControl, removeBtn);
    basketCard.append(basketImgContainer, basketInfo);
    basketItem.append(basketCard);
});


};





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
    basketCount2.innerHTML=`Итоги товаров: ${length}`   
};
let storedLength = localStorage.getItem('basketLength');
basketCount.innerHTML = storedLength || 0;
basketCount2.innerHTML = `Итого товаров: ${storedLength}`;
    
        

  

    return card;
}
