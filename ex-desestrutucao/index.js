const person = {
    firstname: 'Antonio',
    lastname: 'Trindade',
    age: 100,
    address: {
        street: 'Av. Protásio',
        number: 666
    }
}

//Atribuição via desestruturação
// const { firstname, lastname, address: {street: r, number}} = person;
// console.log(name, lastname, r, number);

const { firstname, ...resto } = person;
console.log(firstname, resto);