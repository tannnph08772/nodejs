const express = require('express');
const router = express.Router();

const newSiteController = require('../app/controllers/SiteController');

router.use('/search', newSiteController.search);
router.use('/', newSiteController.home);

module.exports = router;