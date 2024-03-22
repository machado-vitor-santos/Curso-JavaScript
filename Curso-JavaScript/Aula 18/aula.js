// Laço While Loop

// let i = 5; //a variável index ou índice deve ser declarada antes no caso do laço while
// while (condiçaõ) { //enquanto a condição for 'true', execute a função para mim
// if(i%2 !==0){ //contém a função a ser excutada
// console.log(1);
// }
// };

let i = 5;

while (i >= 1) {
    if(i % 2 !== 0){
        console.log(i);
    }
    i--; // subtração por 1 adicionada fora da variável if
}

