// Natureza Dinâmica de Objetos
const mouse = {
    cor: 'red',
    marca: 'dazz'
}

mouse.velocidade = 5000; // criua um atributo dentro do objeto
mouse.trocarDPI = function () { // insere uma função dentro do objeto
    console.log('mudando DPI');
};

delete mouse.velocidade; // deleta um atributo dentro do objeto
delete mouse.trocarDPI; // deleta uma função dentro do objeto
console.log(mouse);