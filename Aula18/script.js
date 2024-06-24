

function criarParagrafo(tag, texto, containerId, classe) {
    const conatiner = document.getElementById(containerId);
    if (conatiner) {
        const elementoTag = document.createElement(tag);
        elementoTag.textContent = texto;
        elementoTag.setAttribute('class',classe);
        conatiner.appendChild(elementoTag);
    }else{
        console.error(`Não existe um container com id = ${conatiner}`);
    }
}

criarParagrafo('h1','Mente Maker','container','txt');
criarParagrafo('h1','Mente Maker','container','txt1');
criarParagrafo('h1','Mente Maker','container','txt');