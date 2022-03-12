import {getRandomUrl, getRandomLikes, createCommentsArray, getRandomId} from './util.js';


const picturesContainer = document.querySelector('.pictures');
const ulContainer = document.createElement('ul');
picturesContainer.appendChild(ulContainer);
const template = document.querySelector('#picture').content;
const templateContent = template.querySelector('.picture');

const addFeatures = () => {
  for (let i = 0; i < getRandomId(); i++) {
    const clonedTemplateContent = templateContent.cloneNode(true);
    const liContainer = document.createElement('li');
    ulContainer.appendChild(liContainer);
    liContainer.appendChild(clonedTemplateContent);
    clonedTemplateContent.querySelector('.picture__img').src = getRandomUrl();
    clonedTemplateContent.querySelector('.picture__likes').innerHTML = getRandomLikes();
    clonedTemplateContent.querySelector('.picture__comments').innerHTML = createCommentsArray().length;
  }
  return picturesContainer;
};
addFeatures();
//console.log(addFeatures());
