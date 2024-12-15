import {createCard } from "../utils/card.js";
import { showBanner } from "../utils/banner.js";
import { openCatalog } from "../utils/catalog.js";



fetch(`http://localhost:3001/products`)
    .then(response => {
    
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
    openCatalog();

  




    
  




