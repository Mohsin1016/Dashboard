import React from 'react'
import { Form, Button, Input, Typography, Layout } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const Profile = () => {
    return (
        <Layout className='layout' style={{ background: 'none' }}>
            <Title level={2}>Profile</Title>
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
                <label htmlFor="email" className='label'>Email</label>
                <Form.Item
                    style={{ width: '100%' }}
                    name="email"
                >
                    <Input placeholder='Email' defaultValue='admin@info.com' style={{ width: '100%' }} />
                </Form.Item>
                
                <label htmlFor="password" className='label'>Password</label>
                <Form.Item
                    style={{ width: '100%' }}
                    name="password"
                >
                    <Input type='password' placeholder='Password' defaultValue='Payoneers of E-commerce' style={{ width: '100%' }} />
                </Form.Item>
                <label htmlFor="confirnPass" className='label'>Confirm Password</label>
                <Form.Item
                    style={{ width: '100%' }}
                    name="password"
                >
                    <Input type='password' placeholder='Confirm Password' defaultValue='Payoneers of E-commerce' style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    style={{ marginLeft: '50%' }}
                >
                    <Button className='btn-gold' size='large' type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    )
}

export default Profile