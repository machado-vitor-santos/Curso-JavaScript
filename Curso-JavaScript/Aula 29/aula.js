// Date

const data1 = new Date(); // trará data atual e horário em tempo real;
const data2 = new DataTransfer('March 06 2019 09:20'); // Um tipo de formato de data
const data3 = new Date(2024, '03', '06', '09', '30'); // Outra forma de inserir data
console.log(data3);

data3.setFullYear(2030); // modifica a const data3

// conversão de objetos 'data' para 'string':

data3.toTimeString(); // Informação de tempo local
console.log(data3);

date2.toISOString(); // forma que se vê a informaçãode data no banco de dados.




