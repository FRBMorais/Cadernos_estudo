// Os tipos --> 2 categorias
// 1. tipos primitivos
// 2. tipos de objeto

// Números
// JS não faz distinção entre valores inteiros e valores em ponto flutuante.
// Todos os números em JS são representados como valores em ponto flutuante de 64 bits

// Aritmética em JS --------------------------------------------------------

a = 2;
b = 1;
c = 0;

// operações básicas
// + adição
// - subtração
// * multiplicação
// / divisão
// % módulo

// exemplos
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Operações mais complexas são properidades do objeto math
a = Math.pow(2,53)  // => 9007199254740992: 2 elevado à potência 53
a = Math.round(.6)  // => 1.0: arredonda para o inteiro mais próximo
a = Math.ceil(.6)  // => 1.0: arredonda para cima para um inteiro
a = Math.floor(.6)  // => 0.0: arredonda para baixo para um inteiro
a = Math.abs(-5)  // => 5: valor absoluto
a = Math.max(a,b,c)  // Retorna o maior argumento
a = Math.min(a,b,c)  // Retorna o menor argumento
a = Math.random()  // Número pseudoaleatório x, onde 0 <= x < 1.0
a = Math.PI  // π: circunferência de um círculo / diâmetro
a = Math.E  // e: A base do logaritmo natural
a = Math.sqrt(3)  // A raiz quadrada de 3
a = Math.pow(3, 1/3)  // A raiz cúbica de 3
a = Math.sin(0)  // Trigonometria: também Math.cos, Math.atan, etc.
a = Math.log(10)  // Logaritmo natural de 10
a = Math.log(100)/Math.LN10  // Logaritmo de base 10 de 100
a = Math.log(512)/Math.LN2  // Logaritmo de base 2 de 512
a = Math.exp(3)  // Math.E ao cubo

// Datas e horas ---------------------------------------------------------
// Esses objetos Daata têm métodos que fornecem uma API para cálculos simples de data.

var then = new Date(2010, 0, 1); // O 1º dia do 1º mês de 2010
var later = new Date(2010, 0, 1, // O mesmo dia, às 5:10:30 da tarde, hora local
17, 10, 30);
var now = new Date(); // A data e hora atuais
// var elapsed = now – then; // Subtração de data: intervalo em milissegundos
/*
later.getFullYear() // => 2010
later.getMonth() // => 0: meses com base em zero
later.getDate() // => 1: dias com base em um
later.getDay() // => 5: dia da semana. 0 é domingo, 5 é sexta-feira.
later.getHours() // => 17: 5 da tarde, hora local
later.getUTCHours() // Horas em UTC; depende do fuso horário
later.toString() // => "Sexta-feira, 01 de janeiro de 2010, 17:10:30 GMT-0800
// (PST)"
later.toUTCString() // => "Sábado, 02 de janeiro de 2010, 01:10:30 GMT"
later.toLocaleDateString() // => "01/01/2010"
later.toLocaleTimeString() // => "05:10:30 PM"
later.toISOString() // => "2010-01-02T01:10:30.000Z"; somente ES5
console.log(elapsed)
*/

// TEXTO --------------------------------------------------------------------
// Uma string é uma sequência ordenada imutável de valores de 16 bits, cada um dos quais normalmente 
// representa um caractere unicode.

a = "Felipe"
b = 'Felipe'

// escape --> \
// \n --> novas linha