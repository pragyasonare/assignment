import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.description}>{product.description}</p>
        <p style={styles.category}>{product.category}</p>
        <p style={styles.price}>${product.price.toFixed(2)}</p>
        <button 
          onClick={() => addToCart(product.id)}
          style={styles.button}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    backgroundColor: '#fff',
    maxWidth: '300px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '15px',
  },
  name: {
    margin: '0 0 10px 0',
    fontSize: '18px',
    fontWeight: '600',
  },
  description: {
    margin: '0 0 10px 0',
    color: '#666',
    fontSize: '14px',
  },
  category: {
    margin: '0 0 10px 0',
    color: '#888',
    fontSize: '12px',
    textTransform: 'uppercase',
  },
  price: {
    margin: '0 0 15px 0',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background-color 0.2s',
  },
};

export default ProductCard;