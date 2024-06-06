"use client"
import React, { useEffect, useState } from 'react';
import { AllProducts, Product } from '../../type';
import ProductCard from './ProductCard';

function Products() {
  const [products, setProducts] = useState<AllProducts | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const json: AllProducts = await res.json();
        setProducts(json);
        console.log(json);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
      {products.map((item: Product) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Products;
