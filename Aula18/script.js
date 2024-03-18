// Seleciona o contêiner onde os novos elementos serão adicionados
const container = document.getElementById('container');

// Cria um novo elemento <p>
const paragrafo = document.createElement('h1');

// Define o conteúdo do parágrafo
paragrafo.textContent = 'Este é um novo parágrafo criado com JavaScript!';

// Adiciona o novo parágrafo ao contêiner
container.appendChild(paragrafo);

// Fucnção que cria um paragrafo
function criarParagrafo(tag, texto, container) {
    const T = document.createElement(tag);
    T.textContent = texto; 
    T.setAttribute("class", "txt");  // Adicionando atributo
    container.appendChild(T);
    }
    criarParagrafo('h1', 'Teste de Div', container);

for (let index = 0; index < 5 ; index++) {
    
    criarParagrafo('h1', 'Teste de Div', container);
}
