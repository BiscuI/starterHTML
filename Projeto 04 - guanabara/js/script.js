function gerar(){
    var num = document.querySelector("#num");
    var tabuada = document.querySelector("#tabuada");
    var conteudoAtual = document.querySelector("#opcOne");
    tabuada.remove(conteudoAtual);

    for(let i=1; i<=10; i++){
        var numero = Number(num.value)*i;
        let tempOption = `${Number(num.value)} * ${i} = ${numero}`;
        console.log(tempOption);

        var result = new Option(tempOption, tempOption);
        tabuada.add(result);
    }
}