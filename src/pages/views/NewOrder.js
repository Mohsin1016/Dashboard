import React, { useState , useEffect } from 'react'
import { Table, Typography, Button, Popconfirm, Space, Input } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan, faPenToSquare, faEye, faCheckCircle, faBanSmoking, faBookQuran } from '@fortawesome/free-solid-svg-icons'
import NewOrderModal from '../../modals/NewOrderModal';

const { Text, Title } = Typography;
const { Search } = Input;

const NewOrder = () => {

  const [showNewOrderModal, setShowNewOrderModal] = useState(false);
  const [SubItems, setSubItems] = useState([]);

  const handleView = () => {
    setShowNewOrderModal(true);
  }

  const columns = [
    {
      title: 'Order #',
      dataIndex: 'order #',
      render:(item, record, index)=>(<>{index}</>)
    },
    {
      title: 'Products List',
      key: 'productsList',
      render: (_, record) => (
        <Space>
          <Button size='small' type='link' onClick={() => handleView()}>View Products</Button>
        </Space>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      key: 'Category',
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
    },
    {
      title: 'Amount',
      dataIndex: 'Price',
      key: 'Price',
    },
    {
      title: 'Sub-Category',
      dataIndex: 'SubCategory',
      key: 'SubCategory',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Popconfirm title="Are you sure you want to accept this order？" okText="Yes" cancelText="No">
            <Button size='small' type='text' style={{ color: 'green' }}><FontAwesomeIcon icon={faCheckCircle} /></Button>
          </Popconfirm>
          <Popconfirm title="Are you sure you want to reject this order？" okText="Yes" cancelText="No">
            <Button size='small' danger type='text'><FontAwesomeIcon icon={faBan} /></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]


  useEffect(() => {
    async function fetchSubItems() {
      try {
        const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/Products.json');
        const data = await response.json();

        if (response.ok) {
          const Sub = Object.values(data || {});
          setSubItems(Sub);
        } else {
          console.error('Error fetching cart items:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    }

    fetchSubItems();
  }, []);

  return (
    <div className='tableWrapper'>
      <div className='categoryHeader'>
        <Title level={2} type='success'>New Orders</Title>
        <Search
          placeholder="Search Order"
          allowClear
          size='large'
          // onSearch={onSearch}
          style={{
            width: 300,
          }}
          className='searchBar'
        />
      </div>
      <NewOrderModal
        show={showNewOrderModal}
        close={() => setShowNewOrderModal(false)}
      />
      <Table columns={columns} dataSource={SubItems} pagination={{ defaultPageSize: 5 }} className='table' scroll={{ x: 100 }} />
    </div>
  )
}

export default NewOrder