const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');
const auth = require('../middlewares/authMiddleware');  // Ensure this path is correct

router.post('/register', sellerController.register);
router.post('/login', sellerController.login);
router.get('/:id', auth, sellerController.getOneSeller);
router.get('/', auth, sellerController.getAllSellers);

module.exports = router;

