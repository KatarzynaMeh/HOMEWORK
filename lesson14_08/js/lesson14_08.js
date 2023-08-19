// Задание: Напишите скрипт для создания списка.
// Для каждого пункта:
//     1. Запрашивайте содержимое пункта (тега <li>) у пользователя с помощью prompt 10 раз.
//     2. Создавайте элементы <li> и добавляйте его к <ul>.

// let list = document.createElement('ul');
// document.body.prepend(list);

// for (let i = 0; i < 5; i++){
//     let list_element = document.createElement('li');
//     list_element.innerText = prompt('Enter the text');
//     list.append(list_element);
// }

// Events

// let paragraph = document.querySelector('p');

// paragraph.addEventListener('click', paragraph_click);
// paragraph.addEventListener("click", changecolor);
// paragraph.addEventListener("mouseover", changebackcolor);
// paragraph.addEventListener("mouseout", changebackcolor1);

// function paragraph_click() {
//     console.log(paragraph.innerText);
// }

// function changecolor() {
//     paragraph.style.color = 'red';
// }

// function changebackcolor() {
//   paragraph.style.backgroundColor = "lightgrey";
// }

// function changebackcolor1() {
//   paragraph.style.backgroundColor = "white";
// }

// odnostrocznuju funckcuju mozna w odnu stroku ale ne warto
// paragraph.addEventListener('click', function(){console.log(paragraph.innerText);});
// odnostrocni nie mozna udalit

// remove
// paragraph.removeEventListener('click', changecolor)

// 2
// let button = document.querySelector('button');

// button.addEventListener('click', createBlock);

// function createBlock() {
//     let div = document.createElement('div');
//     div.innerText = 'Main Block';
//     div.style.border = '1px solid blue';
//     div.style.height = '50px';
//     div.style.width = '100px';
//     document.body.append(div);
// }

// 3
// Задание: Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка “Hello world”

// let button = document.querySelector('button');

// button.addEventListener('click', but);

// function but() {
//     console.log('Hello world');
// }

// 4
// Задание: Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1.
// В начале рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно.

// Number(p.innerText) + 1

// let button = document.querySelector("button");
// let paragraph = document.querySelector("p");

// button.addEventListener("click", changeparagrapf);

// function changeparagrapf() {

//     paragraph.innerText = Number(paragraph.innerText) + 1;
    
// }

// 5
// let paragraph = document.querySelector("p");

// paragraph.style.fontSize = '20px';
// paragraph.style.border = '1px solid black';

// 6
// Задание: Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на красный.

// let div = document.createElement('div');
// document.body.append(div);

// div.style.width = '200px';
// div.style.height = '200px';
// div.style.border = '2px solid black';

// div.addEventListener('mouseover', changeColor);
// div.addEventListener("mouseout", changeColor1);

// function changeColor() {
//     div.style.backgroundColor = prompt('Enter the color');

// }

// function changeColor1(){
//     div.style.backgroundColor = 'white';
// }


// Задание1: Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на первую выводится в консоль “минус”, а при нажатии на вторую ‘плюс’.

// let button1 = document.createElement('button');
// let button2 = document.createElement('button');

// document.body.append(button1, button2);

// button1.innerText = 'Minus';
// button2.innerText = 'Plus';
// button1.style.padding = '10px';
// button2.style.padding = '10px';
// button1.style.margin = "10px";
// button2.style.margin = "10px";

// button1.addEventListener("click", click_button1);
// button2.addEventListener("click", click_button2);

// function click_button1() {
//     console.log('-');
// }
// function click_button2() {
//   console.log("+");
// }

// Задание2: Доработать процесс таким образом, чтобы при нажатии на плюс в консоль выводилось число, увеличившись на 1, а при нажатии на минус уменьшившись на 1. Для решения этой задачи понадобится создать переменную и изменять ее при нажатии на ту или иную кнопку.

// let num = 5;

// function click_button1() {
//   console.log(--num);
// }
// function click_button2() {
//   console.log(++num);
// }

// Задание3: Попробовать так же изменить значение параграфа

// let num = document.querySelector('p');

// num.addEventListener('click', click_num);

// function click_num() {
//     num.innerText = Number(num.innerText) + 1;
// }


let button1 = document.createElement('button');
let button2 = document.createElement('button');
let num = document.querySelector("p");
let num_para = Number(num.innerText);

document.body.append(button1, button2);

button1.innerText = 'Minus';
button2.innerText = 'Plus';
button1.style.padding = '10px';
button2.style.padding = '10px';
button1.style.margin = "10px";
button2.style.margin = "10px";

button1.addEventListener("click", click_button1);
button2.addEventListener("click", click_button2);
// num.addEventListener("click", click_num);

function click_button1() {
    num.innerText = --num_para;
}
function click_button2() {
    num.innerText = ++num_para;
}
















