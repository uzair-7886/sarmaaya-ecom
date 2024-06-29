"use client"
import React, { useEffect, useState } from 'react';
import { AllProducts, Product } from '../../type';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { selectSearchQuery } from '@/redux/cartSlice';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/redux/cartSlice';

type ProductsProps = {
  apiString: string;
};

const Products: React.FC<ProductsProps> = ({ apiString }) => {
  const [products, setProducts] = useState<AllProducts | null>(null);
  const searchQuery = useSelector(selectSearchQuery);
  const dispatch =useDispatch()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(apiString);
        const json: AllProducts = await res.json();
        setProducts(json);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    dispatch(setSearchQuery(''))

    fetchProduct();
  }, [apiString]);

  const filteredProducts = products
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
      {filteredProducts.map((item: Product) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;