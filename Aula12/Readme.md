

### 1. **Selecionando Elementos HTML:**
   Em JavaScript, você pode selecionar elementos HTML usando `document.querySelector` ou `document.querySelectorAll`.

   ```javascript
   // Seleciona o primeiro elemento com a classe 'exemplo'
   var elemento = document.querySelector('.exemplo');

   // Seleciona todos os elementos com a classe 'exemplo'
   var elementos = document.querySelectorAll('.exemplo');
   ```

### 2. **Manipulando Conteúdo:**
   Você pode manipular o conteúdo de elementos HTML usando propriedades como `innerHTML` ou `textContent`.

   ```javascript
   // Obtém o conteúdo HTML de um elemento
   var conteudo = elemento.innerHTML;

   // Define o conteúdo HTML de um elemento
   elemento.innerHTML = 'Novo conteúdo';

   // Obtém ou define o conteúdo de texto de um elemento
   var texto = elemento.textContent;
   elemento.textContent = 'Novo texto';
   ```

### 3. **Manipulando Atributos:**
   Para manipular atributos de elementos, você pode usar `getAttribute`, `setAttribute` e `removeAttribute`.

   ```javascript
   // Obtém o valor de um atributo
   var valorAtributo = elemento.getAttribute('nome-do-atributo');

   // Define o valor de um atributo
   elemento.setAttribute('nome-do-atributo', 'novo-valor');

   // Remove um atributo
   elemento.removeAttribute('nome-do-atributo');
   ```

### 4. **Adicionando e Removendo Classes:**
   Para manipular classes CSS, você pode usar `classList` para adicionar, remover ou verificar a presença de classes.

   ```javascript
   // Adiciona uma classe
   elemento.classList.add('nova-classe');

   // Remove uma classe
   elemento.classList.remove('classe-a-remover');

   // Verifica se um elemento possui uma classe específica
   var temClasse = elemento.classList.contains('minha-classe');
   ```

### 5. **Manipulando Estilos:**
   Você pode modificar os estilos de um elemento diretamente usando a propriedade `style`.

   ```javascript
   // Modifica um estilo diretamente
   elemento.style.backgroundColor = 'azul';
   elemento.style.fontSize = '16px';
   ```

### 6. **Manipulando Eventos:**
   Adicione ou remova manipuladores de eventos para responder a interações do usuário.

   ```javascript
   // Adiciona um evento de clique
   elemento.addEventListener('click', function() {
       // Código a ser executado quando o elemento é clicado
   });

   // Remove um evento de clique
   elemento.removeEventListener('click', minhaFuncao);
   ```

Este é um tutorial básico, e há muito mais que você pode fazer com JavaScript para manipular HTML. Certifique-se de explorar a documentação do JavaScript e experimentar diferentes técnicas à medida que avança em seus projetos.