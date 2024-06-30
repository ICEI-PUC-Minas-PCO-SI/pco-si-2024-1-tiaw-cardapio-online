document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("orderForm");
  const saveButton = document.getElementById("saveButton");

  saveButton.addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const nome = document.getElementById("name").value;
    const celular = document.getElementById("celular").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const confirmarSenha = document.getElementById("confirmPassword").value;
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    checkPasswordMatch();
    if (file) {
      const reader = new FileReader();
      reader.onloadend = function() {
        const imageBase64 = reader.result;

        // Criação do objeto usuario
        const order = {
          nome: nome,
          celular: celular,
          email: email,
          senha: senha,
          image: imageBase64
        };

        // Envio dos dados para o JSON Server
        fetch("http://localhost:3000/usuario", {
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
        .then(() => {
          alert("Usuário cadastrado com sucesso!");
        })
        .catch(error => {
          console.error("Erro ao salvar o usuario:", error);
        });
      };

      reader.readAsDataURL(file);
    } else {
      // Caso não haja imagem selecionada
      const order = {
        nome: nome,
        celular: celular,
        email: email,
        senha: senha,
        image: null
      };

      // Envio dos dados para o JSON Server
      fetch("http://localhost:3000/usuario", {
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
        alert("Usuário cadastrado com sucesso!");
      })
      .catch(error => {
        console.error("Erro ao salvar o usuario:", error);
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


const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

function checkPasswordMatch() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password === confirmPassword) {
    document.getElementById("passwordMatch").innerHTML = "";
    return true;
  } else {
    document.getElementById("passwordMatch").innerHTML = "As senhas não coincidem";
    return false;
  }
}

function myFunction() {
  var x = document.getElementById("password");
  var y = document.getElementById("confirmPassword");
  if (x.type === "password" && y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}
