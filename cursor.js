// cursor.js
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Optional: click feedback
document.addEventListener('mousedown', () => {
  cursor.classList.add('click');
});
document.addEventListener('mouseup', () => {
  cursor.classList.remove('click');
});

// Optional: link hover effect
const interactiveElements = document.querySelectorAll('a, button, input, textarea, label');

interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovered');
  });
});
