export function openCatalog() {
    
    const count1 = document.querySelector('.count-1');   
    const count2 = document.querySelector('.count-2');
    const count3 = document.querySelector('.count-3');
    const count4 = document.querySelector('.count-4')
    const catalog = document.querySelector('.catalog');
    const catalogContainer = document.querySelector('.catalog-container');
    const overlay = document.querySelector('.overlay');
    const menucatalog =document.querySelector('.menu-catalog')
    document.body.appendChild(overlay);

        setTimeout(function() {
          const beauty = document.querySelector('.category-beaty');
          const fragrances = document.querySelector('.category-fregrances');
          const furniture = document.querySelector('.category-furniture');
          const groceries2 = document.querySelector('.category-grociries');
          if (beauty) {
            count2.innerHTML = beauty.children.length;
          }
          if (fragrances) {
            count3.innerHTML = fragrances.children.length;
          }
          if (furniture) {
          count1.innerHTML = furniture.children.length;
          }
          if (groceries2) {
          count4.innerHTML = groceries2.children.length;
          }
        }, 100); 
    
      

    catalog.onclick = () => {
        if (catalog.innerHTML === 'Закрыть') {
            catalogContainer.style.display = 'none';
            catalog.innerHTML = 'Каталог';
            overlay.style.display = 'none'; 
        } else if (catalog.innerHTML === 'Главная') {
            window.location.href = './index.html'
        }
        
        else {
            catalogContainer.style.display = 'block';
            catalog.innerHTML = 'Закрыть';
            overlay.style.display = 'block';
        }
    };

    overlay.onclick = () => {
        catalogContainer.style.display = 'none';
        catalog.innerHTML = 'Каталог';
        overlay.style.display = 'none'; 
        menucatalog.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve"><defs> </defs>
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
            <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #7000ff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
            <path d="M 39.205 56.741 c -4.518 0 -9.035 -1.72 -12.475 -5.159 c -6.879 -6.879 -6.879 -18.072 0 -24.95 c 6.877 -6.878 18.071 -6.879 24.95 0 v 0 c 6.878 6.878 6.878 18.071 0 24.95 C 48.24 55.021 43.723 56.741 39.205 56.741 z M 39.205 27.47 c -2.981 0 -5.962 1.135 -8.232 3.404 c -4.539 4.539 -4.539 11.925 0 16.465 c 4.539 4.538 11.925 4.538 16.465 0 c 4.539 -4.54 4.539 -11.926 0 -16.466 C 45.167 28.605 42.186 27.47 39.205 27.47 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 65.276 68.179 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 47.438 51.582 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 15.718 15.718 c 1.172 1.171 1.172 3.071 0 4.242 C 66.812 67.886 66.044 68.179 65.276 68.179 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g>
          </svg> Каталог`;
    };
    
    menucatalog.onclick = () => {
        if (menucatalog.innerText === `Каталог`) {
            catalogContainer.style.display = 'block';
            menucatalog.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve"><defs> </defs>
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
            <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #7000ff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
            <path d="M 39.205 56.741 c -4.518 0 -9.035 -1.72 -12.475 -5.159 c -6.879 -6.879 -6.879 -18.072 0 -24.95 c 6.877 -6.878 18.071 -6.879 24.95 0 v 0 c 6.878 6.878 6.878 18.071 0 24.95 C 48.24 55.021 43.723 56.741 39.205 56.741 z M 39.205 27.47 c -2.981 0 -5.962 1.135 -8.232 3.404 c -4.539 4.539 -4.539 11.925 0 16.465 c 4.539 4.538 11.925 4.538 16.465 0 c 4.539 -4.54 4.539 -11.926 0 -16.466 C 45.167 28.605 42.186 27.47 39.205 27.47 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 65.276 68.179 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 47.438 51.582 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 15.718 15.718 c 1.172 1.171 1.172 3.071 0 4.242 C 66.812 67.886 66.044 68.179 65.276 68.179 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g>
          </svg> Закрыть`;
            overlay.style.display = 'block'; 
        } else if (menucatalog.innerText === `Главная`) {
            window.location.href = './index.html'
        }
        
        else {
            catalogContainer.style.display = 'none';
            menucatalog.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve"><defs> </defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #7000ff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
              <path d="M 39.205 56.741 c -4.518 0 -9.035 -1.72 -12.475 -5.159 c -6.879 -6.879 -6.879 -18.072 0 -24.95 c 6.877 -6.878 18.071 -6.879 24.95 0 v 0 c 6.878 6.878 6.878 18.071 0 24.95 C 48.24 55.021 43.723 56.741 39.205 56.741 z M 39.205 27.47 c -2.981 0 -5.962 1.135 -8.232 3.404 c -4.539 4.539 -4.539 11.925 0 16.465 c 4.539 4.538 11.925 4.538 16.465 0 c 4.539 -4.54 4.539 -11.926 0 -16.466 C 45.167 28.605 42.186 27.47 39.205 27.47 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              <path d="M 65.276 68.179 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 47.438 51.582 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.172 -1.172 3.07 -1.172 4.242 0 l 15.718 15.718 c 1.172 1.171 1.172 3.071 0 4.242 C 66.812 67.886 66.044 68.179 65.276 68.179 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g>
            </svg> Каталог` ;
            overlay.style.display = 'none';
        }
    };
 
}
