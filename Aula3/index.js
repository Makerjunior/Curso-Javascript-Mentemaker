
//   ###Aula 3

// Módulo

let c1 = 4;
if (c1 % 2 == 0) {
  console.log("O número :" + c1 + " é par !");
} else {
  console.log("O número :" + c1 + " é impar !");
}

console.log(8 % 3);


//  Operadores logísticos
// AND OR NOT

const a2 = 2;
const b2 = 2;
// AND
// a1 iqual b1 e 3 menor que 5

if ((a2 == b2) && (3 < 5)) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}


// OR
// a1 iqual b1 ou 3 menor que 5
const a3 = 2;
const b3 = 2;
if ((a3 == b3) || (10 < 5)) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}



// NOT
const a4 = 2;
const b4 = 2;
const x = 3;
// a1 iqual b1 ou x Não é iqual 30
if ((a4 == b4) && !(x == 30)) {
  //console.log("Verdadeiro");
} else {
 // console.log("Falso");
}

let n= false;
console.log(!n);


// else if 

let carro = "Opala";
let motorista = "Paulo";

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
  console.log(motorista + " só anda a pé ");
}


// Operador ternario
let x1 = 2;
let y1 = 2;
//(x1 != y1) ? console.log("Verdadeiro") : console.log("Falso");

const res = (1 == 3) ? 4 + 4 : 8 * 2;
console.log(res);



// swith case 

let diaDaSemana = 3;

switch (diaDaSemana) {
  case "segunda":
    console.log("Hoje é segunda-feira");
    break;
  case 2:
    console.log("Hoje é terça-feira");
    break;
  case 3:
    console.log("Hoje é quarta-feira");
    break;
  case 4:
    console.log("Hoje é quinta-feira");
    break;
  case 5:
    console.log("Hoje é sexta-feira");
    break;
  default:
    console.log("Dia inválido");
}


