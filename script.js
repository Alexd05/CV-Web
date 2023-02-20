
document.getElementById("imprimir").addEventListener('click', function() {
    window.print();
});

document.getElementById("imprimir").addEventListener('mouseover', function () {
    document.body.style.cursor = 'pointer';
});

document.getElementById("imprimir").addEventListener('mouseout', function () {
    document.body.style.cursor = 'default';
});

//document.body.style.backgroundImage = 'fondo.svg';