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

// Blog search filter using #searchInput
const searchInput = document.getElementById("searchInput");
if (searchInput) {
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
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const searchBar = document.getElementById("searchBar");
  const blogCards = document.querySelectorAll(".blog-card");

  // Toggle mobile navigation menu
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
    });
  }

  // Optional: input search logic (if using #searchBar instead of #searchInput)
  if (searchBar) {
    searchBar.addEventListener("input", (e) => {
      const searchValue = e.target.value.toLowerCase();
      blogCards.forEach((card) => {
        const title = card.querySelector("h2").textContent.toLowerCase();
        card.style.display = title.includes(searchValue) ? "block" : "none";
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
    }, index * 100);
  });

  // 🔁 Blog Pagination Buttons
  const blogPages = [
    "week1blog.html",
    "week2blog.html",
    "week3blog.html",
    "week4blog.html",
    "week5blog.html",
    "week6blog.html",
    "week7blog.html",
    "essay.html",
    "week8blog.html",
    "week9blog.html",
    "week10blog.html",
    "week11blog.html"
  ];

  const currentPage = window.location.pathname.split("/").pop();
  const currentIndex = blogPages.indexOf(currentPage);

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (prevBtn && currentIndex > 0) {
    prevBtn.href = blogPages[currentIndex - 1];
  } else if (prevBtn) {
    prevBtn.style.display = "none";
  }

  if (nextBtn && currentIndex < blogPages.length - 1) {
    nextBtn.href = blogPages[currentIndex + 1];
  } else if (nextBtn) {
    nextBtn.style.display = "none";
  }
});
