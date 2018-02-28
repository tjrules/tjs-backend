const PostList = require('../models/post-list');
const postListController = {};

postListController.index = (req, res) => {

PostList.findAll()
  .then(posts => {
    res.json({
      message: "This is the Best",
      data: posts
    });
  }).catch(err => {
    console.log('you ahs an error at your postlist controller', err);
    res.status(500).json(err);
  })
}

postListController.show = (req, res) => {
  
 PostList.findById(req.params.id)
   .then(posts => {
     console.log('show controller working');
     res.json({
       message:'postListController show is getting data',
       posts })
   })
   .catch(err => {
    console.log('why is show controller is not working')
    console.log(req.params)
     res.status(400).json(err);
   });
};

module.exports = postListController;
