//! Mudar para fetch depoiss

const BASE_URL = "http://localhost:3000";

export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}/produtos`);

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
