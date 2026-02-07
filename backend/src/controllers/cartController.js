// In-memory cart storage
let cart = [];

console.log('Cart controller loaded');

const addToCart = (req, res) => {
  console.log('POST /api/cart called with:', req.body);
  try {
    const { productId, quantity } = req.body;
    
    // Convert to number
    const pid = Number(productId);
    const qty = Number(quantity);
    
    console.log(`Adding product ${pid}, quantity ${qty}`);
    
    const existingItemIndex = cart.findIndex(item => item.productId === pid);
    
    if (existingItemIndex > -1) {
      // Update quantity if item already exists
      cart[existingItemIndex].quantity += qty;
      console.log(`Updated existing item, new quantity: ${cart[existingItemIndex].quantity}`);
    } else {
      // Add new item to cart
      cart.push({ productId: pid, quantity: qty });
      console.log(`Added new item to cart, total items: ${cart.length}`);
    }
    
    res.status(201).json({
      success: true,
      message: 'Item added to cart successfully',
      cart: cart
    });
  } catch (error) {
    console.error('Error in addToCart:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while adding to cart'
    });
  }
};

const getCart = (req, res) => {
  console.log('GET /api/cart called');
  try {
    res.json({
      success: true,
      data: cart,
      count: cart.length
    });
  } catch (error) {
    console.error('Error in getCart:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching cart'
    });
  }
};

const updateCartItem = (req, res) => {
  console.log(`PUT /api/cart/${req.params.productId} called with:`, req.body);
  try {
    const productId = Number(req.params.productId);
    const { quantity } = req.body;
    
    console.log(`Updating product ${productId} to quantity ${quantity}`);
    
    const itemIndex = cart.findIndex(item => item.productId === productId);
    
    if (itemIndex === -1) {
      console.log(`Product ${productId} not found in cart`);
      return res.status(404).json({
        success: false,
        error: 'Item not found in cart'
      });
    }
    
    if (quantity <= 0) {
      // Remove item if quantity is 0 or less
      cart.splice(itemIndex, 1);
      console.log(`Removed product ${productId} from cart`);
      return res.json({
        success: true,
        message: 'Item removed from cart',
        cart: cart
      });
    }
    
    // Update quantity
    cart[itemIndex].quantity = quantity;
    console.log(`Updated product ${productId} quantity to ${quantity}`);
    
    res.json({
      success: true,
      message: 'Cart updated successfully',
      cart: cart
    });
  } catch (error) {
    console.error('Error in updateCartItem:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while updating cart'
    });
  }
};

const removeFromCart = (req, res) => {
  console.log(`DELETE /api/cart/${req.params.productId} called`);
  try {
    const productId = Number(req.params.productId);
    
    const itemIndex = cart.findIndex(item => item.productId === productId);
    
    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Item not found in cart'
      });
    }
    
    cart.splice(itemIndex, 1);
    
    res.json({
      success: true,
      message: 'Item removed from cart',
      cart: cart
    });
  } catch (error) {
    console.error('Error in removeFromCart:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while removing from cart'
    });
  }
};

module.exports = { addToCart, getCart, updateCartItem, removeFromCart };