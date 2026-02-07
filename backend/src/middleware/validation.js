
console.log('Validation middleware loaded');

const validateCartItem = (req, res, next) => {
  console.log(`Validating ${req.method} request:`, req.body);
  
  const { productId, quantity } = req.body;
  
  // For PUT requests (updating), productId comes from URL, not body
  if (req.method === 'POST') {
    // POST requires productId in body
    if (!productId) {
      console.log('Validation failed: Product ID is required for POST');
      return res.status(400).json({ 
        success: false,
        error: 'Product ID is required' 
      });
    }
  }
  
  // Both POST and PUT require quantity
  if (quantity === undefined || quantity === null) {
    console.log('Validation failed: Quantity is required');
    return res.status(400).json({ 
      success: false,
      error: 'Quantity is required' 
    });
  }
  
  if (quantity < 0) {
    console.log('Validation failed: Quantity must be at least 0');
    return res.status(400).json({ 
      success: false,
      error: 'Quantity must be at least 0' 
    });
  }
  
  // Convert to number for validation
  const qty = Number(quantity);
  if (isNaN(qty)) {
    console.log('Validation failed: Quantity must be a number');
    return res.status(400).json({ 
      success: false,
      error: 'Quantity must be a number' 
    });
  }
  
  console.log('Validation passed');
  next();
};

module.exports = { validateCartItem };