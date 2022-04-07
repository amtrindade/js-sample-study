let nomeCliente = 'Antonio';
nomeCliente = 'Trindade';

console.log(nomeCliente, 'nasceu em 1976');
console.log('Em 2003', nomeCliente, 'casou com Emilene');


const nome = 'Antonio';
const sobrenome = 'Trindade';
const idade = 46;
const peso = 80;
const altura = 1.80;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(nome +' '+ sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg')
//template strings
console.log(`tem ${altura}m de altura e seu IMC é ${imc}`);
console.log(`nasceu em ${anoNascimento}.`);


