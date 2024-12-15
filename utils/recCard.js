export function reclameCard(item) {
    const searchContainer = document.querySelector('.search-container');
    const input = document.querySelector("input");  
    const groceries = document.querySelector('.groceries');

    const maxPrice = document.getElementById("max-price");
    const secondBanner = document.querySelector('.second-banner')

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
   const ctgBeauty = document.querySelector('.ctg-beauty')
   const ctgFurniture = document.querySelector('.ctg-furniture')
   const ctgFragrances = document.querySelector('.ctg-fragrances')
   const ctgGroceries = document.querySelector('.ctg-groceries')
  const categoryP = document.createElement('p')
   categoryP.className = 'category-p'
   categoryP.innerHTML = item.category;
  




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
    toLove.className = "toLove"

    title.innerText = item.description.length > 20 
        ? item.title.slice(0, 20) + '...' 
        : item.title;

        const newPrice = (item.price * (1 - item.discountPercentage / 100)).toFixed(2);

        oldPrice.innerText = item.price + '$';
        price.innerText = newPrice + '$';
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
      
        
        const shortNewPrice = newPrice < 1
            ? (newPrice * 1).toFixed(2) + "$" 
            : newPrice + "$";
        
        if (item.price < 1) {
            price.innerHTML = shortNewPrice;
        }
        

    img.setAttribute("src", item.images[0]);
    img.setAttribute("alt", "Продукт");

    const loveKey = `toLoveColor-${item.id}`;
    toLove.style.color = localStorage.getItem(loveKey) === "purple" ? "purple" : "grey";

    toLove.onclick = () => {
        const newColor = toLove.style.color === "purple" ? "grey" : "purple";
        toLove.style.color = newColor;
        localStorage.setItem(loveKey, newColor);
    };

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

  secondBanner.onclick = () => {
    window.location.href = '../utils/reclame.html';
    
};

    input.addEventListener("input", function () {
        const searchQuery = input.value.toLowerCase();
        const cards = document.querySelectorAll(".card");
        searchContainer.innerHTML = '';

        cards.forEach(card => {
            const titleElement = card.querySelector(".title");
            if ( titleElement.innerText.toLowerCase().includes(searchQuery)) {
                card.style.display = "block";
                const searchText = document.createElement('p');
                searchText.textContent = `Результат поиска: ${titleElement.innerText}`;
                searchContainer.append(searchText);
                searchText.className = 'search-text';
            } else {
                card.style.display = "none";
            }
        });

        searchContainer.style.display = searchQuery ? 'none' : 'none';
    });

    backetAndSave.style.display = 'flex';
    backetAndSave.style.justifyContent = 'center';
    backetAndSave.style.alignItems = 'center';
    backetAndSave.style.gap = '10px';
    const ctgOldParent = document.createElement('div')
    ctgOldParent.className = 'old-ctg'
    toLove.style.marginBottom = '5px'
    const saleProcent = document.createElement('p')
    saleProcent.className = 'sale-procent';
    saleProcent.innerHTML = `акция:${item.discountPercentage}%`;
    imgContainer.appendChild(img);
    imgContainer.appendChild(saleProcent);
     ctgOldParent.append(oldPrice , categoryP)
   
    backetAndSave.append(toLove, cartIcon);

    priceAndCart.append(price, backetAndSave);
    priceContainer.append(title, ctgOldParent ,  priceAndCart);
    card.append(imgContainer, priceContainer);
    if (item.discountPercentage >= 5) {
     card.style.display = 'block'
    } else{
         card.style.display = 'none'
    }



    const rangeSlider = document.getElementById("price-range");
    
    const filterCards = () => {
        const currentMax = parseFloat(maxPrice.value) || 0; 
   
    
        const cards = document.querySelectorAll('.card');
    
        cards.forEach(card => {
            const cardPrice = parseFloat(card.querySelector('.price').innerText.replace('$', '')) || 0;
    
            if (currentMax === 0 || cardPrice <= currentMax) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };
    

    rangeSlider.addEventListener("input", () => {
        const currentValue = parseInt(rangeSlider.value);
        maxPrice.value = currentValue;
        filterCards();
    });
    
    maxPrice.addEventListener("input", () => {
        const currentValue = parseInt(maxPrice.value);
        rangeSlider.value = currentValue;
        filterCards(); 
    });
    
   
    filterCards();
    
      
    groceries.append(card)

    return card;
}
