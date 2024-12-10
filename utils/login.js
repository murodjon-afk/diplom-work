export function loginUser(item) {
    const phoneInput = document.querySelector('#phone'); 
    const sigInModal = document.querySelector('.sigin-modal');
    const overlay = document.querySelector('.overlay');
    const nicknameInput = document.querySelector('#nickname'); 
    const dobInput = document.querySelector('#dob'); 
    const loginBtn = document.querySelector('.login-btn'); 
    const profileNick = document.querySelector('.profile-nick'); 

    profileNick.innerHTML = item.nickName; 
    loginBtn.onclick = (event) => {
        event.preventDefault();
        const phone = phoneInput.value.trim();
        const nickname = nicknameInput.value.trim();
        const dob = dobInput.value.trim();

        if (!phone || !nickname || !dob) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        fetch('http://localhost:3001/users')
            .then((res) => res.json())
            .then((users) => {
                const user = users.find(
                    (u) => u.phone === phone && u.nickName === nickname && u.birthDate === dob
                );

                if (user) {
                    alert(`Добро пожаловать, ${user.nickName}!`);
                 
                    sigInModal.style.display = 'none'
                    overlay.style.display = 'none'
                } else {
                    alert("Пользователь с такими данными не найден.");
                }
            })
            .catch((error) => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка при проверке данных.');
            });
    };

    
}
