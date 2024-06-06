import { useState, useEffect } from 'react';
import { Product } from '../../../type';
import React from 'react';
import ProductDetails from '@/components/ProductDetails';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async ({ searchParams }: Props) => {
    const idString = searchParams?.id;

    return (
        <>
        <Navbar/>
        <div className='px-20 py-20 flex flex-col  items-start'>
        <Link href="/" className='py-5 hover:underline font-bold'>Back</Link>

        <ProductDetails id={idString}/>
        </div>
        </>
    );
};

export default Page;
