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
