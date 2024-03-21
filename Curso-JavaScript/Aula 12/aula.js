// Operador ternário:
// <, >, ?, <=, >=.
// "?" -> caso contrário

/* Tem um cliente, acima de 100 pontos classe (premium), abai-
xo de 100 pontos classe comum*/
let pontos = 100;
let tipo = pontos >= 100 ? 'premium' : 'comum';
console.log(tipo)