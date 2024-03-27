//Arrow Functions

const marcar = [
    {id:1, nome:'a'},
    {id:2, nome:'b'}
];

console.log(marcar.find(marca => marca.id === 2)); 
// forma simplificada de consultar um array
// Empregue a função arrow =>

const objetos = [
    {nome:'prego',quantidade: 100},
    {nome:'madeiras',quantidade: 200},
    {nome:'casa',quantidade: 300}
];

console.log(objetos.find(objeto => objeto.nome === 'prego'));



