/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import NavbarChild from '../NavbarChild/NavbarChild';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, HomeModernIcon } from '@heroicons/react/24/solid'

const Navigation = () => {
    const [whichIcon, setIcon] = useState(false)
    const navBarItems = [
        { id: 1, label: 'Home', link: '/' },
        { id: 2, label: 'Products', link: '/products' },
        { id: 3, label: 'About', link: '/about' },
        { id: 4, label: 'Services', link: '/services' },
        { id: 5, label: 'Contact', link: '/contact' }
    ];
    return (

        <nav className=' bg-gray-900 sm:p-2 flex justify-between items-center fixed top-0 w-full z-50'>
            {/* responsive */}
            <div onClick={() => { setIcon(!whichIcon) }} className='md:hidden'>
                <span>
                    {
                        whichIcon === true ? <XMarkIcon className='h-7 w-7  text-red-700 '></XMarkIcon> : <Bars3Icon className='h-7 w-7 text-blue-800'></Bars3Icon>
                    }
                </span>


            </div>


            <ul className={` top-12 md:flex absolute md:static duration-700 pl-4 items-center ${whichIcon ? 'left-0 sm:bg-blue-200 sm:top-28' : '-left-60'}`}>
                <HomeModernIcon className='h-14 w-14 text-blue-700'></HomeModernIcon>
                {
                    navBarItems.map(item => <NavbarChild key={item.id} items={item}></NavbarChild>)
                }
            </ul>
            <ShoppingBagIcon className='h-16 w-16 text-white ml-10'></ShoppingBagIcon>
        </nav>

    );
};

export default Navigation;