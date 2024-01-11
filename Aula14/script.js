const elements = [...document.getElementsByTagName("h1")]
elements.map((e)=>{
    console.log(e.textContent)
})

const elemento = elements.filter((e) => {
    return e.innerText == "Mente maker 0";
  });
  
  elemento[0].innerHTML="tudo certo"

