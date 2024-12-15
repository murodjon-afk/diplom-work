export function createProductCard(item) {
    const mainImg = document.querySelector('.main-image');
    const quantityInput = document.querySelector('.input-text');
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
        quantityInput.innerHTML++;
        if (quantityInput.innerHTML > 30) {
            quantityInput.innerHTML = 30;
        }
        updatePrice();
    };

    btnMinus.onclick = () => {
        quantityInput.innerHTML--;
        if (quantityInput.innerHTML < 1) {
            quantityInput.innerHTML = 1;
        }
        updatePrice();
    };

    function updatePrice() {
        const quantity = parseInt(quantityInput.textContent, 10); 
        const price = item.price;
        const totalPrice = price * quantity;
        currentPrice.textContent = `${totalPrice} `;
    }

    img.setAttribute('src', item.thumbnail);
    img2.setAttribute('src', item.thumbnail);
    img3.setAttribute('src', item.thumbnail);
    img4.setAttribute('src', item.thumbnail);
    img5.setAttribute('src', item.thumbnail);
    const newPrice = Math.round(item.price * (1 - item.discountPercentage / 100));
    const shortNewPrice = newPrice.length > 6 ? newPrice.slice(0, 6) + '...' : newPrice;
    mainImg.src = item.thumbnail;
    productName.innerHTML = item.title;
    currentPrice.innerHTML = `${shortNewPrice} $`;
    oldPrice.innerHTML = `${item.price} $`;
    productDescription.innerHTML = `Бренд товара - ${item.brand || 'неизвестно'}`;
    information.innerHTML = item.description;

    img.className = 'thubnail';
    productThumnail.append(img, img2, img3, img4, img5);

    return productThumnail;
}



export function createSimilar(item) {
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

    img.setAttribute("src", item.images[0]);
    img.setAttribute("alt", "Продукт");

    const loveKey = `toLoveColor-${item.id}`;
    toLove.style.color = localStorage.getItem(loveKey) === "purple" ? "purple" : "grey";

    toLove.onclick = () => {
        if (toLove.style.color === "purple") {
            toLove.style.color = "grey";
            localStorage.setItem(loveKey, "grey");
        
        } else {
            toLove.style.color = "purple";
            localStorage.setItem(loveKey, "purple");
      
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
        const searchQuery = input.value.toLowerCase();
        const cards = document.querySelectorAll(".card");
        searchContainer.innerHTML = '';

        cards.forEach(card => {
            const titleElement = card.querySelector(".title");
            if (titleElement && titleElement.innerText.toLowerCase().includes(searchQuery)) {
                card.style.display = "block";
                const searchText = document.createElement('p');
                searchText.textContent = `Результат поиска: ${titleElement.innerText}`;
                searchContainer.append(searchText);
                searchText.className = 'search-text';
            } else {
                card.style.display = "none";
            }
        });

        searchContainer.style.display = searchQuery ? 'block' : 'none';
    });
    
    toLove.style.marginBottom = '5px'

    oldPrice.innerHTML = `${item.price}$`
    backetAndSave.style.display = 'flex';
    backetAndSave.style.justifyContent = 'center';
    backetAndSave.style.alignItems = 'center';
    backetAndSave.style.gap = '10px';

    const saleProcent = document.createElement('p')
    saleProcent.className = 'sale-procent';
    saleProcent.innerHTML = `акция:${item.discountPercentage}%`;
    imgContainer.appendChild(img);
    imgContainer.appendChild(saleProcent);
    backetAndSave.append(toLove, cartIcon);
    
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
    } else {
        console.warn("Неизвестная категория:", item.category);
    }


  

    return card;
}
