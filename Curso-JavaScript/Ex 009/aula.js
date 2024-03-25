//  Contador de asteriscos

// criar uma função que exibe a quantidade de *
// que aquela linha possui

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    for (let i = 1; i <= linhas; ++i) {
        console.log("*".repeat(i)); //O método repeat() constrói e retorna uma nova string com um determinado número de cópias concatenadas da string original.

    }
};