// Faixa de Preco
// é que você crie um array de objetos de faixa de preço para
// que ela possa ser usado em um site igual o Mercado Livre

//Primeira opção [DECLARANDO UM ARRAY DE OBJETOS]
let faixas = [
    { tooltip: 'até R$700', minimimo: 0, maximo: 700 },
    { tooltip: 'de R$700 a R$1000', minimimo: 700, maximo: 1000 },
    { tooltip: 'R$1000 ou mais', minimimo: 1000, maximo: 999999 }
];


// factory function - com arrays
function criarFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    };
};

let faixas2 = [ // [NA VARIÁVEL HÁ UM ARRAY COM O NOME DA FUNÇÃO REPETIDO PELO NÚMERO DE VARIÁVEIS E SEUS RESPECTIVOS VALORES]
    criarFaixaPreco('até R$100', 1, 100),
    criarFaixaPreco('até R$1000', 100, 1000),
    criarFaixaPreco('até R$10000', 1000, 10000)
];

// Terceira opção um constructor function

function CriarFaixaPreco(tooltip, minimo, maximo) {
this.tooltip = tooltip,
this.minimo = minimo,
this.maximo = maximo
};

let faixas3 = [ //[NA VARIÁVEL HÁ UM ARRAY COM O NOME DA FUNÇÃO REPETIDO PELO NÚMERO DE VARIÁVEIS E SEUS RESPECTIVOS VALORES]
    new criarFaixaPreco('até R$100', 1, 100),
    new criarFaixaPreco('até R$1000', 100, 1000),
    new criarFaixaPreco('até R$10000', 1000, 10000)
]; 

console.log(faixas);
console.log(faixas2);
console.log(faixas3);