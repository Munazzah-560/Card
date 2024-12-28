import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt className={styles.image} />
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.priceAndRating}>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.rating}>
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;