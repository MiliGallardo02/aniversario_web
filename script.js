// script.js
document.querySelectorAll('.event').forEach((event, index) => {
  event.style.opacity = '0';
  setTimeout(() => {
    event.style.transition = 'opacity 1s ease';
    event.style.opacity = '1';
  }, index * 500);
});
