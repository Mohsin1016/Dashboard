import React, { useState } from 'react'
import { Tabs } from 'antd';
import './style.css';
import BasicInformationForm from '../../../components/productForms/BasicInformationForm';
import ProductVariantsForm from '../../../components/productForms/ProductVariantsForm';
import Item from 'antd/lib/list/Item';

const Product = () => {

    return (
        <>
            <div className='tabs-wrapper'>
                <Tabs defaultActiveKey="1" className='tabs'>
                    <Tabs.TabPane tab="Basic Information" key="1" style={{width: '99%'}}>
                        <h1 style={{ fontWeight: 'bold' }}>Basic Information</h1>
                        <BasicInformationForm />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Product Features" key="2" style={{width: '99%'}}>
                        <h1 style={{ fontWeight: 'bold' }}>Product Features</h1>
                        <ProductVariantsForm />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Price & Stock" key="3" style={{width: '99%'}}>
                        Content of Tab Pane 3
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </>
    )
}

export default Product