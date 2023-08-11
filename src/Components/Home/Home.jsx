/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <p>Home</p>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;