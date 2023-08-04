/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';


const NavbarChild = ({items}) => {
    return (
        <div className='mr-10 md:text-3xl font-mono font-bold hover:text-blue-700 sm:m-8 sm:p-4 sm:text-center'>
            <a href={items.link}>{items.label}</a>  
        </div>
    );
};

export default NavbarChild;