 

 // codição
for (let i=0; i < 2; i++){
     // bloco
    console.log(i);
}




//Quando você precisa percorrer um array e executar alguma ação para cada elemento.
const numeros = [10, 20, 30, 40, 50,7];

for (let i = 0; i < numeros.length; i++) {

    if(numeros[i] < 30){
      console.log(numeros[i]);
    }

}



// Quando você precisa percorrer um objeto e executar alguma ação para cada propriedade.
const pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };

for (let propriedade in pessoa) {
  // console.log(`${propriedade} : ${pessoa[propriedade]}`);
   //console.log(propriedade +" : "+ pessoa[propriedade]);
   if(pessoa[propriedade] == "João"){
    console.log(`${pessoa[propriedade]} está na lista`);
   }
}



//Quando você precisa percorrer um array e executar alguma ação para cada elemento, 
//mas não precisa do índice do elemento.
const frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
  console.log(fruta);
}






