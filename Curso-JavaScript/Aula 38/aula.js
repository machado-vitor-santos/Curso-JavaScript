//Operador Spread

const primeiro = [1,2,3];
const segundo = [4,5,6];

//const combinado = primeiro.concat(segundo);
//const cortado = combinado.slice(1,3); 

// Spread
const combinado = [...primeiro,...segundo]; // Outra forma de combinar arrays
//console.log(combinado);

const clonado = [...combinado]; //Clonar um array
//console.log(combinado);

//Exercicio
const exercicio1 = [1,2,3];
const exercicio2 = [4,5,6];

const combinando = [...exercicio1, '%' ,...exercicio2];
console.log(combinando);