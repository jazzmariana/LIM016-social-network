import { createUser } from '../../firebase/firebase-auth.js';

export default () => {
  const viewSignUp = document.createElement('div');
  viewSignUp.classList.add('sectionLogin');
  viewSignUp.innerHTML = `
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
          <h2>Regístrate</h2>
      </div>
    
      <form id="signup-form" class="intento">
        <input type="text" id="signup-name" class="signup-name" placeholder="  Nombre" required>
        <br><br>
        <input type="email" id="signup-email" class="signup-email" placeholder="  Correo electrónico" required>
        <br><br>
        <input type="password" id="signup-password" class="signup-password" placeholder="  Contraseña nueva" required>
        <br>
      
        <div id="button" class="button">
          <button id="button-signup" type="submit" class="button-signup">Registrarte</button>
        </div>
      </form>

        <div>
          <p>O bien ingresa con...</p>
          <img class="google" src="img/googleC.png" alt="">
          <p>¿Ya tienes una cuenta? <a href="#/login">Inicia sesión.</a></p>
        </div>
      
      </div>
    `;
  const userRegister = viewSignUp.querySelector('.intento');
  userRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;
    createUser(email, password)
      .then((userCredential) => {
        console.log('éxito');
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        console.log('falló');
      });
  });
  return viewSignUp;
};

// export const createRegister = (e) => {
//   e.preventDefault();
//   const email = document.querySelector('#signup-email').value;
//   const password = document.querySelector('#signup-password').value;
//   // const name = document.querySelector('#signup-name').value;
//   createUser(email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log(user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     });
// };

// const signupForm = divElement.querySelector('#signup-form');
// signupForm.addEventListener('submit', createRegister);
