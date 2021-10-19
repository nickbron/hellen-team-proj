const bodyScrollLock = require('body-scroll-lock');

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  MobileOpenModalBtn: document.querySelector('[data-modal-open-mobile]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.MobileOpenModalBtn.addEventListener('click', e => {
  document.querySelector('.js-open-menu').setAttribute('aria-expanded', 'false');
  document.querySelector('.js-menu-container').classList.toggle('is-open');

  toggleModal();
});
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  const scrollLockMethod = refs.modal.classList.contains('is-hidden')
    ? 'enableBodyScroll'
    : 'disableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
}
document.querySelector('.order-form').addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {
    user_name: formData.get('name'),
    user_phone: formData.get('phone'),
  };
  if (data.user_name.length < 3 && data.user_phone.length < 3) {
    return;
  }

  toggleModal();
});
