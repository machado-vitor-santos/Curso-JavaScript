let nome = 'Rafael';
let idade = 25;
let estaAprovado = true;
let sobrenome = undefined;
let corSelecionada = null;

/*
Tipo de referências:
- Os objetos {
    classe: (atributos qualitativos descritivos dos objetos),
    classe2: 'atributo',
    classe3: 456
}
- os arrays e
- as functions
*/

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de Souza',
    nacionalidade: 'brasileiro',
    escolaridade: 'ensino médio completo',
    rendaMensal: 4500
};

console.log(pessoa);
console.log(typeof pessoa.nome)
; /* forma de se referir a um 
atributo descritivo do objeto
Ex: pessoa.atributo */

