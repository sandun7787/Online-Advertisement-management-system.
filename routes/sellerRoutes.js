const express = require('express');
const { getSeller, getSellers, updateSeller } = require('../controllers/sellerController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:id', getSeller);
router.get('/', getSellers);
router.put('/:id', authenticate, updateSeller);

module.exports = router;
