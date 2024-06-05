import React from 'react'
import { Space, Table, Typography, Avatar, Image } from 'antd'
import prodImage from '../../images/img.jpg';
import '../../pages/views/products/style.css'

const { Title } = Typography;

const SoldItemsTable = () => {
    const columns = [
        {
          title: 'Product',
          key: 'image',
          render: (_, record) => (
            <Space>
              <Avatar shape="square" size="large" src={
                <Image
                  src={prodImage}
                  style={{
                    width: 45,
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
          title: 'Size',
          dataIndex: 'size',
          key: 'size',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Country',
          dataIndex: 'country',
          key: 'country',
        },
      ]
    
      const data = [];
    
      for (let i = 1; i < 6; i++) {
        data.push({
          key: i,
          name: `Product ${i}`,
          size: 'Large',
          date: '09/27/2022',
          price: '$100',
          country: 'USA'
        });
      }
    
  return (
    <div className='tableWrapper'>
      <div className='categoryHeader'>
        <Title level={4}>Recently Purchased Products</Title>
      </div>
      <Table columns={columns} dataSource={data} pagination={{ defaultPageSize: 3}} className='table' scroll={{x: 100}}/>
    </div>
  )
}

export default SoldItemsTable