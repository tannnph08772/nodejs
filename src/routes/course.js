const express = require('express');
const router = express.Router();
const shopController = require('../app/controllers/ShopController');
const courseController = require('../app/controllers/CourseController');
const { courseValidationRules, validate } = require('../app/validates/createValidate');
const upload = require('../app/middlewares/uploadMiddleware')

router.get('/add-to-cart/:id', shopController.shopping);
router.get('/:id/edit', courseController.edit);
router.get('/create', courseController.create);
router.post('/store', upload.array('image[]'), courseValidationRules(), validate, courseController.store);
router.post('/handle-action-form', courseController.handleActionForm);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.deleteFake);
router.delete('/:id/force', courseController.delete);
// courseController.show
router.get('/:slug', courseController.show);

module.exports = router;