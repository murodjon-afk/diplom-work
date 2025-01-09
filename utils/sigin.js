export function Sigin() {
    const siginModal = document.querySelector('.sigin-modal');
    const siginModal2 = document.querySelector('.sigin-modal2');
    const signin = document.querySelector('.signin')
    const canselBtn =document.querySelector('.cansel-btn')
    const canselBtn2 =document.querySelector('.cansel-btn2')
    const overlay = document.querySelector('.overlay');
    const phoneInput = document.querySelector('#phone'); 
    const submitCodeButton = document.querySelector('.sumbit-code'); 
    const emailInput = document.querySelector('.email'); 
    const nickNameInput = document.querySelector('.nickName'); 
    const regionSelect = document.querySelector('#regionSelect'); 
    const loginButton = document.querySelector('.loginbtn'); 
     const profileNick =document.querySelector('.profile-nick')
     const toProfile = document.querySelector('.toProfile');
     const toprofiletext =document.querySelector('.toprofile-text')
    siginModal.style.display = 'none';
    signin.onclick = () => {
        if (profileNick.innerHTML === 'Войти') {
          siginModal.style.display = 'flex';
          overlay.style.display = 'block';
        } else {
          alert(`Привет ${storedName}, ваши данные: ${storedName}, ${storedPhone}`);
          siginModal.style.display = 'none';
          overlay.style.display = 'none';
        }
      };

      toProfile.onclick = () => {
        if (toprofiletext.innerHTML === 'Войти') {
          siginModal.style.display = 'flex';
          overlay.style.display = 'block';
        } else {
          alert(`Привет ${storedName}, ваши данные: ${storedName}, ${storedPhone}`);
          siginModal.style.display = 'none';
          overlay.style.display = 'none';
        }
      };
      
    canselBtn.onclick=()=>{
        siginModal.style.display = 'none';
        overlay.style.display = 'none';
    

    }
   submitCodeButton.onclick=()=>{
    const phoneValue = phoneInput.value;
    console.log(phoneValue);
    if (phoneInput.value === '') {
        alert('Заполните строку номера')
     } else{
            siginModal.style.display='none';
    siginModal2.style.display='flex'
     }
   }

   canselBtn2.onclick=()=>{
    siginModal2.style.display='none';
   overlay.style.display='none'
   }

   loginButton.onclick=()=>{
    if (
        !emailInput.value.includes('gmail.com') && 
        nickNameInput.value === '' && 
        regionSelect.value === ''
      ) {
        alert('Неправильный ввод данных или нету ввода данных');
      } else {
        const userData = {
          email: emailInput.value,
          name: nickNameInput.value,
          phone: phoneInput.value,
          region: regionSelect.value,
          orders: []
        };
        localStorage.setItem('userName', userData.name);
        localStorage.setItem('userPhone', userData.phone);      
        fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData) 
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log('Данные успешно отправлены на сервер:', data);
          })
          .catch(error => {
            console.error('Ошибка при отправке данных:', error);
          });
      }   
   }

   const storedName = localStorage.getItem('userName');
   const storedPhone = localStorage.getItem('userPhone'); 
   if (storedName) {
     profileNick.textContent = ` ${storedName}`;
   } else {
     profileNick.textContent = 'Войти';
   }
   if (storedName) {
    toprofiletext.textContent = ` ${storedName}`;
    toprofiletext.style.fontWeight = '600';
    
  } else {
    toprofiletext.textContent = 'Войти';
  }



   

  
}