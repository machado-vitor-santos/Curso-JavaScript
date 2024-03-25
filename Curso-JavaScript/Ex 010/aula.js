// números primos
// Criar função para mostrar números primos:

exibirNumerosPrimos(1000);

function exibirNumerosPrimos(limite) {
    for (let i = 1; i <= limite; ++i) {
        if (i % i === 0
            && i % 2 !== 0
            && i % 3 !== 0
            && i % 5 !== 0
            && i % 7 !== 0
            && i ** (1 / 2) !== i)

            console.log(i);
    }
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(5);
    console.log(7);
};

