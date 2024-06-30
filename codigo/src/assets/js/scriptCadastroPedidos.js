document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("orderForm");
  const saveButton = document.getElementById("saveButton");

  saveButton.addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const nome = document.getElementById("orderName").value;
    const valor = document.getElementById("orderValue").value;
    const descricao = document.getElementById("orderDescription").value;
    const tipo = document.getElementById("foodType").value;
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = function() {
        const imageBase64 = reader.result;

        // Criação do objeto pedido
        const order = {
          nome: nome,
          valor: valor,
          descricao: descricao,
          tipo: tipo,
          image: imageBase64
        };

        // Envio dos dados para o JSON Server
        fetch("http://localhost:3000/pedidos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(order)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          window.location.href = 'http://127.0.0.1:5501/html/pedidosCadastradosList.html';
        })
        .catch(error => {
          console.error("Erro ao salvar o pedido:", error);
        });
      };

      reader.readAsDataURL(file);
    } else {
      // Caso não haja imagem selecionada
      const order = {
        nome: nome,
        valor: valor,
        descricao: descricao,
        tipo: tipo,
        image: null
      };

      // Envio dos dados para o JSON Server
      fetch("http://localhost:3000/pedidos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        window.location.href = 'http://127.0.0.1:5501/html/pedidosCadastradosList.html';
      })
      .catch(error => {
        console.error("Erro ao salvar o pedido:", error);
      });
    }
  });
});


function formatCurrency(value) {
  const formattedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedValue;
}

function previewImage(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("previewImage").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function removeImage() {
  document.getElementById("previewImage").src = "";
  document.getElementById("fileInput").value = ""; // Clear the file input
}

function mascaraMoeda(campo, evento) {
  var tecla = !evento ? window.event.keyCode : evento.which;
  var valor = campo.value.replace(/[^\d]+/gi, "").reverse();
  var resultado = "";
  var mascara = "##.###.###,##".reverse();
  for (var x = 0, y = 0; x < mascara.length && y < valor.length; ) {
    if (mascara.charAt(x) != "#") {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = resultado.reverse();
}
