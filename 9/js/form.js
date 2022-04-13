import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const initialStateElement = document.querySelector('#upload-file');
const improveMenu = document.querySelector('.img-upload__overlay');
const cancelMenuButton = document.querySelector('#upload-cancel');

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

const TEXT_AREA_MAX_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;

const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'p',
  errorTextClass: 'form__error'
});

const hashtagRegexp = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/gm;

function validateHashtag(tag) {
  hashtagRegexp.lastIndex = 0;
  return hashtagRegexp.test(tag);
}

function findDuplicates(array) {
  const elements = array.map((it) => it.toLowerCase()); // Приводим все к одному регистру
  return elements.filter((item, index) => elements.indexOf(item) !== index); // Отфильтровываем недублирующиеся элементы
}

function validateHashtags(value) {
  const tags = value.trim().split(' ');

  // Проверка максимальной длины
  if (tags.length > MAX_HASHTAGS_COUNT) {
    return false;
  }

  // Проверка на повторение
  if (findDuplicates(tags).length) {
    return false;
  }


  return tags.every(validateHashtag);
}

const hastagsField = orderForm.querySelector('.text__hashtags');
pristine.addValidator(
  hastagsField,
  validateHashtags,
  'Некорректное значение хэш-тегов'
);

function validateTextArea (value) {
  return value.length !== TEXT_AREA_MAX_LENGTH;
}

pristine.addValidator(
  orderForm.querySelector('.text__description'),
  validateTextArea,
  'Не более 140 символов'
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
