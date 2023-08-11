/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';


const NavbarChild = ({items}) => {
    return (
        <div className='mr-10 md:text-2xl font-mono font-bold text-stone-400 hover:text-white sm:m-8 sm:p-4 sm:text-center'>
            <Link to={items.link}>{items.label}</Link>  
        </div>
    );
};

export default NavbarChild;