// ShopList.tsx
import React from 'react';
import ShopCard from './ShopCard'; // assuming the ShopCard component is in the same directory

const ShopList: React.FC = () => {
  // Sample data (replace this with your actual data)
  const shops = [
    { id: 1, image: 'shop1.jpg', title: 'Shop 1', description: 'Description for Shop 1' },
    { id: 2, image: 'shop2.jpg', title: 'Shop 2', description: 'Description for Shop 2' },
    { id: 3, image: 'shop3.jpg', title: 'Shop 3', description: 'Description for Shop 3' },
  ];

  return (
    <div className="shop-list">
      {shops.map((shop) => (
        <ShopCard key={shop.id} {...shop} />
      ))}
    </div>
  );
};

export default ShopList;
