const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, './public')));

const port = 3000;

app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'products.json'));
});

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
