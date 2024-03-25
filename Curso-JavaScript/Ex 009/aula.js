//  Contador de asteriscos

// criar uma função que exibe a quantidade de *
// que aquela linha possui

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    for (let i = 1; i <= linhas; ++i) {
        console.log("*".repeat(i));
    }
};