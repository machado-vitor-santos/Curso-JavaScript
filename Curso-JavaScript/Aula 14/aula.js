/* Falsy -> em comparações não boleanas as categorias a baixo
 não prevalecem sobre os demais tipos primitivos
 em comparações do tipo || (ou)*/

/* todos os valores que são: 
undefined, 
null, 
0, 
false, 
'',
NaN - not a number (cálculos que resultam em valores inváli-
dos matemáticos);*/

//Truthy

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);