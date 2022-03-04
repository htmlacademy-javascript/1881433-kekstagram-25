const getRandomNumber = (a, b) => {
  const minimum = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const maximum = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return result;
};

const MIN_ID = 1;
const MAX_ID = 25;
const getRandomId = () => getRandomNumber(MIN_ID, MAX_ID);

const MIN_URL_ID = 1;
const MAX_URL_ID = 25;
const getRandomUrl = () => `photos/${getRandomNumber(MIN_URL_ID, MAX_URL_ID)}.jpg`;


const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;
const getRandomAvatarUrl = () => `img/avatar-${getRandomNumber(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`;

const DESCRIPTIONS = [
  'Ого!',
  'Красота!',
  'Всегда бы так)',
  'Вот это даа)',
  'Хочу увидеть это снова!)',
  'Сколько это стоит?',
  'А вы что об этом думаете?',
  'Чудесный вид)',
  'Хочу это!',
  'Офигенно)',
  'Нее,я пасс)',
  'И где такое найти?...',
  'Держите меня семеро!',
  'Ух тыы!',
  'Здорово,ничего сказать',
  'Вот это поворот)',
  'Шикарно',
  'хм...где-то я это уже видел',
  'Забыть хочется)',
  'XD',
  'Без слёз не взглянешь)',
  'Вот это отдых)',
  'Разрази меня гром!)',
  'Всё,я понял)',
  'Лайк)',
];

const getRandomDescription = () => {
  const descriptor =  getRandomNumber(0, DESCRIPTIONS.length - 1);
  return DESCRIPTIONS[descriptor];
};

const MIN_LIKES = 15;
const MAX_LIKES = 250;
const getRandomLikes = () => getRandomNumber(MIN_LIKES, MAX_LIKES);

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomMessage = () => {
  const messenger =  getRandomNumber(0, MESSAGES.length - 1);
  return MESSAGES[messenger];
};

const NAMES = [
  'Михаил',    'Настя',     'Татьяна',
  'Степанида', 'Андрей',    'Роман',
  'Мария',     'Александр', 'Рита',
  'Зоя',       'Евгения',   'Степан',
  'Лидия',     'Яна',       'Казбек',
  'Раиса',     'Оксана',    'Володя',
  'Сергей',    'Дмитрий',   'Руслан',
  'Геннадий',  'Виктор',    'Павел',
  'Фёдор'
];

const getRandomName = () => {
  const pointer =  getRandomNumber(0, NAMES.length - 1);
  return NAMES[pointer];
};

const COUNT_OF_FULL_COMMENTS = 25;

const createFullComment = () => ({
  id: getRandomId(),
  url: getRandomUrl(),
  description: getRandomDescription(),
  likes: getRandomLikes(),
  comments: {
    id: getRandomId(),
    avatar: getRandomAvatarUrl(),
    message: getRandomMessage(),
    name: getRandomName()
  },
});

/* eslint-disable no-unused-vars */
const createArrayComments = Array.from({length: COUNT_OF_FULL_COMMENTS}, createFullComment);
/* eslint-disable no-unused-vars */

//console.log(createArrayComments);
