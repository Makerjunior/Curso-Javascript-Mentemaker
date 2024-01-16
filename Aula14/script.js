const elements = [...document.getElementsByTagName("h1")];

elements.map((e)=>{
   if (e.innerText == "Mente maker 0") {
      e.style.color="#f00";
   }
})

const elemento = elements.filter((e)=>{
  return e.innerText == "Mente maker 3";
})

elemento[0].innerHTML="Junior";

console.log(elemento)



//console.log(elements);
