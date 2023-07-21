const express = require('express');
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const userController = require('./Controller/userController')

app.use(cors());

app.use('/user', userController);

app.get('/',(req,res) => {
    res.status(200).send('home page');
})

app.listen(port, ()=>{
    console.log(`starting the server on port ${port}`);
})