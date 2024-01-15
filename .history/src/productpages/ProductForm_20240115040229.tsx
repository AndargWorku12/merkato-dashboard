// ProductForm.tsx
import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    // Add any other properties as needed
  }
  
  interface ProductFormProps {
    onCreate: (product: Product) => void;
  }
const ProductForm: React.FC<ProductFormProps> = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleCreate = () => {

    interface Product {
        id: number;
        name: string;
        price: number;
      }

    const newProduct: Product = {
      id: Date.now(),
      name,
      price: parseFloat(price),
    };
    onCreate(newProduct);
    setName('');
    setPrice('');
  };

  return (
    <div>
      <h2>Create Product</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default ProductForm;
