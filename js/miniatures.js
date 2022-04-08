import {photos} from './util.js';

const picturesContainer = document.querySelector('.pictures');
const ulContainer = document.createElement('ul');
ulContainer.classList.add('views');
const template = document.querySelector('#picture').content;
const templateContent = template.querySelector('.picture');
const fragment = document.createDocumentFragment();

/* eslint-disable no-unused-vars */
const addFeatures = () => {
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const clonedTemplateContent = templateContent.cloneNode(true);
    const liContainer = document.createElement('li');
    liContainer.classList.add('view');
    ulContainer.appendChild(liContainer);
    liContainer.appendChild(clonedTemplateContent);
    clonedTemplateContent.querySelector('.picture__img').src = photo.url;
    clonedTemplateContent.querySelector('.picture__likes').innerHTML = photo.likes;
    const countComments = clonedTemplateContent.querySelector('.picture__comments').innerHTML = photo.comments.length;
  }
  fragment.appendChild(ulContainer);
  picturesContainer.appendChild(fragment);
  return picturesContainer;
};
/* eslint-disable no-unused-vars */

//console.log(addFeatures(), photos);

