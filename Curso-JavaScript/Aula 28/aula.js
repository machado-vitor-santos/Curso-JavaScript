// Template Literal
const mensagem ='Oi isso é a minha \n primeira mensagem'; // \n -> sequência de escape (quebra de linha)

// Object {}
// Boolean true, false
// Strings '', ""
// Template literal `` -> serve para a escrita de textos maiores com a quebra de linha melhor

const outra = `Oi, isso é a minha primeira mensagem`;

const nome = 'Rafael';

// -> ${} insere variáveis no meio de textos no tipo Template Literal
const email = `Olá ${nome} ${2+2}, 

Obrigado por se inscrever no canal 

Para acompanhar os vídeos não se esqueça de ativar o sino.

Obrigado,
Jhonathan.`;

console.log(email);

//Dever de casa

//Defina um template literal com uma mensagem sua que tenha
//espaço, uma quebra de linha e poste isso no comentário.

const whats = `Enviado: Olá, como Vai por ai:
    
Recebido: Por aqui tudo bem, e você?

-Fim da conversa. `;

console.log(whats);


