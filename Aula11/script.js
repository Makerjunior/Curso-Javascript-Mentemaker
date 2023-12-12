function ola(params) {
    document.write(params);
}
ola("Junior");

var array =["Pedro","Carlos","Rapha","Vini","Ramon","Thiago"];

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    document.write("<br>"+element);
}