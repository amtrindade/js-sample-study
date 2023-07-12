//i index
for (let i = 0; i <= 10; i ++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    //console.log(`Linha ${i}`);
    console.log(i, par);
}

// for clássico
const frutas = ['Maçã', 'Pêra', 'Uva', 'Laranja', 'Melância'];

for (let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}`, frutas[i]);
}
