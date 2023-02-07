const instituteController = require('./controllers/institute');
const userController = require('./controllers/user');
const classController = require('./controllers/class');
const postController = require('./controllers/post');
const authMiddleware = require('./middleware/auth');
const adminMiddleware = require('./middleware/admin');
const router = require('express').Router();

/* Auth Routes */
router.post('/register', userController.register);
router.post('/login', userController.login);

/* Institute Routes */
router.post('/institute', authMiddleware, instituteController.postInstitute);
router.get('/institute', authMiddleware, instituteController.getInstitute);
router.get('/institute/:id', authMiddleware, instituteController.getInstituteById);

/* Institute User Routes */
router.post('/institute/user/:type', authMiddleware, adminMiddleware, instituteController.addUser);
router.get('/institute/:id/user', authMiddleware, instituteController.getAllUsers);
router.get('/institute/user/:type', authMiddleware, instituteController.getUsersByType);

/* Class Routes */
router.post('/class', authMiddleware, adminMiddleware, classController.postClass);
router.get('/class/institute/:id', authMiddleware, classController.getInstituteClasses);
router.get('/class/user/institute/:instituteId', authMiddleware, classController.getUserClasses);
router.put('/class/user/:id', authMiddleware, adminMiddleware, classController.addUserToClass);
router.delete('/class/:id', authMiddleware, adminMiddleware, classController.deleteClass);

/* Post Routes */
router.get('/class/:classId/post', authMiddleware, postController.getPosts);
router.post('/class/:classId/post', authMiddleware, postController.newPost);
router.put('/post/:id', authMiddleware, postController.updatePost);
router.delete('/post/:id', authMiddleware, postController.deletePost);
router.post('/post/:id/comment', authMiddleware, postController.addComment);


module.exports = router;