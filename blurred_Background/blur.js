const joinE1 = document.querySelector('.join');
const mainE1 = document.querySelector('.mainContainer');
const bodyE1 = document.querySelector('body');
const modalE1 = document.querySelector('.modalContainer');
const closeE1 = document.querySelector('.fa-solid');

joinE1.addEventListener('click', () => {
  modalE1.classList.remove('active');
  bodyE1.style.backdropFilter = 'blur(5px)';
  mainE1.classList.add('active');

});

closeE1.addEventListener('click', () => {
  mainE1.classList.remove('active');
  bodyE1.style.backdropFilter = 'blur(0px)';
  modalE1.classList.add('active');

});