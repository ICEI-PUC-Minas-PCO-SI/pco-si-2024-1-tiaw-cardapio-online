document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  // Simular a verificação de login (você pode substituir isso pela verificação real)
  if (login === "usuario" && password === "senha") {
    // Se o login for bem-sucedido, salve os dados no localStorage
    const userData = {
      login: login,
      password: password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirecione para a página home
    window.location.href = "home.html";
  } else {
    alert("Login ou senha incorretos!");
  }
});
