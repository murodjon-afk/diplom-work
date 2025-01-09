import { goHome } from "./comeback.js";
import { createSimilar } from "../utils/productCard.js";
import { Sigin } from "./sigin.js";


import { createProductCard } from "../utils/productCard.js";
const href =window.location.href;
const url = new URL(href);
const productId = url.searchParams.get('id')

fetch(`http://localhost:3001/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
        console.log('Данные продукта:', data); 
        createProductCard(data);
    })
    .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
    });

    fetch(`http://localhost:3001/products`)
    .then(response => {
    
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            createSimilar(item);  
        });
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });

    goHome()
    Sigin();

