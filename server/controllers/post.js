const { Post } = require("../models/post");

async function getPosts (req, res) {
  try {
    const { classId } = req.params;
    const posts = await Post.find({classId});
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function newPost (req, res) {
  try {
    const { classId } = req.params;
    const { content } = req.body;

    const post = await Post.create({classId, content, postedDate: new Date(), postedBy: req.user});
    res.status(201).send(post);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function updatePost (req, res) {
  try {
    const { id } = req.params;
    const { content } = req.body;

    await Post.findByIdAndUpdate(id, {$set: {content: content}});
    const post = await Post.findById(id);
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function deletePost (req, res) {
  try {
    const { id } = req.params;

    const result = await Post.findByIdAndDelete(id);
    res.status(205).send(result);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}

module.exports = {
  getPosts,
  newPost,
  updatePost,
  deletePost
}