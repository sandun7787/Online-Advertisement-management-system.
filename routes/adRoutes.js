const express = require('express');
const { createAd, getAds, getAd, updateAd, deleteAd } = require('../controllers/adController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, createAd);
router.get('/', getAds);
router.get('/:id', getAd);
router.put('/:id', authenticate, updateAd);
router.delete('/:id', authenticate, deleteAd);

module.exports = router;
