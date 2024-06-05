import React from 'react';
import { Modal, Form, Button, Input, Select, TimePicker, Typography, DatePicker, InputNumber, Layout, Row, Col, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title, Text } = Typography;

const SiteImages = () => {
  return (
    <Layout className='layout' style={{ background: 'none' }}>
      <Title level={2}>Site Images</Title>
      <Title level={4}>Upload Banners</Title>
      <Form
        size='large'
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        style={{ display: 'flex', alignItems: 'flex-start', gap: '2px', width: '100%' }}
      >
        <Form.Item
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
        <Form.Item
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
        <Form.Item
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
      </Form>
      <Title level={4}>Upload Product Page Banners</Title>
      <Form
        size='large'
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        style={{ display: 'flex', alignItems: 'flex-start', gap: '2px', width: '100%' }}
      >
        <Form.Item
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
      </Form>
    </Layout>
  )
}

export default SiteImages