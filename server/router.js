const instituteController = require('./controllers/institute');
const router = require('express').Router();

router.post('/institute', instituteController.postInstitute);
router.get('/institute/:id', instituteController.getInstitute);

module.exports = router;