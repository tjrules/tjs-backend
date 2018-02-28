const express = require('express');
const postsController = require('../controllers/posts-controller');
const postsRouter = express.Router();

postsRouter.get('/', postsController.index);
postsRouter.post('/', postsController.create);
postsRouter.get('/new', postsController.new);
postsRouter.get('/:id', postsController.show);
postsRouter.get('/edit/:id', postsController.edit);
postsRouter.put('/:id', postsController.update);
postsRouter.delete('/:id', postsController.delete);

module.exports = postsRouter;
