
/*
const n=[10,20,30];
const copia =[...n];
console.log(copia);
*/

/*
const ar1 = [1,2,3];
const ar2 =[4,5,6];
const ar3 =[...ar1,...ar2];
console.log(ar3);
*/

/*
const obj1 ={nome:"Junior",idade:18};
const obj2={peso:85,altura:1.84};
const objCompleto = {...obj1, ...obj2};
console.log(objCompleto);
*/

function nomes(args1,args2,args3) {
    console.log(args1 +" - "+args2 +" - "+args3)
}

const n= ["Junior","Rapha","Vini"];

//nomes(...n);


const objP={
    nome:"Junior",
    detalhes:{idade:18,cidade:"BH"}
}

const objC = {...objP,detalhes:{...objP.detalhes}}
console.log(objP);

objC.detalhes.idade=30;
console.log(objC);

