import React from 'react'
import { Form, Button, Layout, Typography, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import CountrySelector from '../../components/utils/CountrySelector';
import CountriesTable from '../../components/countries/CountriesTable';

const { Title, Text } = Typography;

const Countries = () => {
  return (
    <Layout className='layout' style={{ background: 'none' }}>
      <Title level={2}>Countries</Title>
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
          style={{ width: '30%' }}
          name="country"
          rules={[
            {
              required: true,
              message: 'Please select your country!',
            },
          ]}
        >
          <CountrySelector />
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
            maxCount={5}
            beforeUpload={(file) => {
              if (file.size > 100000) {
                document.getElementById('errorMsg').textContent = 'File size should be less than 100MB'
                return Upload.LIST_IGNORE
              }
            }}
          >
            <div>
              <div
                style={{
                  marginTop: 8,
                }}
              >
                <Button icon={<UploadOutlined />}>Upload Flag</Button>
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
      <CountriesTable />
    </Layout>
  )
}

export default Countries