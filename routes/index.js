const express = require('express');
const homeController = require('../controllers/home_Controller');
const router = express.Router();

console.log('Good');

router.get('/',homeController.home);
router.get('/com',homeController.com);

module.exports= router;