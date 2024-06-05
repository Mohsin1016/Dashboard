import React from 'react';
import './layout.css';
import { Layout } from 'antd';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/DashboardHeader'
import DashboardContent from '../components/dashboard/DashboardContent';

const DashboardLayout = () => {

    return (
        <>
            <Layout className='dashboardLayout'>
                <Sidebar />
                <Layout className="site-layout">
                    <Header />
                    <DashboardContent />
                </Layout>
            </Layout>
        </>
    )
}

export default DashboardLayout