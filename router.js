const express = require('express');
const app = express();
const Car = require('./modules/car/router');
const Bookin = require('./modules/bookin/router');
const Auth = require('./modules/auth/router');
const Admin = require('./modules/admin/router');



app.use('/car', Car);
app.use('/bookin', Bookin);
app.use('/auth', Auth);
app.use('/admin', Admin);



module.exports = app;
