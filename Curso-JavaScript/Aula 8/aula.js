//Funções
// Faz parte da base de todo software, porque ela vai controlar
// o fluxo de execução. Entrada e saida de dados no Java Script 
// Vai precisa de uma função.

// Como declarar uma função:
// Verbo + Substantivo
//Ex:
// resetaCor 
// tranformarObjeto
// alterarTamanho

let corSite = "azul";

function resetaCor(cor, tonalidade) { //"Parâmetros" resetaCor("cor"){};
    corSite = cor + " " + tonalidade; /*Argumentos corSite = "cor"; que signi-
     ficam o que eu vou fazer com os parâmetros que fora pa-
     ssados em cima, tal como no exemplo (cor).

     O símbolo de + irá concatenar o texto nos argumentos

     + " " + melhor prática para concatenar os argumentos
     do que a alternativa em por resetaCor("verde"," claro")
     ênfase no espaça dado antes da string " claro".
     */

};

console.log(corSite)
resetaCor("verde", "claro");
console.log(corSite)

// console.log(corSite);
// resetaCor();
// console.log(corSite)

let planoDeFundo = "imagem1";

function alterarPlanoDeFundo(imagemDeFundo, transição) {
    planoDeFundo = imagemDeFundo + " " + transição;
};

console.log(planoDeFundo);

alterarPlanoDeFundo("imagem2", "lenta");

console.log(planoDeFundo)







