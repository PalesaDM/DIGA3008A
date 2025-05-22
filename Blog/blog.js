// blog.js

// Fade-in animation on scroll
const blogCards = document.querySelectorAll(".blog-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

blogCards.forEach(card => observer.observe(card));

// Blog search filter
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();
  const blogList = document.getElementById("blogList");
  const cards = blogList.getElementsByClassName("blog-card");

  Array.from(cards).forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const text = card.querySelector("p").textContent.toLowerCase();
    const match = title.includes(filter) || text.includes(filter);

    card.style.display = match ? "block" : "none";
  });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const searchBar = document.getElementById("searchBar");
    const blogCards = document.querySelectorAll(".blog-card");
  
    // Toggle mobile navigation menu
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
    });
  
    // Search filter for blog titles
    if (searchBar) {
      searchBar.addEventListener("input", (e) => {
        const searchValue = e.target.value.toLowerCase();
  
        blogCards.forEach((card) => {
          const title = card.querySelector("h2").textContent.toLowerCase();
          if (title.includes(searchValue)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    }
  
    // Animate blog cards on page load
    blogCards.forEach((card, index) => {
      card.style.opacity = 0;
      card.style.transform = "translateY(20px)";
      setTimeout(() => {
        card.style.transition = "all 0.5s ease";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, index * 100); // staggered delay
    });
  });
  