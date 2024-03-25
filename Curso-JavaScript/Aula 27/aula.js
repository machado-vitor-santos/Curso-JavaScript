// String

// Tipo primitivo -typeof string
const mensagem = ' minha primeira mensagem';
mensagem.includes('primeira'); // pode-se confirmar a exitência da palavra "primeira" dentro da string 'mensagem'. Retona true caso o contenha, e false caso não o contenha.
mensagem.startsWith('minha'); // se começar com esta pavra retorna true, caso não, retorna false.
mensagem.endsWith('mensagem'); // se terminar com esta pavra retorna true, caso não, retorna false.
mensagem.indexOf('primeira'); // Qual é o índice da pavra primeira dentro da string mensagem.
mensagem.replace('minha', 'sua');// troca a primeira palavra pela segunda dentro da string 'mensagem'.
mensagem.trim() // remove os espaços excedentes do início ou no final.
mensagem.split('') // repartir a mensagem entre no conteúdo determinado dentro do parênteses (' ') -> neste caso o espaço.
;
// Tipo objeto -typeof object (também tem outras propriedades de um objeto)
const outraMensagem =  newString('Bom dia!');
outraMensagem.length // ver tamnho da string
outraMensagem[2]; //acessar por índice o conteúdo da string
