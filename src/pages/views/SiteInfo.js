import React from 'react'
import { Form, Button, Input, Typography, Layout } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const SiteInfo = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Layout className='layout' style={{ background: 'none' }}>
      <Title level={2}>Site Info</Title>
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
        <label htmlFor="siteName" className='label'>Site Name</label>
        <Form.Item
          style={{ width: '100%' }}
          name="siteName"
        >
          <Input placeholder='Site Name' defaultValue='E-commerce Website ' style={{ width: '100%' }} />
        </Form.Item>
        <label htmlFor="siteDescription" className='label'>Site Description</label>
        <Form.Item
          name='siteDescription'
          style={{
            width: '100%',
          }}
        >
          <TextArea defaultValue='This is the description of E-commerce Website' placeholder='Site Description' rows={5} />
        </Form.Item>
        <label htmlFor="tagLine" className='label'>Tag Line</label>
        <Form.Item
          style={{ width: '100%' }}
          name="tagLine"
        >
          <Input placeholder='Site Name' defaultValue='Payoneers of E-commerce' style={{ width: '100%' }} />
        </Form.Item>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Social Links</h1>
        <label htmlFor="facebookLink" className='label'>Facebook</label>
        <Form.Item
          style={{ width: '100%' }}
          name="facebookLink"
        >
          <Input placeholder='Facebook Link' defaultValue='' style={{ width: '100%' }} />
        </Form.Item>
        <label htmlFor="twitterLink" className='label'>Twitter</label>
        <Form.Item
          style={{ width: '100%' }}
          name="twitterLink"
        >
          <Input placeholder='Twitter Link' defaultValue='' style={{ width: '100%' }} />
        </Form.Item>
        <label htmlFor="instaLink" className='label'>Instagram</label>
        <Form.Item
          style={{ width: '100%' }}
          name="instaLink"
        >
          <Input placeholder='Instagram Link' defaultValue='' style={{ width: '100%' }} />
        </Form.Item>
        <label htmlFor="youtubeLink" className='label'>Youtube</label>
        <Form.Item
          style={{ width: '100%' }}
          name="youtubeLink"
        >
          <Input placeholder='Youtube Link' defaultValue='' style={{ width: '100%' }} />
        </Form.Item>
        <label htmlFor="googleLink" className='label'>Google +</label>
        <Form.Item
          style={{ width: '100%' }}
          name="googleLink"
        >
          <Input placeholder='Google+ Link' defaultValue='' style={{ width: '100%' }} />
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

export default SiteInfo