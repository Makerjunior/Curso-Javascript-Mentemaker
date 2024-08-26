
    const botao = document.getElementById('meuBotao');
    botao.addEventListener('click', function() {
        alert('O botão foi clicado!');
    });

    const elemento = document.getElementById('meuElemento');
    elemento.addEventListener('mouseover', function() {
        elemento.style.backgroundColor = 'lightgreen';
    });

    const element = document.getElementById('meuElemento');
    element.addEventListener('mouseout', function() {
        element.style.backgroundColor = 'lightgray';
    });

    
    const input = document.getElementById('meuInput');
    input.addEventListener('keydown', function(event) {
       // alert('Você pressionou a tecla: ' + event.key);
       console.log(`Tecla digitada ${event.key}`)
    });

    window.addEventListener('load', function() {
        alert('O documento foi totalmente carregado!');
    });


  
