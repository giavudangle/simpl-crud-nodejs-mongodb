const Posts = require('../models/Posts');
const mongoose =require('mongoose');
const db = mongoose.connection;

const getPosts = async (req,res) => {
    const postsList = await Posts.find().exec();
    res.json(postsList);
}


const createPost =  (req,res) => {
    const {title,author,desc} = req.body;
    const post = new Posts({
        title,
        author,
        desc
    })
    
    post.save()
    .then((data) => {
        res.status(200).json({         
            data
        })
    })
    .catch((e) =>{
        res.status(500).json({
            message:"Something went wrong ",
        })
    })
}


const getPostById =  (req,res) => {
    const postId = req.params.id;
    Posts.findById(postId).exec()
    .then(data => {
       
        res.status(200).json({
            message:"Found",
            data
        })
    })
    .catch(e => {
        res.status(500).json({
            message:"Something went wrong",
        })
    })
    
}

const updatePost =  (req,res) => {
    const postId= req.params.id;
    
    Posts.findByIdAndUpdate({_id:postId},{$set:req.body}).exec()
    .then(data => {      
        res.status(200).json({
            message:"Updated",
            data
        })
    })
    .catch(e => {
        res.status(500).json({
            message:"Something went wrong",
        })
    })
    
}

const deletePost = (req,res) => {
    const postId= req.params.id;
    Posts.deleteOne({_id:postId}).exec()
    .then(() => {      
        res.status(200).json({
            message:"Deleted",          
        })
    })
    .catch(e => {
        console.log(e)
        res.status(500).json({
            message:"Something went wrong",
        })
    })
}

module.exports={getPosts,createPost,getPostById,updatePost,deletePost};