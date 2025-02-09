// Оголоси змінну message і запиши в неї повідомлення про покупку.
//  "You picked <назва товару>, price per item is <ціна товару> credits"

  const message =  "You picked <назва товару>, price per item is <ціна товару> credits"
const product = "laptop"
const price = 15000;
console.log( `You picked ${product} , price per item is ${price} credits`);


// 6 Отримати  останній символ :
const fruit = 'апельсин';
const lenght = fruit.length;
const lastSumbol = lenght - 1;
console.log(lastSumbol)
console.log(fruit[lastSumbol])


// 7 чи містить фраза "Jason Neis" це слово "jAsOn" має бути так
// Здійсни перевірку незалежно від регістру


const frase ="Jason Neis" .toLocaleLowerCase();
console.log( frase )
const world =   "jAsOn" .toLocaleLowerCase();
console.log(world)
console.log(frase.includes(world))

// 8 "styles.css", перевірити чи закінчується на ".css", ".js"

const faleName = "styles.css"
console.log( faleName.endsWith( ".css"))
console.log( faleName.endsWith( ".js"))



// Створити скрипт, який буде отримувати від користувача число
// (кількість хвилин) і буде виводити рядок в форматі часу як результат. 

// Наприклад 80 виведе 01:20 
//          450 =>     07:30


const nubmer = 123;
const hours = Math.floor(nubmer / 60)
const minutes = nubmer % 60;
const modHours = String(hours).padStart(2, 0)
const modMinutes = String(minutes).padStart(2, 0)
const phraseForTime = `${modHours}:${modMinutes}`
console.log(phraseForTime);