const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

router.get('/:id/edit', userController.edit);
router.get('/create', userController.create);
router.post('/store', userController.store);
router.post('/handle-action-form', userController.handleActionForm);
router.put('/:id', userController.update);
router.patch('/:id/restore', userController.restore);
router.delete('/:id', userController.deleteFake);
router.delete('/:id/force', userController.delete);

module.exports = router;