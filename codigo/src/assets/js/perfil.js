// Retrieve user information from localStorage
const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

// Update HTML with user information
document.getElementById('nome').textContent = loggedUser.nome;
document.getElementById('email').textContent = loggedUser.email;
document.getElementById('celular').textContent = loggedUser.celular;
document.getElementById('endereco').textContent = loggedUser.endereco;