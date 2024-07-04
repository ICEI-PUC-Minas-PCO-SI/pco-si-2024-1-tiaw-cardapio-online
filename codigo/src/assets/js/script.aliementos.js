document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("isAdmin") === "true") {
        const cadastroPedidos = document.getElementById('side_items');
        const newItem = document.createElement('li');
        newItem.classList.add('side-item');
        newItem.innerHTML = `
            <a href="../assets/pages/cadastroPedidos.html">
                <i class="fa-solid fa-circle-plus"></i>
                <span class="item-description">
                    Cadastro de pedidos
                </span>
            </a>
        `;
        cadastroPedidos.appendChild(newItem);
    }
    clickInComprar();

});

document.getElementById("open_btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("open-sidebar");
});

function Alimento(alimento) {
  sessionStorage.setItem("Alimento", alimento);
}

function confirmarEscolha() {
  const Escolhido = sessionStorage.getItem("Alimento");
  if (Escolhido) {
    window.location.href = Escolhido + ".html";
  } else {
    alert("Por favor, escolha um alimento antes de confirmar.");
  }
}

/*PARTE DO CARROSSEL*/

fetch("db.json")
  .then((resposta) => resposta.json())
  .then((data) => {
    console.log(data);
    let str = `
    <div class="carrossel">
            <div class="carrosseis">
                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio2">
                <input type="radio" name="radio-btn" id="radio3">
    
                <div class="passar first">
                    <img src="${data.Carrosssel2[0].img}" alt="">
                </div>
                <div class="passar">
                    <img src="${data.Carrosssel2[1].img}" alt="">
                </div>
                <div class="passar">
                    <img src="${data.Carrosssel2[2].img}" alt="">
                </div>
            </div>
            <div class="nav-bolinha">
                <label class="manual-btn" for="radio1"></label>
                <label class="manual-btn" for="radio2"></label>
                <label class="manual-btn" for="radio3"></label>
            </div>
        </div>`;
    document.getElementById("carros").innerHTML = str;
  });

fetch("db.json")
  .then((resposta) => resposta.json())
  .then((data) => {
    console.log(data);
    let str = `
    <div class="carrossel">
            <div class="carrosseis">
                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio2">
                <input type="radio" name="radio-btn" id="radio3">
    
                <div class="passar first">
                    <img src="${data.Carrosssel1[0].img}" alt="">
                </div>
                <div class="passar">
                    <img src="${data.Carrosssel1[1].img}" alt="">
                </div>
                <div class="passar">
                    <img src="${data.Carrosssel1[2].img}" alt="">
                </div>
            </div>
            <div class="nav-bolinha">
                <label class="manual-btn" for="radio1"></label>
                <label class="manual-btn" for="radio2"></label>
                <label class="manual-btn" for="radio3"></label>
            </div>
        </div>`;
    document.getElementById("pizzas").innerHTML = str;
  });

fetch("db.json")
  .then((resposta) => resposta.json())
  .then((data) => {
    console.log(data);
    let str = `
    <div class="carrossel">
            <div class="carrosseis">
                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio2">
                <input type="radio" name="radio-btn" id="radio3">
    
                <div class="passar first">
                    <img src="${data.Carrosssel5[0].img}" alt="">
                </div>
                <div class="passar">
                    <img src="${data.Carrosssel5[1].img}" alt="">
                </div>
                <div class="passar">
                    <img src="${data.Carrosssel5[2].img}" alt="">
                </div>
            </div>
            <div class="nav-bolinha">
                <label class="manual-btn" for="radio1"></label>
                <label class="manual-btn" for="radio2"></label>
                <label class="manual-btn" for="radio3"></label>
            </div>
        </div>`;
    document.getElementById("massas").innerHTML = str;
  });

fetch("db.json")
  .then((resposta) => resposta.json())
  .then((data) => {
    console.log(data);
    let str = `
    <div class="carrossel">
            <div class="carrosseis">
                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio2">
                <input type="radio" name="radio-btn" id="radio3">
    
                <div class="passar first">
                    <img src="${data.Carrosssel3[0].img}" alt="">
                </div>
                <div class="passar">
                    <img src="${data.Carrosssel3[1].img}" alt="">
                </div>
                <div class="passar">
                    <img src="${data.Carrosssel3[2].img}" alt="">
                </div>
            </div>
            <div class="nav-bolinha">
                <label class="manual-btn" for="radio1"></label>
                <label class="manual-btn" for="radio2"></label>
                <label class="manual-btn" for="radio3"></label>
            </div>
        </div>`;
    document.getElementById("sandu").innerHTML = str;
  });

fetch("db.json")
    .then((resposta) => resposta.json())
    .then((data) => {
        console.log(data);
        let str = `
        <div class="carrossel">
                        <div class="carrosseis">
                                <input type="radio" name="radio-btn" id="radio1">
                                <input type="radio" name="radio-btn" id="radio2">
                                <input type="radio" name="radio-btn" id="radio3">
        
                                <div class="passar first">
                                        <img src="${data.Carrosssel4[0].img}" alt="">
                                </div>
                                <div class="passar">
                                        <img src="${data.Carrosssel4[1].img}" alt="">
                                </div>
                                <div class="passar">
                                        <img src="${data.Carrosssel4[2].img}" alt="">
                                </div>
                        </div>
                        <div class="nav-bolinha">
                                <label class="manual-btn" for="radio1"></label>
                                <label class="manual-btn" for="radio2"></label>
                                <label class="manual-btn" for="radio3"></label>
                        </div>
                </div>`;
        const frangoElement = document.getElementById("frango");
        if (frangoElement) {
            frangoElement.innerHTML = str;
        } else {
            console.error("Element with id 'frango' not found.");
        }
    });
fetch("db.json")
  .then((resposta) => resposta.json())
  .then((data) => {
    console.log(data);
    let str = `
    <div class="carrossel">
            <div class="carrosseis">
                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio2">
                <input type="radio" name="radio-btn" id="radio3">
    
                <div class="passar first">
                    <img src="${data.Carrosssel6[0].img}" alt="">
                </div>
                <div class="passar">
                    <img src="${data.Carrosssel6[1].img}" alt="">
                </div>
                <div class="passar">
                    <img src="${data.Carrosssel6[2].img}" alt="">
                </div>
            </div>
            <div class="nav-bolinha">
                <label class="manual-btn" for="radio1"></label>
                <label class="manual-btn" for="radio2"></label>
                <label class="manual-btn" for="radio3"></label>
            </div>
        </div>`;
    document.getElementById("fritas").innerHTML = str;
  });

function redirectLogin() {
  window.location.href = "../assets/pages/login.html";
}


// event click in comprar
function clickInComprar() {
    const allButtonsComprar = document.querySelectorAll(".card-content .comprar");
    allButtonsComprar.forEach(buttonComprar  => {
      buttonComprar.addEventListener('click', function (event) {
        let infoAboutProduct = event.target.parentNode.parentNode;
        if (infoAboutProduct.className != "card") {
         infoAboutProduct = event.target.parentNode.parentNode.parentNode;
        }
  
        const nameProduct = infoAboutProduct.querySelector("h3").textContent;
        const priceProduct = infoAboutProduct.querySelector("h4").textContent;
        const descriptionProduct = infoAboutProduct.querySelector("p").textContent;
        const urlImage = infoAboutProduct.querySelector("img").src;
  
        addProductToLocalStorage(nameProduct, priceProduct, descriptionProduct, urlImage);
      });
    });
  }
  
  // localstorage
  function addProductToLocalStorage(name, price, description, image) {
    let productsInCart = localStorage.getItem('productsInCart');
    if (productsInCart) {
      productsInCart = JSON.parse(productsInCart);
    } else {
      productsInCart = [];
    }
  
    productsInCart.push({
        name: name,
        price: price,
        description: description,
        image: image
    });
  
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
    console.log("Produto adicionado no carrinho!");
  }
  