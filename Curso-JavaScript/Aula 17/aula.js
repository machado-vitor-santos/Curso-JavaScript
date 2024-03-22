//Laço/Loop For:

console.log('Estou aprendendo"');
console.log('Estou aprendendo"');
console.log('Estou aprendendo"');
console.log('Estou aprendendo"');
console.log('Estou aprendendo"');

// 1. For
// for(let i = 1; i <=5; ++i){ -> variável "i" é uma abreviação de "index" ou índice
//     console.log('Estou aprendendo', i);
// } 


for (let i = 1; i <= 5; ++i) {
    if (i % 2 !== 0) { // onde % é (resto da divisão) e !== (diferente) -> mais esclarecimentos em operador "modulos"
        console.log(i);
    }
}

