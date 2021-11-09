const express = require('express'),
app = express()
const cors = require('cors');
app.use(cors());
const Router = require('./router');
require('dotenv').config()
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.json());
const db = require('./services/sequelize');
const __send = require('./utils/__send');
const { HTTP_VERSION_NOT_SUPPORTED } = require('http-status-codes');
app.use(__send);


var http = require('http');

db.sequelize
    .authenticate()
    .then((_) => {
        console.log('Database Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:\n', error);
    });



app.get('/', (req, res) => {
    res.send('hello')
}
)


app.use('/', Router);



const PORT = process.env.PORT || 3000

app.listen(process.env.PORT, () => {
    console.log(`Listening on Port ${process.env.PORT}`);
});