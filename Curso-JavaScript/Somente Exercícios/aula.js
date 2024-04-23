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

/*
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
*/

// Recebe um número indeterminado de dados, contendo cada um a idade de um indivíduo;

// Calcular e imprimir a idade média do grupo de indivíduos

//O programa deve ser encerrado quando uma idade negativa dor informada, e esta não deve ser considerada no cálculo da média


// Laço Do.. While

/*
let memoria = []; 
let idade = 0; // contendo cada um a idade de um indivíduo;
let somaIdades = 0; // 1° fator para calcular a média
let numeroDeRepeticoes = 0; // 2° atributo necessário para calcular a média

// Porque eu usei um do{} while(); -> Porquê é um comando com o número de repetições indefinidas até que a condição que o array receba um número negativo ocorra. Caso, soubesse o número de repetições poderia ter utilizado um for(let){}.

//Lembrar do simples, revisar no momento da escrita cada parÂmetro lógico.

do {
idade = parseInt(prompt(`Digite uma idade:`)); //recebe a variável de entrada
if (idade >= 0){ // condição para filtrar o conteúdo que será recebido dentro do array memória
memoria.push(idade); // a variável memoória não precisa estar associada ao índice para adicionar o elemento. Ex: memoria[i].push(idade); E a varíavel.push(necessita aqui do valor a ser adicionado dentro do array).
somaIdades += idade;
numeroDeRepeticoes ++;
} //adiciona mais 1 a variável contador
} while (idade >= 0); // A variável que encerra o comando não é a variável que é recebida por memória[i], como eu tinha pensado, mas sim o elemento 'idade' e repetirá enquanto este for positivo.

let media = (somaIdades/numeroDeRepeticoes);
window.alert(`A média entre as idades dos indivíduos é de ${media}`);
*/

// Recebe números inteiros positivos como entrada

// Para quando o número recebido for 22

// Mostre todos os números recebidos, com excessão do 22
/*
let memoria = [];
let numero = 0;

do {
    numero = parseInt(prompt(`Digite um número:`));
    if(numero >= 0 && numero !== 22){
        memoria.push(numero);
    }
} while (numero !== 22);

window.alert(`[${memoria},]`);
*/

// Exercício média válida

// Recebe dois números reais referentes a duas notas de um aluno;

// O programa deve calcular a média dessas notas e imprimir na saída, descartando valores inválidos;
/*
let memoria = [];
let nota = 0;
let contador = 0;
let media = 0;
do {
    nota = parseFloat(prompt(`Digite um número:`))
    if (nota > 10 || nota < 0 || typeof nota !== 'number'){
        window.alert(`Nota inválida`);
    } else {
        memoria.push(nota);
        contador ++;
    }
} while (contador <= 1);
media = ((memoria[0] + memoria[1]) / contador);

window.alert(`A média dos números ${memoria[0]} e ${memoria[1]} é ${media}`);

// O problema do código a cima é que quando o número é inválido o número não deve ser introduzido no array.
*/


//Porcentagem dos maiores que 15
// Recebe vários números inteiros
// calcula a porcentagem dos números ímpares > que 15 dentre todos os números
// Imprima ma saída o valor da porcentagem seguido d0 caractere %
// O programa deve encem[cerrar quando for recebido o número 0

/*
let memoria = [];
let valor = 0;
contadorImpares15 = 0;

do {
valor = parseInt(prompt(`Digite um número:`));

if (valor % 3 == 0 && valor > 15){
    contadorImpares15++;
}
   
if(valor !== 0 ){
    memoria.push(valor);
}

} while( valor !== 0);

let porcentagemdeImp = ((contadorImpares15/(memoria.length))*100);
window.alert(`O percentual é de ${porcentagemdeImp} %`);
*/


// Exercício fatorial de um número
// Recebe um valor N
// Calcula o fatorial de N
// Retorna o fatorial de N

// let N = parseInt(prompt(`Digite um número:`));
// let fatorial = N; /*armazená-se N em um espaço de memoria fatorial*/

// for (let i = 1; i < N; ++i) { /*esta parte é essencial no código, uma vez que queremos que a contagem vá até apenas um número que precede N para poder funcionar*/
//     fatorial = fatorial * (N-i)
// };

// window.prompt(`O fatorial de ${N} é ${fatorial}`);

// Os divisores de um número inteiro
// Recebe um número inteiro N
// Retorna todos os divisores de N

/*
let N = 0;
let divisoresDeN = [];
N = parseInt(prompt(`Digite um número:`));
for (let i = 1; i <= N; ++i) {
    if (N % i === 0) {
        divisoresDeN.push(i);
    }
}

window.alert(`Os divisores de ${N}, são ${divisoresDeN}`)
*/

//Método de herão
//Recebe um número positivo N
//Imprime a raiz quadrada de N

// Em seguida o programa deve calcular 5 e imprimir 5 aproximações da raiz quadrada desse número usando o Método de Herão a fim de compara a eficiência do método.

// Recebe um número positivo N
// Escreve na Saída os N primeiros termos da sequência de Fibonacci (esta a qual tem seus dois primerios termos iguais a 1) A partir do terceiro termo cada termo é a soma dos dois que o antecederam antes.

/*
let N = window.prompt(`Digite os N primeiros termos da sequência de Fibonacci:`) // Informe o número de termos da sequência de Fibonacci

let t1 = 1; //Termo 1 recebe 1
let t2 = 1; //Termo 2 recebe 1

for (let i = 1 ; i <= N ; ++i){ // conte de 1 a N
    if (i == 1 || i == 2){ // se i == (1 ou 2) escreva 1
        console.log(1);
    } else { // Se não
        tn = t1 + t2; // tn(termo genérico = (t1+t2))
        console.log(tn); // Escreva termo genérico (tn)

        t1=t2; // t1 recebe termo t2
        t2=tn; // termo t2 recebe tn = (t1+t2)
    }
};
*/

// Crie uma função que retorne o valor da exponencial para qualquer numero 'x' informado:

/*

let x = parseInt(prompt(`Digite um número:`));
memoria = [];

for (let i = 1; i <= 10; ++i) {
    memoria.push(Math.pow(x,i));
}

window.alert(memoria);
*/

// Faça um programa que recebe um número inteiro N e conte quantos dígitos esse número tem

// 1 - Receber o valor N;
// 2 - Criar uma variável para contar os dígitos;
// 3- Iniciar a repetição, para dividir por n por 10 até que N seja igual a zero;
// Ex: 273/10  = 27/10  = 2/10 = 0


// 4- contar os dígitos através das repetições
// 5 - mostrar a quantidade de dígitos

// Condição de parada N =0
// Condição de repetição N !== 0

/*
var N = parseInt(prompt(`Digite um número:`)); // Recebe o número inteiro

let cont = 0; // estabelece um contador = 0;
var memoria = N; // Salva a memória capturada em N em uma memória auxiliar

while(N!==0){ // Uso do while, lembrando que a repetição acontece enquanto a condição não for satisfeita, neste caso (N == 0);
    N = parseInt(N/10); // Dado o exemplo, é muito importante que a divisão seja por um número inteiro, Ex: 273/10  = 27/10  = 2/10 = 0
    cont++; // registra o número de divisões feitas
}

window.alert(`O número de digitos em ${memoria} é de ${cont}`)
// leia o número inicial guardado na memória auxiliar, e exiba quantas vezes o contador teve que realizar as operações de divdir por 10.
*/

// Tempo de vida de um material radioativo

// Recebe um valor inteiro que representa a massa M de um material radioativo em gramas (teclado)

// Calcule o tempo necessário para o material atingir < 0,5g (Finalidade)

// Deve imprimir o resultado expresso em minutos e segundos na saída (Resultado)

// O tempo de meia-vida (1/2) do material é de 50 segundos

// relacionar a massa de um material radiotivo com o tempo necessário para a redução da sua massa inicial a um valor menor que 0,5g


let massa = parseFloat(prompt(`Digite a massa inicial do material radiotivo em questão em gramas: `)); // recebe a massa digitada pelo teclado

let tempo  = 0; // variável tempo atribuida como zero

window.alert(`tempo ${tempo} ; massa ${massa}`); // teste para ver que valores de variável estão entrando na equação

while (massa > 0.5) { // condição
    massa = (massa / 2); // o foco é em um cálculo que retorne a saída segundo a intenção. E nada mais que isso.
    tempo = tempo + 50;
};

let minutos = parseInt(tempo/60); // a divisão por inteiro para capturar os minutos
let segundos = tempo % 60; // o resto da divisão para capturar os segundos

window.alert(`minutos ${minutos} ; segundos ${segundos}`); // exposição dos resultados
