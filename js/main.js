function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const fotoMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const userNames = ['Николай','Денис','Ольга','Карен','Сергей','Юрий'];

function genComments() {
  let minValue = 1;
  let maxValue = 5;
  const comments = [];
  const j = getRandomPositiveInteger(minValue, maxValue);
  for(let i = 1; i < j; i++){
    const obj = {};
    obj.id = i;
    minValue = 1;
    maxValue = 6;
    obj.avatar = `img/avatar-${  getRandomPositiveInteger(minValue, maxValue)  }.svg`;
    minValue = 0;
    maxValue = 5;
    obj.message = fotoMessage[getRandomPositiveInteger(minValue, maxValue)];
    obj.name = userNames[getRandomPositiveInteger(minValue, maxValue)];
    comments.push(obj);
  }
  return comments;
}

function genFotoInfo() {
  const arr = [];
  const minValue = 15;
  const maxValue = 200;
  for(let i = 1; i < 26; i++){
    const obj = {};
    obj.id = i;
    obj.url = `photos/${  i  }.jpg`;
    obj.description = `Тестовое фото №${  i}`;
    obj.likes = getRandomPositiveInteger(minValue, maxValue);
    obj.comments = genComments();

    arr.push(obj);
  }
  return arr;
}

genFotoInfo();
