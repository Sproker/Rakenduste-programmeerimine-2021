const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const posts = await Post.find({})
  
  res.status(200).send(posts)
}

exports.createPost = async (req, res) => {

  const {title, text, firstName, lastName} = req.body;

  const newPost = {
    title,
    text,
    firstName,
    lastName
  }

  const createdPost = new Post(newPost)

  const savedPost = await createdPost.save()

  res.status(200).send(`Post created. ID: ${savedPost._id}`)
}

exports.updatePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findOne({_id: id});

  if (!post) res.status(404).send("No post with such ID!")

  const updated = await Post.findOneAndUpdate({_id: id, }, req.body, {new: true})

  res.status(200).send(`Successfully updated the following item: \n ${updatedPost}`)
}

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findOneAndDelete({ _id: id })

  if (!post) res.status(404).send("No post with such ID!")

  res.status(200).send(`Successfully deleted the following post: \n ${post}`)
}