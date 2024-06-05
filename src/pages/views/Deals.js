import React from 'react'
import { Table, Typography } from 'antd'
const { Text, Title } = Typography;

const Deals = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ]

  return (
    <div className='tableWrapper'>
    <Title level={2} type='success'>Deals/Offers</Title>
    <Table columns={columns} pagination={{ defaultPageSize: 5 }} className='table' />
  </div>
  )
}

export default Deals