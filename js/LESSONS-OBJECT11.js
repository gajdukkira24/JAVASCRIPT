// const addres = "Beresteiska, 54"
// const color = "color"
// const myObject = {
//     name: "Kira",
//     age: 14,
//     occupation: "Student",
//     city: "Kyiv",
//     bestfriends: ["Renate"],
//     addres,
//     [color]: "green"
//   };
//   console.log(myObject)


// 1. 
//  Оголоси змінну apartment і задай ій об'єкт, 
// який описує квартиру з наступними характеристиками:

// descr - рядок, що містить опис, 
// значення "Spacious apartment in the city center";
// rating - число, що містить рейтинг, значення 4;
// price - число, що містить ціну, значення 2153;
// tags - масив рядків, що містить метаінформацію,
//  значення ["premium", "promoted", "top"].


// 2. 
// Доповни об'єкт квартири властивістю owner, 
// значенням якого буде об'єкт з інформацією про власника.
// Додай об'єкту owner наступні властивості:

// name - рядок, що містить ім'я власника, значення "Henry";
// phone - рядок, що містить номер телефону, значення "982-126-1588";
// email - рядок, що містить пошту, значення "henry.carter@aptmail.com"

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".\// 4
// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// Зверніть увагу: якщо ви спробуєте додати властивості country
//  і city до ще не створеної властивості location,
//  ви отримаєте помилку. 
// Спочатку ініціалізуйте location як порожній об

// Спочатку ініціалізуйте location як порожній об'єкт, 
// а потім додавайте до нього властивості.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     }
// }
// console.log(apartment.rating);
// console.log(apartment.descr);
// console.log(apartment?.owner.email);
// console.log(apartment["tags"][0]);


// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);


// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// const myObject = {
//     name: "Kate",
//     age: 30,
//     city: "Kyiv",
//     occupation: "designer",
//     increaseAge(age) {
//         this.age = age
//         console.log(`increase age to ${age}`)
//     },
//     changeOccupation(position) {
//         this.occupation = position;
//     }
// }

// myObject.increaseAge(31);
// // myObject.age = 31;

// myObject.changeOccupation("teacher")
// console.log(myObject);

// // isRatingGood(){
// //     if (this.rating > 8) {
// //         return true
// //     }
// //     else {
// //         return false
// //     }
// // }

// // console.log(apartment.isRatingGood());
// addnowtag(newTAG){
//     this.tags.push()

// }



// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }
//  const cart = {
//        items: [],
//        getItems() {
//         return this.items
//       },
//       add(product) {
//         this.items.push(product)
//         return "the product was added"
//       },
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
//  };






//   console.log(cart.getItems());
//  console.table(cart.getItems());

//  console.log(cart.add({ name: '🍎', price: 50 }));
//  console.log(cart.add({ name: '🍇', price: 70 }));
//  console.log(cart.add({ name: '🍋', price: 60 }));
//  console.log(cart.add({ name: '🍓', price: 110 }));

//  console.log(cart.getItems());
//  console.log(cart.add({ name: '🍓', price: 110 }));
//  console.table(cart.getItems());

//  console.log(cart.remove('🍋'));
//  console.table(cart.getItems());


const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const valuess = [];
   const keys =Object.keys(apartment);
   console.log(keys);
   
   for(const key of keys){
    valuess.push(apartment[key]);
   }
   console.log(valuess);

   const newvaluess = Object.values(apartment);
   console.log(newvaluess);


   // 1
// Масив colors містить колекцію кольорів.
// Кожен колір представлений об'єктом і має властивості
// hex і rgb з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex,
// а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];

//   for(const color of colors){
//     hexColors.push(color.hex)
//     rgbColors.push(color.rgb)
//   }

//   console.log(hexColors);
//   console.log(rgbColors);


// 2
// Доповни код функції так, щоб вона шукала об'єкт продукту
// з певним ім'ям (властивість name) в масиві products і
// повертала його ціну (властивість price).
// Якщо продукт з такою назвою не знайдений повертати null./

// getProductPrice(productName)
// const products = [
// { name: "Radar", price: 1300, quantity: 4 },
// { name: "Scanner", price: 2700, quantity: 3 },
// { name: "Droid", price: 400, quantity: 7 },
// { name: "Grip", price: 1200, quantity: 9 },
// ];

// const productName = "Radar";

// const getProductPrice = (productName) => {
// for(const product of products){
// console.log(product.name)
// if(product.name === productName){
//   return product.price;
// }
// }
// return null;
// }
// console.log(getProductPrice("Radar"));


// Об’єкт user
// const user = {
//     // name: 'John',
//     // age: 30,
//     email: 'john@example.com'
//   }

//   const{name="Max",age= 29,email:useremail}= user
//   console.log(name,age,useremail);

  // Об’єкт movie
const movie = {
    title: 'The Shawshank Redemption',
    director: {
      name: 'Frank Darabont',
      nationality: 'American'
    },
    actors: ['Tim Robbins', 'Morgan Freeman'],
    release_year: 1994,
    ratings: {
      imdb: 9.3,
      rotten_tomatoes: 90
    }
  }

  const {title, director: {name: directorName, nationality: directorNationality}, release_year, ratings: {imdb: ratingsImdb, rotten_tomatoes: ratingsRt}} = movie
  console.log(title, directorName,directorNationality, release_year, ratingsImdb, ratingsRt)


  // Об’єкт books
const books = {
    count: 3,
    list: [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
      },
      {
        title: '1984',
        author: 'George Orwell',
        year: 1949
      }
    ]
  }

  const{count,list}= books;
  console.log(count,list);


  // Дано масив об’єктів
const friends = [
    { name: "Mango", online: false },
    { name: "Kiwi", online: true },
    { name: "Poly", online: false },
    { name: "Ajax", online: false },
  ];
  
  // Написати функція яка буде отримувати масив
  // та ім’я друга якого потрібно знайти
  function findFriendByName(friends , nameToFind) {
    for(const friend of friends){
        if(friend.name === nameToFind){
            return "Знайшли друга"
        }
    }
    return "Не знайшли друга"
  }
   console.log(findFriendByName(friends, 'Poly'));
  console.log(findFriendByName(friends, 'Chelsy'));
  
  // Написати функцію яка буде повертати масив всіх імен друзів
  // console.log(getAllNames(friends));
  
  // Написати функ,яка буд





































  