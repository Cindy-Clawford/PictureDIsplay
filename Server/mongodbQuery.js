const Hotel = require('../Database/Photo');

function mongoGet(data) {
  return new Promise(function(resolve, reject) {
    Hotel.find(data)
      .exec((err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      })
    });
}


function mongoPost(data) {
  return new Promise(function(resolve, reject) {
  Hotel.create(data)
    .exec((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  })
}

function mongoUpdate(filter, data) {
  return new Promise(function(resolve, reject) {
  Hotel.updateOne(filter, data)
    .exec((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  })
}

function mongoDelete(data) {
  return new Promise(function(resolve, reject) {
  Hotel.deleteOne(data)
    .exec((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  })
}

module.exports.mongoGet = mongoGet;
module.exports.mongoPost = mongoPost;
module.exports.mongoUpdate = mongoUpdate;
module.exports.mongoDelete = mongoDelete;