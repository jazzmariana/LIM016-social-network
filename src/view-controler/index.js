import { components } from '../view/login-signUp/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    { return container.appendChild(components.login()); }
    case '#/signup':
    { return container.appendChild(components.signUp()); }
    case '#/login':
    { return container.appendChild(components.login()); }

    default:
      break;
  }
  console.log(route);
};
export { changeView };
