export function goHome() {
    const logoParent = document.querySelector('.logo-container');
    const catalog = document.querySelector('.catalog');
    const input = document.querySelector('input');
    logoParent.style.cursor = 'pointer';
    logoParent.onclick = () => {
        window.location.href = '/index.html'; 
    };
    catalog.onclick = () => {
        window.location.href = '/index.html'; 
        alert('К сожеление каталог действует только глобальном странице !');
    };
    input.oninput=()=>{
        window.location.href = '/index.html'; 
        alert('К сожеление поиск присуствует только глобальном странице !');

    }
}



export function goHome2() {
    const logoParent = document.querySelector('.logo-container');
    const catalog = document.querySelector('.catalog');
    logoParent.style.cursor = 'pointer';
    logoParent.onclick = () => {
        window.location.href = '/index.html'; 
    };
    catalog.onclick = () => {
        window.location.href = '/index.html'; 
        alert('К сожеление каталог действует только глобальном странице !');
    };

}

export function goHome3() {
    const logoParent = document.querySelector('.logo-container');
    logoParent.style.cursor = 'pointer';
    logoParent.onclick = () => {
        window.location.href = '/index.html'; 
    };
}

export function goHome4() {
    const input = document.querySelector('input');
    input.oninput=()=>{
        window.location.href = '/index.html'; 
        alert('К сожеление поиск присуствует только глобальном странице !');

    }
}



