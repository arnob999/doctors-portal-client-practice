import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar'
const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default DashboardLayout;