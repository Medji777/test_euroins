const express = require('express');
const cors = require('cors');
const router = require('./routers/routers');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;

process.on('unhandledRejection',(reason,p)=>{
    console.log(reason,p)
});

// создаем express app
const app = express();

// подключаем middleware
// подключаем cors
app.use(cors());

// подключаем bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// настраиваем базовый URL обработки router
app.use('/api',router);

// настраиваем not found
app.use((req,res)=>{
    res.send({response: 404})
});

// слушаем порт
app.listen(PORT,()=>{
    console.log(PORT);
});