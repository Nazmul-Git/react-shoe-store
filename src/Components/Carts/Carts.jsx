/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Features from '../Features/Features';

// eslint-disable-next-line react/prop-types
const Carts = ({ product }) => {
    return (
        <div className='flex flex-col p-10 m-10 rounded-md relative bg-yellow-100'>
            <div>
                <img className=' h-50 w-auto ' src={product.img} alt="" />
            </div>

            <div>
                <h2>
                    <span className='text-4xl font-semibold mb-4'>{product.productName}</span>
                </h2>
                <h3>
                    <span className='text-3xl font-bold mr-2'>$</span>
                    <span className='text-2xl font-semibold'>{product.price}</span>
                </h3>
            </div>
            <div className='mx-10'>
                <p className='text-2xl mt-4'>Features :</p>
                {
                    product.features.map((feature,idx) => <Features key={idx} feature={feature}></Features>)
                }
            </div>
            <button className='text-white text-2xl bg-blue-400 font-semibold rounded-md mt-4 relative p-4 hover:bg-blue-800 hover:font-bold'>Buy Now</button>

        </div>
    );
};

export default Carts;