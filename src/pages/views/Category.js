import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Typography, Modal, Input } from 'antd'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CategoryModal from '../../modals/CategoryModal';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Search } = Input;

const Category = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('Add New Category');
  const [SubItems, setSubItems] = useState([]);

  const handleEdit = () => {
    setShowCategoryModal(true);
    setModalTitle('Edit Category');
  }

  const handleSave = () => {
    setShowCategoryModal(true);
    setModalTitle('Add New Category');
  }

  const handleDelete = (record) => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to delete this category?',
      okText: 'Delete',
      cancelText: 'Cancel',
      okType: 'danger',
      onOk: async () => {
        try {
      
          // Perform the delete operation here
          const response = await fetch(`https://login-b6e02-default-rtdb.firebaseio.com/Categories/${record.id}.json`, {
            method: 'DELETE',
          });

          if (response.ok) {
            // Update the state after successful deletion
            const updatedSubItems = SubItems.filter(item => item.id !== record.id);
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
      title: 'No.',
      dataIndex: 'index',
      render:(item, record, index)=>(<>{index}</>)
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button size='small' type='text' style={{ color: 'green' }} onClick={() => handleEdit()}><FontAwesomeIcon icon={faPenToSquare} /></Button>
          <Button size='small' type='text' danger onClick={() => handleDelete(record)}><FontAwesomeIcon icon={faTrash} /></Button>
        </Space>
      ),
    },

  ]

  async function fetchSubItems() {
      try {
          const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/Categories.json');
          const data = await response.json();

          if (response.ok) {
            console.log("fff");
              const Sub = Object.values(data || {});
              setSubItems(Sub);
          } else {
              console.error('Error fetching cart items:', response.statusText);
          }
      } catch (error) {
          console.error('Error fetching cart items:', error);
      }
  }
  useEffect(() => {

    fetchSubItems();
}, []);

  return (
    <div className='tableWrapper'>
      <div className='categoryHeader'>
        <Title level={2} type='success'>Categories</Title>
        <Space>
          <Search
            placeholder="Search Category"
            allowClear
            size='large'
            // onSearch={onSearch}
            style={{
              width: 300,
            }}
            className='searchBar'
          />
          <Button className='btn-gold' type='primary' size='large' onClick={() => handleSave()}>Add Category</Button>
        </Space>
        <CategoryModal
          show={showCategoryModal}
          close={() => setShowCategoryModal(false)}
          title={modalTitle}
          component='Category'
          inputPlaceholder='Category Name'
          validationMessage='Please enter category name!'
          fetchSubItems={fetchSubItems}
        />
      </div>
      <Table columns={columns} dataSource={SubItems} pagination={{ defaultPageSize: 5 }} className='table' scroll={{ x: 100 }} />
    </div>
  )
}

export default Category