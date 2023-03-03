const assignmentController = require('../controllers/assignment');
const authMiddleware = require('../middleware/auth');
const router = require('express').Router();

/* Assignment Routes */
router.get('/assignment/class/:id', authMiddleware, assignmentController.getAssignmentsInClass);
router.get('/assignment/id/:id', authMiddleware, assignmentController.getAssignment);
router.get('/assignment/marks/:id', authMiddleware, assignmentController.getAssignmentMarks);
router.get('/assignment/user/mark/:id', authMiddleware, assignmentController.getOwnAssignmentMark);
router.post('/assignment/create', authMiddleware, assignmentController.postAssignment);
router.post('/assignment/submit', authMiddleware, assignmentController.postAssignmentMark);

module.exports = router;