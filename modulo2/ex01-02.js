var botao = document.querySelector("#botao");
var app = document.querySelector('#app');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

botao.onclick = function () {
    var quadrado = document.createElement('li');

    quadrado.style.position = 'relative';
    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.backgroundColor = '#F00';
    quadrado.style.listStyle = 'none';
    quadrado.style.display = 'inline-block';

    quadrado.onmouseover = function () {
        quadrado.style.backgroundColor = getRandomColor();
    }

    app.appendChild(quadrado);
};