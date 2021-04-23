const express = require('express')
const router = express.Router();

//Controllers
const UserController = require('../controllers/UserController')
const LoginController = require('../controllers/LoginController')

router.post('/user', UserController.create)
router.get('/users', UserController.findAll)
router.get('/user/:id', UserController.findById)

router.post('/login', LoginController.login)

module.exports = router