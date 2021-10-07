const express = require('express'),

    app = express()
const Router = require('./router');
const cors = require('cors');
app.use(cors());

require('dotenv').config()

const morgan = require('morgan');
var seo = require('express-seo')(app);
seo.setConfig({
    langs: ["en", "fr"]
});


app.use(morgan('dev'));
app.use(express.json());


const db = require('./services/sequelize');
require('./models/admin');
require('./models/bookin');
require('./models/blog');
require('./models/page');
require('./models/car-images');
require('./models/carCategory');
//require('./models/specification');

const __send = require('./utils/__send');
const sftp = require('ssh2-sftp-client');
const { HTTP_VERSION_NOT_SUPPORTED } = require('http-status-codes');

app.use(__send);

const path = require('path');

app.use('/public', express.static(path.join(__dirname, '/public')));



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