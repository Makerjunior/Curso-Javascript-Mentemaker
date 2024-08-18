
/*
document.getElementById("myButton").addEventListener("click",function () {
    document.getElementById("myPara").textContent="Mente Maker";
});

*/

function ocultar(btnId, ElementoId) {
    let estado = 0;
 
    function status(Id) {
        estado = !estado;
        if (estado) {
            document.getElementById(Id).style.display='none';
        }else{
            document.getElementById(Id).style.display='block';
        }
        console.log(estado);
        
    }

    document.getElementById(btnId).addEventListener("click",function() {
        status(ElementoId)
    })

}

ocultar("myButton","txt")