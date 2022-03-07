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


const functions = {
  getRandomNumber: (a, b) => {
    const minimum = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const maximum = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return result;
  },

  getRandomId: () => getRandomNumber(MIN_ID, MAX_ID),

  getRandomUrl: () => `photos/${getRandomNumber(MIN_URL_ID, MAX_URL_ID)}.jpg`,

  getRandomAvatarUrl: () => `img/avatar-${getRandomNumber(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`,

  getRandomDescription: () => {
    const descriptionIndex =  getRandomNumber(0, DESCRIPTIONS.length - 1);
    return DESCRIPTIONS[descriptionIndex];
  },

  getRandomName: () => {
    const nameIndex =  getRandomNumber(0, NAMES.length - 1);
    return NAMES[nameIndex];
  },

  getRandomLikes: () => getRandomNumber(MIN_LIKES, MAX_LIKES),

  getRandomMessage:() => {
    const messageIndex =  getRandomNumber(0, MESSAGES.length - 1);
    return MESSAGES[messageIndex];
  },

  createCommentsArray: () => {
    const createcommentsObject = () => {
      const createObject = {id: getRandomId(), avatar: getRandomAvatarUrl(), message: getRandomMessage(), name: getRandomName()};
      return createObject;
    };
    const commentsArray = Array.from({length: getRandomId()}, createcommentsObject);
    return commentsArray;
  },

  createFullComment: () => ({
    id: getRandomId(),
    url: getRandomUrl(),
    description: getRandomDescription(),
    likes: getRandomLikes(),
    comments: createCommentsArray()
  })
};

const getRandomNumber = functions.getRandomNumber;
const getRandomId = functions.getRandomId;
const getRandomUrl = functions.getRandomUrl;
const getRandomAvatarUrl = functions.getRandomAvatarUrl;
const getRandomDescription = functions.getRandomDescription;
const getRandomName = functions.getRandomName;
const getRandomLikes = functions.getRandomLikes;
const getRandomMessage = functions.getRandomMessage;
const createCommentsArray = functions.createCommentsArray;
const createFullComment = functions.createFullComment;

export {
  getRandomNumber,
  getRandomId,
  getRandomUrl,
  getRandomAvatarUrl,
  getRandomDescription,
  getRandomName,
  getRandomLikes,
  getRandomMessage,
  createCommentsArray,
  createFullComment
};
