const alunos =['Antonio', 'Luciano', 'Fabiano', [1,2]]

//Adiciona no fim
alunos.push('Rafa');

//Altera
alunos[1] = 'Emilene';

//Adiciona no inicio
alunos.unshift('Noeli');

console.log(alunos);

//Remove no fim
const removido = alunos.pop();

//Remove do início
const alunoRemovido = alunos.shift();

//remove o índice
delete alunos[0];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos.length);
console.log(removido);
console.log(alunoRemovido);
console.log(alunos instanceof Array);