/* eslint-disable no-unused-vars */
import React from 'react';
import { GlobeAsiaAustraliaIcon  } from '@heroicons/react/24/solid'
const Header = () => {
    return (
        <div className='ml-40 font-mono relative '>
            <div className='absolute top-8 mr-4 ml-8'>
                <GlobeAsiaAustraliaIcon className='h-12 w-12 text-blue-600'></GlobeAsiaAustraliaIcon>
                <p className='sm:break-all mr-8'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quia natus sed. Magni sapiente dolor hic perspiciatis sint, ratione ducimus corporis! Porro doloribus est architecto distinctio magnam fuga officiis aliquam voluptas tempore, qui voluptates similique vel optio atque rem impedit accusamus perspiciatis quisquam itaque sapiente accusantium, veniam cum iusto! Tempore.</p>
            </div>
        </div>
    );
};

export default Header;