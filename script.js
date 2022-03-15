function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || fano.value > ano) {
        alert ("Dados incorretos, verifique e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id" , "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 4) {
                //Beber
                img.setAttribute("src", "BeberMasculino.jpg")
            } else if (idade < 15) {
                //criança
                img.setAttribute("src", "CriancaMasculino.jpg")
            } else if (idade < 21){
                //jovem
                img.setAttribute("src", "JovemMasculino.jpg")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "AdultoMasculino.jpg")
            } else {
                //idoso
                img.setAttribute("src", "IdosoMasculino.jpg")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute("src", "BeberFeminino.jpg")
            } else if (idade < 15) {
                //criança
                img.setAttribute("src", "CriancaFeminino.jpg")
            } else if (idade < 21){
                //jovem
                img.setAttribute("src", "JovemFeminino.jpg")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "AdultoFeminino.jpg")
            } else {
                //idoso
                img.setAttribute("src", "IdosoFeminino.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}