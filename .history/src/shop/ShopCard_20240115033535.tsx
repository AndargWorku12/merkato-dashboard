// ShopCard.tsx
import React from 'react';

interface ShopCardProps {
  image: string;
  title: string;
  description: string;
}

const ShopCard: React.FC<ShopCardProps> = ({ image, title, description }) => {
  return (
    <div className="shop-card">
      <img src={image} alt={title} className="shop-card-image" />
      <div className="shop-card-details">
        <h3 className="shop-card-title">{title}</h3>
        <p className="shop-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ShopCard;
