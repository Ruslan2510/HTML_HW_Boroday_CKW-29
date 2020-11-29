//First task

let value = Number(prompt("enter your value"));
alert(value * value);


//Second task

let firstValue = Number(prompt("enter your first value"));

let secondValue = Number(prompt("enter your second value"));

alert((firstValue + secondValue) / 2)


//Third task

let squareSideLength = Number(prompt("enter square side length"));

alert(squareSideLength * squareSideLength);


//Fourth task

const MILE_LENGTH = 1.6

let length = Number(prompt("enter kilometr amount"));

alert(length / MILE_LENGTH);


//Fifth task

let firstValue = Number(prompt("enter your first value"));

let secondValue = Number(prompt("enter your second value"));

alert("Сложение: " + String(firstValue + secondValue) + "\nВычитание: " + String(firstValue - secondValue) + "\nУмножение: " + String(firstValue * secondValue) + "\nДеление: " + String(firstValue / secondValue))


//Sixth task

//ax + b = 0

let aValue = Number(prompt("enter a value"));

let bValue = Number(prompt("enter b value"));

let valueX = -b / a;

alert(valueX);


//Seventh task

const DAY_MINUTES = 1440;
let hours = Number(prompt("enter a hours"));
let minutes = Number(prompt("enter a minutes"));

let allMinutes = DAY_MINUTES - (hours * 60 + minutes);

let minutesResult = allMinutes % 60;
let hoursResult = (allMinutes - minutesResult) / 60;

alert("Remain: " + String(hoursResult) + ':' + String(minutesResult))


//Eigth task

let number = Number(prompt("enter a number"));

alert("Second number of your value is " + String(Math.floor(number / 10) % 10));


//Nineth task
let number = Number(prompt("enter a number"));

let lastCharacter = number % 10;
alert("New value is " + lastCharacter + String(Math.floor(number / 10)));


//Tenth task
const RATE = 250;

let salesSum = Number(prompt("Enter a sales sum"));
alert("Month salary is " + (RATE + salesSum / 100 * 10));
