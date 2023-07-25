
var nome = "Mente maker";
nome = "Junior";
nome = 5.6;
const n = 3;
// console.log(n + 6);
//*******************************************

// Exemplos de variáveis de diferentes tipos
let numero = 42;
console.log(numero);
console.log(typeof numero);

let texto = "Olá, mundo!";
console.log(texto);
console.log(typeof texto);

let array = [
  "Mente Maker",
  134,
  false,
  { n: "junior" }
];

console.table(array[1]);
console.log(typeof array);



let objeto = {
  chave: "valor",
  a: "Maker",
  b: 189,
  c: false

};
console.table(objeto.c);
console.log(typeof objeto);

let booleano = false;
console.log(booleano);
console.log(typeof booleano);



let nulo = null;
console.log(nulo);
//console.log(typeof nulo);

let indefinido;
console.log(indefinido)
//console.log(typeof indefinido);

var a = 1;
const b = 1;
// Iqualdade valores
/*
if (a == b) {
  console.log("Verdeiro .");
} else {
  console.log("Falso .");
}
*/
// Iqualdade até o tipo 
if (a === b) {
  console.log("Verdeiro .");
} else {
  console.log("Falso .");
}

const n1 = 30;
const n2 = 30;
// Diferente valores
/*if (n1 != n2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} */
// Diferente até o tipo
if (n1 != n2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// Menor
const n3 = 3;
const n4 = 3;

if (n3 <= n4) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}




// Maior 

const n5 = 2;
const n6 = 2;

if (n5 >= n6) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// Menor iqual
const n8 = 1;
const n9 = 2;

if (n8 <= n9) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}



// Maior iqual
const n10 = 1;
const n11 = 2;

if (n1 => n2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

//   ###Aula 3
let c1 = 3;
if (c1 % 2 == 0) {
  console.log("O número :" + c1 + " é par !");
} else {
  console.log("O número :" + c1 + " é impar !");
}
//  Operadores logísticos
// AND OR NOT

const a1 = 2;
const b1 = 2;

// a1 iqual b1 e 3 menor que 5
if ((a1 == b1) && (3 < 5)) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// a1 iqual b1 ou 3 menor que 5
if ((a1 == b1) || (3 < 5)) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// a1 iqual b1 ou 3 menor que 5
if ((a1 == b1) || (3 < 5)) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

const x = 3;
// a1 iqual b1 ou x Não é iqual 30
if ((a1 == b1) && !(x == 30)) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}


let carro = "Marea";
let motorista ="Junior";

if ((carro == "Marea") && (motorista == "Junior")) {
  console.log(" Condição 1 ");
  console.log(motorista + " tem um " + carro);
}
else if ((carro == "Marea") || (motorista == "Junior")) {
  console.log(" Condição 2 ");
  console.log(motorista + " tem um " + carro);
}
else {
  console.log(" Condição 3 ");
  console.log(motorista +" só anda a pé ");
}

