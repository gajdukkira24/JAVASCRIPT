// 1
// Напиши функцію logItems(items) для перебора і логування масива



// const logItems = function(arr){
//     for(const item of arr){
//         console.log(item)
//     }
// }
// logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
// logItems([1, 2, 3, 4, 5]);

//   2
// Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення
//  'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення
//  'Користувач [логін] знайдено.'

const loginToFind = 'aj4xth3m4n';
const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];

const findLogin  = function(loginsarrey , loginToFind){
    for(const login of loginsarrey){
        if( login === loginToFind){
            return 'Користувач [логін] знайдено.';
        }
    }
    return  'Користувач [логін] не знайдено.'
}



 console.log(findLogin(logins, 'avocod3r'));
 console.log(findLogin(logins, 'k1widab3st'));
 console.log(findLogin(logins, 'jam4l'));
 console.log(findLogin(logins, 'poly1scut'));



 // Напиши функцию slugify(string) яка отримує рядок
// і повертає URL-slug. Заголовок статті складається
// тільки з букв та пропусків

const slugify = function(string){
    const formatedString = string.toLowerCase();
    const arr = formatedString.split(" ");
    return arr.join("-");
}

console.log(slugify("Top 10 benefits of React framework"));
 console.log(slugify("Azure Static Web Apps are Awesome"));
 console.log(slugify("Technical writing tips for non-native English speakers"));


  const logItems = (arr) =>{
     for(const item of arr){
         console.log(item);
     }
 }
 const allLogins = ["fgh", "ghk", "ffffff", "eessesese"]

const isLoginValid = (login) => login.length >= 4 && login.length <= 16;
  
const isLoginUnique = (allLogins, login) => !allLogins.includes(login);
const addLogin = (allLogins, login) => {
  const isValid = isLoginValid(login);
  if (!isValid) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  const isUniqe = isLoginUnique(allLogins, login);
   if (!isUniqe) {
     return "Такий логін уже використовується!";
  }
  
  allLogins.push(login);
  return "Логін успішно доданий!";
};

console.log(addLogin(allLogins, "ffffff"));
console.log(allLogins);



// 1. Зробити функцію для фільтрації масиву чисел згідно переданого callbake


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
const filterNum = (array, callback) => {
    let filteredNumbers = [];
    for(const number of array){
        const passTest = callback(number);
        if(passTest){
            filteredNumbers.push(number);
        }
    }
    return filteredNumbers;
}
const f1 = (number) => {
return number < 4;
}
console.log(filterNum(arr, f1));
const f2 = (number) => {
    return number < 3;
    }
    console.log(filterNum(arr, f2));
    const f3 = (number) => {
    }