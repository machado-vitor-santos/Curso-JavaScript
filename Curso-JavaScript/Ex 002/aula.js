//Máximo entre dois valores
/* Escreva uma função que usa dois numeros e retorna o maior
entre eles*/

let a = 10;
let b = 90;

/*function compararNumero() {
    if (a > b) {
        console.log(a);
    } else if (a < b) {
        console.log(b);
    } else {
        console.log('Os números são iguais, não há maior');
    }
};
compararNumero();*/

let valorMaior = max(16, 9)
console.log(valorMaior)

function max(numero1, numero2) {
    // if (numero1 > numero2)
    //     return numero1;
    // else return numero2;
    return numero1 > numero2 ? numero1 : numero2;
}




