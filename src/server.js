require('dotenv').config({path:'.env'});

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 5000;


mongoose.connect(process.env.DATABASE_LOCAL,
    {
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:true
    },
    (e) => {
        if(e) console.log(e.message);
        console.log(`Database connected successfully `)
    }
);

mongoose.Promise = global.Promise;

mongoose.connection.on('error',(e) => {
    console.log(`Database connection error -> ${e.message}`);
})


const server = app.listen(port,(e) => {
    if (e) console.log(e);
    console.log(`Server is running on PORT : ${server.address().port}`);
})