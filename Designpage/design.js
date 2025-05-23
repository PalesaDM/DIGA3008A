// Color Swatch Copy
document.querySelectorAll('.color-swatch').forEach((swatch) => {
    swatch.addEventListener('click', () => {
      const hex = swatch.getAttribute('data-hex');
      navigator.clipboard.writeText(hex).then(() => {
        const preview = document.getElementById('color-preview');
        preview.textContent = `Copied ${hex}`;
        preview.style.backgroundColor = hex;
        preview.style.color = hex === '#111111' ? '#fff' : '#000';
      });
    });
  });
  
  // Export Colors
  document.querySelector('.export-btn').addEventListener('click', () => {
    const colors = [...document.querySelectorAll('.color-swatch')].map(s => s.getAttribute('data-hex'));
    const blob = new Blob([colors.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'color-palette.txt';
    link.click();
  });
  
  // Collapsibles
  document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  // Image Modal Preview
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  const captionText = document.getElementById('modal-caption');
  document.querySelectorAll('.wireframe-gallery img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      captionText.textContent = img.alt;
    });
  });
  document.querySelector('.close-btn').onclick = () => {
    modal.style.display = 'none';
  };
  