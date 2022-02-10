import { components } from '../view/navegador/index.js';
// eslint-disable-next-line consistent-return
const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    { return container.appendChild(components.login()); }
    case '#/signup':
    // eslint-disable-next-line no-sequences
    { return container.appendChild(components.signup()); }
    case '#/login':
    { return container.appendChild(components.login()); }
    case '#/home':
    { return container.appendChild(components.home()); }
    default:
      break;
  }
  // console.log(route);
};
export { changeView };
