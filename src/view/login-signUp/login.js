export default () => {
  const viewLogin = `
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
  
    <div id="cajas de texto">
    <input type="email" id="login-email" class="login-email" type="text" placeholder="  Correo electrónico" required>
    <br><br>
    <input type="password" id="login-password" class="login-password" type="text" placeholder="  Contraseña" required>
    </div>
    <br>
  
    <div id="button" class="button">
      <button type="submit" class="button-login">Entrar</button>
    </div>
  
    <div>
      <p>O bien ingresa con...</p>
      <img class="google" src="img/googleC.png" alt="">
      <p>¿No tienes una cuenta? <a href="#/signup">Regístrate.</a></p>
    </div>
    </div>
  `;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewLogin;
  return divElemt;
};
