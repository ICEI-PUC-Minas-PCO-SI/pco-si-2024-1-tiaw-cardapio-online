document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  // Fetch the user data from the JSON server
  fetch("http://localhost:3000/usuario")
    .then(response => response.json())
    .then(users => {
      const user = users.find(user => user.email === login && user.senha === password);
      if (user) {
        localStorage.setItem("userData", JSON.stringify(user));
        isUserAdmin(user);

        window.location.href = "../index.html";
      } else {
        alert("Email ou senha incorretos");
      }
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
    });
});

  function isUserAdmin(userData) {
    if (userData && userData.email === "usuarioadmin@admin.com") {
      localStorage.setItem("isAdmin", true);
    } else {
      localStorage.setItem("isAdmin", false);
    }
  }
