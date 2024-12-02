import {createCard } from "../utils/card.js";
import { showBanner } from "../utils/banner.js";



fetch('http://localhost:3001/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Сетевой ответ не был успешным');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            createCard(item);  
        });
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });

    showBanner();
  




