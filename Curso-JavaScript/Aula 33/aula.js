// Encontrando elementos do tipo referência

const marcar = [
    {id: 1, nome: 'a'},
    {id: 1, nome: 'b'},
];

//console.log(marcar.includes({d: 1, nome: 'a'})); // em objetos não consiguiriamos usar o inclides, como neste caso.

let marca = marcar.find(function(marca){ // pricurar sobre aplicação do elemento .find() no MDN em caso de dúvida.
    return marca.nome === 'a'; // como pegar chaves dentro de um array
});

console.log(marca);

const comentarios = [
    {id:1, mensagens:'a'},
    {id:2, mensagens:'b'},
    {id:3, mensagens:'c'}
];

let coments = comentarios.find(function(coments){
    return coments.id === 3;
});

console.log(coments);
