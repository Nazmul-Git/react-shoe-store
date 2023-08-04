/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';

const Products = () => {

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <h1 className='text-center text-5xl mt-4 text-blue-500 font-bold mb-8  sm:mt-80'>All Products</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-2  m-16 mt-36'>
                {
                    products.map(product => <Carts key={product.id} product={product}></Carts>)
                }
            </div>
        </div>
    );
};

export default Products;