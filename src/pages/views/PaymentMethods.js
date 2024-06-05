import React from 'react'
import { Modal, Form, Button, Input, Select, TimePicker, Typography, DatePicker, InputNumber, Layout, Radio } from 'antd';

const { Option } = Select;
const { Title } = Typography;
const { TextArea } = Input;
const PaymentMethods = () => {
  return (
    <Layout className='layout' style={{ background: 'none' }}>
    <Title level={2}>Payment Methods</Title>
    <Form
      size='large'
      name="basic"
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', width: '100%' }}
    >
      <label htmlFor="square" className='label heading'>Square</label>
      <Form.Item
        style={{ width: '100%' }}
        name="square"
      >
       <Radio value="square"> Enable Square </Radio>
      </Form.Item>
      <label htmlFor="api" className='label'>API/Token</label>
      <Form.Item
        style={{ width: '100%' }}
        name="api"
      >
        <Input placeholder='API/Token' style={{ width: '100%' }} />
      </Form.Item>
      <label htmlFor="locationId" className='label'>Location ID</label>
      <Form.Item
        style={{ width: '100%' }}
        name="locationId"
      >
        <Input placeholder='Location ID' style={{ width: '100%' }} />
      </Form.Item>
      <label htmlFor="paypal" className='label heading'>Paypal</label>
      <Form.Item
        style={{ width: '100%' }}
        name="paypal"
      >
       <Radio value="paypal"> Enable Paypal </Radio>
      </Form.Item>
      <label htmlFor="api" className='label'>Paypal Client ID</label>
      <Form.Item
        style={{ width: '100%' }}
        name="clientId"
      >
        <Input placeholder='Client ID' style={{ width: '100%' }} />
      </Form.Item>
      <label htmlFor="paypalSecret" className='label'>Paypal Secret</label>
      <Form.Item
        style={{ width: '100%' }}
        name="paypalSecret"
      >
        <Input placeholder='Paypal Secret' style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
      style={{marginLeft: '50%'}}
      >
        <Button className='btn-gold' size='large' type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  </Layout>
  )
}

export default PaymentMethods