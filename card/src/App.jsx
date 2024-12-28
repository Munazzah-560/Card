import React from 'react';
import './App.module.css';
import ProductList from './Component/ProductCard/ProductList';

function App() {
  return (
    <div className={App}>
      <h1>Product Card</h1>
      <ProductList />
    </div>
  );
}

export default App;