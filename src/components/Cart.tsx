'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalPrice, clearCart } from '@/redux/cartSlice';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '@/redux/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const truncateTitle = (title: string, charLimit: number) => {
  if (title.length > charLimit) {
    return title.slice(0, charLimit) + '...';
  }
  return title;
};

const formatPrice = (price: number) => {
  return price.toFixed(2);
};

function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const handleIncreaseQuantity = (product: any) => {
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = (product: any) => {
    dispatch(decreaseQuantity(product));
  };

  const handleCheckout = () => {
    toast.success('Order Confirmed!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(clearCart());
  };

  return (
    <div className='p-5'>
      <ToastContainer />
      <h1 className='text-2xl font-bold'>Your Cart</h1>
      <div className='flex flex-row w-full px-5 gap-5 '>
        <div className='w-2/3 '>
          {
            cartItems.map((item) => (
              <div className='bg-white px-5 rounded-lg flex flex-row justify-around py-2 my-3 shadow-xl  items-center'>
                <img src={item.image} alt="" className='h-20' />
                <div>{truncateTitle(item.title, 20)}</div>
                <div className='font-bold'>${formatPrice(Number(item.price))}</div>
                <div className='flex flex-row justify-center items-center gap-2'>
                  <div className='bg-black text-white px-2 rounded-lg cursor-pointer' onClick={() => handleIncreaseQuantity(item)}>
                    +
                  </div>
                  <div>
                    {item.quantity}
                  </div>
                  <div className='bg-black text-white px-2 rounded-lg cursor-pointer' onClick={() => handleDecreaseQuantity(item)}>
                    -
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='w-1/3 bg-white rounded-xl shadow-xl h-[500px] flex flex-col justify-between'>
          <div className="px-5 py-5">
            <h1 className='font-bold text-xl py-2'>Your Total</h1>
            <div>
              {
                cartItems.map((item) => (
                  <div className='flex flex-row justify-between text-sm py-2'>
                    <div>
                      {truncateTitle(item.title, 20)} X{item.quantity}
                    </div>
                    <div className='font-bold'>
                      ${formatPrice(item.quantity * Number(item.price))}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='px-5 py-5'>
            <div className='flex flex-row justify-between'>
              <h1 className='font-bold'>Total</h1>
              <h1 className='font-bold'>${formatPrice(totalPrice)}</h1>
            </div>
            <div className='px-2 py-3 my-2 bg-black text-white rounded-xl flex flex-row justify-center items-center cursor-pointer' onClick={handleCheckout}>
              <h1 className=''>Check out</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart