/*
Primitivos (imutáveis) - string, number, boolean, undefined, null: Valores copiados

Referência(mutáveis) - array, object, function - Passados por referência
*/

let a = [1, 2, 3];
//spread
let b = [...a];
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);