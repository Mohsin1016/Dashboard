import React from 'react'
import { Form, Button, Input, Select, Upload, Typography, InputNumber, Divider, Layout } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './style.css';

const { Option } = Select;
const { TextArea } = Input;
const { Title, Text } = Typography

const AddOfferProduct = () => {
    return (
        <Layout className='layout' style={{}}>
            <Title level={2}>Add Products to Offer</Title>
            <Form
                size='large'
                name="basic"
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}
            >
                <Form.Item
                    name='productName'
                    style={{
                        width: '50%',
                    }}
                >
                    <Select
                        placeholder='Select Product'
                    >
                        <Option value="shoes">Shoes</Option>
                        <Option value="dresses">Dresses</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button className='btn-gold' size='large' type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
            <Divider style={{ color: 'red' }}>Or Add New Product</Divider>
            <Form
                size='large'
                name="basic"
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}
            >
                <Form.Item
                    name='offer'
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please select offer!',
                        },
                    ]}
                >
                    <Select
                        placeholder='Select Offer'
                    >
                        <Option value="shoes">Shoes</Option>
                        <Option value="dresses">Dress</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    style={{ width: '100%' }}
                    name="categoryName"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter product name!',
                        },
                    ]}
                >
                    <Input placeholder='Product Name' style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name='category'
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please select category name!',
                        },
                    ]}
                >
                    <Select
                        placeholder='Select Category'
                    // defaultValue="Select Category"
                    >
                        <Option value="shoes">Shoes</Option>
                        <Option value="dresses">Dress</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='subCategory'
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please select sub category name!',
                        },
                    ]}
                >
                    <Select
                        mode="tags"
                        style={{
                            width: '100%',
                        }}
                        placeholder="Select Sub Categories"
                    >
                    </Select>
                </Form.Item>
                <Form.Item
                    name='sizes'
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please select atleast one size!',
                        },
                    ]}
                >
                    <Select
                        mode="tags"
                        style={{
                            width: '100%',
                        }}
                        placeholder="Select Available Sizes"
                    >
                    </Select>
                </Form.Item>
                <Form.Item
                    name='colors'
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please select color(s)!',
                        },
                    ]}
                >
                    <Select
                        mode="tags"
                        style={{
                            width: '100%',
                        }}
                        placeholder="Select Available Colors"
                    >
                    </Select>
                </Form.Item>
                <Form.Item
                    name='stock'
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter number of items in stock!',
                        },
                    ]}>
                    <InputNumber
                        style={{
                            width: '100%',
                        }}
                        placeholder="Items in stock" />
                </Form.Item>
                <Form.Item
                    name='price'
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter product price!',
                        },
                    ]}>
                    <InputNumber
                        style={{
                            width: '100%',
                        }}
                        placeholder="Items in stock"
                        defaultValue={0}
                        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                    />
                </Form.Item>
                <Form.Item
                    name='type'
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please select type!',
                        },
                    ]}
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                        placeholder="Select Type"
                    >
                    </Select>
                </Form.Item>
                <Form.Item
                    name='material'
                    style={{
                        width: '100%',
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please select material!',
                        },
                    ]}
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                        placeholder="Fabric/Material"
                    >
                    </Select>
                </Form.Item>
                <Form.Item
                    style={{
                        width: '100%',
                    }}
                >
                    <TextArea placeholder='Product Description' />
                </Form.Item>
                <Form.Item
                    label='Upload Images'
                    style={{ width: '100%' }}
                    rules={[
                        {
                            required: true,
                            message: 'Please upload atleast one image!',
                        },
                    ]}
                >
                    <Upload
                        action={'http://localhost:3000/'}
                        listType="picture-card"
                        maxCount={5}
                        beforeUpload={(file) => {
                            if (file.size > 100000) {
                                document.getElementById('errorMsg').textContent = 'File size should be less than 100MB'
                                return Upload.LIST_IGNORE
                            }
                        }}
                    >
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                    <Text type="danger" id='errorMsg'></Text>
                </Form.Item>

                <Form.Item>
                    <Button className='btn-gold' size='large' type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>

            </Form>
        </Layout>
    )
}

export default AddOfferProduct