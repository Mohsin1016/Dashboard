import React from 'react'
import { Layout, Row, Col, DatePicker, Button, Divider } from 'antd'
import SoldItemsTable from '../../../components/home/SoldItemsTable'

const Reports = () => {
    return (
        <Layout className='layout' style={{ background: 'none' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Reports</h1>
            <Row>
                <Col className='make-report-container' style={{display: 'flex', gap: '1rem'}}>
                    <DatePicker placeholder='Start Date' />
                    <DatePicker placeholder='End Date' />
                    <Button className='btn-gold' type='primary'>Generate Report</Button>
                </Col>
            </Row>
            <Divider /> 
            <Row style={{width: '100%'}}>
                <SoldItemsTable/>
            </Row>
        </Layout>
    )
}

export default Reports