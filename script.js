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
