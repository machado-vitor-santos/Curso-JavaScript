// Removendo Elementos do Array

/*
const numeros = [1,2,3,4,5,6];
numeros.push();
numeros.unshift();
numeros.splice()

// Quando quiser remover no final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

// Quando quiser remover o primeiro
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

// Quando quiser remover algo no meio
let meio = numeros.splice(2,1); // (n,b) sendo 'n' 'indice' do n° a remover e 'b' a 'quantidade' de remoções
console.log(meio);
console.log(numeros);
*/

const mesesEventos = ['Janeiro', 'Marco', 'Abril', 'Novembro', 'Dezembro'];
console.log(mesesEventos);

console.log(mesesEventos.shift()); // Primeiro
console.log(mesesEventos);

console.log(mesesEventos.splice(1,1));
console.log(mesesEventos);

console.log(mesesEventos.pop()); //Final
console.log(mesesEventos);

