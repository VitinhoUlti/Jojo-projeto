let imagem = window.document.getElementById("hea")
let imagem2 = window.document.getElementById("pers1")
let imagem3 = window.document.getElementById("pers2")
let tabelajojo = window.document.getElementById("tabela")

function aperte() {
    imagem.style.background = `url(imagens/alljoestar.jpg)`
    imagem2.style.background = `url(imagens/jojo-s-bizarre-adventure-stone-ocean_cke.webp)`
    imagem2.style.backgroundPosition = "center top"
    imagem2.style.backgroundSize = "cover"
    imagem3.style.background = `url(imagens/bonecojonas.jpg)`
    imagem3.style.backgroundPosition = "center top"
    imagem3.style.backgroundSize = "cover"
    window.document.body.style.backgroundColor = 'darksalmon'

    tabelajojo.style.display = 'flex'
}
function aperte2() {
    imagem.style.background = `url(imagens/allvillains.webp)`
    imagem.style.backgroundPosition = "center top"
    imagem.style.backgroundSize = "cover"
    imagem2.style.background = `url(imagens/joji.avif)`
    imagem2.style.backgroundPosition = "center top"
    imagem2.style.backgroundSize = "cover"
    imagem3.style.background = `url(imagens/viloeszoa.jpg)`
    imagem3.style.backgroundPosition = "center top"
    imagem3.style.backgroundSize = "cover"
    window.document.body.style.backgroundColor = 'rgb(66, 64, 64)'

    tabelajojo.style.display = 'none'
}