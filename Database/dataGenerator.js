const faker = require('faker');
const _ = require('underscore');

//helper function
const getTagsArray = () => {
  let tags = ['dogs', 'beach', 'sunshine', 'Wonderful', 'Good Food', 'happy', 'sandwich', 'beach life', 'Perfection', 'Okay', 'Passable', 'Overpriced', 'Meh', 'Too Sunny', 'Glaringly Beautiful'];
  let tagsNum = Math.floor(Math.random() * (tags.length - 1));
  let tagsNumArray = [];
  for (let i = 0; i < tagsNum; i++) {
    tagsNumArray.push(Math.floor(Math.random() * tags.length));
  }
  tagsForThisHotel = tagsNumArray.map((number) => {
    return tags[number];
  })
  return _.uniq((tagsForThisHotel));
};

//helper function
const getRandomNumberArray = () => {
  let randNum = (25 + Math.random() * (58 - 25));
  let totalNumberOfPictures = Array.from(Array(58).keys());
  let arrayOfRandom = totalNumberOfPictures.map((nothing, index) => {
  let randNum = (Math.floor(Math.random() * 58 + 1));
    return randNum;
  });
  arrayOfRandom = _.uniq((arrayOfRandom));

  return arrayOfRandom;
}

//create nums of datas
const createData = (num) => {
  let hotels = [];

  for (let i = 0; i < num; i++) {
    let pictures = [];
    let userArray = [];
    let hotelObj = {};
    let arrayOfRandom = [];

    while (arrayOfRandom.length < 24) {
      arrayOfRandom = getRandomNumberArray();
    }

    hotelObj.tags = [];
    while (hotelObj.tags.length < 3) {
      hotelObj.tags = getTagsArray();
    }

    let length = arrayOfRandom.length;

    for (let x = 1; x <= length; x++) {
      let imageNum = arrayOfRandom.pop();
      let image = {};
      image.imgMainUrl = faker.image.imageUrl(600,400,null, true)
      image.imgFullUrl = faker.image.imageUrl(1200,800,null, true)
      image.imgThumbUrl = faker.image.imageUrl(60, 50,null, true)

      image.uploadDate = new Date();
      image.user = faker.name.firstName() + faker.name.lastName();
      userArray.push(image.user);
      image.hotel = hotelObj.name;
      image.tag = hotelObj.tags[Math.floor(Math.random() * hotelObj.tags.length - 1)];

      pictures.push(image);
    }

    hotelObj.name = 'hotel' + i;
    hotelObj.users = userArray;
    hotelObj.photoObjects = pictures;
    hotels.push(hotelObj);
  }
  return hotels
}

module.exports = createData;



