const express = require('express');
const Hotel = require('./../Database/Photo.js')
const app = express();
const port = 4000;
const mongoCRUD = require('./mongodbQuery.js')

app.use(express.static(__dirname + '/../public/'));
app.use('/:hotelId',express.static(__dirname + '/../public/'));
app.use(express.json());

// app.get('/api/pictures/:hotel', (req, res) => {
//   let data = req.params.hotel;
//   console.log(data);
//   Hotel.find({ name: data})
//   .then((results) => {
//     res.send(results);
//   })
// })

app.get('/api/pictures/:hotel', (req, res) => {
  let data = {name : req.params.hotel};
  let genericGet = mongoCRUD.mongoGet(data);
  genericGet.then((result) => {
    res.send(result)
  })
})

app.post('/api/createItem', (req, res) => {
  //TODO
})

app.patch('api/updateItem:hotel', (req, res) => {
  //TODO
})

app.delete('api/pictures/:hotel', (req, res) => {
  let data = {name : req.params.hotel};
  let genericDelete = mongoCRUD.mongoDelete(data);
  genericDelete.then((result) => {
    res.send(result)
  })
})



app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
})