import React, { useState } from 'react';
import FormComponent from './FormComponent';
import ProductCard from './ProductCardComponent';

function App() {
  const [products, setProducts] = useState([]);

  
  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const handleIncreasePrice = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, price: product.price + 50 } : product
      )
    );
  };

  
  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">إدارة المنتجات</h1>
      <FormComponent onAddProduct={handleAddProduct} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onIncreasePrice={() => handleIncreasePrice(product.id)}
            onDelete={() => handleDeleteProduct(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

