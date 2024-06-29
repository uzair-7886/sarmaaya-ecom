import React from 'react';
import ProductDetails from '@/components/ProductDetails';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

type Props = {
    params: { id: string };
};

async function getProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }
    return res.json();
}

export default async function Page({ params }: Props) {
    const product = await getProduct(params.id);

    return (
        <>
            <Navbar/>
            <div className='px-20 py-20 flex flex-col items-start'>
                <Link href="/" className='py-5 hover:underline font-bold'>Back</Link>
                <ProductDetails product={product}/>
            </div>
        </>
    );
}