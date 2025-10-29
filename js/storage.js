export function salvarLocalStorage(dados) {
  let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
  cadastros.push(dados);
  localStorage.setItem("cadastros", JSON.stringify(cadastros));
}

export function listarCadastros() {
  return JSON.parse(localStorage.getItem("cadastros")) || [];
}
