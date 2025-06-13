const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");

  document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  function closeLightbox() {
    modal.style.display = "none";
  }

  modal.addEventListener("click", function(e) {
    if (e.target === modal) closeLightbox();
  });
