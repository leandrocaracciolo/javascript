function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#524330'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#2b1a2c'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#1c333b'
    }
}

