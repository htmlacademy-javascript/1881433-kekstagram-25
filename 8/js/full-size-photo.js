import {isEscapeKey, getRandomAvatarUrl, getRandomName, getRandomMessage, getRandomDescription} from './util.js';

const bigPictureSection = document.querySelector('.big-picture');
const body = document.querySelector('body');
const miniPhotosList = document.querySelectorAll('.view');

for (let i = 0; i < miniPhotosList.length; i++) {
  const miniPhoto = miniPhotosList[i];
  miniPhoto.addEventListener('click', (evt) => {
    evt.preventDefault();
    const miniPictureSrc = miniPhoto.querySelector('.picture__img').src;
    document.getElementById('full-photo').src = miniPictureSrc;
    const miniatureLikes = miniPhoto.querySelector('.picture__likes').textContent;
    document.querySelector('.likes-count').textContent = miniatureLikes;
    const miniatureComments = miniPhoto.querySelector('.picture__comments').textContent;
    document.querySelector('.comments-count').textContent = miniatureComments;
    document.querySelector('.social__picture').src = getRandomAvatarUrl();
    document.querySelector('.social__picture_2').src = getRandomAvatarUrl();
    document.querySelector('.social__picture').alt = getRandomName();
    document.querySelector('.social__picture_2').alt = getRandomName();
    document.querySelector('.social__text').textContent = getRandomMessage();
    document.querySelector('.social__text_2').textContent = getRandomMessage();
    document.querySelector('.social__caption').textContent = getRandomDescription();
    const socialCommentCount = document.querySelector('.social__comment-count');
    const commentsLoader = document.querySelector('.comments-loader');
    bigPictureSection.classList.remove('hidden');
    body.classList.add('modal-open');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  });
}

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureSection.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

const resetButton = document.querySelector('#picture-cancel');

resetButton.addEventListener('click', () => {
  bigPictureSection.classList.add('hidden');
  body.classList.remove('modal-open');
});
