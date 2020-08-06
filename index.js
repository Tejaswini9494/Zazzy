const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('nodemon');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.post('/register' , (req , res) => {
    // console.log(req);

    res.send(console.log(req));
});

const port = 5000;

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));