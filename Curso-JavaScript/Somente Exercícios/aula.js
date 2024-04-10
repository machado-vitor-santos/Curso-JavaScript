// Recebe o código e a quantidade do produto vendido
// Calcule e mostre o valor a pagar
// Retorne o valor total a ser pago

// Tranformar em uma função e automatizá-lo


/*Código Gigante e desncessário - USAR FUNÇÃO SWITCT CASE EM CASO DE ESCOLHAS POR MENU*/
/*
let cod = parseInt(prompt(`Informe o código do produto:
                         [1] para Coxinha,
                         [2] para Bolo,
                         [3] para Torta,
                         [4] para Refrigerante,
                         [5] para Suco.`));
let qtd = parseInt(prompt(`Informe a quantidade de produto vendida:`));

let memoria1 = [1, 'Coxinha', 2];
let memoria2 = [2, 'Bolo', 2.50];
let memoria3 = [3, 'Torta', 3];
let memoria4 = [4, 'Refrigerante', 4];
let memoria5 = [5, 'Suco', 3];

function calculeValorTotal(coxinha, bolo, torta, refrigerante, suco, precoTotCoxinha, precoTotBolo, precoTotTorta, precoTotRefri, precoTotSuco, codCoxinha, codBolo, codTorta, codRefri, codSuco) {
if(cod == codCoxinha) {
    window.alert(`Foram compradas ${qtd} unidade do produto ${coxinha}, o preço total a pagar é de R$${(parseFloat(precoTotCoxinha)).toFixed(2)}`)
} else if (cod == codBolo) {
    window.alert(`Foram compradas ${qtd} unidade do produto ${bolo}, o preço total a pagar é de R$${(parseFloat(precoTotBolo)).toFixed(2)}`)
} else if (cod == codTorta) {
    window.alert(`Foram compradas ${qtd} unidade do produto ${torta}, o preço total a pagar é de R$${(parseFloat(precoTotTorta)).toFixed(2)}`)
} else if (cod == codRefri) {
    window.alert(`Foram compradas ${qtd} unidade do produto ${refrigerante}, o preço total a pagar é de R$${(parseFloat(precoTotRefri)).toFixed(2)}`)
} else if (cod == codSuco) {
    window.alert(`Foram compradas ${qtd} unidade do produto ${suco}, o preço total a pagar é de R$${(parseFloat(precoTotSuco)).toFixed(2)}`)
} else {
    window.alert(`Foi selecionado um número inválido. Por Favor, digite novamente!`)
}
};

calculeValorTotal(memoria1[1], memoria2[1], memoria3[1], memoria4[1], memoria5[1], (memoria1[2]* qtd), (memoria2[2]* qtd), (memoria3[2]* qtd), (memoria4[2]* qtd), (memoria5[2]* qtd), 1, 2, 3, 4, 5);
*/

/*
// Recebe o código e a quantidade do produto vendido
// Calcule e mostre o valor a pagar
// Retorne o valor total a ser pago

// Tranformar em uma função e automatizá-lo

var cod = parseInt(prompt(`Digite o código do produto:
                         [1] para Coxinha,
                         [2] para Bolo,
                         [3] para Torta,
                         [4] para Refrigerante,
                         [5] para Suco. `));
var quant = parseInt(prompt(`Digite a quantidade do produto`));
var preco = 0;

function calculePreco(precoCoxinha, precoBolo, precoTorta, precoRefri, precoSuco) {
switch(cod){
    case 1 :
    preco = precoCoxinha;
    break;
    case 2 :
    preco = precoBolo;
    break;
    case 3 :
    preco = precoTorta;
    break;
    case 4 :
    preco = precoRefri;
    break;
    case 5 :
    preco = precoSuco;
    break;
}

window.alert(`O total a pagar é: R$${preco.toFixed(2)}.`);  
};

calculePreco((2.00*quant), (2.50*quant), (3.00*quant), (4.00*quant), (3.00*quant));
*/

// Recebe 3 números (U1,U2,U3) com um decimal cada -> correspondem a nota de uma aluno na UFRN. 

// Tranformar solução em uma função e automatizá-la

/*
let memoria = [0, 0, 0];
memoria[0] = parseFloat(prompt(`Digite a nota da Prova 1 com até um decimal`));
memoria[1] = parseFloat(prompt(`Digite a nota da Prova 2 com até um decimal`));
memoria[2] = parseFloat(prompt(`Digite a nota da Prova 3 com até um decimal`));

function calcularClassificarMedias (calculoDaMedia, calculoMediaFinal) {
let media = calculoDaMedia;
window.alert(`A média do aluno foi de ${(media).toFixed(1)}`);

if (media >= 7) {
    window.alert(`Aluno aprovado!`);
} else if (media >= 5 && media <= 6.9) {
    window.alert(`Aluno aprovado por nota.`);
} else if (media < 3) {
    window.alert(`Aluno reprovado.`);
} else if (media >= 3 && media <= 4.9) {

    let u4 = parseFloat(prompt(`Digite a nota da Prova 4 com até um decimal`));

    menorNota = Math.min(memoria); // Math.min() -> procura o menor valor dentro de um array.
    if (menorNota == memoria[0]) {
        memoria[0] = u4;
    } else if (menorNota == memoria[1]) {
        memoria[1] = u4;
    } else if (menorNota == memoria[2]) {
        memoria[1] = u4;
    }

    mediaFinal = (calculoMediaFinal);
    if (mediaFinal >= 7) {
        window.alert(`Aluno aprovado!`);
    } else if (mediaFinal <= 5 && mediaFinal <= 6.9 && u4 > 3) {
        window.alert(`Aluno aprovado por nota.`);
    } else {
        window.alert(`Aluno reprovado.`);
    }
}
};

calcularClassificarMedias (((memoria[0] + memoria[1] + memoria[2]) / 3), ((memoria[0] + memoria[1] + memoria[2]) / 3));
*/



// Receber um número referente a um dia do ano de 2021
// Calcular o dia da semana com base na entrada (importante nessas soluções envolvendo repetição identificar o padrão com o qual estamos lindando, a fim de que se torne possível alcançar a solução)
// Mostra na daída qual dia da semana esse número representa

// 1° dia do ano de 2021 : Sexta-feira
// 2° dia do ano de 2021 : Sábado
// 3° dia do ano de 2021 : Domingo
// 4° dia do ano de 2021 : Segunda-feira
// 5° dia do ano de 2021 : Terça-feira
// 6° dia do ano de 2021 : Quarta-feira
// 7° dia do ano de 2021 : Quinta-feira
// 8° dia do ano de 2021 : Sexta-feira


/*
let mesDoAnoDe2021 = parseInt(prompt(`Digite o mês do ano em números: Ex:
1 = 'Janeiro;
2 = 'Favereiro ...
12 = 'Dezembro'`));
let diaDoAnoDe2021 = parseInt(prompt(`Digite o dia do mês de 2021:`));


let memoria = [0,0,0];
let diaDaSemana = ['Quinta-feira','Sexta-feira','Sábado','Domingo','Segunda-feira','Terça-feira','Quarta-feira']; // nesta ordem para corresponder a sequência proposta pela variável 'memoria[2]'


memoria[0] = new Date (mesDoAnoDe2021, diaDoAnoDe2021, 2021); // retona a data no seguinte formato (mês, dia, ano)
memoria[1] = memoria[0].getDay(); // obtém o dia da semana sendo domingo[0], segunda[1]... sábado[6]
memoria[2] = memoria[1]; //armazena o espaço de memória[1] para evitar bugs

window.alert(`O dia da semana é ${diaDaSemana[memoria[2]]}`);
*/

// Recebe 6 valores
// DiscernirValoreQuantosPositivos; RetornarSomaDosValores().
// mostre quantos desses valores digitados foram positivos
// retorna a sema de todos os valores positivos digitados

// tranforme a solução em uma função e automatize-a

/*
let memoria = [0,0,0,0,0,0];
let numDePositivos = 0;
let somDosNum = 0;

memoria[0] = parseInt(prompt(`Digite um valor:`));
memoria[1] = parseInt(prompt(`Digite um valor:`));
memoria[2] = parseInt(prompt(`Digite um valor:`));
memoria[3] = parseInt(prompt(`Digite um valor:`));
memoria[4] = parseInt(prompt(`Digite um valor:`));
memoria[5] = parseInt(prompt(`Digite um valor:`));

function contarSomarPositivos (){
for (let i = 0; i < memoria.length; ++i){ // para i = 0 até que i < 6 adicione mais 1;
if (memoria[i] > 0) {
   numDePositivos++; // Incrementa o número de positivos (++1)
   somDosNum += memoria[i]; //Soma os valores positivos
} 
}

prompt(`o total de números positivos é de ${numDePositivos} e a somatória dos números positivos é de: ${somDosNum}`);
};

contarSomarPositivos();
*/

// Fazer este programa funcionar
// Executa 5 vezes o camando alert com a mensagem 'Bom dia'

/*
function contadoAte5BomDia () {
for (let i = 0 ; i < 5 ; ++i){
    window.alert(`Bom Dia!`);
}
};

contadoAte5BomDia ();
*/

// Há duas cidades; A e B; A têm crescimento populacional de 3,5% ao ano; B têm crescimento populacional de 1% ao ano.

// Recebe dois valores inteiros que representam as populações das cidades A e B respectivamente.

// Calcular em quantos anos a população da cidade A será maior ou igual a da cidade B; considere que o valor recebido recebido para a cidade A será menor ou igual que a população para a cidade B.

// O programa deve imprimir a quantidade de anos na

window.alert(`Lembre-se que a cidade A deve ter população menor que a cidade B`);
let A = parseInt(prompt(`Digite a população da cidade A`));
let B = parseInt(prompt(`Digite a população da cidade B`));

let popA = ((A*3.5)/100); // Crescimento populacional de A
let popB = ((B*1)/100); // Crescimento populacional de B
let anos = 0; // Criação variável anos

while(A < B){ // Enquanto população A for menor que B

    A = A + popA; // A recebe população inicial de A + crescimento pop absoluto
    B = B + popB; // B recebe população inicial de B + crescimento pop absoluto
    
    anos = anos + 1; // anos recebe ela mesma acrescida de 1
}

window.alert(`${anos}`);  

