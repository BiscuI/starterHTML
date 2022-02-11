var novoParagrafo = document.createElement('p');

var textoParagrafo = document.createTextNode('Este é o texto criado');
novoParagrafo.appendChild(textoParagrafo);

console.log(novoParagrafo);

//inserindo no index.html
var body = document.querySelector("body");
body.appendChild(novoParagrafo);

//inserindo em uma div específica
var div = document.querySelector('#container');
div.appendChild(novoParagrafo);