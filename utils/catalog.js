export function openCatalog() {
    const catalog = document.querySelector('.catalog');
    const techCategory = document.querySelectorAll('.tech-category');
    const Cansel = document.querySelectorAll('.cansel-category');
    const clothesCategory = document.querySelector('.clothes-category')
    const shoeCategory = document.querySelector('.shoe-category')
    const groceriesCategory = document.querySelector('.groceries-category')
    const count1 = document.querySelector('.count-1');
    const count2 = document.querySelector('.count-2');
    const count3 = document.querySelector('.count-3');
    const count4 = document.querySelector('.count-4')
    const techCtg = document.querySelector('.technieque2');
    const clothesCtg = document.querySelector('.clothes-ctg');
    const groceriesCtg =document.querySelector('.groceries-ctg')
    const shoeCtg = document.querySelector('.shoes-ctg');
    const catalogContainer = document.querySelector('.catalog-container');
    const overlay = document.createElement('div');
    const secondBanner = document.querySelector('.second-banner')
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    count1.innerHTML = '5';
    count2.innerHTML = '5';
    count3.innerHTML = '5';
    count4.innerHTML ='15'

    catalog.onclick = () => {
        if (catalog.innerHTML === 'Закрыть') {
            catalogContainer.style.display = 'none';
            catalog.innerHTML = 'Каталог';
            overlay.style.display = 'none'; 
        } else {
            catalogContainer.style.display = 'block';
            catalog.innerHTML = 'Закрыть';
            overlay.style.display = 'block';
        }
    };

    overlay.onclick = () => {
        catalogContainer.style.display = 'none';
        catalog.innerHTML = 'Каталог';
        overlay.style.display = 'none'; 
    };

    techCategory.onclick=()=>{
        techCtg.style.display = 'block'
        groceriesCtg.style.display = 'none'
        shoeCtg.style.display = 'none'
        clothesCtg.style.display = 'none'
        secondBanner.style.display = 'none'
    }


    
    clothesCategory.onclick=()=>{
        techCtg.style.display = 'none'
        groceriesCtg.style.display = 'none'
        shoeCtg.style.display = 'none'
        clothesCtg.style.display = 'block'
         secondBanner.style.display = 'none'
    }

    shoeCategory.onclick=()=>{
        techCtg.style.display = 'none'
        groceriesCtg.style.display = 'none'
        shoeCtg.style.display = 'block'
        clothesCtg.style.display = 'none'
         secondBanner.style.display = 'none'
    }

    groceriesCategory.onclick=()=>{
        techCtg.style.display = 'none'
        groceriesCtg.style.display = 'block'
        shoeCtg.style.display = 'none'
        clothesCtg.style.display = 'none'
         secondBanner.style.display = 'none'
    }
    Cansel.forEach(category => {
        category.onclick = () => {
            shoeCtg.style.display = 'block';
            techCtg.style.display = 'block';
            clothesCtg.style.display = 'block';
            groceriesCtg.style.display = 'block'
             secondBanner.style.display = 'block'
        };
    });
}
