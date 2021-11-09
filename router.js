const express = require('express');
const app = express();
const Todo = require('./modules/todo/router');
const Auth = require('./modules/auth/router');
const Admin = require('./modules/admin/router');

app.use('/todo', Todo);
app.use('/auth', Auth);
app.use('/admin', Admin);

module.exports = app;
