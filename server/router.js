const instituteController = require('./controllers/institute');
const userController = require('./controllers/user');
const authMiddleware = require('./middleware/auth');
const router = require('express').Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

router.post('/institute', authMiddleware, instituteController.postInstitute);
router.get('/institute/:id', instituteController.getInstitute);


module.exports = router;