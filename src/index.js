import { sum } from './sum';
import style from './css/index.scss';
console.log(sum(3,4));
const head = document.getElementById("demo"),
sumValue = sum(100,4);

head.innerHTML = `Wynik dodawania 100+4 = ${sumValue}`
alert ("aaa");
