'use client'
import { Product } from '../../type';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails({ product }: { product: Product }) {
    const dispatch = useDispatch()
    const handleAddToCart = (item: Product) => {
        dispatch(addToCart(item));
        toast.success('Item added to cart successfully', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex flex-col md:flex-row justify-around w-full rounded-lg'>
            <ToastContainer />
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
                <div className='flex justify-center items-center px-5 cursor-pointer' onClick={() => handleAddToCart(product)}>
                    <div className='py-3 w-full flex justify-center items-center bg-black text-white rounded-xl'>
                        Buy now
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;