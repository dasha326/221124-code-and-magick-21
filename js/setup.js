'use strict';

let setup = document.querySelector('.setup');
setup.classList.remove('hidden');

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let wizarName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let wizardSecondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let wizardCoaColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)','rgb(0, 0, 0)'];
let wizarEyesColor= ['black', 'red', 'blue', 'yellow','green'];
let wizardArr = [];

for (let i = 0; i <= 4; i++) {
  wizardArr[i] = {
    name: wizarName[randomInteger(0, wizarName.length - 1)] + ' ' + wizardSecondName[randomInteger(0, wizardSecondName.length - 1)],
    coatColor: wizardCoaColor[randomInteger(0, wizardCoaColor.length - 1)],
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
