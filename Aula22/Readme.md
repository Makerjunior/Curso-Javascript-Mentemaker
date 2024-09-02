

### Aula: Entendendo o Evento `load` do `window`

**Objetivo:** Aprender a usar o evento `load` do objeto `window` para executar código JavaScript quando o documento HTML estiver totalmente carregado.

#### O Que Vamos Aprender

1. **O Que é o Evento `load`?**
   - O evento `load` é disparado quando todos os recursos de uma página da web, incluindo HTML, CSS, imagens e scripts, foram totalmente carregados e estão prontos. 

2. **Como Usar o Evento `load`?**
   - Vamos aprender a adicionar um ouvinte de eventos para o evento `load` que executa uma função específica quando a página é carregada.

#### Arquivos Necessários

1. **Arquivo HTML (index.html)**
2. **Arquivo JavaScript (script.js)**

### 1. Arquivo HTML (index.html)

Crie um arquivo chamado `index.html` com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula sobre Evento load</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            text-align: center;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            margin: 20px auto;
            max-width: 600px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Evento `load` do `window`</h1>
        <p>Este exemplo demonstra como usar o evento `load` para executar um código quando o documento HTML é totalmente carregado.</p>
    </div>

    <!-- Link para o arquivo JavaScript -->
    <script src="script.js"></script>
</body>
</html>
```

### 2. Arquivo JavaScript (script.js)

Crie um arquivo chamado `script.js` com o seguinte conteúdo:

```javascript
// Adiciona um ouvinte para o evento 'load' do objeto window
window.addEventListener('load', function() {
    // Exibe um alerta quando o documento é totalmente carregado
    alert('O documento foi totalmente carregado!');
});
```

### Explicação do Código

1. **HTML (index.html):**
   - **Estrutura Básica:** Define a estrutura básica da página com um título e uma breve descrição.
   - **Link para JavaScript:** No final do corpo do HTML, inclui um link para o arquivo `script.js`, onde o JavaScript é colocado.

2. **JavaScript (script.js):**
   - **`window.addEventListener('load', function() { ... });`:** Adiciona um ouvinte de eventos ao objeto `window` para o evento `load`.
   - **Função de Callback:** Quando o evento `load` é disparado (ou seja, quando todos os recursos da página foram carregados), a função de callback é executada e um alerta é exibido com a mensagem "O documento foi totalmente carregado!".

### Como Usar

1. **Salvar os Arquivos:**
   - Salve o código HTML no arquivo `index.html`.
   - Salve o código JavaScript no arquivo `script.js`.

2. **Abrir o Arquivo HTML:**
   - Abra o arquivo `index.html` em um navegador web.

3. **Testar o Código:**
   - Quando a página for carregada, um alerta deve aparecer com a mensagem "O documento foi totalmente carregado!".

### Conceitos Adicionais

- **O que acontece antes do evento `load`:** O evento `load` é disparado depois que o navegador carrega a página completamente, incluindo todos os recursos como imagens e folhas de estilo. Isso é diferente do evento `DOMContentLoaded`, que é disparado quando o DOM (Document Object Model) está completamente carregado e analisado, mas antes que todos os recursos (como imagens e folhas de estilo) tenham sido carregados.

- **Por que usar o evento `load`:** Usar o evento `load` é útil quando você precisa garantir que todos os recursos da página estejam completamente carregados antes de executar o seu código. Por exemplo, se você precisa manipular ou calcular a altura e largura de elementos que podem depender da carga completa de imagens, o evento `load` garante que você tenha acesso a essas informações precisas.

### Resumo

O evento `load` do `window` permite que você execute código JavaScript quando toda a página e seus recursos estão totalmente carregados. Ao adicionar um ouvinte para este evento, você pode garantir que o seu código só será executado quando todos os elementos necessários estiverem prontos, evitando problemas que podem ocorrer se você tentar acessar elementos que ainda não foram completamente carregados.

Isso é especialmente útil para inicializar scripts que dependem de imagens ou outros recursos externos estarem completamente disponíveis.