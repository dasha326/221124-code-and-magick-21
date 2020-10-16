'use strict';

(function () {
  window.backend = {
    load: function (onLoad, onError) {
      const url = 'https://21.javascript.pages.academy/code-and-magick/data';
      let xhr = new XMLHttpRequest();
      const TIMEOUT_IN_MS = 1000;
      xhr.responseType = 'json';
      xhr.open('GET', url);
      xhr.send();
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Что-то пошло не так! Сервер глаголет: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Ой! Неполадки с соединением.');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = TIMEOUT_IN_MS;
    },
    save: function (data, onLoad, onError) {
      let url = ' https://21.javascript.pages.academy/code-and-magick';
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Что-то пошло не так! Сервер глаголет: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.open('POST', url);
      xhr.send(data);
    },
    errorMessage: function (error) {
      let errorElement = document.createElement('div');
      errorElement.style.cssText = `
      position: fixed;
      background-color: #B22222 ;
      color: #FFA07A;
      text-align: center;
      z-index: 9;
      width: 100%;
      padding: 10px;`;
      errorElement.textContent = error;
      document.body.prepend(errorElement);
      setTimeout(function () {
        errorElement.remove();
      }, 10000);
    }
  };
})();

