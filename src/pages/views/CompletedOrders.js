import React, { useState } from 'react'
import { Button, Space, Table, Typography, Modal, Input } from 'antd'
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import OrderHistoryModal from '../../modals/OrderHistoryModal';

const { Title } = Typography;
const { Search } = Input;

const CompletedOrders = () => {
  const [showOrderHistoryModal, setShowOrderHistoryModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('Order History');

  const handleView = () => {
    setShowOrderHistoryModal(true);
  }

  const handleDelete = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete this product?',
      okText: 'Delete',
      cancelText: 'Cancel',
      okType: 'danger'
    });
  }

  const columns = [
    {
      title: 'Order #',
      dataIndex: 'orderNo',
      key: 'orderNo',
    },
    {
      title: 'Products List',
      dataIndex: 'productsList',
      key: 'productsList',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button size='small' type='text' style={{ color: 'green' }} onClick={() => handleView()} ><FontAwesomeIcon icon={faEye}/></Button>
          <Button size='small' type='text' danger onClick={() => handleDelete()}><FontAwesomeIcon icon={faTrash} /></Button>
        </Space>
      ),
    },
  ]

  const data = [];

  for (let i = 1; i < 5; i++) {
    data.push({
      key: i,
      orderNo: i,
      productsList: `Product ${i}`,
      price: '$20',
      paymentMethod: 'Paypal',
      createdAt: '09/21/2022',
      status: 'New Order'
    });
  }

  return (
    <div className='tableWrapper'>
      <div className='categoryHeader'>
        <Title level={2} type='success'>Completed Orders</Title>
        <Space>
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
          <OrderHistoryModal
            show={showOrderHistoryModal}
            close={() => setShowOrderHistoryModal(false)}
            title={modalTitle}
          />
        </Space>
      </div>
      <Table columns={columns} dataSource={data} pagination={{ defaultPageSize: 5 }} className='table' scroll={{ x: 100 }} />
    </div>
  )
}

export default CompletedOrders