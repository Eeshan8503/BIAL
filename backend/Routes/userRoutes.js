const express = require('express');
const authController = require('./../Controllers/authController.js');
const router = express.Router();
router.post('/signup', authController.signup);
router.get('/signup', authController.check);
module.exports=router;