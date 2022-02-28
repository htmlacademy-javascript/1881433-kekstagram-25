const arrayId = [
  2, 18, 19,  1, 23, 24, 14,  5,
  12,  9,  6, 22, 10,  8, 17, 21,
  7, 25, 20,  3,  4, 16, 11, 15,
  13
];

const arrayUrl = [
  'photo/17.jpg', 'photo/8.jpg',
  'photo/14.jpg', 'photo/5.jpg',
  'photo/24.jpg', 'photo/18.jpg',
  'photo/10.jpg', 'photo/13.jpg',
  'photo/15.jpg', 'photo/19.jpg',
  'photo/21.jpg', 'photo/9.jpg',
  'photo/23.jpg', 'photo/2.jpg',
  'photo/11.jpg', 'photo/16.jpg',
  'photo/20.jpg', 'photo/6.jpg',
  'photo/12.jpg', 'photo/3.jpg',
  'photo/7.jpg',  'photo/4.jpg',
  'photo/22.jpg', 'photo/1.jpg',
  'photo/25.jpg'
];

const descriptions = [
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

const arrayLikes = [
  247, 246,  25, 231, 112, 225, 208,
  176, 193,  60, 234, 164,  65, 214,
  36, 167, 103, 223,  68,  17, 195,
  69, 132, 140, 146
];

const ava = [
  'img/avatar-6.svg', 'img/avatar-3.svg',
  'img/avatar-4.svg', 'img/avatar-1.svg',
  'img/avatar-1.svg', 'img/avatar-6.svg',
  'img/avatar-1.svg', 'img/avatar-6.svg',
  'img/avatar-3.svg', 'img/avatar-4.svg',
  'img/avatar-5.svg', 'img/avatar-4.svg',
  'img/avatar-3.svg', 'img/avatar-3.svg',
  'img/avatar-1.svg', 'img/avatar-6.svg',
  'img/avatar-4.svg', 'img/avatar-3.svg',
  'img/avatar-5.svg', 'img/avatar-6.svg',
  'img/avatar-1.svg', 'img/avatar-4.svg',
  'img/avatar-5.svg', 'img/avatar-5.svg',
  'img/avatar-5.svg'
];

const names = [
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

const fullContainer = [
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Всё отлично!',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'В целом всё неплохо. Но не всё.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Всё отлично!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'В целом всё неплохо. Но не всё.',
  'Всё отлично!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Всё отлично!',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'В целом всё неплохо. Но не всё.',
  'Всё отлично!'
];

const COMMENTS_COUNT = 25;

const getMyRandom = (a, b) => {
  const minimum = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const maximum = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

const getRandomMyArrayElement = (elements) => elements[getMyRandom(0, elements.length - 1)];

const createComment = () => ({
  id: getRandomMyArrayElement(arrayId),
  photo: getRandomMyArrayElement(arrayUrl),
  description: getRandomMyArrayElement(descriptions),
  likes: getRandomMyArrayElement(arrayLikes),
  message: getRandomMyArrayElement(fullContainer),
  avatar: getRandomMyArrayElement(ava),
  Name: getRandomMyArrayElement(names),
});

/* eslint-disable no-unused-vars */
const comments = Array.from({length: COMMENTS_COUNT}, createComment);
/* eslint-disable no-unused-vars */

//console.log(comments);

