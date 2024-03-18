// Adiciona um event listener para o evento de clique em um botão com id "myButton"
/*
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myPara").textContent = "Novo texto";
});


document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myPara").textContent = "Novo texto";
});
*/


function ocultar(buttonId, elementId) {
    let estado = 0;

    function ocultar(id) {
        estado = !estado;
        if (estado) {
            document.getElementById(id).style.display = 'none';
        } else {
            document.getElementById(id).style.display = 'block';
        }
        console.log(estado);
    }

    // Adicionando um event listener para o evento de clique no botão
    document.getElementById(buttonId).addEventListener("click", function () {
        ocultar(elementId);
    });
}

ocultar("myButton", "myPara")

