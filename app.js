'use strict';
//useful funcs/vars we will use
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  //   console.log('btn clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//show modal at button click
btnsOpenModal.forEach((btnOpenModal) => {
  //   console.log(btnOpenModal.innerHTML);
  btnOpenModal.addEventListener('click', openModal);
});

//close model at events
btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

//close modal at esc keypress
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log('esc entered');
    closeModel();
  }
});
