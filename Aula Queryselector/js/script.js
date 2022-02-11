//Acessando com classe
var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

//com querySelectorAll, a seleção é mais específica ainda
var itensQuery = document.querySelectorAll('#listaDois li');
console.log(itensQuery);

//querySelector retorna somente um elemento e nn uma colection
var lista = document.querySelector('#lista');
console.log(lista);
