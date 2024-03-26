// Aula de introdução a arrays
// Add novos elementos

const numeros = [1,2,3];

//inicio
numeros.unshift(0);
console.log(numeros);

//meio 
numeros.splice(1,0,'a');
console.log(numeros);

//final
numeros.push(5);
console.log(numeros);


const nomes = ['Vitor', 'Matheus', 'Carlos'];
nomes.unshift('Jacapira'); //adiciona ao primeiro
nomes.splice(2,0,'Jubirubiru'); // adicionar ao indice desejado, o do meio exclui e o teceiro dpeois da virgula escreve a variável
nomes.push('Panamaua'); // escreve por último
console.log(nomes);