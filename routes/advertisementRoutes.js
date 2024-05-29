const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertisementController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, advertisementController.createAd);
router.get('/', advertisementController.getAds);
router.get('/:id', advertisementController.getAd);
router.put('/:id', auth, advertisementController.updateAd);
router.delete('/:id', auth, advertisementController.deleteAd);

module.exports = router;
