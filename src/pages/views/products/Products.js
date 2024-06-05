import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Typography, Avatar, Image, Input } from 'antd'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import prodImage from '../../../images/img.jpg';

import './style.css'

const { Title } = Typography;
const { Search } = Input;

const Products = () => {
  const [SubItems, setSubItems] = useState([]);
  const columns = [
    {
      title: 'No.',
      dataIndex: 'no',
      render: (item, record, index) => (<>{index}</>)
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
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      key: 'Category',
    },
    {
      title: 'Sub Category',
      dataIndex: 'SubCategory',
      key: 'SubCategory',
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
      dataIndex: 'Price',
      key: 'Price',
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
          <Button
            size='small'
            type='text'
            style={{ color: 'green' }}
          >
            <Link to='/products/add-product'>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
          </Button>
          <Button
            size='small'
            type='text'
            danger
            onClick={() => handleDelete(record.id)} // Add click handler for delete
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </Space>
      ),
    },
  ]

  const handleDelete = async (productId) => {
    try {
      // Send a request to your server to delete the product with productId
      const response = await fetch(`https://login-b6e02-default-rtdb.firebaseio.com/Products/${productId}.json`, {
        method: 'DELETE',
      });
      if (response.ok) {

        // If the delete request is successful, update the local state to remove the deleted product
        setSubItems((prevItems) => prevItems.filter((item) => item.id !== productId));
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

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
        <Title level={2} type='success'>Products</Title>
        <Space>
          <Search
            placeholder="Search Product"
            allowClear
            size='large'
            // onSearch={onSearch}
            style={{
              width: 300,
            }}
            className='searchBar'
          />
          <Button className='btn-gold' type='primary' size='large'><Link to='/products/add-product'> Add Product</Link></Button>
        </Space>
      </div>
      <Table columns={columns} dataSource={SubItems} pagination={{ defaultPageSize: 4 }} className='table' scroll={{ x: 1500 }} />
    </div>
  )
}

export default Products