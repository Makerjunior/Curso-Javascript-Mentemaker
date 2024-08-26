# Tipos de Eventos

1. **`click`:**
   ```html
   <button id="meuBotao">Clique aqui!</button>
   <script>
       const botao = document.getElementById('meuBotao');
       botao.addEventListener('click', function() {
           alert('O botão foi clicado!');
       });
   </script>
   ```

2. **`mouseover`:**
   ```html
   <div id="meuElemento" style="width: 200px; height: 200px; background-color: lightblue;"></div>
   <script>
       const elemento = document.getElementById('meuElemento');
       elemento.addEventListener('mouseover', function() {
           elemento.style.backgroundColor = 'lightgreen';
       });
   </script>
   ```

3. **`mouseout`:**
   ```html
   <div id="meuElemento" style="width: 200px; height: 200px; background-color: lightblue;"></div>
   <script>
       const elemento = document.getElementById('meuElemento');
       elemento.addEventListener('mouseout', function() {
           elemento.style.backgroundColor = 'lightgray';
       });
   </script>
   ```

4. **`keydown`:**
   ```html
   <input id="meuInput" type="text" placeholder="Pressione uma tecla...">
   <script>
       const input = document.getElementById('meuInput');
       input.addEventListener('keydown', function(event) {
           alert('Você pressionou a tecla: ' + event.key);
       });
   </script>
   ```

5. **`load`:**
   ```html
   <p>Este é um parágrafo.</p>
   <script>
       window.addEventListener('load', function() {
           alert('O documento foi totalmente carregado!');
       });
   </script>
   ```

Cada exemplo demonstra um evento diferente e mostra como usar o `addEventListener` para lidar com esses eventos em JavaScript.