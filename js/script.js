// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

// Menu Hamburguer e Rolagem Suave
document.addEventListener("DOMContentLoaded", () => {
  const hamburguer = document.getElementById("hamburguer");
  const menu = document.getElementById("menu");
  const links = document.querySelectorAll("#menu a");

  if (hamburguer && menu) {
    hamburguer.addEventListener("click", () => {
      hamburguer.classList.toggle("active");
      menu.classList.toggle("active");
    });

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link

        const targetId = link.getAttribute("href").substring(1); // Obtém o ID do destino
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até o elemento

        hamburguer.classList.remove("active");
        menu.classList.remove("active");
      });
    });
  } else {
    console.error("Elementos hamburguer ou menu não encontrados.");
  }
});
