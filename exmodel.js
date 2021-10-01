function carregar() {
    var msg = window.document.getElementById("msg")
    var msg2 = window.document.getElementById("msg2")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 17
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        img.src = "fotoManha.png"
        msg2.innerHTML = `Bom dia!`
        document.body.style.background = '#F3E2A9' 
    } else if(hora >= 12 && hora <= 18) {
        img.src = "fotoTarde.png"
        msg2.innerHTML = `Boa tarde!`
        document.body.style.background = '#F7D358'
     } else {
        img.src = "fotoNoite.png"
        msg2.innerHTML = `Boa noite!`
        document.body.style.background = "#515154"
    }

}

