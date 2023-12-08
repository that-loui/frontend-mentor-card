# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
  - Date is in the past or a wrong date
- View the optimal layout depending on their device's screen size
- Return to a clean for when continue is pressed
- See hover, active, and focus states for interactive elements on the page

### Links

- Repo URL: [](https://your-solution-url.com)
- Live Site URL: [live site](https://frontend-mentor-card-verification.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Bootstrap css](https://getbootstrap.com) - For styles
- Vanilla Javascript

### What I learned

I learnt how to do multiple error handling with functions, and return precise error messages depending on the error. I also learnt how to ensure date are within a particular time frame, I am especially proud of the snippet below, which I used to handle multiple errors and date functions. It checks to ensure that the date is in the future and that none of the fields are empty or a field is correct.

```js

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
```

### Continued development

I plan to improve on this project by add more details for checking the card type and returning an error for invalid card types. I will also try to rebuild this project using react.

## Author

- Frontend Mentor - [@that-loui](https://www.frontendmentor.io/profile/that-loui)
- Twitter - [@LMacjob](https://www.twitter.com/LMacjob)
