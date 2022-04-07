function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pesssoa1 = criaPessoa('Antonio', 'Trindade', 45);
const pesssoa2 = criaPessoa('Rafaela', 'Trindade', 5);

console.log(pesssoa1.nome, pesssoa2.nome);

const pessoa3 = {
    nome: 'Emilene',
    sobrenome: 'Becker',
    idade: 45,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
