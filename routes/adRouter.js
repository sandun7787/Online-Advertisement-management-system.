const adController = require('../controllers/adController.js');
const upload = require('../config/multerConfig.js');
const AuthMiddleware = require('../middleware/AuthMiddleware.js');

const router = require('express').Router();

router.post('/create', AuthMiddleware, upload.array('images', 10), adController.createAdvertisement);
router.get('/all', adController.getAdvertisements);
router.get('/seller/:sellerId', AuthMiddleware, adController.getAdvertisementsBySeller);
router.get('/ad/:id', adController.getSingleAdvertisement);
router.put('/update/:id', AuthMiddleware, upload.array('images', 10), adController.updateAdvertisement);
router.delete('/delete/:id', AuthMiddleware, adController.deleteAdvertisement);
router.post('/filter', adController.filterAdvertisements);

module.exports = router;
