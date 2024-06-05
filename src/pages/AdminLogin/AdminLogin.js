import React from 'react'
import './style.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const AdminLogin = () => {
    return (
        <div className='login-wrapper'>
            <h1 style={{color: "#F7B614", fontWeight: 'bold'}} >WELCOME ADMIN!</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                size='large'
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email"    style={{width: '350px'}}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        style={{width: '350px'}}
                    />
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="wwww.googole.com" style={{color: "#F7B614", fontWeight: 'bold'}}>
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit" className="login-form-button btn-gold">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AdminLogin