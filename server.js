const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(PORT, () => {
  console.log(`We are rocking and rolling on port ${PORT}`)
})
