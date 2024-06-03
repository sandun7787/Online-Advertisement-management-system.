const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/sellers', sellerController.getSellers);
router.get('/sellers/:id', sellerController.getSellerById);
router.post('/sellers', sellerController.createSeller); // No authMiddleware for creating seller
router.put('/sellers/:id', authMiddleware, sellerController.updateSeller);
router.delete('/sellers/:id', authMiddleware, sellerController.deleteSeller);

module.exports = router;
