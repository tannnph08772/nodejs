const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');
const { UvalidationResult, craeteValidate } = require('../app/validates/createValidate');

router.get('/:id/edit', courseController.edit);
router.get('/create', courseController.create);
router.post('/store', UvalidationResult, craeteValidate, courseController.store);
router.post('/handle-action-form', courseController.handleActionForm);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.deleteFake);
router.delete('/:id/force', courseController.delete);
// courseController.show
router.get('/:slug', courseController.show);

module.exports = router;