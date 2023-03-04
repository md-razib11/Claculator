const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('value');
    const currentDisplay = display.textContent;

    if (value === 'C') {
      display.textContent = '';
    } else if (value === '=') {
      try {
        display.textContent = eval(currentDisplay);
      } catch (error) {
        display.textContent = 'Error';
      }
    } else {
      display.textContent += value;
    }
  });
});
