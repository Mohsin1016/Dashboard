import React from 'react'
import { Form, Button, Input, Modal, message } from 'antd';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
// import Category from '../pages/views/Category';


const CategoryModal = (props) => {
  const [form] = Form.useForm();
  const handleFormSubmit = async (values) => {
    try {
      const uniqId = uuidv4();
      
      // Send a POST request to save the new category to Firebase
      const response = await axios.post('https://login-b6e02-default-rtdb.firebaseio.com/Categories.json', {
        title: values.title,
        id: uniqId,
      });
      console.log(response);
      if (response.status === 200) {
        // Update the state after successful saving
   
        props.fetchSubItems();
      } else {
        console.error('Error Saving category:', response.statusText);
      }
      // Get the generated unique ID from the response
      const uniqueId = response.data.name;
      // Display a success message
      message.success('Category saved successfully with ID:' + uniqueId);

      // Close the modal
      props.close();
    } catch (error) {
      console.error('Error saving category :', error);
      message.error('Error saving category');
    }
  };


  return (
    <Modal title={props.title} open={props.show} footer={null} onCancel={props.close}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Form
          form={form}
          size='large'
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={handleFormSubmit} // Call handleFormSubmit on form submission
          autoComplete="off"
          style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}
        >
          <Form.Item
            style={{ width: '100%' }}
            name="title"
            rules={[
              {
                required: true,
                message: props.validationMessage,
              },
            ]}
          >
            <Input placeholder={props.inputPlaceholder} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Button className='btn-gold' size='large' type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
}

export default CategoryModal