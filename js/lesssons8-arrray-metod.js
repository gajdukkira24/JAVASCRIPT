// 1
// 1.перетвори масив у рядок, без роздільників,
// 2.поверни кількість символів в отриманому рядку.

// ["Mango", "hurries", "to", "the", "train"] повертає 22
// ["M", "a", "n", "g", "o"] повертає 5
// ["top", "picks", "for", "you"] повертає 14

const join1 = ["Mango", "hurries", "to", "the", "train"];
const join2 = ["M", "a", "n", "g", "o"];
const join3 = ["top", "picks", "for", "you"];

const string = join1.join("");
const string2 = join2.join("");
const string3 = join3.join("");
console.log(string.length);
console.log(string2.length);
console.log(string3.length);

console.log(join3.indexOf("for"));


// 2
// є рядок, що склад зі слів, розділених лише пробілами <message> 
// та  число, що містить ціну <pricePerWord >
// напиши код, що рахує загальну вартість гравірування слів в рядку

// "JavaScript is in my blood", 10 повертає 50
// "Web-development is creative work", 20 повертає 80


// const text = "JavaScript is in my blood";
// const pricePerWord = 10;
// const array = text.split("");
// console.log(array.length * pricePerWord );
// const text1 = "Web-development is creative work";
// const pricePerWord1 = 20;
// const arr1 = text1.split(" ");
// console.log(arr1.length * pricePerWord1);


// 3
// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код , щоб перевіряти, чи присутній такий товар в масиві storage
// і повертати:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру
// ["apple", "plum", "pear"], "plum" повертає "plum is available to order!"
// ["apple", "plum", "pear"], "pEAr" повертає "pear is available to order!"
// ["apple", "plum", "pear"], "orange" повертає "Sorry! We are out of stock!"

// const storage = ["apple", "plum", "pear"];
// const item = prompt();
// const itemT = item.toLocaleLowerCase();
// if (storage.includes(itemT)){
//     alert(" { $(<item> )}is available to order!");
// }else{
//     alert(" Sorry! We are out of stock");
// }

// Знайти спільні елементи. 
const array1 = [1, 2, 3];
const array2 = [10, 20, 30];
const newArray = [];

for (const el of array1) {
    // console.log(el, array2.includes(el));
    if (array2.includes(el)) {
        newArray.push(el)
    }
}
// console.log(newArray);




// Доповни код таким чином, 
// щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

 const firstTwoEls = fruits.slice(0,1);
 const nonExtremeEls = fruits.slice(1,3);

 const lastThreeEls = fruits.slice(2,5);

console.log(firstTwoEls);
console.log(nonExtremeEls);
 console.log(lastThreeEls);






 // Оголоси змінну allClients та доповни код таким чином,
//  щоб її значенням було посилання на масив, 
//  що складається з усіх елементів масивів oldClients і newClients. 
// Спочатку мають іти елементи з масива oldClients, а потім з newClients.

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);
console.log(allClients);

// 3
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код так, 
// щоб виконувати пошук значення value у масиві array 
// і повертати:
//  - порожній масив, якщо в array немає елемента зі значенням value
//  - підмасив, що починається з початку array 
//    і до елемента зі значенням value включно, якщо такий елемент є в array
// ["Mango", "Poly", "Ajax"], "Poly" повертає ["Mango", "Poly"]
// ["Mango", "Poly", "Ajax"], "Jacob" повертає []

const array = ["Mango", "Poly", "Ajax"];
const value = "Poly";
let arr = [];
 const elemIndex = array.indexOf(value);
 console.log(elemIndex);
console.log(array.splice(0 , elemIndex));





// 1
// Створіть масив styles з елементами 'Джаз' i 'Блюз'. 
// Додайте 'Рок-н-ролл' в кінець масиву. 
// Замініть значення в середині масиву на 'Класика'. 
// Видаліть перший елемент масиву і покажіть його. 
// Додайте 'Реп' і 'Реггі' на початок масиву. 
// Виведіть масив в консоль.
const styles = ['Джаз', 'Блюз'];
styles.splice(styles.length, 0, "Рок-н-ролл");
styles.splice(1, 1, "Класика");
console.log(styles.splice(0, 1));
styles.splice(0, 0, 'Реп', 'Реггі')
console.log(styles);