// Encontre strings:
// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão neste objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

ExibirPropriedades(filme);

function ExibirPropriedades(obj) {
    for(let indice in obj){
        if(typeof obj[indice] !== 'number')
        console.log(indice, obj[indice])
    }
};



/*for (let prop in obj){
    if(typeof obj[prop] === 'string')
    console.log(prop, obj[prop])
}*/