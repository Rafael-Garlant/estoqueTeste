const BASE_URL = "http://localhost/estoquePHP/api";

export async function getProdutos() {
  try {
    const response = await fetch(`${BASE_URL}/read.php`);

    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

export async function createProduto(produto) {
  try {
    const response = await fetch(`${BASE_URL}/create.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar produto");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

export async function deleteProduto(id) {
  try {
    const response = await fetch(`${BASE_URL}/delete.php`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    if (!response.ok) {
      throw new Error("Erro ao deletar produto");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao deletar:", error);
    throw error;
  }
}

// ... (mantenha as outras funções)

export async function updateProduto(produto) {
  try {
    const response = await fetch(`${BASE_URL}/update.php`, {
      method: "PUT", // Ou POST, dependendo da configuração do servidor, mas PUT é o padrão para update
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto),
    });
    if (!response.ok) throw new Error("Erro ao atualizar");
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
}
