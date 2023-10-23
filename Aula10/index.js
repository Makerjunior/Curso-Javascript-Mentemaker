

const carro ={
    marca:"Toyota",
    modelo: "Corolla",
    ano: 2015,
    cor:"Preto",
    ligado:false,

    ligar:function() {
       this.ligado = true
    },

    desligar:function(){
        this.ligado= false;
    },

    setModelo:function(m){
       this.modelo=m 

    }

}

for(let chave in carro){
//console.log(carro[chave])
    if (carro[chave] == "Toyota" ) {
        console.log(" Temos Toyota no estoque" )
    }
}





/*
console.log(carro)
carro.setModelo("Marea")
carro.ligar()

console.log(carro)
*/

//carro.ligar()
//console.log(carro)
//carro.desligar()
//console.log(carro)




//delete carro.modelo
//carro.modelo = "Marea"
//console.log(carro)
//console.log(carro.modelo)
//console.log(carro['marca'])
