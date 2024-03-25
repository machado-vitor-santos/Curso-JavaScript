// Construtor functions

// Factory function exemplo

//camelCase umDoisTresQuatro -> a primeira começa com minúscula
function criarCelular(marcaCelular, tamanhoTela,
   capacidadeBateria) {
   return {
      marcaCelular,
      tamanhoTela,
      capacidadeBateria,
      ligar() {
         console.log('Fazendo ligação...');
      }
   };

};


//Pascal Case - UmDoisTresQuatro -> primeira letra da palavra
// sempre está em maiúsculo.
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
   this.marcaCelular = marcaCelular,
      this.tamanhoTela = tamanhoTela,
      this.capacidadeBateria = capacidadeBateria
   this.ligar = function () {
      console.log('Fazendo ligação...');
   }
};

const celular = new Celular('AZUS', 5.5, 5000);
console.log(celular);

// A grande difereça do constructor para o factory é que
// no oprimeiro será feita a criação através do new
// E o outro será feita a criação dentro da propria função
// |Obs. ambos fazem a mesma coisa, não há melhor nem pior|

function criarNotebook(marcaNote, modeloNote, corNote) {
   return {
      marcaNote,
      modeloNote,
      corNote,
      desligar() {
         console.log('Desligar em 3..2..1');
      }
   };
};

let notebookCriado = criarNotebook('HP', 'Celeron 3.0', 'Cinza');
console.log(notebookCriado);

// convertendo a função factory em constructor
// function Notebook(marcaNote, modeloNote, corNote) {
//    this.marcaNote = marcaNote,
//       this.modeloNote = modeloNote,
//       this.corNote = corNote,
//       this.desligar = function () {
//          console.log('Desligar em 3..2..1');
//       }
// };

// const notebook = new Notebook('HP', 'Celeron 3.0', 'Cinza');
// console.log(notebook);