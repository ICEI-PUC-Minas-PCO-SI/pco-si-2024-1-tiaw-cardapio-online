document.addEventListener("DOMContentLoaded", function () {
    const ordersContainer = document.getElementById("ordersContainer");

    // Função para criar um card de pedido
    function createOrderCard(order) {

        const card = document.createElement("div");
        card.className = "order-card";

        const image = document.createElement("img");
        image.src = order.image || "https://via.placeholder.com/150";
        image.alt = "Imagem do pedido";

        const title = document.createElement("h2");
        title.textContent = order.nome;

        const value = document.createElement("p");
        var valorr = order.valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
        value.textContent = `Valor: R$: ${valorr}`;

        const description = document.createElement("p");
        description.textContent = `Descrição: ${order.descricao}`;

        const foodType = document.createElement("p");
        foodType.textContent = `Categoria: ${order.tipo}`;

        const removeButton = document.createElement("button");
        removeButton.className = "remove-button";
        removeButton.textContent = "Remover pedido";
        removeButton.addEventListener("click", function () {
            removeOrder(order.id);
        });

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(value);
        card.appendChild(description);
        card.appendChild(foodType);
        card.appendChild(removeButton);

        return card;
    }

    // Função para buscar os pedidos do JSON Server
    function fetchOrders() {
        fetch("http://localhost:3000/pedidos")
            .then((response) => response.json())
            .then((orders) => {
                orders.forEach((order) => {
                    const orderCard = createOrderCard(order);
                    ordersContainer.appendChild(orderCard);
                });
            })
            .catch((error) => {
                console.error("Erro ao buscar os pedidos:", error);
            });
    }

    // Função para remover um pedido
    function removeOrder(orderId) {
        fetch(`http://localhost:3000/pedidos/${orderId}`, {
            method: "DELETE",
        })
            .then(() => {
                // Remove o card do pedido da interface
                const orderCard = document.getElementById(`order-${orderId}`);
                if (orderCard) {
                    orderCard.remove();
                }
            })
            .catch((error) => {
                console.error("Erro ao remover o pedido:", error);
            });
    }

    // Chama a função para buscar os pedidos ao carregar a página
    fetchOrders();
});
