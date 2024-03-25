// Factory functions

const celular = {
   marcaCelular: 'ASUS',
   tamanhoTela: {
      vertical: 155,
      horizontal: 75
   },
   capacidadeBateria: 5000,
   ligar: function () {
      console.log("Fazendo ligação");
   }
};

//- Factory Functions (Função de Fábrica) Javascript aula 34
// irá encapsular essa informação dentro de um método que cria
// um objeto.



function criarCelular(marcaCelular, tamanhoTela,
   capacidadeDeBateria) {
   return {
      marcaCelular,
      tamanhoTela,
      capacidadeDeBateria,
      ligar() {
         console.log("Fazendo ligação...");
      },
   };
};

const celular1 = criarCelular('ASUS', 5.5, 5000);
console.log(celular1);

// Observe que agora temos um objeto dentro do nosso console
// assim fica facilitado, pois caso seja necessária uma
// manutenção. Pois, você pode simplesmente alterar esse
// construtor e ja vai resolver todos os problemas.

const notebook = {
   marca: 'HP',
   tipo: 'Celeron 2.0',
   dimensaoDaTela: {
      horizontal: 300,
      vertical: 300,
   },
   densidadeDePixels: 400,
   desligar() {
      console('Deligando em 3...2...1')
   }
};

// Fazer as modificações

function dadosNotebook(marca, tipo,
   dimensaoDaTela, densidadeDePixels) {
      return {
         marca,
         tipo,
         dimensaoDaTela,
         densidadeDePixels,
         desligar() {
            console('Deligando em 3...2...1')
         }
      };
};

let notebookUm = dadosNotebook('HP', 'Celeron 2.0', 300, 400); //Após a redução da variáveis, criar uma constante e nomeá-la, introduzir nela a function reconfigurada
console.log(notebookUm); //console.log neste caso lê o nome da variável descrita a cima


