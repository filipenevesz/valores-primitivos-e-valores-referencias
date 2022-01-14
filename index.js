/* Primitivos (imutáveis) - string, number, boolean, undefined, null (bignit, symbol) */

/* //          0123
let nome = 'João'
nome[0] = 'R'
console.log(nome[0]) */

/* let a = 'A'
let b = a; //Cópia
console.log(a, b)

a = 'Outra coisa'
console.log(a, b) */

/* Referência (mutável) - array, object, function */

/* Array */
/* let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b)

a.push(4)
console.log(a)

b.pop();
console.log(b)

a.push('Filipe')
console.log(a, c) */

/* Objeto */
const a = {
nome: 'Filipe',
sobrenome: 'Neves'
}

const b = {...a};

a.nome = 'João'
console.log(a);
console.log(b);

