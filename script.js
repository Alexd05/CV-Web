
/*const api = 'https://randomuser.me/api/?gender=male';

fetch(api)
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log('Solicitud fallida', err));*/

document.getElementById("imprimir").addEventListener('click', function() {
    window.print();
});

document.getElementById("imprimir").addEventListener('mouseover', function () {
    document.body.style.cursor = 'pointer';
});

document.getElementById("imprimir").addEventListener('mouseout', function () {
    document.body.style.cursor = 'default';
});
