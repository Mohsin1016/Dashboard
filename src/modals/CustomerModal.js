import React from 'react'
import { Modal, Form, Button, Input, message } from 'antd';
// import CountrySelector from '../components/utils/CountrySelector';
import firebase from 'firebase/compat/app'; // Import from 'firebase/compat/app'
import 'firebase/compat/auth'; // Import other Firebase services you plan to use
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const CustomerModal = (props) => {
  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };

  const handleFormSubmit = async (values) => {
    try {
      const uniqId = uuidv4();
      // Create a new user in Firebase Authentication
      await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);

      // Send a POST request to save the user data to Firebase Realtime Database
      await axios.post('https://login-b6e02-default-rtdb.firebaseio.com/users.json', {
        username: values.username,
        email: values.email,
        phoneNo: values.phoneNo,
        id: uniqId,
      });

      // Display a success message
      message.success('User created and data saved successfully');
    } catch (error) {
      console.error('Error creating user and saving data:', error);
      message.error('Error creating user and saving data');
    }
  };


  return (
    <Modal title={props.title} open={props.show} footer={null} onCancel={props.close}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Form
          size='large'
          name="basic"
          onFinish={handleFormSubmit}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}
        >
          <Form.Item
            style={{ width: '100%' }}
            name="username"
            rules={[
              {
                required: true,
                message: 'Please enter first name!',
              },
            ]}
          >
            <Input placeholder='User Name' style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            style={{ width: '100%' }}
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter email!',
              },
            ]}
          >
            <Input type='email' placeholder='Email' style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            style={{ width: '100%' }}
            name="phoneNo"
            rules={[
              {
                required: true,
                message: 'Please enter phone no!',
              },
            ]}
          >
            <Input placeholder='Phone No' style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            style={{ width: '100%' }}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter phone no!',
              },
            ]}
          >
            <Input placeholder='password' style={{ width: '100%' }} />
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

export default CustomerModal
