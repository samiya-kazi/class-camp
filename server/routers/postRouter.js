const postController = require('../controllers/post');
const authMiddleware = require('../middleware/auth');
const router = require('express').Router();

/* Post Routes */
router.get('/class/:classId/post', authMiddleware, postController.getPosts);
router.post('/class/:classId/post', authMiddleware, postController.newPost);
router.put('/post/:id', authMiddleware, postController.updatePost);
router.delete('/post/:id', authMiddleware, postController.deletePost);
router.post('/post/:id/comment', authMiddleware, postController.addComment);

module.exports = router;