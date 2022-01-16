export default () => {
  const viewSignUp = `
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
    
      <div id="cajas de texto">
      <input type="text" id="signup-name" class="signup-name" placeholder="  Nombre" required>
      <br><br>
      <input type="email" id="signup-email" class="signup-email" placeholder="  Correo electrónico" required>
      <br><br>
      <input type="password" id="signup-password" class="signup-password" placeholder="  Contraseña nueva" required>
      </div>
      <br>
    
      <div id="button" class="button">
        <button type="submit" class="button-signup">Registrarte</button>
      </div>
    
      <div>
        <p>O bien ingresa con...</p>
        <img class="google" src="img/googleC.png" alt="">
        <p>¿Ya tienes una cuenta? <a href="#/login">Inicia sesión.</a></p>
      </div>
      </div>
    `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewSignUp;
  return divElemt;
};

/* export const createRegister = () => {
  const botonSignup = document.querySelector('#button-signup');
  const botonRegistrarse = botonSignup.addEventListener('click', () => {
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;
    const name = document.querySelector('#signup-name').value;
    console.log(email, password, name);
    return botonRegistrarse;
  });
};
*/
