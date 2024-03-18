



let elementos = [...document.getElementsByClassName("title")];
console.log(elementos);

elementos[3].innerHTML="Mente maker";

for(let index =0; index < elementos.length ;index++){
    if (elementos[index].textContent == "Mente maker") {
        elementos[index].style.color = "#f00";
    }
}

