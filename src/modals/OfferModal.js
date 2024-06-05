import React from 'react'
import { Modal, Form, Button, Input, Select, TimePicker, DatePicker, InputNumber } from 'antd';

const { Option } = Select;

const OfferModal = (props) => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };


    return (
        <Modal title='New Offer' open={props.show} footer={null} onCancel={props.close}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
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
                        style={{ width: '100%' }}
                        name="offerName"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter offer name!',
                            },
                        ]}
                    >
                        <Input placeholder='Offer Name' style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        name='offerType'
                        style={{
                            width: '100%',
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please select offer type!',
                            },
                        ]}
                    >
                        <Select
                            placeholder='Select Offer Type'
                            onChange={handleChange}
                        >
                            <Option value="flat">Flat</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name='offerMethod'
                        style={{
                            width: '100%',
                        }}
                        rules={[
                            {
                                required: true,
                                message: 'Please select offer method!',
                            },
                        ]}
                    >
                        <Select
                            placeholder='Select Offer Method'
                            onChange={handleChange}
                        >
                            <Option value="voucher">Voucher</Option>
                            <Option value="coupon">Coupon</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label='Start Date' rules={[{ required: true, message: 'Please  select start date and time' }]}>
                        <DatePicker />
                        <TimePicker />
                    </Form.Item>
                    <Form.Item label='End Date' rules={[{ required: true, message: 'Please  select end date and time' }]}>
                        <DatePicker />
                        <TimePicker />
                    </Form.Item>
                    <Form.Item
                        style={{ width: '100%' }}
                        name="discountAmount"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter discount amount!',
                            },
                        ]}
                    >
                        <InputNumber
                            placeholder='Discount Amount'
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
                    <Form.Item
                        style={{ width: '100%' }}
                        name="minAmount"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter minimum amount required in cart!',
                            },
                        ]}
                    >
                        <InputNumber
                            placeholder='Minimum Amount in Cart'
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
                            placeholder='Maximum Total Usage'
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
              
                    <Form.Item>
                        <Button className='btn-gold' size='large' type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}

export default OfferModal