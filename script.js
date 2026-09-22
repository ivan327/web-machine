const button = document.querySelector('#actionButton');
const status = document.querySelector('#status');

button.addEventListener('click', () => {
  status.textContent = 'Машина запущена 🚀';
});
