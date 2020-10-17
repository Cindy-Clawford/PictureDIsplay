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


function mongoPost(newEntry) {
  return new Promise(function(resolve, reject) {
  Hotel.create(newEntry)
    .exec((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    })
  })
}

function mongoPut(filter, update) {
  return new Promise(function(resolve, reject) {
  Hotel.updateOne(filter, update)
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
module.exports.mongoPut = mongoPut;
module.exports.mongoDelete = mongoDelete;