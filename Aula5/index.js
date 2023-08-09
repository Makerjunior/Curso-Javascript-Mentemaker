
/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;

while (i < numeros.length) {
  //console.log(`O número atual é ${numeros[i]}`);
  
  if ((numeros[i]) % 2 === 0){
    console.log(`${numeros[i]}, par`);
    break;
  }

  i++;
}
*/
/*
const numeros2 = [1, 2, 3, 4, 5];
let y = 9;

do {
  console.log(`O número atual é ${numeros2[y]}`);
  y++;
} while (y < numeros2.length);
*/




/*
const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};
 
let chaves = Object.keys(pessoa); // método em JavaScript que retorna um array contendo as chaves de um objeto
let x = 0;
  
while (x < chaves.length) {
    let chave = chaves[x];
    console.log(`A chave "${chave}" tem o valor "${pessoa[chave]}"`);
    x++;
}
*/


const pessoa2 = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};

let chaves2 = Object.keys(pessoa2); 
let i2 = 8;

do {
    let chave2 = chaves2[i2];
    console.log(`A chave "${chave2}" tem o valor "${pessoa2[chave2]}"`);
    i2++;
} while (i2 < chaves2.length);
