export default () => {
  // if (document.querySelector('.containerNewPost')) {
  //  document.querySelector('.containerNewPost').remove();
  // }
  const newPostContainer = document.createElement('section');
  newPostContainer.classList.add('containerNewPost');
  newPostContainer.innerHTML = `
    <div class="header-newPost">
    <button class="cancel"> Cancelar </button>
    <div id="newPost"> Nueva Publicación </div>
    <button type="submit" class="publish">Publicar</button>
</div>
<br>

<!-- <div class="info-user">
  <div class="photo"><img id="photoUser1"></div>
  <div class="name-user">
    <div id='namePost'></div>
  </div>
</div> -->

<textarea namePost="textarea" id="post-description" rows="5" cols="40" placeholder="Deja tu comentario"></textarea>
`;
  return newPostContainer;
};
