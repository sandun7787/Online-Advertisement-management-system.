const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const adRouter = require('./routes/adRouter');
const sellerRouter = require('./routes/sellerRouter');
const db = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/ads', adRouter);
app.use('/api/sellers', sellerRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
