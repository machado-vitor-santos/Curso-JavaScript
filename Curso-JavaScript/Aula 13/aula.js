// Operador Lógico e (&&)
// Retorna TRUE se os dois operandos forem true

// console.log(true && false);

/* Imagine que temos uma pessoa e ela só pode aplicar para uma 
vaga de trabalho caso seja maior de 18 anos e tenha carteira
de trabalho.*/

// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
// console.log(podeAplicar);

// Operador Lógico ou (||)
// Retorna true se apenas um dos operandos for true

// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
//  console.log(podeAplicar);

// Operador NOT (!) -> ao contrário
// let candidatoRecusado = !podeAplicar;
// console.log('Candidato Recusado', candidatoRecusado);

// Deveres de casa:
/* João quer tirar sua carteira de motorista, para tal deve
ter seus 2200 reais e pelo menos 17 anos */

// let TemIdadeRequerida = false;
// let TemDinheiroSuficiente = true;
// let CarteiraDeMotorista = TemIdadeRequerida && TemDinheiroSuficiente;
// console.log(CarteiraDeMotorista)

// let candidatoRecusado = !CarteiraDeMotorista;
// console.log('O candidato foi recusado?', candidatoRecusado);

// Deveres de casa:
/* João quer tirar seu passaporte do Betto Carreiro no entanto
tem 300 rais no pix e 1000 no cartão de crédito, sabendo que o
passaporte custa 500 joão pode comprá-lo?*/

let quantoTemNoPix = false;
let quantoTemNoCredito = false;
let comprarPassaporte = quantoTemNoPix || quantoTemNoCredito;
console.log(comprarPassaporte)

let semPassaporte = !comprarPassaporte;
console.log('Fica-rá sem passaporte do Betto Carreiro', semPassaporte);


