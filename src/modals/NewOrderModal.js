import React from 'react'
import { Modal, Table, Space, Avatar, Image } from 'antd';
import prodImage from '../images/img.jpg';

const NewOrderModal = (props) => {
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
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Method',
            dataIndex: 'method',
            key: 'method',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ]



    const data = [];

    for (let i = 1; i < 4; i++) {
      data.push({
        key: i,
        no: i,
        name: `Product ${i}`,
        quantity: 1,
        price: '$100',
        method: 'Paypal',
        status: 'Paid'
      });
    }

    return (
        <Modal title='Products List' open={props.show} footer={null} onCancel={props.close}>
            <Table columns={columns} dataSource={data} pagination={{ defaultPageSize: 5 }} className='table' scroll={{x: 50}} />
        </Modal>
    )
}

export default NewOrderModal