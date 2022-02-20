function getSashaForkRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < max && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } return alert('Минимальное число в диапазоне не должно быть равно или больше максимального числа в этом диапазоне,а так же быть отрицательным.Пожалуйста,внесите коррективы.');
}
getSashaForkRandom(0, 100);
/* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random */


function getMaxLengthStr (currentStr, maxLength) {
  if (currentStr.length > maxLength) {
    return false;
  } return true;
};
getMaxLengthStr ('sasha', 20);
