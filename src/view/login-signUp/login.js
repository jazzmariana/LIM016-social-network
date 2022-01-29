import { loginEmail } from '../../firebase/firebase-auth.js';

export default () => {
  const viewLogin = document.createElement('div');
  viewLogin.classList.add('sectionLogin');
  viewLogin.innerHTML = `
    <div id="containerRegister" class="containerRegister">
      
    <!--<div class="fondoImg">
    <img src="img/fondo2.jpg">
    </div>-->
  
    <div id="img" class="img">
      <img class="logo2" src="img/icono2.png" alt="">
      <br>
      <img class="logo" src="img/iconoM.png" alt="">
    </div>
  
    <div id="welcome" class="welcome">
        <p>¡Bienvenido a <span class="text">MovieLover</span>! la red de fánaticos por las películas</p>
    </div>
  
    <form id="login-form">
    <input type="email" id="login-email" class="login-email" type="text" placeholder="  Correo electrónico" required>
    <br><br>
    <input type="password" id="login-password" class="login-password" type="text" placeholder="  Contraseña" required>
    <br>
  
    <div id="button" class="button">
      <button type="submit" class="button-login">Entrar</button>
    </div>
    </form>

    <div>
      <p>O bien ingresa con...</p>
      <img class="google" src="img/googleC.png" alt="">
      <p>¿No tienes una cuenta? <a href="#/signup">Regístrate.</a></p>
    </div>
    </div>
  `;
  const email = viewLogin.querySelector('.login-email');
  const password = viewLogin.querySelector('.login-password');
  const buttonEntrar = viewLogin.querySelector('#login-form');
  buttonEntrar.addEventListener('submit', () => {
    loginEmail(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('hola');
        console.log(user);
        // window.location.hash = '#/Home';
      })
      .catch(() => {
        console.log('falló');
      });
  });
  return viewLogin;
};
