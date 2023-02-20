const modeSwitch = document.querySelector('#mode-switch');

modeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
