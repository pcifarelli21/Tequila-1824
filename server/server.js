const express = require("express");
const app = express();

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use(express.static('client'))

// const mongoose = require('mongoose')

// const mongoose = require('mongoose')
// const url = 'mongodb+srv://adim:Lfcduke28!@cluster0.2fqii.mongodb.net/cd_todo_list?retryWrites=true&w=majority'

// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
//   .then(()=> console.log(`Connected to ${url} database.`))
//   .catch(err => console.log(`Issue connecting to ${url} database: `, err))

  app.listen(port, () => {
    console.log(`Listen on port ${port}`);
  });
  