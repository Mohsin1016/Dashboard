import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Select, Upload, InputNumber, message } from 'antd';
import firebase from 'firebase/compat/app';
import { UploadOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import 'firebase/compat/auth';
import 'firebase/compat/storage'; // Import Firebase Storage
import axios from 'axios';

const { Option } = Select;
const { TextArea } = Input;
// const { Text } = Typography

const BasicInformationForm = () => {
    const [SubItems, setSubItems] = useState([]);
    const [SubCat, setSubCat] = useState([]);
    const productTypes = [];
    const subCategories = ['Eastern', 'Western', 'Shawl', 'Shirt', 'Qurta']
    const children = [];
    const colorList = [];
    const Items  = [];
    const subcat  = [];
    
    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Pink']
    for (let i = 0; i < colors.length; i++) {
        colorList.push(<Option key={colors[i]}>{colors[i]}</Option>);
    }
    for (let i = 0; i < SubItems.length; i++) {
        Items.push(<Option key={SubItems[i].id}>{SubItems[i].title}</Option>);
    }
    for (let i = 0; i < SubCat.length; i++) {
        subcat.push(<Option key={SubCat[i].id}>{SubCat[i].SubCategory}</Option>);
    }
    

    const types = ['Stitched', 'UnStitched']
    const sizesList = [];
    const sizes = ['small', 'medium', 'large', 'extra large']

    for (let i = 0; i < sizes.length; i++) {
        sizesList.push(<Option key={sizes[i]}>{sizes[i]}</Option>);
    }


    for (let i = 0; i < subCategories.length; i++) {
        children.push(<Option key={subCategories[i]}>{subCategories[i]}</Option>);
    }

    for (let i = 0; i < types.length; i++) {
        productTypes.push(<Option key={types[i]}>{types[i]}</Option>);
    }


    const handleFormSubmit = async (values , index) => {
        try {
            const selectedImage = values.img[0]; // Access the first selected image
            // Generate a unique ID (UUID)
            const uniqId = uuidv4();

            // Upload the image to Firebase Storage
            const imageRef = firebase.storage().ref().child(selectedImage.name);
            await imageRef.put(selectedImage.originFileObj);

            // Get the image download URL
            const imageUrl = await imageRef.getDownloadURL();
            // Save the data to Firebase Realtime Database
            const response = await axios.post('https://login-b6e02-default-rtdb.firebaseio.com/Products.json', {
                
                Category: values.category,
                SubCategory: values.subCategory,
                Price: values.price,
                Name: values.Name,
                quantity: "1",
                id: uniqId ,
                imageUrl: imageUrl, // Save the image URL
            });

            // Get the generated unique ID from the response
            const uniqueId = response.data.name;

            // Display a success message
            message.success('Product saved successfully with ID: ' + uniqueId);
        } catch (error) {
            console.error('Error saving product:', error);
            message.error('Error saving product');
        }
    };

    useEffect(() => {
        async function fetchSubItems() {
            try {
                const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/Categories.json');
                const data = await response.json();
      
                if (response.ok) {
                  console.log("fff");
                    const Sub = Object.values(data || {});
                    setSubItems(Sub);
                } else {
                    console.error('Error fetching cart items:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        }
  
      fetchSubItems();
  }, []);
    useEffect(() => {
        async function fetchSubCategories() {
            try {
                const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/SubCategories.json');
                const data = await response.json();
                if (response.ok) {
                  console.log("fff");
                    const Sub = Object.values(data || {});
                    setSubCat(Sub);
                } else {
                    console.error('Error fetching cart items:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        }
  
      fetchSubCategories();
  }, []);


    return (
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
                name="Name"
                rules={[
                    {
                        required: true,
                        message: 'Please enter product name!',
                    },
                ]}
            >
                <Input placeholder='Product Name' style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                name='category'
                style={{
                    width: '100%',
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please select category name!',
                    },
                ]}
            >
               <Select
                    mode="tags"
                    style={{
                        width: '100%',
                    }}
                    placeholder="Select Available Categories"
                >
                    {Items}
                </Select>
            </Form.Item>
            <Form.Item
                name='subCategory'
                style={{
                    width: '100%',
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please select sub category name!',
                    },
                ]}
            >
                 <Select
                    mode="tags"
                    style={{
                        width: '100%',
                    }}
                    placeholder="Select Available Categories"
                >
                    {subcat}
                </Select>
            </Form.Item>
            <Form.Item
                name='sizes'
                style={{
                    width: '100%',
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please select atleast one size!',
                    },
                ]}
            >
                <Select
                    mode="tags"
                    style={{
                        width: '100%',
                    }}
                    placeholder="Select Available Sizes"
                >
                    {sizesList}
                </Select>
            </Form.Item>
            <Form.Item
                name='colors'
                style={{
                    width: '100%',
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please select color(s)!',
                    },
                ]}
            >
                <Select
                    mode="tags"
                    style={{
                        width: '100%',
                    }}
                    placeholder="Select Available Colors"
                >
                    {colorList}
                </Select>
            </Form.Item>
            <Form.Item
                name='stock'
                style={{
                    width: '100%',
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please enter number of items in stock!',
                    },
                ]}>
                <InputNumber
                    style={{
                        width: '100%',
                    }}
                    placeholder="Items in stock" />
            </Form.Item>
            <Form.Item
                name='price'
                style={{
                    width: '100%',
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please enter product price!',
                    },
                ]}>
                <InputNumber
                    style={{
                        width: '100%',
                    }}
                    placeholder="$"
                    defaultValue={20}
                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                />
            </Form.Item>
            <Form.Item
                name='type'
                style={{
                    width: '100%',
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please select type!',
                    },
                ]}
            >
                <Select
                    style={{
                        width: '100%',
                    }}
                    placeholder="Select Type"
                >
                    {productTypes}
                </Select>
            </Form.Item>
            <Form.Item
                name='material'
                style={{
                    width: '100%',
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please select material!',
                    },
                ]}
            >
                <Select
                    style={{
                        width: '100%',
                    }}
                    placeholder="Fabric/Material"
                >
                    {productTypes}
                </Select>
            </Form.Item>
            <Form.Item
                name='description'
                style={{
                    width: '100%',
                }}
            >
                <TextArea placeholder='Product Description' />
            </Form.Item>
            
            <Form.Item
                style={{ width: '100%' }}
                name="img"
                valuePropName="fileList"
                getValueFromEvent={(e) => e && e.fileList}
                rules={[
                    {
                        required: true,
                        message: "upload atleast one img",
                    },
                ]}
            >
                <Upload beforeUpload={() => false} listType="picture">
                    <Button icon={<UploadOutlined />}>Upload Image</Button>
                </Upload>
            </Form.Item>

            <Form.Item>
                <Button className='btn-gold' size='large' type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>

        </Form>
    )
}

export default BasicInformationForm