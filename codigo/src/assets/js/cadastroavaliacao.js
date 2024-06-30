document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-rating label');
    stars.forEach(star => {
        star.addEventListener('click', setRating);
        star.addEventListener('mouseover', addHoverEffect);
        star.addEventListener('mouseout', removeHoverEffect);
    });

    function setRating(event) {
        const value = event.target.previousElementSibling.value;
        const allStars = document.querySelectorAll('.star-rating label');
        allStars.forEach(star => {
            if (star.previousElementSibling.value <= value) {
                star.style.color = '#f5b301';
            } else {
                star.style.color = '#ddd';
            }
        });
    }

    function addHoverEffect(event) {
        const value = event.target.previousElementSibling.value;
        const allStars = document.querySelectorAll('.star-rating label');
        allStars.forEach(star => {
            if (star.previousElementSibling.value <= value) {
                star.style.color = '#f5b301';
            }
        });
    }

    function removeHoverEffect() {
        const allStars = document.querySelectorAll('.star-rating label');
        const checkedStar = document.querySelector('.star-rating input[type="radio"]:checked');
        const value = checkedStar ? checkedStar.value : 0;
        allStars.forEach(star => {
            if (star.previousElementSibling.value <= value) {
                star.style.color = '#f5b301';
            } else {
                star.style.color = '#ddd';
            }
        });
    }

    const eventTitleInput = document.getElementById('event-title');
    const ratingInputs = document.getElementsByName('rating');
    const sendButton = document.getElementById('Enviar');

    // Função para salvar o evento no cache do navegador
    function saveEvent(event) {
        let events = JSON.parse(localStorage.getItem('events')) || [];
        events.push(event);
        while (events.length > 6) {
            events.shift(); 
        }
        localStorage.setItem('events', JSON.stringify(events));
    }

    // Adiciona um ouvinte de evento para o botão de enviar
    sendButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const title = eventTitleInput.value.trim();
        let rating = null;
        for (const ratingInput of ratingInputs) {
            if (ratingInput.checked) {
                rating = ratingInput.value;
                break;
            }
        }

        if (title.length >= 5 && rating) {
            saveEvent({ title, rating });
            eventTitleInput.value = ''; // Limpa o campo de entrada

            for (const ratingInput of ratingInputs) {
                ratingInput.checked = false; // Limpa a seleção de estrelas
            }
            abrirAlerta();
            
        } else {
            alert('O título deve ter pelo menos 5 caracteres e a avaliação deve ser selecionada.');
        }
    });

    // Adiciona um ouvinte de evento para a entrada do título
    eventTitleInput.addEventListener('input', function() {
        if(eventTitleInput == null) {
            eventTitleInput.setCustomValidity('O comentário não pode ser vazio.');   
        }
        const minLength = 8;
        const currentLength = eventTitleInput.value.length;
        if (currentLength < minLength) {
            eventTitleInput.setCustomValidity(`O comentário deve ter pelo menos ${minLength} caracteres. Você digitou ${currentLength}.`);
        } else {
            eventTitleInput.setCustomValidity('');
         

        }
    });


    function abrirAlerta() {
        Swal.fire({
            title: "Sua avaliação foi enviada!",
            text: "Aperte OK",
            icon: "success"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'feedback.html';
            }
        });
    }
});