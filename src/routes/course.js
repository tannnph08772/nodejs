const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:id/edit', courseController.edit);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.put('/:id', courseController.update);
// courseController.show
router.get('/:slug', courseController.show);

module.exports = router;