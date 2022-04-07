console.log("Learn JavaScript");

let age;
let name;
let lastName;
let active = true;

let person = {
  name: "Antônio",
  age: 45,
  lastName: "Trindade",
  active: true,
};

console.log(person.name);

//Arrays

let family = [12, true, 38, "Vikings"];

console.log(family.length);
console.log(family[1]);

//Functions: Verb + substantive
let colorSite = "blue";

function resetColor(color, hue) {
  colorSite = color + " " + hue;
}

console.log(colorSite);
resetColor("green", "clear");
console.log(colorSite);

//Types of functions

function sayName() {
  console.log("My name");
}

sayName();

function plusTwo(value) {
  return value * 2;
}

console.log(plusTwo(5));

//Operators
//Aritmetics Operators

let salary = 100;
console.log(salary * salary);
console.log(5 ** 5);

let ageNew = 18;
console.log(ageNew++);
console.log(ageNew);
console.log(++ageNew);

//Atribution Operators
//Compare Operators
//Logic Operators
//Bitwise Operators

//Compara o tipo
console.log(1 === 1);
console.log("1" === 1);

//Igualdade solta
console.log(1 == 1);
console.log("1" == 1);

//Operador ternário
let dot = 100;
let type = dot > 100 ? "premium" : "common";
console.log(type);

//Operador lógico
//and (&&)
//or (||)
//not (!)
console.log(true && true);
console.log(false || true);
console.log(!false);

let permission;
permission = "opa";

switch (permission) {
  case "common":
    console.log("usuário comum");
    break;

  case "manager":
    console.log("usuário gerente");
    break;

  case "principal":
    console.log("usuário diretor");
    break;

  default:
    console.log("No one");
}

//1. For
for(let i = 1; i <= 5; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
//2. While
//3. Do.. while

//4. For..In
const classmater = {
    name: 'John',
    age: 45
};

for(let key in classmater){
    console.log(key, classmater.name)
}

//5. For..of

