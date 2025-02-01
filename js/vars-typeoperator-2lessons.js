let a = 5;
let b = 10;
let c = 15;
let d = 20;

 a += 2;
 b -= 4;
 c *= 3;
 d /= 10;


// Доповни код, присвоївши змінній totalPrice вираз для підрахунку 
// загальної суми замовлення.
//  Змінна pricePerItem зберігає ціну за одиницю товару,
//  а orderedQuantity - кількість одиниць товару в замовленні.
 const pricePerItem = 3500;
 const orderedQuantity = 4;

const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice)

// Оголоси змінну isAdult та задай їй результат 
// перевірки значення змінної age.
//  Використай оператори порівняння та доповни код так, щоб 
//  значенням isAdult було true, якщо вік користувача більше або дорівнює 18 
//  та false, якщо менше 18.

 const age = 19;
 const isAdult = 18 <= age;
 console.log(isAdult)

 // Якщо паролі співпадають (сувора рівність), значення isValid має бути true
// Якщо паролі не співпадають, значення isValid має бути false

const correctPassword = "jqueryismyjam";
const userPassword = "jqueryismyjam";

const  isValid =correctPassword === userPassword ;
console.log(isValid);