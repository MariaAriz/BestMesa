const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/users', userController.create);
router.get('/users', userController.list)

module.exports = router;