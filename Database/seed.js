const db = require('./db.js');
const Photo = require('./Photo.js');

<<<<<<< Updated upstream
const saveOnePhoto = (url, date, user) => {
  Photo.create({
    imgUrl: url,
    uploadDate: date,
    user: user
  }, (err, newPhoto) => {
    if (err) {
      console.log(`-----------> ERROR! There was an error in adding to the photo database!! ${err}!! <-------------`);
    } else {
      return (`Success! The photo document [${newPhoto}] was successfully added to the database!`);
=======
const saveOnePhoto = (image) => {
  return new Promise((resolve, reject) => {
    Photo.create(image, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


const seed = () => {
  Photo.deleteMany({});

  let pictures = [];

  for (let i = 0; i < 100; i++) {
    let hotelName = 'hotel' + i;
    let randNum = Math.floor(Math.random() * 58 + 25);
    let bool = (Math.random() > 0.5) ? true : false;
    let specialObj = {};
    let gamble = Math.random();
    let arrayOfRandom = Math.floor(Math.random() * randNum + 1);

    for (let x = 1; x <= randNum; x++) {
      let tags = ['dogs', 'beach', 'sunshine', 'Wonderful', 'Good Food', 'happy', 'sandwich', 'beach life', 'Perfection', 'Okay', 'Passable', 'Overpriced', 'Meh', 'Too Sunny', 'Glaringly Beautiful'];
      let imageNum = arrayOfRandom[x];
      let tagsNum = Math.floor(Math.random() * tags.length);
      let image = {};
      image.imgMainUrl = `https://tripadcoba.s3-us-west-1.amazonaws.com/main${imageNum}.jpg`;
      image.imgFullUrl = `https://tripadcoba.s3-us-west-1.amazonaws.com/full${imageNum}.jpg`;
      image.imgThumbUrl = `https://tripadcoba.s3-us-west-1.amazonaws.com/thumb${imageNum}.jpg`;
      image.uploadDate = new Date();
      image.user = faker.name.firstName() + faker.name.lastName();
      image.hotel = hotelName;
      image.tag = tags[tagsNum];
      specialObj.is = false;

      //not currently in use
      if (bool) {
        specialObj.specialItem = gamble > .5 ? `https://cdn.wallpapersafari.com/99/98/2IjALn.jpg` : `https://video-direct-tacdn-com.global.ssl.fastly.net/media/video-v/12/d7/52/d4/fiesta-americana-condesa_720.mp4`;
        specialObj.specialItemType = gamble > .5 ? 'panorama' : 'video';
        specialObj.thumbnail = gamble > .5 ? 'https://tripadcoba.s3-us-west-1.amazonaws.com/pano1.jpg' : 'https://tripadcoba.s3-us-west-1.amazonaws.com/video1.jpg';
      }
      image.special = specialObj


      pictures.push(saveOnePhoto(image));
>>>>>>> Stashed changes
    }
  })

};

module.exports = saveOnePhoto;