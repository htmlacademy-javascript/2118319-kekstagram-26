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

const minValueCountComments = 1;
const maxValueCountComments = 5;
const minValueAvatar = 1;
const maxValueAvatar = 6;
const minValueForMessage = 0;
const maxValueForMessage = 5;
const minValueForName = 0;
const maxValueForName = 5;
const minValueLikes = 15;
const maxValueLikes = 200;

function genComments() {
  const comments = [];
  const j = getRandomPositiveInteger(minValueCountComments, maxValueCountComments);
  for(let i = 1; i < j; i++){
    const obj = {};
    obj.id = i;
    obj.avatar = `img/avatar-${  getRandomPositiveInteger(minValueAvatar, maxValueAvatar)  }.svg`;
    obj.message = fotoMessage[getRandomPositiveInteger(minValueForMessage, maxValueForMessage)];
    obj.name = userNames[getRandomPositiveInteger(minValueForName, maxValueForName)];
    comments.push(obj);
  }
  return comments;
}

function genFotoInfo() {
  const arr = [];
  for(let i = 1; i < 26; i++){
    const obj = {};
    obj.id = i;
    obj.url = `photos/${  i  }.jpg`;
    obj.description = `Тестовое фото №${  i}`;
    obj.likes = getRandomPositiveInteger(minValueLikes, maxValueLikes);
    obj.comments = genComments();

    arr.push(obj);
  }
  return arr;
}

genFotoInfo();
