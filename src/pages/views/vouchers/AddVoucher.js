import React from 'react'
import { Modal, Form, Button, Typography, Input, Select, TimePicker, DatePicker, InputNumber, Layout } from 'antd';

const { Option } = Select;
const { Title } = Typography;
const { TextArea } = Input;

const AddVoucher = () => {
    return (
        <Layout className='layout' style={{ background: 'none' }}>
            <Title level={2}>Add Voucher</Title>
            <Form
                size='large'
                name="basic"
                initialValues={{
                    remember: true,
                }}
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}
            >
                <Form.Item
                    style={{ width: '100%' }}
                    name="voucherName"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter voucher title!',
                        },
                    ]}
                >
                    <Input placeholder='Voucher Title' style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    name='description'
                    style={{
                        width: '100%',
                    }}
                >
                    <TextArea placeholder='Voucher Description' />
                </Form.Item>

                <Form.Item
                    style={{ width: '100%' }}
                    name="amount"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter amount!',
                        },
                    ]}
                >
                    <InputNumber
                        placeholder='Amount'
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    style={{ width: '100%' }}
                    name="totalUsage"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter total usage!',
                        },
                    ]}
                >
                    <InputNumber
                        placeholder='Total Usage'
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item style={{width: '100%'}} rules={[{ required: true, message: 'Please  select expiry date' }]}>
                    <DatePicker placeholder='Expiry Date' style={{width: '100%'}} />
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

export default AddVoucher