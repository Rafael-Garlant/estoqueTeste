import { tabelaCorpo } from "./elements.js";

function createRow(produto) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.quantidade}</td>
        <td>
            <button class="btn-acao editar" title="Editar">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn-acao excluir" title="Excluir">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
    `;

  return tr;
}

export function renderProdutos(listaProdutos) {
  tabelaCorpo.innerHTML = "";

  listaProdutos.forEach((produto) => {
    const row = createRow(produto);
    tabelaCorpo.appendChild(row);
  });
}
// Fim do arquivo
