import { templates } from "./templates.js";

export function iniciarSPA() {
  const links = document.querySelectorAll("nav a");
  const conteudo = document.querySelector("main");

  if (!conteudo) return;

  // Adiciona eventos nos links do menu
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pagina = e.target.getAttribute("href").replace(".html", "");
      carregarPagina(pagina);
      window.history.pushState({}, "", `${pagina}.html`);
    });
  });

  // Permite usar o botão voltar/avançar do navegador
  window.addEventListener("popstate", () => {
    const paginaAtual = window.location.pathname.replace(".html", "").replace("/", "");
    carregarPagina(paginaAtual || "index");
  });
}

function carregarPagina(pagina) {
  const conteudo = document.querySelector("main");

  // Verifica se o template existe antes de substituir
  if (templates[pagina]) {
    conteudo.innerHTML = templates[pagina];
  } else {
    console.log(`SPA: Página "${pagina}" não possui template — mantendo conteúdo original.`);
  }
}
