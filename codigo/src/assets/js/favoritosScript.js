fetch("http://localhost:3000/favoritos")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".card-container");
    data.forEach((item) => {
      container.innerHTML += `
            <div class="item-card">
            <div class="div-icon">
                <img
                    class="icone-coracao"
                    src="assets/images/notFilledHeart.png"
                    alt="icone-coracao"
                />
            </div>
            <div class="spacing">
                <div class="imgs">
                    <div>
                        <img
                            src="assets/img/${item.imagem}"
                            alt="${item.nome}"
                            class="imagem-principal-card"
                        />
                    </div>
                </div>

                <div class="title">${item?.nome}</div>
                <div class="subt">${item.descricao}</div>
                <div class="price">${formatCurrency(item.preco)}</div>
                <div class="btn-pedir">
                    <button onclick="orderAgain('${item?.nome}')">Pedir novamente</button>
                </div>
            </div>
        </div>
        `;
    });
    this.changeHeartIcon();
  });

function changeHeartIcon() {
  const iconElements = document.querySelectorAll(".icone-coracao");
  if (iconElements) {
    iconElements.forEach((iconElement) => {
      iconElement.addEventListener("click", function () {
        changeIcon(iconElement);
      });
    });
  }
}

function changeIcon(iconElement) {
  if (iconElement.getAttribute("src").includes("notFilledHeart")) {
    iconElement.src = "assets/images/filledHeart.png";
  } else {
    iconElement.src = "assets/images/notFilledHeart.png";
  }
}

function orderAgain(nomePedido) {
  alert(`"${nomePedido}" adicionado ao carrinho.`);
} 

function formatCurrency(value) {
  const formattedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedValue;
}
