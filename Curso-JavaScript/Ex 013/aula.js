// Montador de Postagem do Blog (Exercício)

// Eu quero que você crie um objeto de postagem de blog que
//vai conter as seguintes propriedades

// objeto com nome 'postagem'
/*
titulo
mensagem
autor
vizualizações
comentários // dentro terá um array
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'A vida de Martim',
    mensagem: 'Todo o conteúdo da mensagem',
    autor: 'Jorge Gonzalez',
    vizualizações: 4500,
    comentarios: [  // Como inserir um array em um objeto
        { autor: 'a', mensagem: 'b'},
        { autor: 'a', mensagem: 'b'}
    ],
    estaAovivo: true
}

console.log(postagem);