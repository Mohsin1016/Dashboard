import React, { useState } from 'react'
import { Button, Space, Table, Typography, Modal, Input } from 'antd'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import prodImage from '../../../images/img.jpg';
import './style.css'

const { Title } = Typography;
const { Search } = Input;

const Products = () => {

  const handleDelete = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete this voucher?',
      okText: 'Delete',
      cancelText: 'Cancel',
      okType: 'danger'
    });
  }

  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Limit',
      dataIndex: 'limit',
      key: 'limit',
    },
    {
      title: 'Expiry Date',
      dataIndex: 'expiryDate',
      key: 'expiryDate',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            size='small' type='text' danger onClick={() => handleDelete()}><FontAwesomeIcon icon={faTrash} /></Button>
        </Space>
      ),
    },
  ]

  const data = [];

  for (let i = 1; i < 6; i++) {
    data.push({
      key: i,
      code: i,
      name: `Voucher ${i}`,
      description: `This is voucher ${i}`,
      amount: '$100',
      limit: '100',
      expiryDate: '10/27/2022'
    });
  }

  return (
    <div className='tableWrapper'>
      <div className='categoryHeader'>
        <Title level={2} type='success'>Vouchers</Title>
        <Space>
          <Search
            placeholder="Search Voucher"
            allowClear
            size='large'
            // onSearch={onSearch}
            style={{
              width: 300,
            }}
            className='searchBar'
          />
          <Button className='btn-gold' type='primary' size='large'><Link to='/vouchers/add-voucher'> Add Voucher</Link></Button>
        </Space>
      </div>
      <Table columns={columns} dataSource={data} pagination={{ defaultPageSize: 5 }} className='table' scroll={{ x: 100 }} />
    </div>
  )
}

export default Products