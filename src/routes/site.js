const express = require('express');
const router = express.Router();

const newSiteController = require('../app/controllers/SiteController');

router.get('/search', newSiteController.search);
router.get('/', newSiteController.home);

module.exports = router;