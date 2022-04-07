//Numbers
//IEEE 754-2008

let num1 = 10.4567814613;
let num2 = 0.7;
let num3 = 0.1

console.log(typeof num1);
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

//NaN
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));

num2 += num3;
num2 += num3;
num2 += num3;
num2 = parseFloat(num2.toFixed(2))

console.log(num2);
console.log(Number.isInteger(num2))
