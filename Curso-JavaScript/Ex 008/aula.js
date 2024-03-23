// Exercício Nota Escolar
// Obter a média apartir de uma array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: D
// 90-100: A

const array = [70, 70, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    let mediaDoAluno = 0;
    let divisorMedia = 3;
    for (let indice in notas) {
        mediaDoAluno += (notas[indice]) / divisorMedia;
    }
    if (mediaDoAluno <= 59)
        console.log('A média do aluno foi ', Math.floor(mediaDoAluno), ' e o conceito foi:(F)');
    if (mediaDoAluno >= 60 && mediaDoAluno <= 69)
        console.log('A média do aluno foi ', Math.floor(mediaDoAluno), ' e o conceito foi:(D)');
    if (mediaDoAluno >= 70 && mediaDoAluno <= 79)
        console.log('A média do aluno foi ', Math.floor(mediaDoAluno), ' e o conceito foi:(C)');
    if (mediaDoAluno >= 80 && mediaDoAluno <= 89)
        console.log('A média do aluno foi ', Math.floor(mediaDoAluno), ' e o conceito foi:(D)');
    if (mediaDoAluno >= 90 && mediaDoAluno <= 100)
        console.log('A média do aluno foi ', Math.floor(mediaDoAluno), ' e o conceito foi:(A)');

};


