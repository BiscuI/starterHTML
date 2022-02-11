var el = document.createElement("div");
el.classList = "div-criada";
console.log(el);

var container = document.querySelector("#container");
container.appendChild(el);

//insertBefore
var elDois = document.createElement("div");
elDois.classList = "div-before";

container.insertBefore(elDois, el);