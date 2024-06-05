import React from 'react'
import { Modal, Select } from 'antd';

const { Option } = Select;

const OrderHistoryModal = (props) => {

    return (
        <Modal title={props.title} open={props.show} footer={null} onCancel={props.close}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <h1> Order History View Modal</h1>
            </div>
        </Modal>
    )
}

export default OrderHistoryModal