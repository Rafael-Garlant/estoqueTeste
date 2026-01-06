import { getProdutos } from "./services/api.js";
import { renderProdutos } from "./ui/render.js";

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
