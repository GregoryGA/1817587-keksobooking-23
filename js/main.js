// Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
//[https://developer.mozilla.org/ru/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Math/random]
// eslint-disable-next-line no-unused-vars
function getRandomIntInclusive(min, max, number) {
  if (min > max) {
    // eslint-disable-next-line id-length
    const i = max;
    max = min;
    min = i;
  }
  if (min + max >= 0) {return +(Math.random() * (max - min + 1) + min).toFixed(number);}
  return 0;
}
