import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { getCartWithDetails, getCartTotal, getCartItemCount } = useCart();
  const cartItems = getCartWithDetails();

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <h2>Your cart is empty</h2>
        <p>Add some beautiful jewelry to your cart!</p>
        <Link to="/" style={styles.shopButton}>
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Shopping Cart</h1>
        <Link to="/" style={styles.continueShopping}>
          ← Continue Shopping
        </Link>
      </header>
      
      <main style={styles.main}>
        <div style={styles.cartItems}>
          {cartItems.map(item => (
            <CartItem key={item.productId} item={item} />
          ))}
        </div>
        
        <div style={styles.summary}>
          <h3 style={styles.summaryTitle}>Order Summary</h3>
          <div style={styles.summaryRow}>
            <span>Items ({getCartItemCount()}):</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div style={styles.summaryRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div style={{...styles.summaryRow, ...styles.total}}>
            <span>Total:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <button style={styles.checkoutButton}>
            Proceed to Checkout
          </button>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '24px',
  },
  continueShopping: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  },
  main: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    gap: '30px',
  },
  cartItems: {
    flex: 2,
  },
  summary: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    height: 'fit-content',
  },
  summaryTitle: {
    margin: '0 0 20px 0',
    fontSize: '20px',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
  total: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
    borderBottom: 'none',
  },
  checkoutButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '20px',
  },
  emptyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  shopButton: {
    padding: '10px 30px',
    backgroundColor: '#3498db',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    marginTop: '20px',
    fontSize: '16px',
  },
};

export default CartPage;