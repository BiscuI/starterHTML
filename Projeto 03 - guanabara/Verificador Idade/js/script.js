function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var nasc = document.querySelector("#nasc");
    var idade = ano-Number(nasc.value);
    var sexo = document.getElementsByName('radsexo');
    var result = document.querySelector("#resultTxt");
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    var genero = '';
    var res = document.querySelector("#result");

    if(sexo[0].checked){
        genero = 'Homem';
        resultTxt.style.textAlign = 'center';

        if(idade>=0 && idade<18){
            img.setAttribute('src','./img/goten.jpg');
        }else if(idade>=18 && idade<60){
            img.setAttribute('src','./img/goham.jpg');
        }else if(idade>=60){
            img.setAttribute('src','./img/kame.jpg');
        }
    }else if(sexo[1].checked){
        genero = 'Mulher';
        resultTxt.style.textAlign = 'center';

        if(idade>=0 && idade<18){
            img.setAttribute('src','./img/pan.jpg');
        }else if(idade>=18 && idade<60){
            img.setAttribute('src','./img/bulma.jpg');
        }else if(idade>=60){
            img.setAttribute('src','./img/baba.png');
        }
    }
    img.setAttribute('border-radius', '50%');
    img.setAttribute('width', '200px');
    result.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
}

