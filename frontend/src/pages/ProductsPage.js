import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const { products, loading, getCartItemCount } = useCart();

  if (loading) {
    return (
      <div style={styles.loading}>
        <div style={styles.spinner}></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header with Cart Button */}
      <header style={styles.header}>
        <h1 style={styles.title}>Naksh Jewels 💎</h1>
        
        <div style={styles.cartSection}>
          {/* Cart Button with Badge */}
          <Link to="/cart" style={styles.cartLink}>
            <div style={styles.cartButton}>
              <span style={styles.cartIcon}>🛒</span>
              <span style={styles.cartText}>Cart</span>
              {getCartItemCount() > 0 && (
                <span style={styles.cartBadge}>
                  {getCartItemCount()}
                </span>
              )}
            </div>
          </Link>
        </div>
      </header>
      
      {/* Products Grid */}
      <main style={styles.main}>
        <div style={styles.productsGrid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      
      {/* Cart Summary at Bottom */}
      <div style={styles.footerCart}>
        <Link to="/cart" style={styles.viewCartButton}>
          View Cart ({getCartItemCount()} items)
        </Link>
      </div>
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
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  title: {
    margin: 0,
    fontSize: '28px',
    fontWeight: 'bold',
  },
  cartSection: {
    display: 'flex',
    alignItems: 'center',
  },
  cartLink: {
    textDecoration: 'none',
  },
  cartButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#3498db',
    padding: '12px 24px',
    borderRadius: '50px',
    color: 'white',
    fontWeight: '600',
    fontSize: '16px',
    position: 'relative',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  cartButtonHover: {
    backgroundColor: '#2980b9',
    transform: 'scale(1.05)',
  },
  cartIcon: {
    fontSize: '20px',
  },
  cartText: {
    fontSize: '16px',
  },
  cartBadge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  main: {
    padding: '30px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '25px',
    justifyContent: 'center',
  },
  footerCart: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'white',
    padding: '15px',
    boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  viewCartButton: {
    display: 'inline-block',
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  viewCartButtonHover: {
    backgroundColor: '#219a52',
    transform: 'scale(1.05)',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '20px',
  },
};

export default ProductsPage;