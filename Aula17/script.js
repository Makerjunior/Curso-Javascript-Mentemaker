


function criarPagrafo(tag,texto,IdContainer) {
    const container= document.getElementById(IdContainer);
    const elemento = document.createElement(tag);
    elemento.textContent=texto;
    container.appendChild(elemento)
} 




criarPagrafo('h1',"Titulo",'container');
criarPagrafo('p',"Mente Maker",'box');
criarPagrafo('p',"Outro texto ",'box');
criarPagrafo('p',"Outro texto ",'box')

