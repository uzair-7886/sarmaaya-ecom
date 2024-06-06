'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartItems,selectTotalPrice } from '@/redux/cartSlice';

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <h3>{item.title}</h3>
            </div>
            <div>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default Cart