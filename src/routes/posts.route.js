const express = require('express');
const { getPosts, createPost,getPostById,updatePost, deletePost } = require('../controllers/posts.controller');
const router = express.Router()

router.get('/posts', getPosts)
router.post('/posts', createPost)
router.get('/posts/:id',getPostById)
router.put('/posts/:id',updatePost)
router.delete('/posts/:id',deletePost)

module.exports = router;