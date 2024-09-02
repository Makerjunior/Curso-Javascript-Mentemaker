
const lampada = document.getElementById('lampada');
const input = document.getElementById('meuInput');


input.addEventListener('keydown', function(event) {
    console.log(event.key)
    if (event.key === 'A' || event.key === 'a') {
        lampada.classList.add('acesa');
    } else if (event.key === 'P' || event.key === 'p') {
        lampada.classList.remove('acesa');
    }
});
