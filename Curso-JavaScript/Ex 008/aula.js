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
    if (mediaDoAluno <= 59) return 'O conceito do aluno foi: F';
    if (mediaDoAluno <= 69) return 'O conceito do aluno foi: D';
    if (mediaDoAluno <= 79) return 'O conceito do aluno foi: C';
    if (mediaDoAluno <= 89) return 'O conceito do aluno foi: D';
    if (mediaDoAluno <= 100) return 'O conceito do aluno foi: A';


};


