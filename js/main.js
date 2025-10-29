import { iniciarSPA } from "./spa.js";
import { validarFormulario } from "./formValidation.js";

document.addEventListener("DOMContentLoaded", () => {
  iniciarSPA();

  // Inicializa validação somente na página de cadastro
  if (window.location.pathname.includes("cadastro.html")) {
    validarFormulario();
  }
});
