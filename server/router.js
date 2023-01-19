const instituteController = require('./controllers/institute');
const userController = require('./controllers/user');
const authMiddleware = require('./middleware/auth');
const router = require('express').Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

router.post('/institute', authMiddleware, instituteController.postInstitute);
router.get('/institute', authMiddleware, instituteController.getInstitute);
router.post('/institute/user/:type', authMiddleware, instituteController.addUser)


module.exports = router;