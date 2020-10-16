'use strict';
(function () {
  let similarListElement = document.querySelector(`.setup-similar-list`);
  let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  let renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };
  let loadWizardHandler = function (arr) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i <= 4 - 1; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }
    similarListElement.appendChild(fragment);
  };
  window.backend.load(loadWizardHandler, window.backend.errorMessage);
  let setupSimilar = document.querySelector(`.setup-similar`);
  setupSimilar.classList.remove(`hidden`);

})();
