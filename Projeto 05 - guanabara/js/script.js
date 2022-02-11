var vetor = [];

function adicionar(){
    let number = document.querySelector("#valor");
    let lista = document.querySelector("#vetor");
    let resultTxt = document.querySelector("#resultTxt");
    resultTxt.textContent = "";
    let n = Number(number.value);

    if(n<=0 || n>100){
        window.alert("Por favor, insira um valor válido!");
    }else{
        let verificador = true;

        for(let i=0; i<vetor.length; i++){
            if(n==vetor[i]){
                verificador = false;
            }
        }
        if(verificador){
            vetor.push(n);
            let option = document.createElement('option');
            option.text = `Valor ${n} adicionado!`;
            option.value = `valor${n}`;
            lista.appendChild(option);
        }else{
            window.alert("Por favor, insira um valor diferente dos já adicionados!");
        }
        number.value = '';
        number.focus();
    }
}

function executar(){
    let result = document.getElementById("result");
    let resultTxt = document.querySelector("#resultTxt");
    let maior = vetor[0];
    let menor = vetor[0];
    let soma = 0;
    let media;

    for(let i=0; i<vetor.length; i++){
        soma += vetor[i];

        if(vetor[i]>maior){
            maior = vetor[i];
        }

        if(vetor[i]<menor){
            menor = vetor[i];
        }
    }
    media = soma/vetor.length;

    //Encontrar uma forma eficiente de adicionar os <p> na div#result
    resulTxt.innerHTML = 
        `Ao todo, temos um total de ${vetor.length} elementos.\n
        O maior valor informado foi ${maior}.\n
        O menor valor informado foi ${menor}.\n
        A soma de todos os valores é igual à ${soma}.\n
        A média dos valores digitados é igual à ${media}.`
    ;

}