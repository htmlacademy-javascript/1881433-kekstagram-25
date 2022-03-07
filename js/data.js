/* eslint-disable no-unused-vars */
import {getRandomNumber,
  getRandomId,
  getRandomUrl,
  getRandomAvatarUrl,
  getRandomDescription,
  getRandomName,
  getRandomLikes,
  getRandomMessage,
  createCommentsArray,
  createFullComment
} from './util.js';
/* eslint-disable no-unused-vars */

export const MIN_ID = 1;
export const MAX_ID = 25;

export const MIN_URL_ID = 1;
export const MAX_URL_ID = 25;

export const MIN_AVATAR_ID = 1;
export const MAX_AVATAR_ID = 6;

export const DESCRIPTIONS = [
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

export const MIN_LIKES = 15;
export const MAX_LIKES = 250;

export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

export const NAMES = [
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

export const createArrayComments = Array.from({length: getRandomId()}, createFullComment);
