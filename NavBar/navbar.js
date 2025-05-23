// /js/navbar.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("/NavBar/navbar.html")
      .then((res) => res.text())
      .then((data) => {
        const navContainer = document.getElementById("navbar-container");
        if (navContainer) {
          navContainer.innerHTML = data;
        }
      });
  });
  