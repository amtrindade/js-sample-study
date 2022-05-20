//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// const data = new Date('2022-04-08 20:20:59.100');

// console.log(data.toString());
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('mm', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());


function leftZero(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = leftZero(data.getDate());
    const mes = leftZero(data.getMonth() + 1);
    const ano = leftZero(data.getFullYear());
    const hora = leftZero(data.getHours());
    const min = leftZero(data.getMinutes());
    const seg = leftZero(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);




