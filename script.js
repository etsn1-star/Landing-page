const botaoMenu = document.querySelector(".menuHamburguer");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("aberto");
  if (menu.classList.contains("aberto")) {
    botaoMenu.innerHTML = "";
  } else {
    botaoMenu.innerHTML = "";
  }
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((outroCard) => {
      if (outroCard !== card) {
        outroCard.classList.remove("focado");
      }
    });

    card.classList.toggle("focado");
  });
});

const imagem = document.querySelector(".imgProduto");
const setaEsquerda = document.querySelector(".esquerda");
const setaDireita = document.querySelector(".direita");

let imagemAtual = 0;

const imagens = [
  "imgs/tortilete1.jpg",
  "imgs/tortilete2.jpg",
  "imgs/tortilete3.jpeg",
  "imgs/tortilete4.jpg",
];

setaEsquerda.addEventListener("click", () => {
  if (imagemAtual === 0) {
    trocarImagem(imagens.length - 1);
  } else {
    trocarImagem(imagemAtual - 1);
  }
});

setaDireita.addEventListener("click", () => {
  if (imagemAtual === imagens.length - 1) {
    trocarImagem(0);
  } else {
    trocarImagem(imagemAtual + 1);
  }
});

function trocarImagem(novoIndice) {
  imagem.style.opacity = 0;
  setTimeout(() => {
    imagemAtual = novoIndice;
    imagem.src = imagens[imagemAtual];
    imagem.style.opacity = 1;
  }, 300);
  console.log(imagemAtual);
}
