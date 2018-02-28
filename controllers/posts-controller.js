const Post = require('../models/post');
const postsController = {};

postsController.index = (req, res) => {
 // console.log('inside posts index', req.user)
 Post.findAll(req.user.id)
   .then(posts => {
     console.log('this is posts', posts)
     res.json({
       message: 'hey hey this is data',
       posts
     })
   // console.log('this is posts',posts)
   })
   .catch(err => {
     console.log(err);
     res.status(400).json({ err });
   });
};

postsController.new = (req, res) => {
 res.render('posts/new')
};

postsController.create = (req, res) => {
 Post.create({
     title: req.body.title,
     content: req.body.content,
     user_id: req.user.id
   })
   .then(post => {
     res.json({
       message: 'commas suck',
       post
     })
   })
   .catch(err => {
     console.log('ya messed it up, TJ', err)
     res.status(400).json(err);
   });
};

postsController.show = (req, res) => {
 Post.findById(req.params.id)
   .then(posts => {
     console.log('show controller working');
     res.json({ posts })
   })
   .catch(err => {
    console.log('why is show controller is not working')
    console.log(req.params)
     res.status(400).json(err);
   });
};


postsController.edit = (req,res) => {
 Post.findById(req.params.id)
   .then(posts => {
    console.log('edit this is controller')
     res.json({
      data:posts,
     })
   })
   .catch(err => {
    console.log('controller is not working')
     res.status(400).json(err)
   })
}


postsController.update = (req, res) => {
 Post.update({
     title: req.body.title,
     content: req.body.content,
     user_id: req.user.id
   }, req.params.id)
   .then( posts => {
    console.log('this is supposed to work Update Controller', posts)
     res.json({
       posts
     })
   })
   .catch(err => {
    console.log('this is not working Update Controller', err)
     res.status(400).json(err);
   });
};


postsController.delete = (req, res) => {
 Post.delete(req.params.id)
   .then(post => {
     res.redirect('/')
   })
   .catch(err => {
     res.status(400).json(err);
   });
};

module.exports = postsController;
