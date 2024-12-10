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
        currentPrice.textContent = `${totalPrice} $`;
    }

    img.setAttribute('src', item.thumbnail);
    img2.setAttribute('src', item.thumbnail);
    img3.setAttribute('src', item.thumbnail);
    img4.setAttribute('src', item.thumbnail);
    img5.setAttribute('src', item.thumbnail);

    mainImg.src = item.thumbnail;
    productName.innerHTML = item.title;
    currentPrice.innerHTML = `${item.price} $`;
    oldPrice.innerHTML = `${item.oldPrice} $`;
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

    title.innerText = item.description.length > 20 ? item.title.slice(0, 20) + '...' : item.title;

    const newPrice = (item.price * (1 - item.discountPercentage / 100)).toFixed(2);
    const shortNewPrice = newPrice.length > 6 ? newPrice.slice(0, 6) + '...' : newPrice + '$';
    oldPrice.innerText = shortNewPrice;

    price.innerText = shortNewPrice + "$";
    cartIcon.innerHTML = "&#128722;";

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

    backetAndSave.style.display = 'flex';
    backetAndSave.style.justifyContent = 'center';
    backetAndSave.style.alignItems = 'center';
    backetAndSave.style.gap = '10px';

    imgContainer.appendChild(img);
    backetAndSave.append(toLove, cartIcon);

    priceAndCart.append(price, backetAndSave);
    priceContainer.append(title, oldPrice, priceAndCart);
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
