const browser = "Firefox";
let text;

// if(browser == 'Edge') {
//   text = "You've got the Edge!";
// } else if (browser == 'Chrome'
//  || browser == 'Firefox'
//  || browser == 'Safari'
//  || browser == 'Opera') {
//   text = 'Ми підтримуємо і ці браузери' ;
// } else {
//   text =  'Маємо надію, що ця сторінка виглядає добре!' ;
// }
switch (browser) {
    case "Edge":
        text = "You've got the Edge!";
        break;
    case "Firefox":
    case "Safari":
    case "Opera":
        text = "Ми підтримуємо і ці браузери";
        break;
    default:
        text = "Маємо надію, що ця сторінка виглядає добре!";
}
console.log(text);



// if (a1 === 0) {
//   output = 0;
// }
// if (a1 === 1) {
//   output = 1;
// }
// if (a1 === 2 || a1 === 3) {
//   output = "2,3";
// }
let a1 = 0;
let output;

switch (a1) {
    case (0):
        output = 0;
        break;
    case (1):
        output = 1;
        break;
    case (2):
    case (3):
        output = "2,3";
        break
    default:
        console.log("Invalidvalue");

}
console.log(output);



// Напиши скрипт вибору готеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
//  'Токої кількості зірок немає'


const stars = 2;
let price;

switch (stars) {
    case 1:
        price = 20
        break;
    case 2:
        price = 30
        break;
    case 3:
        price = 4
        break;
    case 5:
        price = 120
        break
    default:
        console.log("Токої кількості зірок немає")


}

console.log( price )


// 1
// Напиши скрипт вибору опції доставки товару.
// Опція зберігається в змінній option:
//  1 - самовивіз, 2 - кур"єр, 3 - пошта.
// В змінну message записати повідомлення в залежності від опції.

//  - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//  - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//  - 'Посилка буде відправлена сьогодні'
//  - 'Вам передзвонит менеджер'.
const option = 1 ;
let message
switch( option){
    case 1 :
        message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
        break;
        case 2 : 
        message = "Курєр доставить замовлення завтра з 9:00 до 18:00";
        break;
        case 3 : 
        message = "Посилка буде відправлена сьогодні";
        default :
             alert("Вам передзвонит менеджер");
             console.log( "option");



}
console.log( message);



const userName = "Кіра";
const userNamesur = "Гайдук";
let fulName = 0;
if(userName.length >4 && userNamesur > 8) {
    const result = userName.length + userNamesur.length;
    console.log(result);
}
