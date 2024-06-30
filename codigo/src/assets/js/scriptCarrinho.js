document.addEventListener('DOMContentLoaded', function () {
    addEventInMakePayment();
    addEventInRadioButton();
    showProductsInCart();
    showCard();
});

function addProduct(productName, productPrice, productDescription, imageUrl) {
    const productContainer = document.getElementById('productContainer');

    const templateProduct = productContainer.querySelector('#templateProduct');
    const newProduct = templateProduct.cloneNode(true);
    newProduct.id = '';
    newProduct.style.display = '';

    const productImage = newProduct.querySelector('.slider img');
    productImage.src = imageUrl;
    productImage.alt = productName + ' Image';

    const productNameElement = newProduct.querySelector('.yyyy');
    productNameElement.textContent = productName;

    const productDescriptionElement = newProduct.querySelector('.descri');
    productDescriptionElement.textContent = productDescription;

    const productPriceElement = newProduct.querySelector('.r2999');
    productPriceElement.textContent = productPrice;

    // Add event listeners for quantity adjustment and remove
    const minusBtn = newProduct.querySelector('.minus-icon');
    const plusBtn = newProduct.querySelector('.plus-icon');
    const quantityValue = newProduct.querySelector('.quantity-value');
    addEventQuantityProduct(minusBtn, plusBtn, quantityValue);

    const removeBtn = newProduct.querySelector('.remover');
    removeProductEvent(removeBtn, newProduct);

    // Append the new product to the container
    productContainer.appendChild(newProduct);

    // Update the order summary
    updateOrderSummary();
}

function addCard(numberCard, expirationDate) {
    const cardContainer = document.querySelector('.method-details');

    const templateCard = document.querySelector('#templateCard');
    const newCard = templateCard.cloneNode(true);
    newCard.id = '';
    newCard.style.display = '';

    newCard.querySelector(".div").textContent = numberCard;
    newCard.querySelector(".expires-112020").textContent = "Expira: " + expirationDate;

    cardContainer.appendChild(newCard);
    removeCard(newCard.querySelector(".removeMethod"), newCard);
}

function removeCard(removeBtn, cardElement) {
    removeBtn.addEventListener('click', function () {
        const allCards = document.querySelectorAll(".method1");
        const allCardsArray = Array.from(allCards);
        const index = allCardsArray.indexOf(cardElement);

        const cardData = localStorage.getItem('cardData');
        if (cardData) {
            let cardArray = JSON.parse(cardData);
            if (index >= 0 && index < cardArray.length) {
                cardArray.splice(index, 1);
                const updatedCardData = JSON.stringify(cardArray);
                localStorage.setItem('cardData', updatedCardData);
            } else {
                console.log("Índice inválido");
            }
        }

        cardElement.remove();
    });
}

function removeProductEvent(removeBtn, productElement) {
    removeBtn.addEventListener('click', function () {
        productElement.remove();
        updateOrderSummary(); // Update order summary after removal
    });
}

function updateOrderSummary() {
    const productElements = document.querySelectorAll('.productElement:not(#templateProduct)');
    let totalPrice = 0;

    const templateHeaderPrice = document.getElementById('template-headerPrice');
    const priceValuesContainer = document.querySelector('.price-values');
    priceValuesContainer.innerHTML = '';

    productElements.forEach((productElement) => {
        const productName = productElement.querySelector('.yyyy').textContent;
        const productPriceText = productElement.querySelector('.r2999').textContent;
        const quantityValue = productElement.querySelector('.quantity-value');
        const quantity = parseInt(quantityValue.textContent);

        const newHeaderPrice = templateHeaderPrice.cloneNode(true);
        newHeaderPrice.style.display = '';
        newHeaderPrice.id = '';

        newHeaderPrice.querySelector('.preo').textContent = productName;
        newHeaderPrice.querySelector('.price-content').textContent = 'R$' + (parseFloat(productPriceText.replace('R$', '').replace(',', '.')) * quantity).toFixed(2);

        priceValuesContainer.appendChild(newHeaderPrice);

        const productPrice = parseFloat(productPriceText.replace('R$', '').replace(',', '.')) * quantity;
        totalPrice += productPrice;
    });

    // Atualiza o total
    const totalPriceElement = document.querySelector('.totalPrice');
    totalPriceElement.textContent = 'R$' + totalPrice.toFixed(2);
}

function addEventQuantityProduct(minusBtn, plusBtn, quantityValue) {
    minusBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityValue.textContent);
        if (currentValue > 1) {
            quantityValue.textContent = currentValue - 1;
            updateOrderSummary();
        }
    });

    plusBtn.addEventListener('click', function () {
        let currentValue = parseInt(quantityValue.textContent);
        quantityValue.textContent = currentValue + 1;
        updateOrderSummary();
    });
}

function addEventInMakePayment() {
    const proceedButton = document.querySelector('.proceed');
    proceedButton.addEventListener('click', function () {
        const productContainer = document.getElementById('productContainer');
        const products = productContainer.querySelectorAll('.productElement:not(#templateProduct)');
        if (document.querySelector('.part-payment').style.display == 'flex') {
            const radioButtons = document.querySelectorAll('input.selected-area');

            let isSelectRadiusButton = false;
            radioButtons.forEach(radioButton => {
                if (radioButton.checked) {
                    isSelectRadiusButton = true;
                }
            });

            if (isSelectRadiusButton) {
                alert("Pagamento finalizado!");
                document.querySelector('.part-payment').style.display = 'none';
                document.querySelector('.partCarrinho').style.display = 'flex';

                // save cart data to localStorage
                const cart = [];
                products.forEach(product => {
                    const productName = product.querySelector('.yyyy').textContent;
                    const productPrice = product.querySelector('.r2999').textContent;
                    const quantity = product.querySelector('.quantity-value').textContent;

                    cart.push({
                        name: productName,
                        price: productPrice,
                        quantity: quantity
                    });
                });

                const totalPrice = document.querySelector('.totalPrice').textContent;

                const now = new Date();
                const date = now.toLocaleDateString('pt-BR');
                const hour = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

                let cartData = localStorage.getItem('cartData');
                if (cartData) {
                    cartData = JSON.parse(cartData);
                } else {
                    cartData = [];
                }

                cartData.push({ cart, totalPrice, date, hour });
                localStorage.setItem('cartData', JSON.stringify(cartData));

                console.log("Adicionado no localStorage:");
                console.log(cartData);

                // clean carrinho
                localStorage.removeItem('productsInCart');
                const productElements = document.querySelectorAll('.productElement:not(#templateProduct)');
                productElements.forEach(element => {
                    element.remove();
                });
                updateOrderSummary();
            }
        } else {
            if (products.length > 0) {
                document.querySelector('.partCarrinho').style.display = 'none';
                document.querySelector('.part-payment').style.display = 'flex';
            }
        }
    });
}

function addEventInRadioButton() {
    const radioButtons = document.querySelectorAll('input.selected-area');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.checked) {
                radioButtons.forEach(otherRadio => {
                    if (otherRadio !== this) {
                        otherRadio.checked = false;
                    }
                });
            }
        });
    });
}

function showProductsInCart() {
    // localStorage.removeItem('productsInCart');
    const productsInCart = localStorage.getItem('productsInCart');
    if (productsInCart) {
        const parsedData = JSON.parse(productsInCart);
        parsedData.forEach(product => {
            addProduct(product.name, product.price, product.description, product.image);
        });
    }
}

function showCard() {
    // localStorage.removeItem('cardData');
    const cardData = localStorage.getItem('cardData');
    if (cardData) {
        const parsedData = JSON.parse(cardData);
        if (parsedData.length > 0) {
            parsedData.forEach(card => {
                addCard(card.numberCard, card.expirationDate);
            });
        } else {
            const paymentMethod = document.querySelector(".payment-method");
            paymentMethod.remove();
        }

    }
}