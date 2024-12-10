import {createCard } from "../utils/card.js";
import { showBanner } from "../utils/banner.js";
import { openCatalog } from "../utils/catalog.js";
import { submitDate } from "../utils/sigIn.js";
import { loginUser } from "../utils/login.js";



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

  


    fetch(`http://localhost:3001/users`)
    .then(response => {
    
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            submitDate(item);  
            loginUser(item);
        });
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });


    
  




