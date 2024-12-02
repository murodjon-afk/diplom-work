export function createCard(item) {
    const clothes = document.querySelector(".clothes");
    const tech = document.querySelector('.technieque');
    const shoe = document.querySelector('.shoes'); 
    const card = document.createElement("div");
    card.className = "card";

    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    const img = document.createElement("img");
    img.setAttribute("src", item.img);
    img.setAttribute("alt", "Продукт");
    imgContainer.appendChild(img);

    const label = document.createElement('label');
    label.classList.add('heart-checkbox');

    const favorite = document.createElement('input');
    favorite.type = 'checkbox';
    favorite.className = "favorite";
  

    const heart = document.createElement('span');
    heart.classList.add('heart');
    label.appendChild(favorite);
    label.appendChild(heart);
    imgContainer.appendChild(label);

    if (localStorage.getItem(item.id) === 'true') {
        favorite.checked = true; 
        heart.style.color = '#ff4f41'; 
    }

    favorite.onclick = () => {
        if (favorite.checked) {
            heart.style.color = '#ff4f41'; 
            localStorage.setItem(item.id, 'true');  
        } else {
            heart.style.color = ''; 
            localStorage.setItem(item.id, 'false'); 
        }
    };

    card.appendChild(imgContainer);

    const title = document.createElement("div");
    title.className = "title";
    title.innerText = item.description;
    card.appendChild(title);

    const priceContainer = document.createElement("div");
    priceContainer.className = "price-container";

    const oldPrice = document.createElement("div");
    oldPrice.className = "old-price";
    oldPrice.innerText = item.oldPrice + " сум";
    priceContainer.appendChild(oldPrice);

    const priceAndCart = document.createElement("div");
    priceAndCart.className = "price-and-cart";

    const price = document.createElement("div");
    price.className = "price";
    price.innerText = item.price + " сум";
    priceAndCart.appendChild(price);

    const cartIcon = document.createElement("span");
    cartIcon.className = "cart-icon";
    cartIcon.innerHTML = "&#128722;";  
    priceAndCart.appendChild(cartIcon);

    priceContainer.appendChild(priceAndCart);
    card.appendChild(priceContainer);

    if (item.category === 'clothes') {
        clothes.append(card);
    }
    else if (item.category === 'shoe') {
        shoe.append(card);
    } 
    else if (item.category === 'tech') {  
        tech.append(card);
    }

    return card;
}
