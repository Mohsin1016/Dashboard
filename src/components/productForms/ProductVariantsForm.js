import React from 'react'
import { Form, Button, Input } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ProductVariantsForm = (props) => {
    return (
        <>
            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Row>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        size='large'
                    >
                        <Form.Item
                            label="Add Color"
                            name="color"
                        >
                            <Input placeholder='Add Color' />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 14,
                                span: 16,
                            }}
                        >
                            <Button className='btn-gold' type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
                <Row>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        size='large'
                    >
                        <Form.Item
                            label="Add Size"
                            name="size"
                        >
                            <Input placeholder='Add Size' />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 14,
                                span: 16,
                            }}
                        >
                            <Button className='btn-gold' type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
                <Row>
                <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        size='large'
                    >
                        <Form.Item
                            label="Add Type"
                            name="type"
                        >
                            <Input placeholder='Add Type' />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 14,
                                span: 16,
                            }}
                        >
                            <Button className='btn-gold' type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
                <Row>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        size='large'
                    >
                        <Form.Item
                            label="Add Material"
                            name="fm"
                        >
                            <Input placeholder='Add Material' />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 14,
                                span: 16,
                            }}
                        >
                            <Button className='btn-gold' type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default ProductVariantsForm