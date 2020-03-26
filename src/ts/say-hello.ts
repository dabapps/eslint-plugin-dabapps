import { HELLO } from './constants';

const sayHello = () => {
  // tslint:disable-next-line:no-console
  console.log(HELLO);

  const message = document.createElement('h1');
  message.textContent = HELLO;

  document.body.appendChild(message);
};

export default sayHello;
