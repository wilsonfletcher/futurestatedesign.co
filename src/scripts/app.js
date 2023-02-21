import dialogPolyfill from 'dialog-polyfill'

// import './dark-mode';

const dialogMenu = document.querySelector('#dialog-menu');
const openDialogMenu = document.querySelector('.open-dialog-menu');
openDialogMenu.addEventListener('click', () => {
  dialogMenu.showModal();
});

const dialogContact = document.querySelector('#dialog-contact');
const openDialogContact = document.querySelector('.open-dialog-contact');
openDialogContact.addEventListener('click', () => {
  dialogContact.showModal();
});

