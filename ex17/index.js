function saudacao(name) {
  return `Bom dia ${name}!`;
}

// function raiz(n){
//     return n ** 0.5;
// }

// const raiz = function (n) {
//   return n ** 0.5;
// };

const raiz = n => n ** 0.5;


const variavel = saudacao("Antonio");
console.log(variavel);

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
