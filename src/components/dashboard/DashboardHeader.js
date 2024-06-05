import React from 'react'
import '../../layout/layout.css';
import {
    UserOutlined
} from '@ant-design/icons';
import { Layout, Button, Avatar, Typography } from 'antd';
const { Text } = Typography;

const { Header } = Layout;
const DashboardHeader = () => {
    return (
        <Header className="site-layout-background header" style={{backgroundColor: '#001529'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem' }}>
                <Avatar icon={<UserOutlined />} />
                <Text>Hi, Admin</Text>
            </div>
            <Button danger style={{ marginRight: '2rem' }}>Logout</Button>
        </Header>
    )
}

export default DashboardHeader;