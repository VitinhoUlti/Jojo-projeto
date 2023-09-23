let imagem = window.document.getElementById("hea")
let imagem2 = window.document.getElementById("pers1")
let imagem3 = window.document.getElementById("pers2")
let tabelajojo = window.document.getElementById("tabela")
let tabelavi = window.document.getElementById("tabela2");
let walpapers = document.getElementById("walpapers");
let walpapers2 = document.getElementById("walpapers2");
let walpaper = document.getElementById("walpaper");

let j1 = document.getElementById("j1")
let j2 = document.getElementById("j2")
let j3 = document.getElementById("j3")
let j4 = document.getElementById("j4")
let j5 = document.getElementById("j5")
let j6 = document.getElementById("j6")
let j7 = document.getElementById("j7")
let j8 = document.getElementById("j8")

j1.addEventListener("click", () => {
    walpaper.style.background = `url(imagens/alljoestar.jpg)`;
})
j2.addEventListener("click", () => {
  walpaper.style.background = `url(imagens/alljoestar.jpg)`;
});
j3.addEventListener("click", () => {
  walpaper.style.background = `url(imagens/alljoestar.jpg)`;
});
j4.addEventListener("click", () => {
  walpaper.style.background = `url(imagens/alljoestar.jpg)`;
});
j5.addEventListener("click", () => {
  walpaper.style.background = `url(imagens/alljoestar.jpg)`;
});
j6.addEventListener("click", () => {
  walpaper.style.background = `url(imagens/alljoestar.jpg)`;
});
j7.addEventListener("click", () => {
  walpaper.style.background = `url(imagens/alljoestar.jpg)`;
});
j8.addEventListener("click", () => {
  walpaper.style.background = `url(imagens/alljoestar.jpg)`;
});

function aperte() {
    imagem.style.background = `url(imagens/alljoestar.jpg)`
    imagem2.style.background = `url(imagens/jojo-s-bizarre-adventure-stone-ocean_cke.webp)`
    imagem2.style.backgroundPosition = "center top"
    imagem2.style.backgroundSize = "cover"
    imagem3.style.background = `url(imagens/bonecojonas.jpg)`
    imagem3.style.backgroundPosition = "center top"
    imagem3.style.backgroundSize = "cover"
    window.document.body.style.backgroundColor = 'darksalmon'

    tabelajojo.style.display = 'flex';
    tabelavi.style.display = 'none';
    walpapers.style.display = 'flex';
    walpapers2.style.display = 'none';
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

    tabelajojo.style.display = 'none';
    tabelavi.style.display = 'flex';
    walpapers.style.display = 'none';
    walpapers2.style.display = 'flex';
}