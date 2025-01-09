import {createCard } from "../utils/card.js";
import { showBanner } from "../utils/banner.js";
import { openCatalog } from "../utils/catalog.js";
import {  goHome3} from "../utils/comeback.js";
import { Sigin } from "../utils/sigin.js";



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
    goHome3();
    Sigin();



 

  
   


