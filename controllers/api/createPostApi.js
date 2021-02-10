const Post = require('../../models/post');

module.exports.create = async (req, res) => {
  console.log('heloooooooooo!');
  try {
    console.log(req.body.data);
    const post = await Post.create(req.body.data);
    if (post) {
      res.status(201).json({
        massage: 'Successfully created!',
        post: post,
      });
    } else {
      res.status(500).json({
        error: 'Error in creating the post!',
      });
    }
  } catch (err) {
    res.status(500).json({
      error: 'Error in creating the post!',
    });
  }
};

module.exports.posts = async (req, res) => {
  const posts = await Post.find();
  if (posts) {
    return res.status(200).json(posts);
  } else {
    return res.status(500).json(false);
  }
};

module.exports.post = async (req, res) => {
  console.log(req.body.data);
  const post = await Post.findById(req.body.data);
  if (post) {
    console.log('This is the post', post);
    return res.status(200).json(post);
  } else {
    return res.status(500).json(false);
  }
};
