import React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd';


const { Content } = Layout

const DashboardContent = () => {
    return (
        <Content className="site-layout-background mainContent">
           <Outlet />
        </Content>
    )
}

export default DashboardContent