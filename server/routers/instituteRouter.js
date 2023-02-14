const instituteController = require('../controllers/institute');
const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const router = require('express').Router();

/* Institute Routes */
router.post('/institute', authMiddleware, instituteController.postInstitute);
router.get('/institute', authMiddleware, instituteController.getInstitute);
router.get('/institute/:id', authMiddleware, instituteController.getInstituteById);

/* Institute User Routes */
router.post('/institute/user/:type', authMiddleware, adminMiddleware, instituteController.addUser);
router.get('/institute/:id/user', authMiddleware, instituteController.getAllUsers);
router.get('/institute/:id/user/:userId', authMiddleware, instituteController.getUserRole);
router.get('/institute/user/:type', authMiddleware, instituteController.getUsersByType);
router.put('/institute/:id', authMiddleware, instituteController.editInstitute);

module.exports = router;