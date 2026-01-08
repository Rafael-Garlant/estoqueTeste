import {
  getProdutos,
  createProduto,
  deleteProduto,
  updateProduto,
} from "./services/api.js";
import { renderProdutos } from "./ui/render.js";
import {
  formProduto,
  inputNome,
  inputQuantidade,
  tabelaCorpo,
} from "./ui/elements.js";

// Variável para controlar se estamos editando alguém
let idEdicao = null;

async function carregarTabela() {
  const listaProdutos = await getProdutos();
  renderProdutos(listaProdutos);
}

async function init() {
  await carregarTabela();
}
init();

// --- SUBMIT (Criar ou Editar) ---
formProduto.addEventListener("submit", async (event) => {
  event.preventDefault();

  const produto = {
    nome: inputNome.value,
    quantidade: inputQuantidade.value,
  };

  try {
    if (idEdicao) {
      // Se tem ID, é Edição!
      await updateProduto({ ...produto, id: idEdicao });
      alert("Produto atualizado!");
      idEdicao = null; // Limpa o ID para voltar ao modo de criação
      document.querySelector("#btn-salvar").textContent = "Adicionar"; // Volta o texto do botão
    } else {
      // Se não tem ID, é Criação!
      await createProduto(produto);
      alert("Produto criado!");
    }

    formProduto.reset();
    carregarTabela();
  } catch (error) {
    alert("Erro na operação.");
    console.error(error);
  }
});

// --- CLIQUES NA TABELA (Deletar e Editar) ---
tabelaCorpo.addEventListener("click", async (event) => {
  // 1. DELETAR
  const botaoDeletar = event.target.closest(".btn-acao.excluir");
  if (botaoDeletar) {
    const id = botaoDeletar.dataset.id;
    if (confirm("Excluir item?")) {
      await deleteProduto(id);
      carregarTabela();
    }
  }

  // 2. EDITAR (Preenche o formulário)
  const botaoEditar = event.target.closest(".btn-acao.editar");
  if (botaoEditar) {
    const dados = botaoEditar.dataset;

    // Preenche os inputs
    inputNome.value = dados.nome;
    inputQuantidade.value = dados.qtd;

    // Define o ID global para sabermos quem estamos editando
    idEdicao = dados.id;

    // Muda visualmente o botão para o usuário saber
    document.querySelector("#btn-salvar").textContent = "Atualizar";
  }
});
