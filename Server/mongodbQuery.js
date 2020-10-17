const Hotel = require('../Database/Photo');

function getMethod(data) {
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

function postMethod(data) {
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

function updateMethod(filter, data) {
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

function deleteMethod(data) {
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

module.exports.getMethod = getMethod;
module.exports.postMethod = postMethod;
module.exports.updateMethod = updateMethod;
module.exports.deleteMethod = deleteMethod;