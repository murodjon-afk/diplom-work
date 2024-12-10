export function createCard(item) {
    const clothes = document.querySelector(".clothes");
    const tech = document.querySelector(".technieque");
    const shoe = document.querySelector(".shoes");
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
    const groceries = document.querySelector('.groceries')

    toLove.innerHTML= "&#10084;";
    toLove.style.cursor ='pointer';
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
    const newPrice = Math.round(item.price * (1 - item.discountPercentage / 100));


    const shortNewPrice = newPrice.length > 6 ? newPrice.slice(0, 6) + '...' : newPrice +"  " + '$';
    oldPrice.innerText = shortNewPrice;
    
    oldPrice.innerText = item.price + '$';
    price.innerText = shortNewPrice ;
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
        clothes.appendChild(card);
    } else if (item.category === "fragrances") {
        shoe.appendChild(card);
    } else if (item.category === "furniture") {
        tech.appendChild(card);
    }
    else if(item.category === "groceries"){
        groceries.append(card)
    }
    else {
        console.warn("Неизвестная категория:", item.category);
    }

    return card;
}
