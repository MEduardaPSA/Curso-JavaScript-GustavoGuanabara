function carregar(){


var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 22
msg.innerHTML = `Agora são ${hora} hora(s)!`

if (hora >=0 && hora < 12){
    img.src = 'fotomanha.png'
    document.body.style.backgroundColor = '#dcca9c'
}else if(hora >=12 && hora <= 18){
    img.src = 'fototarde.png'
    document.body.style.backgroundColor ='#925d65'
}else{
    img.src = 'fotonoite.png'
    document.body.style.backgroundColor = '#151923'
}
}
