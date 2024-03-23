// Multiplos de 3 e 5
// Criar função somar que retorne a
// soma de todos os múltiplos de 3 e 5

// Mutiplos de 3
//3,6,9
//Multiplos de 5
//5,10

//Somando os multiplos
// Armazenar os multiplos de 3
// Armazenar os multiplos de 5
// Somar os dois

somar(10000000);

function somar(limite) {
    let multiploDe3 = 0;
    let multiploDe5 = 0;
    for (let i = 0; i <= limite; ++i) {
        if (i % 3 === 0)
            multiploDe3 += i;
        if (i % 5 === 0)
            multiploDe5 += i;
    }
    console.log(multiploDe3 + multiploDe5)
};
