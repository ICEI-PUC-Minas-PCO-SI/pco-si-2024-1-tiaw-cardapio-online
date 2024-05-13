document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body"); // Seleciona o elemento body
  const roseImage = document.querySelector(".rose"); // Seleciona a div com a classe .rose

  // Carrega o arquivo JSON
  fetch("./dados.json")
    .then((response) => response.json()) // Converte a resposta para JSON
    .then((data) => {
      // Percorre os dados do JSON e adiciona um ouvinte de evento de clique a cada item do cardápio
      data.forEach(function (item) {
        const link = document.createElement("a"); // Cria um novo elemento de âncora
        link.classList.add("image-link"); // Adiciona a classe image-link ao novo elemento
        link.dataset.image = item.image; // Define o caminho da imagem como atributo data-image

        // Adiciona um ouvinte de evento de clique ao novo elemento
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Impede o comportamento padrão do link
          roseImage.style.backgroundImage = `url('${item.image}')`; // Define a imagem de fundo da div .rose com a imagem selecionada
        });

        // Cria um elemento de imagem dentro do novo elemento de âncora
        const img = document.createElement("img");
        img.src = item.image; // Define o caminho da imagem
        img.alt = item.name; // Define o texto alternativo da imagem

        // Adiciona a imagem como filho do novo elemento de âncora
        link.appendChild(img);

        // Adiciona o novo elemento de âncora como filho do body
        body.appendChild(link);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo JSON:", error);
    });
});
