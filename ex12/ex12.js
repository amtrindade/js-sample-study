let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

// const varTemp = varA;
// varA = varB;
// varB = varC;
// varC = varTemp;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);