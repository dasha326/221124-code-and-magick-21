'use strict';

let setup = document.querySelector('.setup');
let setupOpen = document.querySelector('.setup-open');
let setupClose = document.querySelector('.setup-close');
let setupUserName = document.querySelector('.setup-user-name');
let setupSubmit = document.querySelector('.setup-submit');
let setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
let setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
let setupWizardFireball = document.querySelector('.setup-fireball-wrap');
let setupWizardFireballInput = document.querySelector('[name="fireball-color"]');
let setupOpenEvent = () => setup.classList.remove('hidden');
let setupCloseEvent = () => setup.classList.add('hidden');

setupOpen.addEventListener('click', function () {
  setupOpenEvent();
});

setupClose.addEventListener('click', function () {
  setupCloseEvent();
});

document.addEventListener('keydown', function (e) {
  if ((e.key === 'Escape' && document.activeElement !== setupUserName) || (e.key === 'Enter' && document.activeElement === setupClose)) {
    setupCloseEvent();
  } else if (e.key === 'Enter' && document.activeElement !== setupSubmit) {
    if (setupUserName.value.length > 2 && setupUserName.value.length < 25) {
      setup.submit();
    } else {
      e.preventDefault();
    }
  }
});

setupSubmit.addEventListener('click', function (e) {
  if (setupUserName.value.length > 2 && setupUserName.value.length < 25) {
    setup.submit();
  } else {
    e.preventDefault();
  }
});
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let wizarName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let wizardSecondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)','rgb(0, 0, 0)'];
let wizarEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
let wizarFireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#5ce6c0', '#e6e848'];
let wizardArr = [];

for (let i = 0; i <= 4; i++) {
  wizardArr[i] = {
    name: wizarName[randomInteger(0, wizarName.length - 1)] + ' ' + wizardSecondName[randomInteger(0, wizardSecondName.length - 1)],
    coatColor: wizardCoatColor[randomInteger(0, wizardCoatColor.length - 1)],
    eyesColor: wizarEyesColor[randomInteger(0, wizarEyesColor.length - 1)],
  };
}

let similarListElement = document.querySelector('.setup-similar-list');
let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
let faragment = document.createDocumentFragment();

let renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

for (let j = 0; j < wizardArr.length - 1; j++) {
  faragment.appendChild(renderWizard(wizardArr[j]));
}
similarListElement.appendChild(faragment);
let setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

let clickCount = 1;

setupWizardCoat.addEventListener('click', function () {
  if (clickCount === wizardCoatColor.length) {
    clickCount = 1;
  }
  setupWizardCoat.style.fill = wizardCoatColor[clickCount];
  clickCount++;
});

setupWizardEyes.addEventListener('click', function () {
  if (clickCount === wizarEyesColor.length) {
    clickCount = 1;
  }
  setupWizardEyes.style.fill = wizarEyesColor[clickCount];
  clickCount++;
});

setupWizardFireball.addEventListener('click', function () {
  if (clickCount === wizarFireballColor.length) {
    clickCount = 1;
  }
  setupWizardFireball.style.background = wizarFireballColor[clickCount];
  setupWizardFireballInput.value = wizarFireballColor[clickCount];
  clickCount++;
});

