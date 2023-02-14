const classController = require('../controllers/class');
const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const router = require('express').Router();

/* Class Routes */
router.post('/class', authMiddleware, adminMiddleware, classController.postClass);
router.get('/class/institute/:id', authMiddleware, classController.getInstituteClasses);
router.get('/class/user/institute/:instituteId', authMiddleware, classController.getUserClasses);
router.get('/class/:id', authMiddleware, classController.getClassById);
router.put('/class/user/:id', authMiddleware, adminMiddleware, classController.addUserToClass);
router.put('/class/user/:id/remove', authMiddleware, adminMiddleware, classController.removeUserFromClass);
router.put('/class/details/:id', authMiddleware, adminMiddleware, classController.editClass);
router.delete('/class/:id', authMiddleware, adminMiddleware, classController.deleteClass);

module.exports = router;