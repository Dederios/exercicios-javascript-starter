var names = ["Diego", "Gabriel", "Lucas"];
var list = document.querySelector('#app');
var inputElement = document.querySelector('input');

function addName(name) {
    var liElement = document.createElement('li');
    var textElement = document.createTextNode(name);

    liElement.style.fontFamily = 'Arial, Sans Serif';
    liElement.style.fontSize = '20px';

    liElement.appendChild(textElement);
    list.appendChild(liElement);
}

function adicionar() {
    addName(inputElement.value);
    inputElement.value = "";
}

for (name of names) {
    addName(name);
}