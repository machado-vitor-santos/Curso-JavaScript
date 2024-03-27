//Combinando ou e Dividir arrays

const primeiro = [1,2,3];
const segundo = [4,5,6];

// Combina arrays
const combinado = primeiro.concat(segundo); 
console.log(combinado);

// Divide arrays
const cortado = combinado.slice(1,3); // (a,b) recorta do a ao b, sendo que vai ao índice b - 1
console.log(cortado);

const letras1 = ['a', 'b', 'c'];
const letras2 = ['d', 'e', 'f'];

const combinados = letras1.concat(letras2);
console.log(combinados);

const recorte = combinados.slice(1,4);
console.log(recorte);


