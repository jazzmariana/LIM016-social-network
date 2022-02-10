/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

import {
  publishPost, getPosts, onGetPosts, deletePost, getPost,
} from '../../firebase/firestore.js';

export default () => {
  const viewHome = document.createElement('div');
  viewHome.classList.add('container-home');
  viewHome.innerHTML = `
  
<section class="contenedorHome">
</header>
<div id="navegador">
<nav>
<ul>
<li><a class="nav" href="#/home">MovieLover</a></li>

<li style="float:right"><a href="#/signoff"><img src="" alt="">Cerrar sesión</a></li>

<li style="float:right"><a href="#/profile"><img src="" alt="">Perfil</a></li>
</ul>
</nav>
</div>
</header>
<section>
<div class="containerWelcomeUsers">
  <div class="welcomeText">
      <br>
      <h>Bienvenid@,</h>
      <p id="infoUser">Usuario</p>
  </div>
  <img id="imgUser" class="imgHome" width="100px">
</div>
</section>

<section class= "newPost" id="newPost">
<form class= "post">
<div class="crearPost">
<textarea id = "post-text" class="crear" rows="4" cols="50" placeholder = "Crea tu post"></textarea>
<button type="submit" id = "btnPublicar">publicar</button>
</div>
</form>
<div class= "post-container"></div>
</section>

<aside>
<section class="label-container">
<p class="label-name"> ¿Qué ver? </p>
<div class="post-label">
  <img src="" alt="" class="img-estrenos">
  <a class="link-labels" href="https://www.instagram.com/estrenos_depeliculas/?hl=es-la
  " target="_blank">Peliculas en Estreno</a>
</div>
<div class="post-label">
  <img src="" alt="" class="img-">
  <a class="link-labels" href="https://www.youtube.com/watch?v=jUwg_k_qXg0
  " target="_blank" >Top 10 - 2021</a>
</div>
<div class="post-label">
  <img src="" alt="" class="img-">
  <a class="link-labels" href="https://www.apeseg.org.pe/2021/10/ir-al-cine-que-cuidados-debo-tener-para-no-contagiarme-de-la-covid-19/
  " target="_blank">Cine sin Covid</a>
</div>
</section>
</aside>

</section>

   `;

  const postsContainer = viewHome.querySelector('.post-container');
  const postForm = viewHome.querySelector('.post');

  let editStatus = false;

  const mostrarPublicaciones = async () => {
    // const querySnapshot = await getPosts();
    onGetPosts((querySnapshot) => {
      let html = '';
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        html += `
         <div>
         <p>${post.text}</p>
         <button class ="btn-delete" data-id= "${doc.id}">Eliminar</button>
         <button class ="btn-edit" data-id= "${doc.id}">Editar</button>
         </div>
         `;
      });
      postsContainer.innerHTML = html;
      const btnsDelete = postsContainer.querySelectorAll('.btn-delete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', async ({ target: { dataset } }) => {
          // eslint-disable-next-line no-alert
          const confirmation = window.confirm('¿Esta seguro que quiere eliminar el post?');
          // para corroborar que el usuario quiere borrar el post
          if (!confirmation) {
            // si la confirmacion es falsa, no hace nada, de lo contrario borra el post
            return;
          }
          await deletePost(dataset.id);
        });
      });
      const btnsEdit = postsContainer.querySelectorAll('.btn-edit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const doc = await getPost(e.target.dataset.id);
          const post = doc.data();

          postForm['post-text'].value = post.text;

          editStatus = true;
        });
      });
    });
  };
  mostrarPublicaciones();

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = postForm['post-text'];

    if (editStatus) {
      console.log('actualizando');
    } else {
      publishPost(text.value);
    }

    postForm.reset();
  });

  return viewHome;
};
