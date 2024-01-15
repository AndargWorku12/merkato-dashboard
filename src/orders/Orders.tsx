// Import necessary React and TypeScript modules
import React, { useState } from 'react';

// Define the Order type
type Order = {
  id: number;
  product: string;
  quantity: number;
  price: number;
};

// Component for displaying individual order items
const OrderItem: React.FC<{ order: Order }> = ({ order }) => (
  <div
    style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: '#f0f0f0',
    }}
  >
    <h3>Order #{order.id}</h3>
    <p>Product: {order.product}</p>
    <p>Quantity: {order.quantity}</p>
    <p>Price: ${order.price.toFixed(2)}</p>
  </div>
);

// Main DashboardOrders component
const DashboardOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, product: 'Product A', quantity: 2, price: 20.99 },
    { id: 2, product: 'Product B', quantity: 1, price: 15.49 },
    { id: 3, product: 'Product C', quantity: 3, price: 25.99 },
  ]);

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#fff',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Order Dashboard
      </h1>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default DashboardOrders;
