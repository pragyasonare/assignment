import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  if (!item.product) return null;

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={item.product.image} alt={item.product.name} style={styles.image} />
      </div>
      <div style={styles.details}>
        <h4 style={styles.name}>{item.product.name}</h4>
        <p style={styles.price}>${item.product.price.toFixed(2)}</p>
        <div style={styles.quantityContainer}>
          <button 
            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
            style={styles.quantityButton}
          >
            -
          </button>
          <span style={styles.quantity}>{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
            style={styles.quantityButton}
          >
            +
          </button>
        </div>
      </div>
      <div style={styles.subtotal}>
        <p>${(item.product.price * item.quantity).toFixed(2)}</p>
        <button 
          onClick={() => removeFromCart(item.productId)}
          style={styles.removeButton}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    borderBottom: '1px solid #eee',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: '0 0 100px',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  details: {
    flex: 1,
    padding: '0 20px',
  },
  name: {
    margin: '0 0 10px 0',
    fontSize: '16px',
  },
  price: {
    margin: '0 0 10px 0',
    color: '#666',
  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  quantityButton: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontSize: '16px',
    fontWeight: '600',
  },
  subtotal: {
    textAlign: 'right',
  },
  removeButton: {
    padding: '5px 10px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '10px',
  },
};

export default CartItem;