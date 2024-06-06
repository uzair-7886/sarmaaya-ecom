"use client"
import React from 'react';
import ProductDetails from '@/components/ProductDetails';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

const Page = ({ searchParams }: Props) => {
    // Extract id from searchParams and ensure it's a string
    const idString = Array.isArray(searchParams?.id) ? searchParams.id[0] : searchParams?.id || '';

    return (
        <>
            <Navbar/>
            <div className='px-20 py-20 flex flex-col items-start'>
                <Link href="/" className='py-5 hover:underline font-bold'>Back</Link>
                <ProductDetails id={idString}/>
            </div>
        </>
    );
};

export default Page;
