export function submitDate(item) {
    const sigInModal = document.querySelector('.sigin-modal');
    const overlay = document.querySelector('.overlay');
    const cansel = document.querySelector('.cansel-btn');
    const submitBtn = document.querySelector('.sumbit-code');
    const date = document.querySelector('.birthDate');
    const nickName = document.querySelector('.nickname');
    const siginInput = document.querySelector('.sigin-input');
    const signin = document.querySelector('.signin');
    const profileNick = document.querySelector('.profile-nick');
    const url = 'http://localhost:3001/users';

    signin.onclick = () => {
        if (profileNick.textContent.trim() !== 'Войти') {
            window.location.href = './utils/profile.html';
        } else {
            sigInModal.style.display = 'flex';
            overlay.style.display = 'block';
        }
    };
    
    
    profileNick.innerHTML = item.nickName ;

    cansel.onclick = () => {
        sigInModal.style.display = 'none';
        overlay.style.display = 'none';
    };


    submitBtn.onclick = (event) => {
        event.preventDefault();
        const nick = nickName.value.trim();
        const phone = siginInput.value.trim();  
        const birthDate = date.value.trim();  
      

        const userData = {
            nickName: nick,
            phone: phone,
            birthDate: birthDate,
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(userData),
        })
        .then((res) => res.json())
        .then((res) => {
            console.log('Ответ от сервера:', res);
            sigInModal.style.display = 'none';
            overlay.style.display = 'none';
            alert(`${nick} вы Успешно зарегистрировались`)
        })
        .catch((error) => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке данных');
        });
    };
}
