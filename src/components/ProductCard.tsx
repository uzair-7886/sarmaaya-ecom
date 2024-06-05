'use client'
import { useState, useEffect } from 'react';
import { Product } from '../../type';

const ProductCard = () => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products/1');
        const json = await res.json();
        setProduct(json);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[300px] h-[550px]  shadow-lg rounded-[10px]">
      <img src={product.image} alt={product.title} className="w-full h-2/5 p-3 object-cover rounded-[10px]" />
      <h2 className='px-3 pt-2 font-bold'>{product.title}</h2>
      <p className='text-xs px-3 py-2 '>{product.category}</p>
      <p className='text-sm px-3 py-5'>{product.description}</p>
      <p className='px-3 '>Price: <span className='font-bold'>${product.price}</span></p>
      <div className='mt-10'>
      <div className='p-3 w-4/5 rounded-lg bg-black flex flex-row justify-center items-center mx-auto gap-2'>
        <h1 className='text-white'>Add to cart</h1>
        <img src="cart.png" alt="cart" className='h-5'/>
      </div>
      </div>
      
    </div>
  );
};

export default ProductCard;
