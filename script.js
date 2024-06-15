let reviews = [
  {
      "id": 1,
      "nome": "Dona Creuza",
      "estrelas": 5,
      "comentario": "Muito bom, recomendo!"
  },
  {
      "id": 2,
      "nome": "Lara Damas",
      "estrelas": 4,
      "comentario": "Ótimo"
  },
  {
      "id": 3,
      "nome": "Maria Silva",
      "estrelas": 5,
      "comentario": "Excelente! Superou as expectativas."
  },
  {
      "id": 4,
      "nome": "Carlos Eduardo",
      "estrelas": 3,
      "comentario": "Razoável, esperava mais pelo preço."
  },
  {
      "id": 5,
      "nome": "Ana Paula",
      "estrelas": 5,
      "comentario": "Atendimento perfeito e produto de qualidade!"
  },
  {
      "id": 6,
      "nome": "João Martins",
      "estrelas": 4,
      "comentario": "Bom produto, mas a entrega demorou."
  },
  {
      "id": 7,
      "nome": "Cláudia Gomes",
      "estrelas": 4,
      "comentario": "Qualidade boa, preço justo."
  },
  {
      "id": 8,
      "nome": "Ricardo Oliveira",
      "estrelas": 3,
      "comentario": "Mediano, não me impressionou."
  },
  {
      "id": 9,
      "nome": "Sônia Carvalho",
      "estrelas": 2,
      "comentario": "Infelizmente, não gostei do material."
  },
  {
      "id": 10,
      "nome": "João Guilherme",
      "estrelas": 5,
      "comentario": "Sensacional! Super recomendo!"
  },
  {
      "id": 11,
      "nome": "Roberta Xavier",
      "estrelas": 1,
      "comentario": "Péssimo, veio com defeito e o atendimento foi ruim."
  },
]
;
let slideIndex = 0;

function loadStars(stars){
  const calculatedStars = [];
  for (let i = 0; i < Math.floor(stars); i++){
    calculatedStars.push(`<img src="images/full-star.svg" class="stars">`);
  }
  if(stars === 5){
    return calculatedStars.map((item) => item).join('');
  }
  if(Number.isInteger(stars)){
    for (let i = 0; i < 5 - stars; i++){
      calculatedStars.push(`<img src="images/empty-star.svg" class="reviewstars">`);
    }
  } else {
    calculatedStars.push(`<img src="images/half-star.svg" class="reviewstars">`);
    for (let i = 0; i < 4 - Math.floor(stars); i++){
      calculatedStars.push(`<img src="images/empty-star.svg" class="reviewstars">`);
    }
  }
  return calculatedStars.map((item) => item).join('');
}

function loadReviews(review){
  return `
    <div class="review">

    <p class="review__name"><strong>${review.nome}</strong></p>
    <div class="review__stars">${loadStars(review.estrelas)}</div>
    <p class="review__body">${review.comentario}</p>
  </div>
    `;
}

function moveSlider(e){
  if(e.currentTarget.id.includes('right')){
    if(slideIndex < reviews.length - 1) {
      slideIndex++;
      document.querySelector('.reviews').style.transform = `translateX(${-166.7 * slideIndex}%)`;
      document.querySelector('.review-header').style.display = 'grid';
      document.querySelector('.reviews').style.display = 'flex';
    } else {
      document.querySelector('.review-header').style.display = 'none';
      document.querySelector('.reviews').style.display = 'none';

      document.querySelector('#reviewPrompt').style.display = 'block';
    }
  } else {
    if(slideIndex > 0) {
      slideIndex--;
      document.querySelector('.reviews').style.transform = `translateX(${-166.7 * slideIndex}%)`;
      document.querySelector('.review-header').style.display = 'grid';
      document.querySelector('.reviews').style.display = 'flex';
      document.querySelector('#reviewPrompt').style.display = 'none';

    }
  }
}

async function fetchReviews() {
  document.querySelector('.reviews').innerHTML = reviews.map(loadReviews).join('');

}
fetchReviews();

// 3. Add event listeners to move the slider left and right
document.querySelector('#arrow--right').addEventListener('click', moveSlider);
document.querySelector('#arrow--left').addEventListener('click', moveSlider);