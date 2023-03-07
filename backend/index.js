const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

mongoose.connect(config.mongoURI, { useNewUrlParser: true});
require('./src/models/Answers');

app.use(bodyParser.json());

require('./src/routes/index.js')(app);



const PORT = process.env.PORT || 80;
app.listen(PORT);