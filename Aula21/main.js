
let lampada = document.getElementById('lampada');
let input = document.getElementById('meuInput');

input.addEventListener('keydown',function (event) {
    console.log(event);
    if (event.key === 'A' || event.key ==='a') {
        lampada.classList.add('acesa');
    }else if( event.key === 'B' || event.key === 'b'){
        lampada.classList.remove('acesa');
    }
    
})