import React, { useState } from 'react'
import { Button, Space, Table, Typography, Avatar, Image, Popconfirm, Input } from 'antd'
import { faCheck, faBan, faPenToSquare, faEye, faPen, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import pakFlag from '../../images/pakFlag.png';
import '../../pages/views/products/style.css'

const { Title } = Typography;
const { Search } = Input;

const CountriesTable = () => {
  const columns = [
    {
      title: 'Flag',
      key: 'image',
      render: (_, record) => (
        <Space>
          <Avatar shape="square" size="large" src={
            <Image
              src={pakFlag}
              style={{
                width: 45,
              }}
            />
          } />
        </Space>
      ),
    },
    {
      title: 'Country Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button size='small' type='text' style={{ color: 'green' }}><FontAwesomeIcon icon={faEdit} /></Button>
          <Popconfirm title="Are you sure you want to delete this country？" okText="Yes" cancelText="No">
            <Button size='small' danger type='text'><FontAwesomeIcon icon={faTrash} /></Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const data = [];

  for (let i = 1; i < 2; i++) {
    data.push({
      key: i,
      name: 'Pakistan',
    });
  }

  return (
    <div className='tableWrapper'>
      <div className='categoryHeader'>
        <Title level={4}>Available Countries</Title>
        <Search
          placeholder="Search Country"
          allowClear
          size='large'
          // onSearch={onSearch}
          style={{
            width: 300,
          }}
          className='searchBar'
        />
      </div>
      <Table columns={columns} dataSource={data} pagination={{ defaultPageSize: 5 }} className='table' scroll={{ x: 100 }} />
    </div>
  )
}

export default CountriesTable