'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalPrice } from '@/redux/cartSlice';
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

function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems);
  // const cartItems = [
  //   {
  //     "id": 2,
  //     "title": "Mens Casual Premium Slim Fit T-Shirts ",
  //     "price": 22.3,
  //     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     "rating": {
  //       "rate": 4.1,
  //       "count": 259
  //     },
  //     "quantity": 1
  //   },
  //   {
  //     "id": 3,
  //     "title": "Mens Cotton Jacket",
  //     "price": 55.99,
  //     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     "rating": {
  //       "rate": 4.7,
  //       "count": 500
  //     },
  //     "quantity": 2
  //   },
  //   {
  //     "id": 7,
  //     "title": "White Gold Plated Princess",
  //     "price": 9.99,
  //     "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  //     "category": "jewelery",
  //     "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  //     "rating": {
  //       "rate": 3,
  //       "count": 400
  //     },
  //     "quantity": 1
  //   }
  // ]
  const totalPrice = useSelector(selectTotalPrice);
  console.log(cartItems)

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
    }

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
                <div className='font-bold'>${item.price}</div>
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
                cartItems.map((item)=>(
                  <div className='flex flex-row justify-between text-sm py-2'>
                    <div>
                      {truncateTitle(item.title,20)} X{item.quantity}
                    </div>
                    <div className='font-bold'>
                      ${item.quantity*Number(item.price)}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='px-5 py-5'>
            <div className='flex flex-row justify-between'>
              <h1 className='font-bold'>Total</h1>
              <h1 className='font-bold'>${totalPrice}</h1>
            </div>
            <div className='px-2 py-3 my-2 bg-black text-white rounded-xl flex flex-row justify-center items-center cursor-pointer ' onClick={handleCheckout}>
              <h1 className=''>Check out</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart