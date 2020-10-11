'use strict';
(function () {
  const wizardName = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const wizardSecondName = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  let wizardArr = [];

  for (let i = 0; i <= 4; i++) {
    wizardArr[i] = {
      name: wizardName[window.util.randomInteger(0, wizardName.length - 1)] + ` ` + wizardSecondName[window.util.randomInteger(0, wizardSecondName.length - 1)],
      coatColor: window.wizard.coatColor[window.util.randomInteger(0, window.wizard.coatColor.length - 1)],
      eyesColor: window.wizard.eyesColor[window.util.randomInteger(0, window.wizard.eyesColor.length - 1)],
    };
  }

  let similarListElement = document.querySelector(`.setup-similar-list`);
  let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  let faragment = document.createDocumentFragment();

  let renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

    return wizardElement;
  };

  for (let j = 0; j < wizardArr.length - 1; j++) {
    faragment.appendChild(renderWizard(wizardArr[j]));
  }
  similarListElement.appendChild(faragment);
  let setupSimilar = document.querySelector(`.setup-similar`);
  setupSimilar.classList.remove(`hidden`);

})();
