const express = require('express');
const Hotel = require('./../Database/Photo.js')
const app = express();
const port = 4000;
const mongoCRUD = require('./mongodbQuery.js')

app.use(express.static(__dirname + '/../public/'));
app.use('/:hotelId',express.static(__dirname + '/../public/'));
app.use(express.json());


app.get('/api/pictures/:hotel', (req, res) => {
  let data = {name : req.params.hotel};
  let genericGet = mongoCRUD.mongoGet(data);
  genericGet.then((result) => {
    res.send(result)
  })
})

app.post('/api/createItem', (req, res) => {
  let data = req.body;
  let genericPost = mongoCRUD.mongoPost(data);
  genericPost.then((result) => {
    res.send(result)
  })
})

app.patch('api/updateItem/:hotel', (req, res) => {
  let data = req.body;
  let filter = {name: req.params.hotel};
  let genericUpdate = mongoCRUD.mongoUpdate(filter, data);
  genericUpdate.then((result) => {
    res.send(result)
  })
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