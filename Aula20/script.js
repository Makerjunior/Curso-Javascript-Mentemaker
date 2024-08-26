

const box = document.getElementById('box');

box.addEventListener('mouseover',function () {
      box.style.backgroundColor='#370';  
      box.style.marginLeft="100px";
      box.style.cursor='wait';
});

box.addEventListener('mouseout',function () {
        box.style.backgroundColor='#00f';   
})