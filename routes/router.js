const express = require('express')
const router = express.Router();

//Controllers
const HomeController = require('../controllers/HomeController')
const UserController = require('../controllers/UserController')

router.get('/', HomeController.index)
router.post('/users', UserController.index)

module.exports = router