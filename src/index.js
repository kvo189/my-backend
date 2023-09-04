const express = require('express');
const app = express();
const cors = require('cors');
const port = 4200;
require('dotenv').config()

var corsOptions = {
  origin: `${process.env.corsOrigin}`,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};
app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.listen(port, () => {
  console.log(process.env.corsOrigin)
  console.log(`Example app listening on port ${port}`)
})
