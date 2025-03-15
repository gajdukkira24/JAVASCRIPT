// 1
// Cтворити масив Arr1 за значеннями: 1, 5, "4", "hello" ;
//  і Arr2 зі значеннями: true,2, {}, ["a"], 222 . 
//  Вивести в консоль 2-гий елемент (по індексу) кожного з масивів 
//  довжину масиву.

const arr1 =[1,5,"4", "hello"];
const arr2 =[true, 2,{}, ["a"], 222]
console.log(arr1[1],arr2[1], arr1.length, arr2.length);



//  2
// Створіть масив рядків. 
// const fruits = ["apple", "plum", "pear", "orange"];
// Виведіть в консоль значення першого, 
// другого та останнього елементу. 
// Змініть значення останнього елементу на "peach"
// а другого на "banana".

const fruits = ["apple", "plum", "pear", "orange"];
console.log(fruits[0],fruits[1],[fruits.length -1 ]);
fruits[fruits.length -1 ] ="peach";
fruits[1]= "banana";
console.log(fruits)


const array = [10, 25, 13, 44, 15];
// Вивести в консоль всі елементи масиву за допомогою 
// циклів for та for…of.

// for(let i = 0 ; i < array.length ; i += 1){
//     console.log(array[i]);
// }

// for (const element of array ) {
//     console.log(element);
    
// }


// 2
// Порахувати загальну суму покупок в корзині за допомогою 
// циклів for та for…of.

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for(let i = 0 ; i <cart.length; i+=1){
    console.log(cart[i]);
    total=total+ cart[i]
    console.log(total);

}

for (const element of cart) {
    console.log(element)
    total=total+ element;

    console.log(total)
    
}


const numberArr = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let totalNum = 0;

for (let i = 0; i < numberArr.length; i+=1) {
  if (numberArr[i] % 2 !== 0) {
    continue
  }
  console.log(numberArr[i]);
  totalNum += numberArr[i]
}
console.log(totalNum);


