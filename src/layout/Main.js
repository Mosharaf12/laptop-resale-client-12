import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer1 from '../Shared/Footer1';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer1></Footer1>
        </div>
    );
};

export default Main;