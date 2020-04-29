import React, { Component } from 'react';
import { ProfileWrapper, ProfileBox } from './style';
import { Form, Input, Button } from 'antd';
//import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Profile extends Component {
    render(){
        //const { loginStatus } = this.props;
        const onFinish = values => {
            alert("Success!");
          };
          const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
          };

        return(
            <ProfileWrapper>
                <ProfileBox>
                <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >

                            <Form.Item
                                label="Username"
                                name="username"
                            >
                                <Input
                                defaultValue="user_test"
                                placeholder="Username" />
                            </Form.Item>

                            <Form.Item
                                label="First Name"
                                name="First Name"
                            >
                                <Input
                                defaultValue="Yongrui"
                                placeholder="First Name" />
                            
                            </Form.Item>

                            <Form.Item
                                label="Last Name"
                                name="Last Name"
                            >
                                <Input
                                defaultValue="Pan"
                                placeholder="Last Name" />
                            
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="Email"
                            >
                                <Input
                                defaultValue="xxx@gmail.com"
                                placeholder="Email" />
                            
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" 
                                block="true">
                                    Update
                                </Button>
                            </Form.Item>
                        </Form>
                </ProfileBox>
            </ProfileWrapper>
        )
    }
}

export default Profile;