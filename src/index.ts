async function obterClientesDaAPI() {
  try {
    const response = await fetch("http://localhost:3000/api/clientes");
    const clientes = await response.json();
    return clientes;
  } catch (error) {
    console.error("Erro ao obter clientes da API:", error);
    throw error;
  }
}

// Exemplo de uso assíncrono
async function main() {
  try {
    const clientes = await obterClientesDaAPI();
    console.log("Clientes da API:", clientes);
  } catch (error) {
    console.error("Erro no processo principal:", error);
  }
}

main();
