// Задача в залежності від підписки виводити вартість
// "free" 0;
// "pro"100;
// "premium" 500;
//  погане значення "Invalid subscription type"

let cost;
const subscription = "pro";
if (subscription === " free "){
    cost = 0 ;
}
else if(subscription  === "pro"){
    cost = 100
}
else if(subscription  === "premium"){
    cost = 500
}
else {
     console.log("Invalid subscription type");

}
console.log(cost);

//1  Що буде в консолі
if ("0") {
      console.log( 'Привіт' );
    }



  // 2
    // Використовуючи if..else, напишіть код, що отримує число  
  // і потім виводить повідомлення на екран:
  
  // 1, якщо значення більше нуля,
  // -1, якщо меньше нуля,
  // 0, якщо дорівнює нулю.
  const userNumber = -3;

  if (userNumber > 0 ) {
    console.log(1)
  }
  else if ( userNumber < 0) {
    console.log(-1);
  }
  else if (  userNumber ===  0) {
    console.log(0);
  }
  else {
    console.log("Invalid subscription type")
  }
console.log()


//   Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, 
//   в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”
const userInput = "jnoik";
// const userInput = "EcMAScriPt";

if (userInput.toLowerCase() === "ECMAScript".toLowerCase()) {
	console.log('Правильно!')
}
else {
	console.log('Ви не знаєте? ECMAScript!')
};

const num1 = 5;
const num2 = 10;
let biggerNumber;
if (num1 > num2){
    biggerNumber = num1
   
}
else { biggerNumber = num2
}
console.log( biggerNumber)

let type;
const age = 20;
if (age > 18){
type = "adult"
}else{ type = "child"}
console.log(type)