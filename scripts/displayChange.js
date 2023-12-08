import { Functionalities } from './ui.js';
export async function displaySuccessMsg(cardForm, successMsg) {
  try {
    let data = await Functionalities.validateForm();
    if (data) {
      switchDisplay(cardForm, successMsg, 'displayRemove');
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

export function switchDisplay(removeDisplay, addDisplay, className) {
  removeDisplay.classList.add(className);
  addDisplay.classList.remove(className);
}
