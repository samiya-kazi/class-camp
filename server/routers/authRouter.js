const userController = require('../controllers/user');
const authMiddleware = require('../middleware/auth');
const router = require('express').Router();

/* Auth Routes */
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/edit-profile', authMiddleware, userController.editProfile);

module.exports = router;