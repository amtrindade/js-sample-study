/* 
* && -> false && true -> false "o valor mesmo"
* !! -> true && true -> retorna o valor verdadeiro 

FALSY
*false
0
''""``
null / undefined
NaN
*/

console.log('Antônio' && 0 && 'Rafa');
console.log('Antônio' && true && NaN);
console.log('Antonio' && undefined && 'Rafa');

function talkAbout(){
    return 'Talk about';
}
let vai;
console.log(vai && talkAbout());

console.log(0 || false || null || 'Antonio' || true);

const colorUser = 'red';
const colorDefault = 'black';
console.log(colorUser || colorDefault);

const a = 0;
const b = null;
const c = false;
const d = 'false'; //String !FALSY
const e = NaN;

console.log(a || b || c || d || e);

