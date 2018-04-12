const Photo = require('../models/photo');
const photosController = {};

photosController.index = (req, res) => {
 // console.log('inside photos index', req.user)
 Photo.findAll(req.user.id)
   .then(photos => {
     console.log('this is photos', photos)
     res.json({
       message: 'hey hey this is data',
       photos
     })
   // console.log('this i photos',photos)
   })
   .catch(err => {
     console.log(err);
     res.status(400).json({ err });
   });
};

photosController.new = (req, res) => {
 res.render('photos/new')
};

photosController.create = (req, res) => {
 Photo.create({
     title: req.body.title,
     description: req.body.description,
     image_url: req.body.image_url,
     user_id: req.user.id
   })
   .then(photos => {
     res.json({
       message: 'commas suck',
       photo
     })
   })
   .catch(err => {
     console.log('yaphotos messed it up, TJ', err)
     res.status(400).json(err);
   });
};

photosController.show = (req, res) => {
 Photo.findById(req.params.id)
   .then(photos => {
     console.log('show photos controller working');
     res.json({ photos })
   })
   .catch(err => {
    console.log('why is show photos controller is not working')
    console.log(req.params)
     res.status(400).json(err);
   });
};


photosController.edit = (req,res) => {
 Photo.findById(req.params.id)
   .then(photos => {
    console.log('edit this is photos controller')
     res.json({
      data: photos
     })
   })
   .catch(err => {
    console.log('photos edit controller is not working')
     res.status(400).json(err)
   })
}


photosController.update = (req, res) => {
 Photo.update({
     title: req.body.title,
     description: req.body.description,
     image_url: req.body.image_url,
     user_id: req.user.id
   }, req.params.id)
   .then( photos => {
    console.log('this is supposed to work photos Update Controller', photos)
     res.json({
       photos
     })
   })
   .catch(err => {
    console.log('this is not working photos Update Controller', err)
     res.status(400).json(err);
   });
};


photosController.delete = (req, res) => {
 Photo.delete(req.params.id)
   .then(photo => {
     res.redirect('/')
   })
   .catch(err => {
     res.status(400).json(err);
   });
};

module.exports = photosController;
