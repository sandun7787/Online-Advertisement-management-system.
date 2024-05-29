const { Advertisement, Seller, Category } = require('../models');

exports.createAd = async (req, res) => {
  try {
    const ad = await Advertisement.create({ ...req.body, sellerId: req.user.id });
    res.status(201).json(ad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAds = async (req, res) => {
  try {
    const ads = await Advertisement.findAll({
      include: [
        { model: Seller, attributes: ['name', 'contact'] },
        { model: Category, attributes: ['categoryName'] }
      ],
      order: [['createdAt', 'DESC']],
      limit: 10,
      offset: (req.query.page - 1) * 10
    });
    res.json(ads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAd = async (req, res) => {
  try {
    const ad = await Advertisement.findByPk(req.params.id, {
      include: [
        { model: Seller, attributes: ['name', 'contact'] },
        { model: Category, attributes: ['categoryName'] }
      ]
    });
    if (!ad) return res.status(404).json({ error: 'Advertisement not found' });
    res.json(ad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAd = async (req, res) => {
  try {
    const ad = await Advertisement.findByPk(req.params.id);
    if (!ad) return res.status(404).json({ error: 'Advertisement not found' });

    await ad.update(req.body);
    res.json(ad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAd = async (req, res) => {
  try {
    const ad = await Advertisement.findByPk(req.params.id);
    if (!ad) return res.status(404).json({ error: 'Advertisement not found' });

    await ad.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
