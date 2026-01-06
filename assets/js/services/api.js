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
