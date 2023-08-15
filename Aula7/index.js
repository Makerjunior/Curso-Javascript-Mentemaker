

function imprimeDados(){
    console.log("Mente maker");

}

function soma(n1,n2){
  console.log(n1+n2);
}

// soma(3,5);
// soma(5,20);

function nomeUsuario(user){
    return "Usuario :" + user;
}

//nomeUsuario("Mente maker");

//console.log(nomeUsuario("Mente maker"));

var carros =[ "Marea","Opala","Monza"];

var carros2 =[ "GOl","Corsa","Palio","Fusca"];

function imprimeCarros(car){
    for (let i= 0 ;i<car.length;i++){
      console.log(car[i]);
    }
}

//imprimeCarros(carros);
imprimeCarros(carros2);
