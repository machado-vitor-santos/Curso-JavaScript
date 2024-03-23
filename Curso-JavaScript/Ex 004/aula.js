// Medidor de Velocidade

// Velocidade máxima de 70 km => ok
// A cada 5km a cima do limite => 1 ponto na carteira
// Caso os pontos sejam maior que 12 => 'carteira suspensa
// Math.floor(1.3) = 1; => arredonda para o inteiro mais próximo

let testeVelocidade = verificarVelocidade(98.7);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70; // Criar uma const para 'refatorar', ou seja, caso seja necessário posteriormente mexer no código, não será necessário ir buscar o valor 70 em cada operação que foi empregue
    const kmPorPonto = 5;
    const maxPontosPermitidos = 12;
    if (velocidade <= velocidadeMaxima)
        console.log("ok");
    else { // é possível um aninhamento de um if dentro de um else
        const pontos = ((velocidade - velocidadeMaxima) / kmPorPonto); // a variável pontos antes do if, facilita em muito criar as condições para a limpeza do código sem necessidade de tantas restrições matemáticas
        if (pontos > maxPontosPermitidos)
        console.log('carteira suspensa');
        else {
            console.log('Pontos: ',Math.floor(pontos));
        }
    }
};