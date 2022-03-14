import {
  MIN_ID,
  MAX_ID,
  MIN_URL_ID,
  MAX_URL_ID,
  MIN_AVATAR_ID,
  MAX_AVATAR_ID,
  DESCRIPTIONS,
  MIN_LIKES,
  MAX_LIKES,
  MESSAGES,
  NAMES
} from './data.js';


const getRandomNumber = (a, b) => {
  const minimum = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const maximum = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return result;
};

export const getRandomId = () => getRandomNumber(MIN_ID, MAX_ID);

export const getRandomUrl = () => `photos/${getRandomNumber(MIN_URL_ID, MAX_URL_ID)}.jpg`;

const getRandomAvatarUrl = () => `img/avatar-${getRandomNumber(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`;

const getRandomDescription = () => {
  const descriptionIndex =  getRandomNumber(0, DESCRIPTIONS.length - 1);
  return DESCRIPTIONS[descriptionIndex];
};

const getRandomName = () => {
  const nameIndex =  getRandomNumber(0, NAMES.length - 1);
  return NAMES[nameIndex];
};

export const getRandomLikes = () => getRandomNumber(MIN_LIKES, MAX_LIKES);

const getRandomMessage = () => {
  const messageIndex =  getRandomNumber(0, MESSAGES.length - 1);
  return MESSAGES[messageIndex];
};

export const createCommentsArray = () => {
  const createcommentsObject = () => {
    const createObject = {id: getRandomId(), avatar: getRandomAvatarUrl(), message: getRandomMessage(), name: getRandomName()};
    return createObject;
  };
  const commentsArray = Array.from({length: getRandomId()}, createcommentsObject);
  return commentsArray;
};

const createPhoto = () => ({
  id: getRandomId(),
  url: getRandomUrl(),
  description: getRandomDescription(),
  likes: getRandomLikes(),
  comments: createCommentsArray()
});

export const photos = Array.from({length: getRandomId()}, createPhoto);
