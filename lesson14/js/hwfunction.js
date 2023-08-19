// Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.

// function count() {
//     let number = prompt('Enter number');
//     if (number % 2 == 0) {
//         console.log('Yes, number even');
//     } else {
//         console.log('No, number not even');
//     }
// }

// count();

// Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.

// function number() {
//     let num1 = prompt('Enter numer 1');
//     let num2 = prompt('Enter numer 2');

//     if (num1 > num2) {
//         console.log(num1);
//     } else {
//         console.log(num2);
//     }
// }

// number();

// Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае

// function truefalse() {
//     let number = prompt('Enter number');
//     if (number % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(truefalse());

// Описать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.

// function num(a) {
//     let arr = [];

//     for (let i = 0; i < a; i++){
//         arr.push(i);
//     }

//     return arr;
// }

// console.log(num(6));

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.

// function numbers(a, b) {
//     let arr2 = [];

//     if (a > b) {
//         for (let q = b; q <= a; q++) {
//             arr2.push(q);
//         }
//     } else if (a < b) {
//         for (let q = a; q <= b; q++){
//             arr2.push(q);
//         }
//     } else {
//         return 'error'
//     }

//     return arr2;
// }

// console.log(numbers(3, 9));

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.

// function numbers2(a, b) {
//     let arr3 = [];

//     if (a > b) {
//         for (let q = b; q <= a; q++){
//             arr3.unshift(q);
//         }
//     } else if (a < b) {
//         for (let q = a; q <= b; q++){
//             arr3.unshift(q);
//         }
//     } else {
//         return 'error'
//     }

//     return arr3;
// }

// console.log(numbers2(4, 18));

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.

// let list = [3, 8, 14, 16, 45, 12, 6];
// let sum = 0;

// for (let v = 0; v < list.length; v++){
//     sum = sum + list[v];
// }

//  console.log(sum);

// В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.

// let list2 = [3, 8, 14, 16, -45, 12, 6, -38, 49, -12, 17, 8, -26, 9];
// let sum1 = 0;

// for (let x = 0; x < list2.length; x++){
//     if (list2[x] > 0) {
//         sum1 = sum1 + list2[x];
//     }
// }

// console.log(sum1);

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.

// let array = [3, 8, 14, 16, 45, 12, 6, 38, 49, 12, 17, 8, 26, 9];
// let summ1 = 0;
// let summ2 = 0;

// for (let r = 0; r < array.length; r++){
//     if (array[r] % 2 == 0) {
//         summ1 = summ1 + array[r];
//     } else if (array[r] % 2 == 1) {
//         summ2 = summ2 + array[r];
//     }
// }
// console.log(summ1);
// console.log(summ2);
// console.log(summ1 - summ2);

// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.

let list2 = [3, 8, 14, 16, -45, 12, 6, -38, 49, -12, 17, 8, -26, 9];
let min = 0;
let max = 0;

function MinMaxAvg(list2) {
    // for (let i = 0; i < list2.length; i++) {
    //   if (list2[i] < min) {
    //     min = list2[i];
    //   }
    //   return min;
    // }

    // for (let i = 0; i < list2.length; i++) {
    //   if (list2[i] > max) {
    //     max = list2[i];
    //   }
    //   return max;
    // }

    let sum = 0;
    for (let i = 0; i < list2.length; i++) {
        sum += list2[i];
    }
    return sum / list2.length;
}

console.log(MinMaxAvg(list2));

// Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.

// let suma = 0;

// for (let g = 0; g <= 50; g++){
//     if (g % 5 == 0) {

//         suma = suma + g;
//     }
// }

// console.log(suma);

// В программе объявлена переменная list, содержащая массив данных. Используя цикл, посчитайте сумму значений до первого булевого значения. Дойдя до булевого значения остановите цикл. Результат суммы выведите в консоль
// ?
// let list_arr = [];
// let summ = 0;

// for (let j = 0; j < list_arr.length; j++){

// }

// В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар.

// let arr = [
//   {
//     id: 1,
//     title: "bicycle",
//     price: 45000,
//     discount: 10,
//   },
//   {
//     id: 2,
//     title: "roller-skates",
//     price: 15000,
//     discount: 5,
//   },
//   {
//     id: 3,
//     title: "Kick scooter",
//     price: 10000,
//     discount: 30,
//   },
//   {
//     id: 4,
//     title: "skis",
//     price: 25000,
//     discount: 20,
//   },
//   {
//     id: 5,
//     title: "skate",
//     price: 10000,
//     discount: 0,
//   },
// ];

// Написать цикл, который выводит только названия товаров.

// for (let k = 0; k < arr.length; k++){
//     console.log(arr[k].title);
// }

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”

// for (let k = 0; k < arr.length; k++){
//     console.log(arr[k].title);
//     console.log(arr[k].price);
// }

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”
// ?
// for (let k = 0; k < arr.length; k++){
//   for (let key in arr[k]) {

//     }
// }

// Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром(без учета скидки).
// ?

// Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "my menu",
// };

// for (let key in menu) {
//   if (typeof menu[key] === "number") {
//     menu[key] *= 2;
//   }
// }
// console.log(menu);

// Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

// function number(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
// let a = prompt('Enter a');
// let b = prompt('Enter b');

// console.log(number(a, b));

// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

// function numbers(a, b) {
//   if (a % 2 == 0 && b % 2 == 0) {
//     return a * b;
//   } else if (a % 2 == 1 && b % 2 == 1) {
//     return a + b;
//   } else if (a % 2 == 0 || b % 2 == 1) {
//     return b;
//   } else {
//     return a;
//   }
// }

// let a = prompt('Enter a');
// let b = prompt('Enter b');

// console.log(numbers(a, b));
