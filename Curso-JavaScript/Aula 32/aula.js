// Java Script Aula 54, encontrando elementos (primitivos)

/*
const numeros = [1,2,3,4,1,5];
console.log(numeros.indexOf(3));// Vai buscar o número 2 dentro do array e vai retornar o índice do número caso ele exista. Caso não encontre irá 'retornar -1'.
// o indexOf(); filtra por tipo também , strings não se confundirão com number, booleans etc...


console.log(numeros.lastIndexOf(1)); // vai buscar a ultima ocorre^ncia do valor procurado dentro do array

console.log(numeros.indexOf(2) !== -1); // retorna se o número está contidodentro do array

console.log(numeros.includes(2)); // mais simples, retorna se o número está contido ou não
*/

const nomesNumeros = ['Tevez', 'Carlos',3,2,5,20,5];

console.log(nomesNumeros.indexOf('Tevez'));
console.log(nomesNumeros.lastIndexOf(5));
console.log(nomesNumeros.includes('Carlos'));