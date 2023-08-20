// Задача: Написать скрипт, который находит параграфы и четным параграфам меняет текст на 'Я четный', a нечетным на 'Я нечетный'.

// let paragraphs = document.querySelectorAll("p");

// for (let i = 0; i < paragraphs.length; i++) {
//   if (i % 2 == 1) {
//     paragraphs[i].innerText = "I am even";
//   } else {
//     paragraphs[i].innerText = "I am odd";
//   }
// }


// Задача: Написать скрипт, который находит параграфы, которые находятся внутри div-ов и первым 2 параграфам текст меняет на указанные пользователем значения.

// let paragraphs = document.querySelectorAll('div > p');

// for (let i = 0; i < 2; i++){
//     paragraphs[i].innerText = prompt('Enter text');
// }


// Задача: Написать скрипт, который находит параграфы с классом 'p1' и выводит (console) общее содержимое параграфов.

// let paragraphs = document.querySelectorAll('p.p1');

// for (let i = 0; i < paragraphs.length; i++) {
//     console.log(paragraphs[i].innerText);
// }

// Задача: Написать скрипт, который находит параграфы и последним 2 четным параграфам меняет текст на указанные пользователем значения.

let paragraphs = document.querySelectorAll('p');

for (let i = paragraphs.length - 3; i < paragraphs.length; i++){
    if (i % 2 == 1) {
        paragraphs[i].innerText = prompt('Enter text');
    }
}


// Задача: Написать скрипт, который находит параграфы и выводит (console) текстовое содержимое начная с 3 параграфа до 6.

// let paragraphs = document.querySelectorAll('p');

// for (let i = paragraphs.length - 3; i < paragraphs.length; i++){
//     console.log(paragraphs[i].innerText);
// }