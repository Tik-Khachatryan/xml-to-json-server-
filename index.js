const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const Upload = require('./controllers/Upload');

const port = 3001;


app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/upload', Upload);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));