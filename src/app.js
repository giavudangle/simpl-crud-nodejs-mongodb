const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//app.use(bodyParser);
app.use(express.json());
const postRoute = require('./routes/posts.route');
const rootRoute = require('./routes/root.route');

app.use(postRoute);
app.use(rootRoute)


module.exports = app;