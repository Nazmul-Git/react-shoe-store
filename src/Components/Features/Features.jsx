/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { CheckCircleIcon  } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='h-6 w-6 text-blue-800'></CheckCircleIcon>
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Features;