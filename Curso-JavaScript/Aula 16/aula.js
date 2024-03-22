// Switch Case (outra das formas de fazer comparações dentro do JS)
let permissao; // usuário comum, gerente, diretor
permissao = 'diretor';

switch (permissao) { // (variável que vai ativar a condição)
    case 'comum': //tratar os diversos cenários usando o case":"
    console.log('Usuário Comum'); // condição que será ativada com o case
    break; // para que não continue lendo e comparando as outra condições, pois ele já encontrou a condição

    case 'gerente':
    console.log('Usuário Gerente');
    break;

    case 'diretor':
    console.log('Usuário Diretor');
    break;

    default: // caso não caia em nenhuma das comparações
    console.log('Usuário Não Reconhecido!');
}