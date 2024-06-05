import React from 'react';
import { Form, Button, Upload, Input, Modal, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage'; // Import Firebase Storage
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const SubCategoryModal = (props) => {
  const [form] = Form.useForm();

  const handleFormSubmit = async (values) => {
    try {
      const selectedImage = values.img[0]; // Access the first selected image
      const uniqId = uuidv4();
  
      // Upload the image to Firebase Storage
      const imageRef = firebase.storage().ref().child(selectedImage.name);
      await imageRef.put(selectedImage.originFileObj);
  
      // Get the image download URL
      const imageUrl = await imageRef.getDownloadURL();
  
      // Save the data to Firebase Realtime Database
      const response = await axios.post('https://login-b6e02-default-rtdb.firebaseio.com/SubCategories.json', {
        Category: values.Category,
        SubCategory: values.SubCategory,
        id: uniqId,
        imageUrl: imageUrl, // Save the image URL
      });

      if (response.status === 200) {
        // Update the state after successful saving
        
        props.fetchSubItems();
      } else {
        console.error('Error Saving SubCategory:', response.statusText);
      }
      const uniqueId = response.data.name;
      // Display a success message
      message.success('SubCategory saved successfully with ID' +uniqueId);
  
      // Close the modal
      props.close();
    } catch (error) {
      console.error('Error saving category:', error);
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
          onFinish={handleFormSubmit}
          autoComplete="off"
          style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}
        >
          <Form.Item
            style={{ width: '100%' }}
            name="Category"
            rules={[
              {
                required: true,
                message: props.validationMessage,
              },
            ]}
          >
            <Input placeholder="Category" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            style={{ width: '100%' }}
            name="img"
            valuePropName="fileList"
            getValueFromEvent={(e) => e && e.fileList}
            rules={[
              {
                required: true,
                message: props.validationMessage,
              },
            ]}
          >
            <Upload beforeUpload={() => false} listType="picture">
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            style={{ width: '100%' }}
            name="SubCategory"
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
  );
};

export default SubCategoryModal;

