import React, { useState } from 'react'
import { Table, Typography, Button, Popconfirm, Space, Modal, Input } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan, faTrash, faPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import OfferModal from '../../../modals/OfferModal';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { Search } = Input;

const Deals = () => {
  const [showOfferModal, setShowOfferModal] = useState(false);

  const handleClick = () => {
    setShowOfferModal(true);
  }

  const handleDelete = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete this offer?',
      okText: 'Delete',
      cancelText: 'Cancel',
      okType: 'danger'
    });
  }

  const columns = [
    {
      title: 'Offer Name',
      dataIndex: 'offerName',
      key: 'offerName',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Method',
      dataIndex: 'method',
      key: 'method ',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Discount Amount',
      dataIndex: 'discountAmount',
      key: 'discountAmount',
    },
    {
      title: 'Minimum Amount in Cart',
      dataIndex: 'minAmount',
      key: 'minAmount',
    },
    {
      title: 'Total Usage',
      dataIndex: 'totalUsage',
      key: 'totalUsage',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Product Listing',
      key: 'productListing',
      render: (_, record) => (
        <Space>
          <Button size='small' type='link'><Link to='/offers/offer-product-listing'>View</Link></Button>
        </Space>
      ),
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
          <Button type='text' size='small' style={{ color: 'green' }}><Link to='/offers/add-offer-product'><FontAwesomeIcon icon={faPlus} /></Link></Button>
          <Button type='text' size='small' danger onClick={() => handleDelete()}><FontAwesomeIcon icon={faTrash} /></Button>
        </Space>
      ),
    },
  ]

  const data = [];

  for (let i = 1; i < 5; i++) {
    data.push({
      key: i,
      offerName: `Offer ${i}`,
      type: 'Flat',
      method: 'Voucher',
      startDate: '09/27/2022 12:00AM',
      endDate: '10/27/2022 11:59PM',
      discountAmount: '$100',
      minAmount: '$50',
      totalUsage: '300',
      status: 'Active'
    });
  }

  return (
    <div className='tableWrapper'>
      <div className='categoryHeader'>
        <Title level={2} type='success'>Deals/Offers</Title>
        <Space>
          <Search
            placeholder="Search Deals/Offers"
            allowClear
            size='large'
            // onSearch={onSearch}
            style={{
              width: 300,
            }}
            className='searchBar'
          />
          <Button className='btn-gold' type='primary' size='large'><Link to='/offers/add-offer'>Add Offer</Link></Button>
        </Space>
        <OfferModal
          show={showOfferModal}
          close={() => setShowOfferModal(false)}
        />
      </div>
      <Table columns={columns} dataSource={data} pagination={{ defaultPageSize: 3 }} className='table' scroll={{ x: 100 }} />
    </div>
  )
}

export default Deals