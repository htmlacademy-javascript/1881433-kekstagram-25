import {isEscapeKey, photos} from './util.js';
import {INITIAL_COMMENT_1, INITIAL_COMMENT_2, INITIAL_COMMENT_3, INITIAL_COMMENT_4, INITIAL_COMMENT_5} from './data.js';

const socialContainer = document.querySelector('.social__container');
const miniPhotosList = document.querySelectorAll('.view');
const bigPictureSection = document.querySelector('.big-picture');
const body = document.querySelector('body');

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
      newImg.src = comment.avatar;
      newImg.alt = comment.name;
      newP.textContent = comment.message;
      newUl.appendChild(newLi);
    }
    fullSocialCommentsFragment.appendChild(newUl);
  }
  socialContainer.appendChild(fullSocialCommentsFragment);
};

const pressMiniPhoto = () => {
  addSocialContainer();
  for (let i = 0; i < miniPhotosList.length; i++) {
    const miniPhoto = miniPhotosList[i];
    miniPhoto.addEventListener('click', (evt) => {
      evt.preventDefault();
      const socialInitialComments = document.querySelector('.initial-comments');
      const allNewUls = document.querySelectorAll('.social__comments');
      const allNewLis = document.querySelectorAll('.social__comment');
      allNewLis.forEach((element) => {
        element.classList.add('hidden');
      });
      for (let n = 0; n < allNewUls.length; n++) {
        const allNewUl = allNewUls[n];
        if(i === n && allNewUl.children.length === 1) {
          allNewUl.children[0].classList.remove('hidden');
          socialInitialComments.textContent = `${INITIAL_COMMENT_1} из`;
          break;
        } else if (i === n && allNewUl.children.length === 2) {
          allNewUl.children[0].classList.remove('hidden');
          allNewUl.children[1].classList.remove('hidden');
          socialInitialComments.textContent = `${INITIAL_COMMENT_2} из`;
          break;
        } else if (i === n && allNewUl.children.length === 3) {
          allNewUl.children[0].classList.remove('hidden');
          allNewUl.children[1].classList.remove('hidden');
          allNewUl.children[2].classList.remove('hidden');
          socialInitialComments.textContent = `${INITIAL_COMMENT_3} из`;
          break;
        } else if (i === n && allNewUl.children.length === 4) {
          allNewUl.children[0].classList.remove('hidden');
          allNewUl.children[1].classList.remove('hidden');
          allNewUl.children[2].classList.remove('hidden');
          allNewUl.children[3].classList.remove('hidden');
          socialInitialComments.textContent = `${INITIAL_COMMENT_4} из`;
          break;
        } else if (i === n && allNewUl.children.length >= 5) {
          allNewUl.children[0].classList.remove('hidden');
          allNewUl.children[0].classList.add('opened');
          allNewUl.children[1].classList.remove('hidden');
          allNewUl.children[1].classList.add('opened');
          allNewUl.children[2].classList.remove('hidden');
          allNewUl.children[2].classList.add('opened');
          allNewUl.children[3].classList.remove('hidden');
          allNewUl.children[3].classList.add('opened');
          allNewUl.children[4].classList.remove('hidden');
          allNewUl.children[4].classList.add('opened');
          for(let m = 5; m < allNewUl.children.length; m++) {
            const child = allNewUl.children[m];
            child.classList.add('marked');
          }
          socialInitialComments.textContent = `${INITIAL_COMMENT_5} из`;
          break;
        }
      }
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

const pressCommentLoader = () => {
  const commentsLoader = document.querySelector('.comments-loader');
  commentsLoader.addEventListener('click', (evt) => {
    evt.preventDefault();
    const addedComment = document.querySelector('.initial-comments');
    const markedLoaderSearch = document.querySelectorAll('.marked');
    const commentLoaderSearch = document.querySelectorAll('.opened');
    if (commentLoaderSearch.length > 0) {
      for (let k = 0; k < markedLoaderSearch.length; k++) {
        if (markedLoaderSearch.length === 1) {
          markedLoaderSearch[0].classList.remove('hidden');
          markedLoaderSearch[0].classList.remove('marked');
          markedLoaderSearch[0].classList.add('opened');
          addedComment.textContent = `${INITIAL_COMMENT_5 + 1} из`;
        } else if (markedLoaderSearch.length === 2) {
          markedLoaderSearch[0].classList.remove('hidden');
          markedLoaderSearch[0].classList.remove('marked');
          markedLoaderSearch[0].classList.add('opened');
          markedLoaderSearch[1].classList.remove('hidden');
          markedLoaderSearch[1].classList.remove('marked');
          markedLoaderSearch[1].classList.add('opened');
          addedComment.textContent = `${INITIAL_COMMENT_5 + 2} из`;
        } else if (markedLoaderSearch.length === 3) {
          markedLoaderSearch[0].classList.remove('hidden');
          markedLoaderSearch[0].classList.remove('marked');
          markedLoaderSearch[0].classList.add('opened');
          markedLoaderSearch[1].classList.remove('hidden');
          markedLoaderSearch[1].classList.remove('marked');
          markedLoaderSearch[1].classList.add('opened');
          markedLoaderSearch[2].classList.remove('hidden');
          markedLoaderSearch[2].classList.remove('marked');
          markedLoaderSearch[2].classList.add('opened');
          addedComment.textContent = `${INITIAL_COMMENT_5 + 3} из`;
        } else if (markedLoaderSearch.length === 4) {
          markedLoaderSearch[0].classList.remove('hidden');
          markedLoaderSearch[0].classList.remove('marked');
          markedLoaderSearch[0].classList.add('opened');
          markedLoaderSearch[1].classList.remove('hidden');
          markedLoaderSearch[1].classList.remove('marked');
          markedLoaderSearch[1].classList.add('opened');
          markedLoaderSearch[2].classList.remove('hidden');
          markedLoaderSearch[2].classList.remove('marked');
          markedLoaderSearch[2].classList.add('opened');
          markedLoaderSearch[3].classList.remove('hidden');
          markedLoaderSearch[3].classList.remove('marked');
          markedLoaderSearch[3].classList.add('opened');
          addedComment.textContent = `${INITIAL_COMMENT_5 + 4} из`;
        } else if (markedLoaderSearch.length >= 5 && markedLoaderSearch.length % 5 === 0) {
          markedLoaderSearch[0].classList.remove('hidden');
          markedLoaderSearch[0].classList.remove('marked');
          markedLoaderSearch[0].classList.add('opened');
          markedLoaderSearch[1].classList.remove('hidden');
          markedLoaderSearch[1].classList.remove('marked');
          markedLoaderSearch[1].classList.add('opened');
          markedLoaderSearch[2].classList.remove('hidden');
          markedLoaderSearch[2].classList.remove('marked');
          markedLoaderSearch[2].classList.add('opened');
          markedLoaderSearch[3].classList.remove('hidden');
          markedLoaderSearch[3].classList.remove('marked');
          markedLoaderSearch[3].classList.add('opened');
          markedLoaderSearch[4].classList.remove('hidden');
          markedLoaderSearch[4].classList.remove('marked');
          markedLoaderSearch[4].classList.add('opened');
          addedComment.textContent = `${commentLoaderSearch.length + 5} из`;
          break;
        } else if (markedLoaderSearch.length >= 5 && markedLoaderSearch.length % 5 === 1) {
          markedLoaderSearch[0].classList.remove('hidden');
          markedLoaderSearch[0].classList.remove('marked');
          markedLoaderSearch[0].classList.add('opened');
          addedComment.textContent = `${commentLoaderSearch.length + 1} из`;
          break;
        } else if (markedLoaderSearch.length >= 5 && markedLoaderSearch.length % 5 === 2) {
          markedLoaderSearch[0].classList.remove('hidden');
          markedLoaderSearch[0].classList.remove('marked');
          markedLoaderSearch[0].classList.add('opened');
          markedLoaderSearch[1].classList.remove('hidden');
          markedLoaderSearch[1].classList.remove('marked');
          markedLoaderSearch[1].classList.add('opened');
          addedComment.textContent = `${commentLoaderSearch.length + 2} из`;
          break;
        } else if (markedLoaderSearch.length >= 5 && markedLoaderSearch.length % 5 === 3) {
          markedLoaderSearch[0].classList.remove('hidden');
          markedLoaderSearch[0].classList.remove('marked');
          markedLoaderSearch[0].classList.add('opened');
          markedLoaderSearch[1].classList.remove('hidden');
          markedLoaderSearch[1].classList.remove('marked');
          markedLoaderSearch[1].classList.add('opened');
          markedLoaderSearch[2].classList.remove('hidden');
          markedLoaderSearch[2].classList.remove('marked');
          markedLoaderSearch[2].classList.add('opened');
          addedComment.textContent = `${commentLoaderSearch.length + 3} из`;
          break;
        } else if (markedLoaderSearch.length >= 5 && markedLoaderSearch.length % 5 === 4) {
          markedLoaderSearch[0].classList.remove('hidden');
          markedLoaderSearch[0].classList.remove('marked');
          markedLoaderSearch[0].classList.add('opened');
          markedLoaderSearch[1].classList.remove('hidden');
          markedLoaderSearch[1].classList.remove('marked');
          markedLoaderSearch[1].classList.add('opened');
          markedLoaderSearch[2].classList.remove('hidden');
          markedLoaderSearch[2].classList.remove('marked');
          markedLoaderSearch[2].classList.add('opened');
          markedLoaderSearch[3].classList.remove('hidden');
          markedLoaderSearch[3].classList.remove('marked');
          markedLoaderSearch[3].classList.add('opened');
          addedComment.textContent = `${commentLoaderSearch.length + 4} из`;
          break;
        }
      }
    }
  });
};
pressCommentLoader();

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    const escapeMarkedSearch = document.querySelectorAll('.marked');
    const escapeClassSearch = document.querySelectorAll('.opened');
    if (escapeClassSearch.length > 0) {
      escapeMarkedSearch.forEach((element) => {
        element.classList.remove('marked');
      });
      escapeClassSearch.forEach((element) => {
        element.classList.remove('opened');
      });
      bigPictureSection.classList.add('hidden');
      body.classList.remove('modal-open');
    } else {
      bigPictureSection.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  }
});

const resetButton = document.querySelector('#picture-cancel');

resetButton.addEventListener('click', () => {
  const markedResetSearch = document.querySelectorAll('.marked');
  const resetClassSearch = document.querySelectorAll('.opened');
  if (resetClassSearch.length > 0) {
    markedResetSearch.forEach((element) => {
      element.classList.remove('marked');
    });
    resetClassSearch.forEach((element) => {
      element.classList.remove('opened');
    });
    bigPictureSection.classList.add('hidden');
    body.classList.remove('modal-open');
  } else {
    bigPictureSection.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});
