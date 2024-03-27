'use strict';

let currentDissplay = '0';
let resultDisplay = false;

// adding the value to the current one
function appendToDisplay(value) {
  if (currentDissplay === '0' || resultDisplay) {
    currentDissplay = value;
  } else {
    currentDissplay += value;
  }

  resultDisplay = false;

  updateDisplay();
}

//updating the display
function updateDisplay() {
  const displayElement = document.getElementById('display');
  displayElement.textContent = currentDissplay;
}

//displaying results
function calculateResult() {
  try {
    const result = eval(currentDissplay);
    currentDissplay += '\n' + result.toString();

    updateDisplay();
  } catch (error) {
    currentDissplay += '\nError';

    updateDisplay();
  }
  resultDisplay = true;
}

// clearing / deleting the last entry
function clearLastElement() {
  currentDissplay = currentDissplay.slice(0, -1);

  if (currentDissplay === '') {
    currentDissplay = '0';
  }

  updateDisplay();
}

// clearing display

function clearDisplay() {
  currentDissplay = '0';

  updateDisplay();
}

//Attach handleOverflow to window resize event
window.addEventListener('resize', handeOverflow);

//call handleOverflow initially to handle any overflow on page load
handeOverflow();
