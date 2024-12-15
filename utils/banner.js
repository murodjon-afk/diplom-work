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
        "../logos/pUW8cv16847430816132_l.jpg",
        "../logos/banner2.jpg",
        "../logos/firstbanner.jpg",
        "../logos/91FAv5olRuwYQ1JME25pVwMNgFWiVnTU.jpg",
        "../logos/uzum-sale.jpg"
    ];

    let currentIndex = 0;
    let isAnimating = false;

    function updateBackground(nextIndex, direction = 'right') {
        if (isAnimating) return;

        const currentImage = document.createElement('div');
        currentImage.style.backgroundImage = `url('${logos[currentIndex]}')`;
        currentImage.classList.add('banner-images');
        currentImage.style.position = 'absolute';
        currentImage.style.width = '100%';
        currentImage.style.height = '100%';
        currentImage.style.transition = 'transform 1s ease-in-out';
        currentImage.style.transform = 'translateX(0)';
        const nextImage = document.createElement('div');
        nextImage.style.backgroundImage = `url('${logos[nextIndex]}')`;
        nextImage.classList.add('banner-images');
        nextImage.style.position = 'absolute';
        nextImage.style.width = '100%';
        nextImage.style.height = '100%';
        nextImage.style.transition = 'transform 1s ease-in-out';
        nextImage.style.transform = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
        banner.appendChild(nextImage);
        banner.appendChild(currentImage);

        setTimeout(() => {
            currentImage.style.transform = direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
            nextImage.style.transform = 'translateX(0)';
        }, 10);


        setTimeout(() => {
            banner.removeChild(currentImage);
            currentIndex = nextIndex;
            isAnimating = false;
        }, 1000);
    }

    right.onclick = () => {
        let nextIndex;
        if (currentIndex + 1 === logos.length) {
  nextIndex = 0; 
     } else {
     nextIndex = currentIndex + 1; 
    }
 updateBackground(nextIndex, 'right');
    };
    
 left.onclick = () => {
  let previousIndex;
  if (currentIndex === 0) {
     previousIndex = logos.length - 1; 
  } else {      previousIndex = currentIndex - 1; 
 }
 updateBackground(previousIndex, 'left');
    };
    

 setInterval(() => {
        const nextIndex = (currentIndex + 1) % logos.length;
        updateBackground(nextIndex, 'right');
 }, 5000);
}
