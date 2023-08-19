// Заполните массив целыми числами от 1 до 10.
// Заполните массив четными числами из промежутка от 1 до 100.

// let array1 = [];

// for (let i = 1; i <= 10; i++){
//     array1.push(i);
// }
//  console.log(array1);

// let array2 = [];

// for (let d = 2; d <= 50; d+=2){
//     array2.push(d);
// }
// console.log(array2);

// for (let d = 1; d <= 50; d++){
//     if (d % 2 == 0) {
//         array2.push(d);
//     }
// }
// console.log(array2);

// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// Пример:

// let obj = {
//     firstname: 'Lily',
//     lastname: 'Smith',
//     age: 20,
//     username: 'lala@lala.la',
//     password: 'qwerty12345'
// }

// let arr1 = [];
// let arr2 = [];

// for (let key in obj) {
//     console.log(key);
// }

// for (let key in obj) {
//     arr2.push(key)
//     console.log(obj[key]);
// }

// for (let key in obj) {
//   arr1.push(key);
//   arr2.push(obj[key]);
// }

// console.log(arr1);
// console.log(arr2);

// Дан некоторый массив, например, вот такой:
// let array = [1, 2, 3, 4, 5, 6];
// Найдите сумму первой половины элементов этого массива.

// let array = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// for (let i = 0; i < array.length / 2; i++){
//     sum += array[i];
// }

// console.log(sum);

// Дан некоторый массив, например, вот такой:
// let array = [1, 2, 3, 4, 5, 6];
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

// let array = [1, 2, 3, 4, 5, 6];
// let sum1 = 0;
// let sum2 = 0;

// for (let i = 0; i < array.length; i++){
//     if (i % 2 == 0) {
//         sum1 += array[i]
//     }
// }

// for (let i = 0; i < array.length; i++) {
//   if (i % 2 == 1) {
//     sum2 += array[i];
//   }
// }

// console.log(sum1 / sum2);

// for (let i = 0; i < array.length; i++){
//     if (i % 2 == 0) {
//         sum1 += array[i];
//     } else {
//         sum2 += array[i];
//     }
// }
// console.log(sum1 / sum2);

// let array1 = [1, 2, 3, 4, 5, 6];
// let product = 1;

// for (let i = 0; i < array1.length; i++){
//     product *= array1[i]
// }
// console.log(product);

// найти произведение чисел, которые больше 1 и меньше 20;

// let array2 = [12, 0, -12, 35, 8, -1, 0, 3, -4];
// let product1 = 1;

// for (let i = 0; i < array2.length; i++){
//   if (array2[i] > 1 && array2[i] < 20) {
//       product1 *= array2[i];
//   }
// }
// console.log(product1);

// Найти произведение чисел, которые и меньше 20 и кратны 5

// let array = [12, 0, -12, 35, 8, -1, 0, 3, -4, 5, 10];
// let product = 1;

// for (let i = 0; i < array.length; i++){
//                                                     // ! nie rovno
//     if (array[i] < 20 && array[i] % 5 == 0 && array[i] != 0) {
//         product *= array[i];
//     }
// }
// console.log(product);

// Найти произведение чисел, которые или меньше 30 или кратны 3.

// let array3 = [12, 0, -12, 35, 8, -1, 0, 3, -4, 5, 10];
// let product3 = 1;

// for (let i = 0; i < array3.length; i++) {
//   if ((array3[i] < 30 || array3[i] % 3 == 0) && array3[i] != 0) {
//     product3 *= array3[i];
//   }
// }
// console.log(product3);

// Сделайте функцию, которая параметром будет принимать три числа, а возвращать максимальное из них.

// function max(a, b, c) {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c){
//         return b;
//     } else {
//         return c;
//    }
// }

// function max(a, b, c){
//     if (a > b && a > c){
//         return a;
//     }
//     else if (b > a && b > c) {
//         return b;
//     }
//     else if (c > a && c > b) {
//         return c;
//     }
//     else {
//         return 'not found';
//     }
// }

// let a = prompt('Enter a');
// let b = prompt('Enter b');
// let c = prompt('Enter c');

// console.log(max(a,b,c))

// function max(a, b, c){
//     let max = a;
//     if(max<b){
//         max = b;
//     }
//     else if(max < c){
//         max = c;
//     }
//     return max
// }

// Сделайте функцию, которая параметром будет принимать массив с числами, а возвращать минимальное число массива.

let array = [12, 0, -12, 35, 8, -1, 0, 3, -4, 5, 10];

function min(array) {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }

  return min;
}

console.log(min(array));


// Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
// Високосный год.
// Год, номер которого кратен 400, — високосный;
// Остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// Остальные годы, номер которых кратен 4, — високосные [5].
// Все остальные годы — невисокосные.


let year2 = prompt("Enter the year");

function year() {
   
    if (year2 % 4 == 0) {
        console.log('Leap year');
    } else {
        console.log('Non leap year');
    }
}






























