//Esvaziando um Array

let numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros);
//Solução 1
numeros = [];

//Solução 2 -> apaga todas as referências do array [MELHOR METODO!]
//numeros.length = 0;
//console.log(numeros);

//Solução 3
numeros.splice(0, numeros.length);
console.log(numeros);

//Solução 4
// while (numeros.lengt > 0)
//     numeros.pop();


let numerosLetras = [3, 'cat', 4, 'rato', 7, 'Mosca'];
console.log(numerosLetras);

numerosLetras.length = 0;
console.log(numerosLetras);