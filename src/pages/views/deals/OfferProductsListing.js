import React from 'react'
import { Button, Space, Table, Typography, Avatar, Image } from 'antd'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import prodImage from '../../../images/img.jpg';
import '../products/style.css'

const { Title } = Typography;

const OfferProductsListing = () => {
  const columns = [
    {
      title: 'No.',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Image',
      key: 'image',
      render: (_, record) => (
        <Space>
          <Avatar shape="square" size="large" src={
            <Image
              src={prodImage}
              style={{
                width: 32,
              }}
            />
          } />
        </Space>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Sub Category',
      dataIndex: 'subCategory',
      key: 'subCategory',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Fabric/Material',
      dataIndex: 'fm',
      key: 'fm',
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Items in Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Wishlist',
      dataIndex: 'wishlist',
      key: 'wishlist',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button size='small' type='text' style={{ color: 'green' }}><Link to='/products/add-product'> <FontAwesomeIcon icon={faPenToSquare} /></Link></Button>
        </Space>
      ),
    },
  ]

  const data = [];

  for (let i = 1; i < 500; i++) {
    data.push({
      key: i,
      no: i,
      name: `Product ${i}`,
      category: 'dress',
      subCategory: 'shirts',
      color: 'Blue',
      type: 'UnStitched',
      size: 'Large',
      price: '$100',
      description: `This is product ${i}`,
      stock: '20',
      wishlist: '5'
    });
  }

  return (
    <div className='tableWrapper'>
      <div className='categoryHeader'>
        <Title level={2} type='success'>Products</Title>
        <Button className='btn-gold' type='primary' size='large'><Link to='/products/add-product'> Add Product</Link></Button>
      </div>
      <Table columns={columns} dataSource={data} pagination={{ defaultPageSize: 4}} className='table' scroll={{x: 1500}}/>
    </div>
  )
}

export default OfferProductsListing