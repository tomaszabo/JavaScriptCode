const keyboard = document.querySelector('.keyboard');
const display = document.querySelector('.display');

keyboard.addEventListener('click', (event) => {
  if (event.target.classList.contains('key')) {
    const key = event.target.innerHTML;
    display.innerHTML += key;
  }
});