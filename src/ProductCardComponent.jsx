import React from 'react';

const ProductCard = ({ product, onIncreasePrice, onDelete }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-lg border">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
        <p className="text-lg font-bold text-blue-600">{product.price} $</p>
      </div>
      <div className="flex justify-end gap-3">
        <button
          onClick={onIncreasePrice}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
        >
          +50 للسعر
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default ProductCard;