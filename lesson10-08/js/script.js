// DOM

// let img1 = document.querySelector('.img1');
// let img2 = document.querySelector('.img2');

// console.log(img1);
// console.log(img2);

// img1.setAttribute('src', 'kush-dwivedi-ZAmn3efNq8w-unsplash.jpg');

// console.log(img2.getAttribute('src'));
// //получает значение атрибута
// console.log(img2.getAttribute('alt'));
// //получает значение атрибута
// console.log(img2.hasAttribute('alt'));
// //проверяет наличие атрибута
// console.log(img1.hasAttribute('alt'));
// //проверяет наличие атрибута
// img2.removeAttribute('src');
// //удаляет атрибут


// a
// let link = document.querySelector('.link1');
// link.innerText = 'Google';
// link.setAttribute('href', 'https://www.google.com/');
// link.setAttribute('target', '_blank');

// let linka = document.querySelector('.link2');
// linka.innerText = 'Instagram';
// linka.setAttribute('href', 'https://www.instagram.com/mehovakatia');
// linka.setAttribute('target', '_blank');

// let linkh = document.querySelector('.link3');
// linkh.innerText = 'Behance';
// linkh.setAttribute('href', 'https://www.behance.net/katimekhova/info');
// linkh.setAttribute('target', '_blank');


// 2
// let links = document.querySelectorAll('a');

// // console.log(links);

// for (let link of links) {
//     link.setAttribute('href', 'https://www.google.com');
//     link.innerText = "Google";
//     link.setAttribute('target', '_blank');
// }

// for(let i=0; i<2; i++){
//     links[i].setAttribute('href', 'https://www.facebook.com');
//     links[i].innerText = 'Facebook';
// }


// 3
// Задача: Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам меняет url на указанное значение.


// let imag = document.querySelectorAll('.main > img');

// for(let d = 0; d < 5; d++){
//     imag[d].setAttribute('src', "https://t3.ftcdn.net/jpg/03/31/21/08/360_F_331210846_9yjYz8hRqqvezWIIIcr1sL8UB4zyhyQg.jpg");
// }


// 4
// Задача: Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот массив необходимо вывести в консоль.

// let links = document.querySelectorAll('a');

// let links_array = [];

// for(let i=0; i<links.length; i++){
//     links_array.push(links[i].getAttribute('href'));
// }

// console.log(links_array);

// 5

// let mylinks = document.querySelectorAll('a');

// let mylinks_array = [];

// for (let link of mylinks) {
//         link.setAttribute('target', '_blank');
//     }

// for(let q = 0; q < mylinks.length; q++){
//     mylinks_array.push(mylinks[q].getAttribute('href'));
// }

// console.log(mylinks_array);


// 6
// className

// let paragraph = document.
// querySelector('p');

// console.log(paragraph.className);

// paragraph.className = 'text1';


// classList

// paragraph.classList.add('text1');
// paragraph.classList.remove('p1');
// console.log(paragraph.classList.contains('p1'));
// console.log(paragraph.classList.contains('text'));
// paragraph.classList.toggle('text');
// jaksho je klass to udaliajet jaksho nemaje klasu to dodaje
// paragraph.classList.toggle('text');
// paragraph.classList.replace('text1', 'p1');
// zaminiuje


// 7
// createElement (teg)

// let paragraph = document.createElement('p');

// paragraph.innerText = 'Hello';

// paragraph.classList.add('p1');

// dodaje element v kinec body
// document.body.append(paragraph)

// dodaje element v poczatok body
// document.body.prepend(paragraph)


// 8

// let paragarph = document.createElement('p');

// paragarph.innerText = 'Hello';

// paragarph.classList.add('p1');

// // document.body.append(paragarph);
// // document.body.prepend(paragarph);

// let block1 = document.querySelector('.main');

// // block1.prepend(paragarph); //добавляет тег в начало
// block1.append(paragarph); //добавляет тег в конец
// // block1.before(paragarph); //добавляет тег до блока
// // block1.after(paragarph); //добавляет тег после блока



// 9
// ul > 10, li > prompt

// let list = document.createElement('ul');
// document.body.prepend(list);

// for (let i = 0; i < 10; i++){
//     let list_element = document.createElement('li');
//     list_element.innerText = prompt('Enter the text');
//     list.append(list_element);
// }


// 10
// delete element

// let p1 = document.querySelector('p');

// p1.remove();


// delete dekilka elementiv
// let paragraphs = document.querySelectorAll("p");

// for (let i = 0; i < 3; i++) {
//   paragraphs[i].remove();
// }

// 11
let parag = document.querySelectorAll('p');

for (let f = 0; f <= parag.length; f++){
    if (f % 2 == 1) {
        parag[f].remove(); 
    }
}






