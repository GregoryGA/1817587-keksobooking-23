// Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
//[https://developer.mozilla.org/ru/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Math/random]


const randomfract = function (min, max, number) {
  if (min > max) {
    return Error();
  }
  return +(Math.random() * (max - min + 1) + min).toFixed(number);
};
//Получение случайного целого числа в заданном интервале, включительно
const randomint = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
randomfract();
randomint();
