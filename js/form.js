import {isEscapeKey} from './util.js';

const initialStateElement = document.querySelector('#upload-file');
const improveMenu = document.querySelector('.img-upload__overlay');
const cancelMenuButton = document.querySelector('#upload-cancel');
const body = document.querySelector('body');

const orderForm = document.querySelector('.img-upload__form');
const textArea = document.querySelector('.text__description');


initialStateElement.addEventListener('click', () => {
  improveMenu.classList.remove('hidden');
  body.classList.add('modal-open');
});


document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    improveMenu.classList.add('hidden');
  }
});

cancelMenuButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  improveMenu.classList.add('hidden');
  body.classList.remove('modal-open');
});


const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'p',
  errorTextClass: 'form__error'
});

function validateHashtags (value) {
  return value.length !== 124;
}

pristine.addValidator(
  orderForm.querySelector('.text__hashtags'),
  validateHashtags,
  'не более 124 символов'
);

function validateTextArea (value) {
  return value.length !== 140;
}

pristine.addValidator(
  orderForm.querySelector('.text__description'),
  validateTextArea,
  'не более 140 символов'
);

textArea.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
