import { reclameCard } from "./recCard.js";
import { goHome2 } from "../utils/comeback.js";

goHome2()
fetch(`http://localhost:3001/products`)
.then(response => {

    return response.json();
})
.then(data => {
    data.forEach(item => {
        reclameCard(item);  
    });
})
.catch(error => {
    console.error(error);
});
