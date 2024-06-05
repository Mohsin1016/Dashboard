import React, { useState, useEffect } from "react";
import { Button, Space, Table, Typography, Modal, Input } from 'antd'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomerModal from '../../modals/CustomerModal';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;

const Customers = () => {

  const [showCategoryModal, setShowCategoryModal] = useState(false);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('Add New Customer');
  const [SubItems, setSubItems] = useState([]);

  const handleEdit = () => {
    setShowCategoryModal(true);
    setModalTitle('Edit Customer');
  }

  const handleSave = () => {
    setShowCategoryModal(true);
    setModalTitle('Add New Customer');
  }

  const handleDelete = (record) => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete Customer?',
      okText: 'Delete',
      cancelText: 'Cancel',
      okType: 'danger',
      onOk: async () => {
       

        try {
          // Perform the delete operation here
          const response = await fetch(`https://login-b6e02-default-rtdb.firebaseio.com/users/${record}.json`, {
            method: 'DELETE',
          });

          if (response.ok) {
            
            // Update the state after successful deletion
            const updatedSubItems = SubItems.filter(item => item.id !== record);
            setSubItems(updatedSubItems);
          } else {
            console.error('Error deleting category:', response.statusText);
          }
        } catch (error) {
          console.error('Error deleting category:', error);
        }
      },
    });
  }

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone No',
      dataIndex: 'phoneNo',
      key: 'phoneNo',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '# Orders Done',
      dataIndex: 'ordersDone',
      key: 'ordersDone',
    },
    {
      title: 'Payment Type',
      dataIndex: 'paymentType',
      key: 'paymentType',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button size='small' type='text' style={{ color: 'green' }}><FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEdit()} /></Button>
          <Button size='small' type='text' danger onClick={() => handleDelete(record.id)}><FontAwesomeIcon icon={faTrash} /></Button>
        </Space>
      ),
    },
  ]

  useEffect(() => {
    async function fetchSubItems() {
      try {
        const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/users.json');
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
        <Title level={2} type='success'>Customers</Title>
        <Space>
          <Search
            placeholder="Search Customer"
            allowClear
            size='large'
            // onSearch={onSearch}
            style={{
              width: 300,
            }}
            className='searchBar'
          />
          <Button className='btn-gold' type='primary' size='large' onClick={() => handleSave()}>Add Customer</Button>
        </Space>
        <CustomerModal
          show={showCategoryModal}
          close={() => setShowCategoryModal(false)}
          title={modalTitle}
          component='Category'
          inputPlaceholder='Category Name'
          validationMessage='Please enter category name!'
        />
      </div>
      <Table columns={columns} dataSource={SubItems.map((item, index) => ({
        ...item,
        key: index, // Add a unique key for each row
      }))} pagination={{ defaultPageSize: 5 }} className='table' scroll={{ x: 100 }} />
    </div>
  )
}

export default Customers