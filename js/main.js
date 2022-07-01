const getRandomNumber = function (numberMin, numberMax) {
  if (numberMin < 0) {
    return 0;
  }
  if (numberMin >= numberMax) {
    return numberMax;
  }
  //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  numberMin = Math.ceil(numberMin);
  numberMax = Math.floor(numberMax);
  console.log('Зашли в функцию');
  return Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;
};

const checkMaxLength = function (stringCheck, maxSize) {
  return stringCheck.length <= maxSize;
};

getRandomNumber(1, 5);
checkMaxLength('123456', 7);
