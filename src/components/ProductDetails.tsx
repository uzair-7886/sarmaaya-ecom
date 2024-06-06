'use client'
import { useState, useEffect } from 'react';
import { Product } from '../../type';

function ProductDetails({ id }) {
    const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
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
        <div className='flex flex-col md:flex-row justify-around w-full rounded-lg'>
            <div className='w-1/2 '>
                <img src={product.image} alt="" className='h-[350px] w-[400px] p-5 object-contain'/>
            </div>
            <div className='w-1/2'>
            <h1 className='text-xl font-bold'>{product.title}</h1>
            <div className='py-10'>
                <p className='text-sm text-gray-500'>Category</p>
                <p className='text-sm font-bold'>{product.category}</p>
            </div>
            <div>
                <p className='text-gray-500'>Description</p>
                <p>{product.description}</p>
            </div>
            <div className='py-10'>
                <p>Price</p>
                <h1 className='font-bold text-3xl'>${product.price}</h1>
            </div>
            <div className='flex justify-center items-center px-5'>
            <div className='py-3 w-full flex justify-center items-center bg-black text-white rounded-xl'>
                Buy now
            </div>
            </div>
            
            </div>
        </div>
    );
}

export default ProductDetails;
