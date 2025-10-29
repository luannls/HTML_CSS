import { salvarLocalStorage } from "./storage.js";

export function validarFormulario() {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();

    if (!nome || !email || !cpf) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email)) {
      alert("Digite um e-mail válido!");
      return;
    }

    if (!/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(cpf)) {
      alert("Digite um CPF válido!");
      return;
    }

    salvarLocalStorage({ nome, email, cpf });
    alert("Cadastro realizado com sucesso!");
    form.reset();
  });
}
