import { defaults, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
defaults.delay = 2000;
defaults.styling = 'material';
defaults.icons = 'material';
let notice = null;

const footerCallbackForm = document.querySelector('.registration-form');
const orderCallbackForm = document.querySelector('.order-form');
footerCallbackForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(footerCallbackForm);
  sendDateFromCallBackForm(formData);
});
orderCallbackForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(orderCallbackForm);
  sendDateFromCallBackForm(formData);
});

function sendDateFromCallBackForm(formData) {
  const data = {
    user_name: formData.get('name'),
    user_phone: formData.get('phone'),
    user_comment: formData.get('comment'),
  };

  if (data.user_name.length < 3 && data.user_phone.length < 3) {
    return (notice = error({
      text: 'Вы ввели неверное значение.',
      delay: 5555,
    }));
  }

  fetch('http://sampsoft.h1n.ru/hellEn.php', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(data),
  })
    .then(r => r.json())
    .then(r => {
      notice = success({
        text: 'Мы получили ваше сообщение! Ожидайте обратного звонка.',
        delay: 5555,
      });
    })
    .catch(e => {
      notice = success({
        text: 'Мы получили ваше сообщение! Ожидайте обратного звонка.',
        delay: 5555,
      });
    });
}
