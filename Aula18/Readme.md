# Setando atributo

1. **Seleção do Contêiner**: A primeira linha do código obtém um elemento HTML que tem o ID "container" usando `document.getElementById('container')` e armazena-o em uma variável chamada `container`. Este elemento é o local onde os novos elementos serão adicionados.

2. **Criação de um Novo Elemento**: A segunda linha cria um novo elemento HTML `<h1>` usando `document.createElement('h1')` e armazena-o na variável `paragrafo`. Neste caso, `<h1>` é escolhido, mas poderia ser qualquer outro elemento HTML, como `<div>`, `<p>`, `<span>`, etc.

3. **Definição do Conteúdo**: O terceiro passo define o conteúdo do novo elemento. Isso é feito atribuindo um texto ao elemento `<h1>` criado na linha anterior. No exemplo fornecido, o texto "Este é um novo parágrafo criado com JavaScript!" é atribuído ao elemento `<h1>` usando `paragrafo.textContent`.

4. **Adição ao Contêiner**: O próximo passo é adicionar o novo elemento `<h1>` ao contêiner. Isso é feito usando `container.appendChild(paragrafo)`, onde `container` é o elemento contêiner selecionado na primeira linha e `paragrafo` é o novo elemento criado e definido nas etapas anteriores.

5. **Definição da Função `criarParagrafo`**: A partir da linha 11, uma função chamada `criarParagrafo` é definida. Essa função permite criar parágrafos personalizados e adicioná-los a um contêiner específico. Ela aceita três argumentos: `tag` (o tipo de elemento HTML a ser criado), `texto` (o conteúdo do elemento) e `container` (o contêiner onde o novo elemento será adicionado).

6. **Criação de Parágrafos Adicionais**: O loop `for` a partir da linha 14 chama a função `criarParagrafo` cinco vezes. Cada vez que a função é chamada, ela cria um novo elemento `<h1>` com o texto "Teste de Div" e o adiciona ao contêiner especificado.

Este código demonstra como criar elementos HTML dinamicamente usando JavaScript e adicionar esses elementos a um contêiner específico em uma página da web. Isso pode ser útil ao desenvolver páginas da web dinâmicas ou aplicativos da web que exigem a geração de conteúdo em tempo de execução.