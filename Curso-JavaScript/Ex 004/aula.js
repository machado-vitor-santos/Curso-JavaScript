// Medidor de Velocidade

// Velocidade máxima de 70 km => ok
// A cada 5km a cima do limite => 1 ponto na carteira
// Caso os pontos sejam maior que 12 => 'carteira suspensa
// Math.floor(1.3) = 1; => arredonda para o inteiro mais próximo

let testeVelocidade = verificarVelocidade(210);

function verificarVelocidade(velocidade){
    if (velocidade <= 70)
        console.log("ok");
    else { // é possível um aninhamento de um if dentro de um else
        const pontos = ((velocidade - 70) / 5); // a variável pontos antes do if, facilita em muito criar as condições para a limpeza do código sem necessidade de tantas restrições matemáticas
        if (pontos > 12)
        console.log('carteira suspensa');
        else {
            console.log('Pontos: ',Math.floor(pontos));
        }
    }
};