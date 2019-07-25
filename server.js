var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, () => console.log(`Server running, listening on ${PORT}`));

//[{"customerName":"MW","phoneNumber":"555","customerEmail":"email@email","customerID":"11"}]

var tables = [
  {
    customerName: 'winemiller',
    phoneNumber: '520-111-1111',
    customerEmail: 'winemiller@gmail.com',
    customerID: '1'
  },
  {
    customerName: 'wright',
    phoneNumber: '520-299-1111',
    customerEmail: 'wright@gmail.com',
    customerID: '2'
  },
  {
    customerName: 'latrese',
    phoneNumber: '11111',
    customerEmail: 'this@this',
    customerID: '3'
  },
  {
    customerName: 'marco',
    phoneNumber: '2222',
    customerEmail: 'this@that',
    customerID: '4'
  },
  {
    customerName: 'bob',
    phoneNumber: '555',
    customerEmail: 'wot@what',
    customerID: '5'
  }
];

var waitlist = [];

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', function(req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function(req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/api/tables', function(req, res) {
  return res.json(tables);
});

app.get('/api/waitlist', function(req, res) {
  return res.json(waitlist);
});

app.post('/api/tables', function(req, res) {
  var newRes = req.body;

  console.log(newRes);

  if (tables.length >= 5) {
    waitlist.push(newRes);
  } else {
    tables.push(newRes);
  }

  res.json(newRes);
});
