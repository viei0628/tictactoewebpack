import './style.css';
import Icon from './images/icon.jpg';


const main = document.createElement('div');
const icon = new Image();
icon.src = Icon;
main.innerText = "Hello";
main.appendChild(icon);

console.log("Hello");

document.body.appendChild(main);