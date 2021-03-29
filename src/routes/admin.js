const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/', adminController.dashboard);
router.get('/trash', adminController.trash);

module.exports = router;