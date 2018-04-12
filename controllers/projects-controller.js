const Project = require('../models/project');
const projectsController = {};

projectsController.index = (req, res) => {
 // console.log('inside projects index', req.user)
 Project.findAll(req.user.id)
   .then(projects => {
     console.log('this is projects', projects)
     res.json({
       message: 'hey hey this is data',
       projects
     })
   // console.log('this i sprojects',projects)
   })
   .catch(err => {
     console.log(err);
     res.status(400).json({ err });
   });
};

projectsController.new = (req, res) => {
 res.render('projects/new')
};

projectsController.create = (req, res) => {
 Project.create({
     title: req.body.title,
     description: req.body.description,
     image_url: req.body.image_url,
     code_url: req.body.code_url,
     user_id: req.user.id
   })
   .then(project => {
     res.json({
       message: 'commas suck',
       project
     })
   })
   .catch(err => {
     console.log('ya messed it up, TJ', err)
     res.status(400).json(err);
   });
};

projectsController.show = (req, res) => {
 Project.findById(req.params.id)
   .then(projects => {
     console.log('show projects controller working');
     res.json({ projects })
   })
   .catch(err => {
    console.log('why is show projects controller is not working')
    console.log(req.params)
     res.status(400).json(err);
   });
};


projectsController.edit = (req,res) => {
 Project.findById(req.params.id)
   .then(projects => {
    console.log('edit this is projects controller')
     res.json({
      data: projects,
     })
   })
   .catch(err => {
    console.log('projects edit controller is not working')
     res.status(400).json(err)
   })
}


projectsController.update = (req, res) => {
 Project.update({
     title: req.body.title,
     description: req.body.description,
     image_url: req.body.image_url,
     code_url: req.body.code_url,
     user_id: req.user.id
   }, req.params.id)
   .then( projects => {
    console.log('this is supposed to work projects Update Controller', projects)
     res.json({
       projects
     })
   })
   .catch(err => {
    console.log('this is not working projects Update Controller', err)
     res.status(400).json(err);
   });
};


projectsController.delete = (req, res) => {
 Project.delete(req.params.id)
   .then(project => {
     res.redirect('/')
   })
   .catch(err => {
     res.status(400).json(err);
   });
};

module.exports = projectsController;
