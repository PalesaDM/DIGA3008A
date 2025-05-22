window.addEventListener('load', function() {
   alert('Hi there! Thanks for visiting Palesa\'s website. 😊');
 });

 // index.js

document.addEventListener('DOMContentLoaded', function () {
   const toggleBtn = document.getElementById('darkModeToggle');
   const body = document.body;
   const nav = document.querySelector('nav');
   const footer = document.querySelector('footer');
 
   // Load saved mode from localStorage
   if (localStorage.getItem('theme') === 'dark') {
     body.classList.add('dark-mode');
     nav.classList.add('dark-mode');
     footer.classList.add('dark-mode');
   }
 
   toggleBtn.addEventListener('click', function () {
     body.classList.toggle('dark-mode');
     nav.classList.toggle('dark-mode');
     footer.classList.toggle('dark-mode');
 
     // Save preference
     if (body.classList.contains('dark-mode')) {
       localStorage.setItem('theme', 'dark');
     } else {
       localStorage.setItem('theme', 'light');
     }
   });
 });

 const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

 