// Combinando Arrays

/*
const numeros = [1,2,3,4,5];

const combinado = numeros.join('.'); // Adiciona um . entre cada um dos valores do array
console.log(combinado);

const frase = 'Olá bem vindo ao curso'; 
const separandoStrings = frase.split(' '); // Secciona frases por critério definido
console.log(separandoStrings);

const resultado = separandoStrings.join('-');
console.log(resultado);
*/

//Exercício

const frase = 'conteúdos gratuitos';
console.log(frase);
//const split = frase.join('.'); // Não funciona, pois os separadores têm de estar dentro de um Array.
//console.log(split);
const quebrandoFrase = frase.split(' ');
console.log(quebrandoFrase);
const pontosInseridos = quebrandoFrase.join('-');
console.log(pontosInseridos);

// quebrandoFrase = frase.split('.');
// console.log(quebrandoFrase);










