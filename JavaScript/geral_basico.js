// Declaaração de variáveis ---------------------------------------------------------------------

// 3 Tipos de declarações de variáveis

/* escopo --> Onde as variáveis estã odisponíveis para uso
var --> escopo global (igual python), 
1. Pode ser declarada novamente
2. Pode ser redefinida

let --> escopo de bloco (preferida dos programadores), 
1. não pode ser declarada novamente dentro do mesmo escopo que já foi declarada
2. Pode ser redefinida dentro do mesmo escopo

const --> escopo de bloco ()

1. Não pode ser declarada novamente no mesmo bloco
2. Não pode ser redefinida
3. Podem ser alteradas as propriedades de objetos criados com const

Hosting do var, let, const --> Variáveis e declarações de função são movidas 
para o topo de seu escopo antes da execução do código


 */

/* teste mostrando 3. 
const cores = {
    vermelho: "vermelho",
};

console.log(cores.vermelho)

cores.vermelho = "vermelho_modificado"

console.log(cores.vermelho)
*/ 
// -------------------------- Listas ---------------------------------------------------------------
const listasAleatoria = new Array(
    'abacate',
    'limão',
    'pera'
)

listasAleatoria.push('Maça') // Adiciona um elemento

console.log(listasAleatoria)

listasAleatoria.splice(0, 2) // remove elementos
                             // lista.splice(elemento inicial a ser deletado,
                             // quantidade a partir desse elemento)

console.log(listasAleatoria)

// -------------------------- Condicionais ---------------------------------------------------------
var preco = 70;
if ( preco > 100 ) {
console.log("Desconto de 10% liberado");
// Bloco de código 1
} else if ( preco > 50 ) {
console.log("Desconto de 5% liberado");
// Bloco de código 2
} else {
console.log("Nenhum desconto foi liberado");
// Bloco de código 3
}

/* Estrutura
if (condicional_1) {
    bloco de código 1
} else if (condicional_2) {
    bloco de código 2
} else {
    bloco de código 3
}

*/

// && -- "e" 
// || -- "ou"

// --------------------- Estruturas de repetição --------------------------------
// for, do...while, while
// break finaliza o laço

for (var i = 0; i < 3; i++) {
    console.log(i)
}

/* Estrutura
for (expressão inicial; condição; incremento) {
    Bloco de código 
}
*/

var i = 0
do {
    i += 1;
    console.log(i);
} while (i < 5)


/* Estrutura
do { 
    Bloco de código
} while (condição)

*/

var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}

/* Estrutura
while (condição) {
    bloco de código
}
*/

// --------------------- Debugger--------------------------------
// O VSC tem uma ótima ferramenta de debugar