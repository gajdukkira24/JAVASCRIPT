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



// 5.845   >>>>>   5.8
let numOne = 5.845;
numOne  = numOne. toFixed(1)
console .log(numOne )
numOne = Number(numOne)
console .log(numOne )

/*   задача 4
    Напиши скрипт який каже користувачу ввести число та ступінь,
    потім зводить число до ступеню та виводить результат в консоль
      1. попросити ввести число і зберегти в змінну та вивести в консоль
      2. попросити ввести ступінь та зберегти в змінну та вивести в консоль
      3. Звести введені дані до ступеня та вивести результат в консоль

      !!! перед розрахунком перетворити явно отримані результати в число
 */

      const number = prompt("Введіть число");
      const power = prompt("Введіть ступінь");
      console.log(number, power);
      const result = Number(number) ** Number(power);
      console.log(result);
      alert(result)




