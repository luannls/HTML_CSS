import { iniciarSPA } from "./spa.js";
import { validarFormulario } from "./formValidation.js";

document.addEventListener("DOMContentLoaded", () => {
  iniciarSPA();

  // Inicializa validação somente na página de cadastro
  if (window.location.pathname.includes("cadastro.html")) {
    validarFormulario();
  }
});
// ----------------------------
// MODO ESCURO
// ----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const toggleDarkMode = document.getElementById("toggle-dark-mode");
  const body = document.body;

  // Verifica se o usuário já tinha um modo salvo
  const darkModeAtivo = localStorage.getItem("modoEscuro") === "true";
  if (darkModeAtivo) {
    body.classList.add("dark-mode");
    toggleDarkMode.textContent = "☀️";
  }

  toggleDarkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");

    // Salva preferência do usuário
    localStorage.setItem("modoEscuro", isDark);

    // Alterna ícone
    toggleDarkMode.textContent = isDark ? "☀️" : "🌙";
  });
});
