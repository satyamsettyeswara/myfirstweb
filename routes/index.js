const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_Controller');

console.log('Good');

router.get('/',homeController.home);
router.get('/com',homeController.com);
router.use('/users',require('./users'));
module.exports = router;