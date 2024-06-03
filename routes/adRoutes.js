const express = require('express');
const router = express.Router();
const adController = require('../controllers/adController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/ads', authMiddleware, adController.createAd);
router.get('/ads', adController.getAds);
router.get('/ads/:id', adController.getAd);
router.put('/ads/:id', authMiddleware, adController.updateAd);
router.delete('/ads/:id', authMiddleware, adController.deleteAd);

module.exports = router;
