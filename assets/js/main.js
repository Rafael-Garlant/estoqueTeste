import { getProdutos, createProduto } from "./services/api.js";
import { renderProdutos } from "./ui/render.js";
import { formProduto, inputNome, inputQuantidade } from "./ui/elements.js";

async function init() {
  try {
    console.log("Iniciando o Estoque Pink");

    const listaProdutos = await getProdutos();

    renderProdutos(listaProdutos);
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error);
  }
}
init();

formProduto.addEventListener("submit", async (e) => {
  e.preventDefault();

  const novoProduto = {
    nome: inputNome.value,
    quantidade: inputQuantidade.value,
  };

  try {
    await createProduto(novoProduto);
    console.log("Produto salvo");
    init();
    formProduto.reset();
  } catch (error) {
    console.error("Erro ao salvar o produto:", error);
  }
});
