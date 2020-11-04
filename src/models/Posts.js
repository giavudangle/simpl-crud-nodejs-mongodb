const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    title:{
        type:String
    },
    author:{
        type:String
    },
    desc:{
        type:String
    }
})

module.exports = mongoose.model('Posts',PostsSchema);