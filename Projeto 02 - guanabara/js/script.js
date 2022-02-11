function contar(){
    var inicio = document.querySelector("#inicio");
    var chegada = document.querySelector("#chegada");
    var passos = document.querySelector("#passos");
    var result = document.getElementById("result");
    var resultTxt = document.querySelector("#resultTxt");
    var novoTxt = document.createElement('p');
    var txt = '';

   if(Number(passos.value) <1 || Number(inicio.value)>=Number(chegada.value)){
        window.alert("Você não inseriu valores válidos para a execução!");
   }else{
        resultTxt.innerHTML = "Contando...";
    
        for(let i = Number(inicio.value); i<Number(chegada.value); i+=Number(passos.value)){
            txt += `${i} \u{1F449} `;
            console.log("iteração");
        }

        txt += " \u{1F3C1}";
        var temp = document.createTextNode(txt);
        novoTxt.appendChild(temp);
        result.appendChild(novoTxt);
   }
}