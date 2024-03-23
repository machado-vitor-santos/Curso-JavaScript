// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é impar ou par

console.log(exibirTipo(5));

function exibirTipo(limite) {
    for (i = 1; i <= limite; ++i) {
        console.log(i, (i % 2 === 0) ? 'par' : 'impar');
    }
};

