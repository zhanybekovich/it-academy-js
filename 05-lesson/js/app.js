// Switch

// let day = "friday";

// switch (day) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     console.log("Work!");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Не корректный день недели!");
// }

// if (day === "monday") {
//   console.log("Work!");
// } else if (day === "tuesday") {
//   console.log("Work again!");
// } else if (day === "wednesday") {
//   console.log("Work again!");
// } else if (day === "thursday") {
//   console.log("Work again!");
// } else if (day === "friday") {
//   console.log("Work again!");
// } else if (day === "saturday") {
//   console.log("Weekend");
// } else if (day === "sunday") {
//   console.log("Weekend");
// } else {
// console.log("Unknown day")}

// let ivansFriend = "John";
// let ivansFriend2 = "Bob";

// Массив = Array

// const ivansFriends = [
//   "John",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Adil",
//   "Bekzat",
// ];

// console.log(ivansFriends.length);
// console.log(ivansFriends[3]);
// console.log(ivansFriends[ivansFriends.length - 1]);

// Добавление в массив (в конец)
// const ivansFriends = [];
// console.log(ivansFriends);

// ivansFriends.push("John");
// console.log(ivansFriends);

// ivansFriends.push("Bob");
// console.log(ivansFriends);

// // Добавление в начало массива
// ivansFriends.unshift("Tom");
// console.log(ivansFriends);

// let friends = new Array("John", "Bob", "Tom", "Alice");

// console.log(friends);

// let prices = [1, 2, 3, 4, 50.45, 6, 7, 8, 9, 10];

// let matrix = [
//   [1, [2], 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let user = ["John", 20, true];

// const ivansFriends = [
//   "John",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Adil",
//   "Bekzat",
// ];
// console.log(ivansFriends);

// ivansFriends.pop();
// console.log(ivansFriends);

// ivansFriends.pop();
// console.log(ivansFriends);

// ivansFriends.shift();
// console.log(ivansFriends);

// ivansFriends[2] = "Kamchybek";
// console.log(ivansFriends);

// const ivansFriends = [
//   "John",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Adil",
//   "Bekzat",
// ];
// console.log(ivansFriends);

// const joined = ivansFriends.join(", ");

// console.log(joined);

// Loops = Цикл

// while
// let i = 200;

// while (i >= 0) {
//   // console.log(i);
//   console.log("Hello");
//   i--;
// }

// do while
// let i = -2;

// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

// for
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// const ivansFriends = [
//   "John",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Adil",
//   "Bekzat",
//   "Kamchybek",
// ];

// for (let i = 0; i < ivansFriends.length; i++) {
//   console.log(ivansFriends[i]);
// }

// for (let i = 0; i <= 20; i++) {
//   // if (i % 2 === 0) {
//   //   console.log(i);
//   // }

//   if (i === 5) {
//     // break;
//     // continue;
//   }

//   console.log(i);
// }

// for ... of

// const books = [
//   "John",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Bob",
//   "Alice",
//   "Tom",
//   "Adil",
//   "Bekzat",
//   "Kamchybek",
// ];

// for (book of books) {
//   console.log(book);
// }

// const books = [
//   // "John",
//   // "Bob",
//   // "Alice",
//   // "Tom",
//   // "Bob",
//   // "Alice",
//   // "Tom",
//   // "Adil",
//   // "Bekzat",
//   // "Kamchybek",
//   23, 45, 20, 12, 1, 0, 125,
// ];

// const sortedBooks = books.sort();
// console.log(sortedBooks);

// # Задачи

// 1. Напишите программу, которая запрашивает номер месяца (1–12) и с помощью оператора switch выводит название времени года (зима, весна, лето, осень).

let month = 14;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Error");
}

// 2. Создайте программу, которая принимает число от 1 до 7, соответствующее дню недели, и выводит название дня недели (например, 1 — понедельник) с использованием switch.
let day = 2;
switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Error");
}

// 3. Напишите программу, которая создает массив из 10 случайных чисел, выводит его и находит максимальный элемент в массиве с помощью цикла for.
// 4. Заполните массив из 20 случайных чисел. Подсчитайте, сколько среди них четных и нечетных чисел, и выведите результаты.
// 5. Создайте массив из 10 чисел. Используя цикл, найдите сумму всех чисел в массиве и выведите результат.
// 6. Создайте программу, которая с помощью вложенного цикла выводит таблицу умножения (например, от 1 до 10).
// 7. Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.
// 8. Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
// 9. Дан массив с числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
// 10. Дана строка. Удалите из нее все гласные буквы.
