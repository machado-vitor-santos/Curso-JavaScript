/* Você precisa pegar o nome o nome da pessoa que está tentan-
do entrar naquele lugar;

Você precisa perguntar a ele(a) quem a convidou para essa fes-
ta;

Você precisa de um botão na tela que quando você clicar irá
acessar o seu código Java Script para verificar se a pessoa
que está tentando entrar foi de fato convidado por quem ela
diz que a convidou;

(ex: nome da pessoa Jhonathan, quem convidou para a festa?
Cristian. Clico no botão, o javascript pega as informações
que eu preenchi na tela e verifica no meu código javascript
se aquela pessoa está dentro da lista de convidados do Cris-
tian, o meu nome está lá)

Aqui você precisa colocar um evento que vai se disparado 
quando a pessoa clicar naquele botão, quando esse evento
fot disparado, ele vai rodar um código javascript que pega 
as informações que você conseguiu no passo anterior e
determina se alguém está ou não na lista de convidados
de uma certa pessoa. A forma que você pode armazenar mais de 
uma informação no mesmo lugar, use isso para verificar se o
nome estã ou não dentro da estrutura que você estiver usando
para guardar os nomes dos convidados.

Caso meu nome esteja lá, eu vou alterar a descrição de
"Pesquisando" para "Você pode entrar". Aqui você precisa pe-
gar o resultado que você encontrou no passo anterior e atuali-
zar o site, mude pesquisando para você pode entrar!, você pode
fazer isso com os métodos de manipulação do DOM que viu duran-
te o curso.
*/

nomeConvidado = document.getElementById("nome").value;
ConvidadosCristian = ['João', 'Joao', 'Maria', 'Vitor',
    'Mário', 'José', 'Roberto', 'Roberta'];
    
function VerifiqueEntrada(){
if (ConvidadosCristian.includes(nomeConvidado)) {
    document.getElementById("PermissaoDeEntrada").innerText =
        "Você pode entrar!";
} else {
    document.getElementById("PermissaoDeEntrada").innerText =
        `Você não pode entrar!`
};
};    


