import {isEscapeKey, photos} from './util.js';

//const commentsLoader = document.querySelector('.comments-loader');
//const socialCommentCount = document.querySelector('.social__comment-count');
const socialContainer = document.querySelector('.social__container');


const addSocialContainer = () => {
  const fullSocialCommentsFragment = document.createDocumentFragment();
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const newUl = document.createElement('ul');
    newUl.classList.add('social__comments');
    for (let j = 0; j < photo.comments.length; j++) {
      const comment = photo.comments[j];
      const newLi = document.createElement('li');
      newLi.classList.add('social__comment');
      const newImg = document.createElement('img');
      newImg.classList.add('social__picture');
      const newP = document.createElement('p');
      newP.classList.add('social__text');
      newLi.appendChild(newImg);
      newLi.appendChild(newP);
      newUl.appendChild(newLi);
      newImg.src = comment.avatar;
      newImg.alt = comment.name;
      newP.textContent = comment.message;
      //newLi.classList.add('hidden');
      fullSocialCommentsFragment.appendChild(newUl);
    }
  }
  return socialContainer.appendChild(fullSocialCommentsFragment);
};

const bigPictureSection = document.querySelector('.big-picture');
const body = document.querySelector('body');
const miniPhotosList = document.querySelectorAll('.view');

/*const findEachUlContent = () => {
  const allNewUls = document.querySelectorAll('.social__comments');
  const allNewLis = document.querySelectorAll('.social__comment');

  allNewUls.forEach(element => {
    console.log(element.children.length);
  });
  console.log(allNewUls.length, allNewLis.length);
}*/

const pressMiniPhoto = () => {
  addSocialContainer();
  for (let i = 0; i < miniPhotosList.length; i++) {
    const miniPhoto = miniPhotosList[i];
    miniPhoto.addEventListener('click', (evt) => {
      evt.preventDefault();
      //findEachUlContent();
      const miniPictureSrc = miniPhoto.querySelector('.picture__img').src;
      document.getElementById('full-photo').src = miniPictureSrc;
      const miniatureLikes = miniPhoto.querySelector('.picture__likes').textContent;
      document.querySelector('.likes-count').textContent = miniatureLikes;
      const miniatureComments = miniPhoto.querySelector('.picture__comments').textContent;
      document.querySelector('.comments-count').textContent = miniatureComments;
      bigPictureSection.classList.remove('hidden');
      body.classList.add('modal-open');
    });
  }
};
pressMiniPhoto();


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
