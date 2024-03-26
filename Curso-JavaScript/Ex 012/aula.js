// Igualdade de Objetos (Exercícios)

function endereco(rua, cidade, cep) {
    return {
        rua,
        cidade,
        cep
    };
};

let exEndereco1 = endereco('a', 'b', 'c');
let exEndereco2 = endereco('a', 'b', 'c');

function saoIguais(exEndereco1, exEndereco2) {
    // Comparar se as propriedades são iguais
    return exEndereco1.rua === exEndereco2.rua &&
        exEndereco1.cidade === exEndereco2.cidade &&
        exEndereco1.cep === exEndereco2.cep;
};
console.log(saoIguais(exEndereco1, exEndereco2));

function temEnderecoMemoriaIguais(exEndereco1, exEndereco2) {
    // Comparando se a referência do objeto aponta para o mesmo
    // local na memória
    return exEndereco1 === exEndereco2 ? true : false;
};

console.log(temEnderecoMemoriaIguais(exEndereco1, exEndereco2));
// Objetos não têm referências que apontam para o mesmo espaço
// de memória a não ser que ambos esteja alocados em um mesmo
// local de memória.

