// Clonando objetos

const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar : function () {
        console.log("Fazendo ligação...");
    }
}

const novoObjeto = Object.assign({
    bateria: 5000
}, celular); // Ele vai pegar o primeiro parâmetro 'alvo', de onde se vai copiar. E depois, o que ele vai copiar as informações, propriedades e métodos.
console.log(novoObjeto);


//Segunda forma de se copiar um objeto
const objeto2 = {...celular};
console.log(objeto2);

const notebook = {
    marcaNotebook: 'ASUS',
    tamanhoTela: {
        vertical: 300,
        horizontal: 300
    },
    desligar : function () {
        console.log("Desligando em 3..2..1");
    }
}


// Método de copiar onde é possível fazer inserções de parâmentros dentro do objeto
// Importância do comando Object.assign({
// atributo1: xyz,
// atributo2: xyz,
// atributo n ...
//}, deondevem)
const novoNotebook = Object.assign({
    bateria:5000,
    resolucao:42
}, notebook);

console.log(novoNotebook);

const notebook2 = {...notebook}; // método de copiar sem fazer alterações no onjeto copiado
console.log(notebook2);
