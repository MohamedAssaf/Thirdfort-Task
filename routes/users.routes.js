const express = require('express');
const router = express.Router();

const usersController = require('../controller/users.controller');


// checking if it works
router.get('/test', usersController.test);

router.post('/signUp', usersController.userSignUp);

router.post('/logIn', usersController.userLogIn);



module.exports = router;