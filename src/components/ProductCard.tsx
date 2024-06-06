'use client'
import { useState, useEffect } from 'react';
import { Product } from '../../type';
import Link from 'next/link';

type ProductCardProps = {
  product: Product;
};

const truncateDescription = (description: string, wordLimit: number) => {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return description;
};
const truncateTitle = (title: string, charLimit: number) => {
  if (title.length > charLimit) {
    return title.slice(0, charLimit) + '...';
  }
  return title;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  const truncatedDescription = truncateDescription(product.description, 15);
  const truncatedTitle = truncateTitle(product.title, 60);

  return (
    <Link href={{ pathname: `/${product?.id}`, query: { id: product?.id } }} className="w-[300px] h-[550px] shadow-xl rounded-[10px] flex flex-col justify-between">
      <img src={product.image} alt={product.title} className="w-full h-2/5 p-3 object-contain rounded-[10px]" />
      <h2 className='px-3 pt-2 font-bold'>{truncatedTitle}</h2>
      <p className='text-xs px-3 py-2 '>{product.category}</p>
      <p className='text-sm px-3 py-5'>{truncatedDescription}</p>
      <p className='px-3 '>Price: <span className='font-bold'>${product.price}</span></p>
      <div className='py-2'>
        <div className='p-3 w-4/5 rounded-lg bg-black flex flex-row justify-center items-center mx-auto gap-2'>
          <h1 className='text-white'>Add to cart</h1>
          <img src="cart.png" alt="cart" className='h-5'/>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
