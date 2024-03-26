//Montador de endereço

// Criar um objeto endereço que contém:
//Rua
//Cidade
//CEP
//exibirEndereço(endereco){
//  exibir todas as propriedades e os valore que estão dentro dessa properiedade
//}

let endereco = {
    rua:'a',
    cidade:'b',
    cep:'c'
};

function exibirEndereco(endereco){
    for (let chave in endereco)
    console.log(chave,':', endereco[chave]);
};

exibirEndereco(endereco);

