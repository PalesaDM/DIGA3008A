document.addEventListener("DOMContentLoaded", () => {
    fetch("/NavBar/navbar.html")
      .then((res) => res.text())
      .then((data) => {
        const navContainer = document.getElementById("navbar-container");
        if (navContainer) {
          navContainer.innerHTML = data;
  
          // Wait for nav content to be injected, then highlight active link
          highlightActiveLink();
        }
      });
  });
  const toggleBtn = document.querySelector(".dark-mode-toggle");
        if (toggleBtn) {
          toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            // Optionally remember user choice
            if (document.body.classList.contains("dark-mode")) {
              localStorage.setItem("theme", "dark");
            } else {
              localStorage.setItem("theme", "light");
            }
          });
        }

        // Apply saved theme on load
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
          document.body.classList.add("dark-mode");
        }

  // Define the function correctly
  function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();
  
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      if (link.dataset.page === currentPage) {
        link.classList.add('active');
      }
    });
  }
  