const express = require('express');
const Hotel = require('./../Database/Photo.js')
const app = express();
const port = 4000;

const mongoCRUD = require('./mongodbQuery.js');
const postgresCRUD = require('./postgresQuery.js');
const cassandraCRUD = require('./cassandraQuery.js')

app.use(express.static(__dirname + '/../public/'));
app.use('/:hotelId',express.static(__dirname + '/../public/'));
app.use(express.json());

//decide use which DB
const dbCRUD = mongoCRUD


app.get('/api/pictures/:hotel', (req, res) => {
  let data = {name : req.params.hotel};
  let genericGet = dbCRUD.getMethod(data);
  genericGet.then((result) => {
    res.send(result)
  })
})

app.post('/api/createItem', (req, res) => {
  let data = req.body;
  let genericPost = dbCRUD.postMethod(data);
  genericPost.then((result) => {
    res.send(result)
  })
})

app.patch('api/updateItem/:hotel', (req, res) => {
  let data = req.body;
  let filter = {name: req.params.hotel};
  let genericUpdate = dbCRUD.updateMethod(filter, data);
  genericUpdate.then((result) => {
    res.send(result)
  })
})

app.delete('api/pictures/:hotel', (req, res) => {
  let data = {name : req.params.hotel};
  let genericDelete = dbCRUD.deleteMethod(data);
  genericDelete.then((result) => {
    res.send(result)
  })
})



app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
})