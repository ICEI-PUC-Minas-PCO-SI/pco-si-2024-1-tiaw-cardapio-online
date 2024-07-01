document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/historico")
    .then((response) => response.json())
    .then((historico) => {
      const histContainer = document.getElementById("container-historico");
      let histHTML = ""; // Variável para armazenar o HTML gerado

      historico.forEach((hist) => {
        histHTML += `
        <div>
          <div class="card">
            <img
              src="${hist.imagem}"
              alt="Foto do Pedido"
              class="imgPedido"
            />
            <div class="card-body">
              <h5 class="card-title">Pedido #${hist.id}</h5>
              <p class="card-name-pedido">${hist.quantidade}x ${hist.nome}</p>
              <p class="card-text">Valor: ${formatCurrency(hist.valor)}</p>
              <p class="card-text">Data e Hora: ${hist.data} ${hist.hora}</p>
              <p class="card-text">
                <small class="text-muted">Código do Pedido: ${hist.id}</small>
              </p>
            </div>
          </div>
        </div>
          `;
      });
      histContainer.innerHTML = histHTML; // Adiciona todo o HTML gerado ao contêiner
    })
    .catch((error) => console.error("Error:", error));
});

function formatCurrency(value) {
  const formattedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedValue;
}
