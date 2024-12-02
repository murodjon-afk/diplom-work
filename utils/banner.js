export function showBanner() {
    const banner = document.querySelector('.banner-parent');
    const right = document.querySelector('.right'); 
    const left = document.querySelector('.left');  
    const logos = [
        "../logos/photo_2024-11-30_21-18-30 (2).jpg",
        "../logos/photo_2024-11-30_21-18-30 (3).jpg",
        "../logos/photo_2024-11-30_21-18-30.jpg",
        "../logos/photo_2024-11-30_21-19-35.jpg",
        "../logos/photo_2024-11-30_21-19-52.jpg",
        "../logos/pUW8cv16847430816132_l.jpg"
    ];

    let currentIndex = 0; 
    function updateBackground(index) {
        if (banner) {
            banner.style.backgroundImage = `url('${logos[index]}')`;
            currentIndex = index;
        } 
           
        
    }
    updateBackground(currentIndex);
    right.onclick = () => {
        const nextIndex = (currentIndex + 1) % logos.length; 
        updateBackground(nextIndex);
    };
    left.onclick = () => {
        const previousIndex = (currentIndex === 0) ? logos.length - 1 : currentIndex - 1;
        updateBackground(previousIndex);
    };
}
