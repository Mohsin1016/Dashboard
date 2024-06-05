import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Typography, Modal, Input } from 'antd'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SubCategoryModal from '../../modals/SubCategoryModal';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;

const SubCategory = () => {
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    // const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('Add New Sub Category');
    const [SubItems, setSubItems] = useState([]);

    const handleEdit = () => {
        setShowCategoryModal(true);
        setModalTitle('Edit Sub Category');
    }

    const handleSave = () => {
        setShowCategoryModal(true);
        setModalTitle('Add New Sub Category');
    }

    const handleDelete = (record) => {
        console.log(record);
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
              const response = await fetch(`https://login-b6e02-default-rtdb.firebaseio.com/SubCategories/${record.id}.json`, {
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
            dataIndex: 'no',
            render: (item, record, index) => (<>{index}</>)
        },
        {
            title: 'Category',
            dataIndex: 'Category',
            key: 'Category',
        },
        {
            title: 'SubCategory',
            dataIndex: 'SubCategory',
            key: 'SubCategory',
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
            const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/SubCategories.json');
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
    useEffect(() => {

        fetchSubItems();
    }, []);


    return (
        <div className='tableWrapper'>
            <div className='categoryHeader'>
                <Title level={2} type='success'>Sub Categories</Title>
                <Space>
                    <Search
                        placeholder="Search Sub Category"
                        allowClear
                        size='large'
                        // onSearch={onSearch}
                        style={{
                            width: 300,
                        }}
                        className='searchBar'
                    />
                    <Button className='btn-gold' type='primary' size='large' onClick={() => handleSave()}>Add Sub Category</Button>
                </Space>
                <SubCategoryModal
                    show={showCategoryModal}
                    close={() => setShowCategoryModal(false)}
                    title={modalTitle}
                    component='SubCategory'
                    inputPlaceholder='Sub Category Name'
                    validationMessage='Please enter sub category name!'
                    fetchSubItems={fetchSubItems}
                />
            </div>
            <Table columns={columns} dataSource={SubItems.map((item, index) => ({
        ...item,
        key: index, // Add a unique key for each row
      }))} pagination={{ defaultPageSize: 5 }} className='table' scroll={{ x: 100 }} />
        </div>
    )
}

export default SubCategory