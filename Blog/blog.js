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
