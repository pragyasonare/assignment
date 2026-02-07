const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { getProducts } = require('./controllers/productController');
const { addToCart, getCart, updateCartItem, removeFromCart } = require('./controllers/cartController');
const { validateCartItem } = require('./middleware/validation');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get('/api/products', getProducts);

// Cart routes
app.post('/api/cart', validateCartItem, addToCart);
app.get('/api/cart', getCart);
app.put('/api/cart/:productId', validateCartItem, updateCartItem);
app.delete('/api/cart/:productId', removeFromCart);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

// 404 handler
app.use((req, res) => {
  console.log(`404: ${req.method} ${req.url} not found`);
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    method: req.method,
    url: req.url
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET  /api/products');
  console.log('  GET  /api/cart');
  console.log('  POST /api/cart');
  console.log('  PUT  /api/cart/:productId');
  console.log('  DELETE /api/cart/:productId');
});