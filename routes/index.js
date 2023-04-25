//entry point to index.js
//this will further route

//express router let us seprate router and controller

const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');


//access controller
router.get('/',homeController.home);

//any url which uses /users/
router.use('/users',require('./user'));
module.exports = router;