const newEvaluations = [
    {"title": "Avaliaçao 1", "rating": "5"},
    {"title": "Avaliaçao 2", "rating": "4"},
    {"title": "Avaliaçao 3", "rating": "3"},
    {"title": "Avaliaçao 4", "rating": "2"},
    {"title": "Avaliaçao 5", "rating": "1"},
    {"title": "Avaliaçao 6", "rating": "5"}
  ];
  
  // Retrieve existing evaluations from localStorage
  const existingEvaluations = JSON.parse(localStorage.getItem('events')) || [];
  
  // Only add new evaluations if the total does not exceed 6
  if (existingEvaluations.length + newEvaluations.length <= 6) {
    const updatedEvaluations = existingEvaluations.concat(newEvaluations);
    localStorage.setItem('events', JSON.stringify(updatedEvaluations));
  } else {
    console.log('Número máximo de avaliações atingido. Não é possível adicionar mais avaliações.');
  }
  
  const cardsData = JSON.parse(localStorage.getItem('events'));
  
  // Function to create star rating
  function createStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += i < rating ? '★' : '☆';
    }
    return stars;
  }
  
  // Function to create a card element
  function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
  
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
  
    const img = document.createElement('img');
    img.src = '../images/user.png';
    img.alt = `Card `;
  
    const starsDiv = document.createElement('div');
    starsDiv.className = 'stars';
    starsDiv.innerHTML = createStars(card.rating);
  
    cardHeader.appendChild(img);
    cardHeader.appendChild(starsDiv);
  
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
  
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = "Cliente"; // Usando o título do JSON

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = card.title;

  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardElement.appendChild(cardHeader);
    cardElement.appendChild(cardBody);
  
    return cardElement;
  }
  
  // Get the carousel element
  const carousel = document.getElementById('carousel');
  
  // Create and append cards to the carousel
  cardsData.forEach(card => {
    const cardElement = createCard(card);
    carousel.appendChild(cardElement);
  });
  
  let currentSlide = 0;
  const slidesVisible = 2; // Número de slides visíveis de uma vez
  const intervalTime = 10000; // Tempo de intervalo em milissegundos (10 segundos)
  
  function moveCarousel() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const cardWidth = (carousel.offsetWidth - (slidesVisible - 1) * 90) / slidesVisible; // Largura do cartão ajustada
    const totalSlides = cards.length;
  
    currentSlide += slidesVisible;
  
    if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }
  
    const newTransformValue = -(currentSlide * (cardWidth + 90)); // Leva em conta o espaçamento entre os cartões
  
    carousel.style.transform = `translateX(${newTransformValue}px)`;
  }
  
  // Chamar a função para mover o carrossel inicialmente e ao redimensionar a janela
  moveCarousel();
  window.addEventListener('resize', moveCarousel);
  
  // Definir intervalo para mover o carrossel a cada 10 segundos
  setInterval(moveCarousel, intervalTime);


  