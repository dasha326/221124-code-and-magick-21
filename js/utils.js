"use strict";

// Randomizer
(function () {
  const ESC_KEYCODE = 'Escape';
  const ENTER_KEYCODE = 'Enter';

  window.wizard = {
    coatColor: [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`],
    eyesColor: [`black`, `red`, `blue`, `yellow`, `green`],
    fireballColor: [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#5ce6c0`, `#e6e848`],
    isColorChange: function (element, elementColor, elementInput) {
      let clickCount = 1;
      element.addEventListener('click', function () {
        if (clickCount === window.wizard.coatColor.length) {
          clickCount = 1;
        }

        if (element.tagName === 'use') {
          element.style.fill = elementColor[clickCount];
        }
        if (element.tagName === 'DIV') {
          element.style.background = window.wizard.fireballColor[clickCount];
          elementInput.value = window.wizard.fireballColor[clickCount];
        }
        clickCount++;
      });
    }
  };

  window.util = {
    randomInteger: function (min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    },
    isEscEvent: function (e, action) {
      if (e.key === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (e, action) {
      if (e.key === ENTER_KEYCODE) {
        action();
      }
    },
    removeHidden: function (element) {
      element.classList.remove('hidden');
    },
    addHidden: function (element) {
      element.classList.add('hidden');
    },
    isFormNameValid: function (e, elementValid, form) {
      if (elementValid.value.length > 2 && elementValid.value.length < 25) {
        window.backend.load(new FormData(form), window.formSuccessHandler, window.backend.errorMessage);
      } else {
        e.preventDefault();
      }
    }
  };
})();
