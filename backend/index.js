const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

require('./src/routes/index.js')(app);



const PORT = process.env.PORT || 80;
app.listen(PORT);