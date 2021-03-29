const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:id/edit', courseController.edit);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.deleteFake);
router.delete('/:id/force', courseController.delete);
// courseController.show
router.get('/:slug', courseController.show);

module.exports = router;