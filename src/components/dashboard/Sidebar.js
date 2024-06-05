import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSquareCheck, faClockRotateLeft, faUsers, faBowlFood, faIdBadge, faTicket, faCoins, faGear, faSquareXmark, faHome } from '@fortawesome/free-solid-svg-icons';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    let location = useLocation();
    const [current, setCurrent] = useState(location.pathname);

    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);
    const items = [
        { label: 'Dashboard', key: '/', icon: <FontAwesomeIcon icon={faHome} /> },
        { label: 'New Orders', key: '/neworders', icon: <FontAwesomeIcon icon={faShoppingBag} /> },
        {
            label: 'Order History',
            key: '/orderhistroy',
            icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
            children: [
                { label: 'Completed Orders', key: '/completedorders', icon: <FontAwesomeIcon icon={faSquareCheck} /> },
                { label: 'Cancelled Orders', key: '/cancelledorders', icon: <FontAwesomeIcon icon={faSquareXmark} /> }
            ]
        },
        { label: 'Customers', key: '/customers', icon: <FontAwesomeIcon icon={faUsers} /> },
        {
            label: 'Menu',
            key: '/menu',
            icon: <FontAwesomeIcon icon={faBowlFood} />,
            children: [
                { label: 'Category', key: '/category' },
                { label: 'Sub Category', key: '/sub-category' },
                { label: 'Products', key: '/products' },
            ]
        },
        { label: 'Deals/Offers', key: '/deals', icon: <FontAwesomeIcon icon={faIdBadge} /> },
        { label: 'Vouchers', key: '/vouchers', icon: <FontAwesomeIcon icon={faTicket} /> },
        {
            label: 'Finance',
            key: '/finance',
            icon: <FontAwesomeIcon icon={faCoins} />,
            children: [
                {label: 'Progress', key: '/progress'},
                {label: 'Reports', key: '/reports'}
            ]
        },
        {
            label: 'Settings',
            key: '/settings',
            icon: <FontAwesomeIcon icon={faGear} />,
            children: [
                { label: 'Profile', key: '/profile' },
                { label: 'Site Info', key: '/site-info' },
                { label: 'Site Images', key: '/site-images' },
                { label: 'Countries', key: '/countries' },
                { label: 'Payment Methods', key: '/payment-methods' }
            ]
        },
    ];

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => {setCollapsed(value)
        }} className='sidebar'>
            <div className="logo" id='logo'> Admin Dashboard </div>
            <Menu
                theme='dark'
                mode='inline'
                defaultSelectedKeys={['/']}
                onClick={({ key }) => {
                    navigate(key)
                    setCurrent(key)
                }
                }
                items={items}
                selectedKeys={current}
                style={{height: '40rem'}}
            />
        </Sider>
    )
}

export default Sidebar