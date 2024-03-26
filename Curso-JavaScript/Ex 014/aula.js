// Exercício Constructor Function

// Criar um objeto postagem 
// Criar uma função construtor
// título, mensagem, autor, visualizações, array comentários,
// estaAoVivo ou não

function LerPostagem(titulo, mensagem, autor, 
    visualizacoes, estaAovivo){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = visualizacoes,
    this.comentario = Array [
        {autor:'a', mensagem:'b'},
        {autor:'a', mensagem:'b'}
    ], 
    this.estaAovivo = estaAovivo
};

let a = new LerPostagem('a', 'b', 'c', 'd', 400, true);
console.log(a);

// function type factory
/*function lerPostagem(titulo, mensagem, autor,
    visualizacoes, estaAovivo) {
    return {
        titulo,
        mensagem,
        autor,
        visualizacoes,
        cometarios: [
            { autor: 'a', mensagem: 'b' },
            { autor: 'a', mensagem: 'b' }

        ],
        estaAovivo
    }
};

console.log(lerPostagem('a', 'b', 'c', 400, true));*/

// function type constructor

/*
function LerPostagem(titulo, mensagem, autor, 
    visualizacoes, estaAoVivo) {
        this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.visualizacoes = visualizacoes,
        this.comentarios = Array [
            { autor: 'a', mensagem: 'b' },
            { autor: 'a', mensagem: 'b' }
        ],
        this.estaAoVivo = estaAoVivo
};

const lerPostagem = new LerPostagem('a', 'b', 'c', 400, true);
console.log(lerPostagem); */








