// Laço for..in

/*
Um dos outros dos doi loops que fora feitos para iterar sobre 
as propriedades de um objeto ou elementos de um array.
*/ 

const pessoa = {
    nome: 'Vitor',
    idade: 25
};

//key-value (chave e valor) ex: no atributo do objeto "nome"
// corresponde a "chave" e value corresponde a "Vitor".
for(let chave in pessoa) {
    console.log(chave, pessoa['nome']); // outra forma de buscar dentro do atributo pessoa o item é pessoa['nome'], útil para quando não se sabe o nome de uma propriedade caso array
}

const cores = ['Vermelho', 'Azul', 'Verde'];

// em arrays os itens são acessados através do índice
for(let indice in cores) {
    console.log(indice,cores[indice])
}

const nomes = ['Pablo','Maria','Enzo', 'Roberto']
for (let indice in nomes){
    console.log(indice, nomes[indice])
}