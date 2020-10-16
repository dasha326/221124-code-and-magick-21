'use strict';

const setup = document.querySelector('.setup');
const setupOpen = document.querySelector('.setup-open');
const setupClose = document.querySelector('.setup-close');
const setupForm = document.querySelector('.setup-wizard-form');
const setupUserName = document.querySelector('.setup-user-name');
const setupSubmit = document.querySelector('.setup-submit');
const setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
const setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
const setupWizardFireball = document.querySelector('.setup-fireball-wrap');
const setupWizardFireballInput = document.querySelector('[name="fireball-color"]');
const setupDialogHandle = setup.querySelector('.upload');
const setupOpenEvent = () => window.util.removeHidden(setup);
const setupCloseEvent = () => window.util.addHidden(setup);

// Toggle setup window
(function () {
  setupOpen.addEventListener('click', function () {
    setupOpenEvent();
  });
  setupClose.addEventListener('click', function () {
    setupCloseEvent();
  });
  setupClose.addEventListener('keydown', function (e) {
    window.util.isEnterEvent(e, setupCloseEvent);
  });
  document.addEventListener('keydown', function (e) {
    if (document.activeElement !== setupUserName) {
      window.util.isEscEvent(e, setupCloseEvent);
    }
  });
})();

// Setup move
(function () {
  setupDialogHandle.addEventListener('mousedown', function (e) {
    e.preventDefault();
    let startCoords = {
      x: e.clientX,
      y: e.clientY
    };
    let dragged = false;

    let onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          setupDialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        setupDialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();

// Submit setup window
(function () {
  setupSubmit.addEventListener('keydown', function (e) {
    window.util.isEnterEvent(e, window.util.isFormNameValid(e, setupUserName, setupForm));
  });
  setupSubmit.addEventListener('click', function (e) {
    window.util.isFormNameValid(e, setupUserName, setupForm);
  });
  window.formSuccessHandler = function () {
    setupCloseEvent();
  };
})();

// Change Wizard
(function () {
  window.wizard.isColorChange(setupWizardCoat, window.wizard.coatColor);
  window.wizard.isColorChange(setupWizardEyes, window.wizard.eyesColor);
  window.wizard.isColorChange(setupWizardFireball, window.wizard.fireballColor, setupWizardFireballInput);
})();
