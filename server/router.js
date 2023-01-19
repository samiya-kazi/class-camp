const instituteController = require('./controllers/institute');
const userController = require('./controllers/user');
const classController = require('./controllers/class')
const authMiddleware = require('./middleware/auth');
const router = require('express').Router();

/* Auth Routes */
router.post('/register', userController.register);
router.post('/login', userController.login);

/* Institute Routes */
router.post('/institute', authMiddleware, instituteController.postInstitute);
router.get('/institute', authMiddleware, instituteController.getInstitute);

/* Institute User Routes */
router.post('/institute/user/:type', authMiddleware, instituteController.addUser);
router.get('/institute/user', authMiddleware, instituteController.getAllUsers);
router.get('/institute/user/:type', authMiddleware, instituteController.getUsersByType);

/* Class Routes */
router.post('/class', authMiddleware, classController.postClass)
router.get('/class/institute/:id')
router.get('/class/user')


module.exports = router;