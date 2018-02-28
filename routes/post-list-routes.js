const express = require('express');
const postListController = require('../controllers/post-list-controller');
const postListRouter = express.Router();

postListRouter.get('/', postListController.index);
postListRouter.get('/:id', postListController.show);

module.exports = postListRouter;
