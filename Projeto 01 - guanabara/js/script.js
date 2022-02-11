let img = document.getElementById("img");
var msg = document.getElementById("msg");
var data = new Date()
var hora = data.getHours()

function modelar(){
    if(hora>=6 && hora<12){
        document.body.style.backgroundColor = '#33ccff';
        msg.innerHTML = `Agora são ${hora}h`;
        img.src = "img/manhã.png";
        img.alt = "Está de manhã";
    }else if(hora>=12 && hora<18){
        document.body.style.backgroundColor = '#ff9900';
        msg.innerHTML = `Agora são ${hora}h`;
        img.src = "img/tarde.jpg";
        img.alt = "Está de tarde";
    }else{
        document.body.style.backgroundColor = '#0000e6';
        msg.innerHTML = `Agora são ${hora}h`;
        img.src = "img/noite.jpg";
        img.alt = "Está de noite";
    }
}