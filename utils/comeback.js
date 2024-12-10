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
