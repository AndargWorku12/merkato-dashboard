// ShopProductPage.tsx
import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const ShopProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleCreateProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <ProductList products={products} onDelete={handleDeleteProduct} />
      <ProductForm onCreate={handleCreateProduct} />
    </div>
  );
};

export default ShopProductPage;
