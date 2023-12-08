let cardNumber = document.querySelector('.card-number');
let cardName = document.querySelector('.card-name');
let cardMonth = document.querySelector('.month-in');
let cardYear = document.querySelector('.year-in');
let cardCvc = document.querySelector('.cvc');

export class Functionalities {
  static formatCardNumber(input) {
    input.value = input.value
      .replace(/\D/g, '')
      .replace(/(\d{4}(?!$))/g, '$1 ');
  }
  static addErrorMsg(className, errorMsg, element, errElement) {
    element.classList.add(className);
    errElement.innerHTML = `${errorMsg}`;
  }
  static removeErrorMsg(className, element, errElement) {
    element.classList.remove(className);
    errElement.innerHTML = ``;
  }
  static displayInput(input, output) {
    if (input.value === '' && input.classList.contains('card-number')) {
      output.innerHTML = '0000 0000 0000 0000';
    } else {
      output.innerHTML = input.value;
    }
  }
  static validateNumber(input) {
    let errElement = document.querySelector('.error-number');
    if (input.value == '') {
      Functionalities.addErrorMsg(
        'border-danger',
        `can't be blank`,
        input,
        errElement
      );
    } else {
      Functionalities.removeErrorMsg('border-danger', input, errElement);
      let length = input.value.length;
      switch (true) {
        case length >= 19:
          return true;
          break;
        case length < 19:
          return false;
          break;
        case length == 0:
          return false;
          break;
      }
    }
  }

  static validateName(input) {
    let errElement = document.querySelector('.error-name');
    if (input.value == '') {
      Functionalities.addErrorMsg(
        'border-danger',
        `can't be blank`,
        input,
        errElement
      );
    } else {
      Functionalities.removeErrorMsg('border-danger', input, errElement);
      let pattern = /^[A-Za-z]+ [A-Za-z]+$/;
      if (pattern.test(input.value)) {
        Functionalities.removeErrorMsg('border-danger', input, errElement);
        return true;
      } else {
        Functionalities.addErrorMsg(
          'border-danger',
          `must contain last name and first name`,
          input,
          errElement
        );
        return false;
      }
    }
  }

  static changeFocus(input, next) {
    if (input.value.length >= input.maxLength) {
      next.focus();
      return true;
    }
  }
  // future requirements
  static validateDate(month, year) {
    let errElement = document.querySelector('.error-date');
    function checkForEmptyValues(month, year) {
      if (month.value == '') {
        Functionalities.addErrorMsg(
          'border-danger',
          "can't be blank",
          month,
          errElement
        );
        return false;
      } else if (year.value == '') {
        Functionalities.addErrorMsg(
          'border-danger',
          "can't be blank",
          year,
          errElement
        );
        return false;
      } else {
        Functionalities.removeErrorMsg('border-danger', month, errElement);
        Functionalities.removeErrorMsg('border-danger', year, errElement);
        return true;
      }
    }
    function validateMonthValue(month) {
      if (month.value <= 12 && month.value >= 1) {
        Functionalities.removeErrorMsg('border-danger', month, errElement);
        return true;
      } else {
        Functionalities.addErrorMsg(
          'border-danger',
          'wrong date',
          month,
          errElement
        );
        console.error('an error has occurred');
        return false;
      }
    }
    if (checkForEmptyValues && validateMonthValue(month)) {
      let today = new Date();
      let d = today.getTime();
      let cardDate = new Date(`${month.value}/${'28'}/${year.value}`);
      let newCardDate = cardDate.getTime();

      if (newCardDate >= d) {
        console.log(newCardDate);
        Functionalities.removeErrorMsg('border-danger', month, errElement);
        Functionalities.removeErrorMsg('border-danger', year, errElement);
        return true;
      } else {
        Functionalities.addErrorMsg('border-danger', ``, month, errElement);
        Functionalities.addErrorMsg(
          'border-danger',
          'date must be in the future',
          year,
          errElement
        );
        return false;
      }
    } else {
      return false;
    }
  }
  static validateCvc(cvc) {
    let errElement = document.querySelector('.error-cvc');
    if (cvc.value == '') {
      Functionalities.addErrorMsg(
        'border-danger',
        `can't be blank`,
        cvc,
        errElement
      );
    } else {
      Functionalities.removeErrorMsg('border-danger', cvc, errElement);
      let pattern = /^\d+$/;
      if (pattern.test(cvc.value)) {
        console.log('valid');
        return true;
      } else {
        return false;
      }
    }
  }

  static validateForm() {
    return new Promise((resolve, reject) => {
      if (
        Functionalities.validateName(cardName) &&
        Functionalities.validateNumber(cardNumber) &&
        Functionalities.validateDate(cardMonth, cardYear) &&
        Functionalities.validateCvc(cardCvc)
      ) {
        resolve(true);
      } else {
        reject('There is an error in the form');
      }
    });
  }
}
