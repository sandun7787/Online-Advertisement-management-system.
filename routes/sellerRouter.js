const router = require('express').Router();
const sellerController = require('../controllers/sellerController');
const validateToken = require('../middleware/AuthMiddleware');

router.post('/register', sellerController.registerSeller);
router.post('/login', sellerController.loginSeller);
router.get('/profile', validateToken, sellerController.getProfile);
router.put('/profile/update', validateToken, sellerController.updateProfile);

module.exports = router;
