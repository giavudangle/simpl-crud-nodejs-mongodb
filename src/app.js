const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
const postRoute = require('./routes/posts.route');
const rootRoute = require('./routes/root.route');

app.use(postRoute);
app.use(rootRoute)


module.exports = app;