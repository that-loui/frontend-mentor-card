import { Functionalities } from './ui.js';
import { displaySuccessMsg, switchDisplay } from './displayChange.js';

let cardNumber = document.querySelector('.card-number');
let cardNumberDisplay = document.querySelector('.card-number-display');

let cardName = document.querySelector('.card-name');
let cardNameDisplay = document.querySelector('.card-name-display');

let cardMonth = document.querySelector('.month-in');
let cardMonthDisplay = document.querySelector('.month-display');

let cardYear = document.querySelector('.year-in');
let cardYearDisplay = document.querySelector('.year-display');

let cardCvc = document.querySelector('.cvc');
let cardCvcDisplay = document.querySelector('.cvc-display');

let cardForm = document.querySelector('.form');
let successMsg = document.querySelector('.success-msg-container');
let successBtn = document.querySelector('.continue-btn');

cardNumber.addEventListener('input', () => {
  Functionalities.formatCardNumber(cardNumber);
  Functionalities.displayInput(cardNumber, cardNumberDisplay);
  Functionalities.changeFocus(cardNumber, cardMonth);
});

cardName.addEventListener('input', () => {
  Functionalities.displayInput(cardName, cardNameDisplay);
  Functionalities.changeFocus(cardName, cardNumber);
});

cardMonth.addEventListener('input', () => {
  Functionalities.displayInput(cardMonth, cardMonthDisplay);
  Functionalities.changeFocus(cardMonth, cardYear);
});
cardYear.addEventListener('input', () => {
  Functionalities.displayInput(cardYear, cardYearDisplay);
  Functionalities.changeFocus(cardYear, cardCvc);
});

cardCvc.addEventListener('input', () => {
  Functionalities.displayInput(cardCvc, cardCvcDisplay);
});

cardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  displaySuccessMsg(cardForm, successMsg);
});

successBtn.addEventListener('click', () => {
  cardForm.reset();
  switchDisplay(successMsg, cardForm, 'displayRemove');
  cardCvcDisplay.innerHTML = '';
  cardNumberDisplay.innerHTML = '0000 0000 0000 0000';
  cardNameDisplay.innerHTML = 'JANE APPLESEED';
  cardMonthDisplay.innerHTML = '00';
  cardYearDisplay.innerHTML = '00';
});
