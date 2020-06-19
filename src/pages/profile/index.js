import React from 'react';
import { ProfileWrapper } from './style';
import { Form, Input, Button, message } from 'antd';
import storageUtils from '../../utils/storageUtils';
//import { UserOutlined, LockOutlined } from '@ant-design/icons';

/*
User profile page
*/
export default function Profile() {
    const userProfile = storageUtils.getUser()
    const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 7 },
    };

    //const { loginStatus } = this.props;
    const onFinish = values => {
        fetch("/profileUpdate", {
            method: 'POST', // or 'PUT'
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(values),
          })
        .then(res => res.json())
        .then(res => storageUtils.saveUser(res.data))
        .then(message.success(`Profile update saved!`))
        .catch(e => message.error(`Error`))
    };

    return (
        <ProfileWrapper>
            <Form
                name="profile"
                {...formItemLayout}
                onFinish={onFinish}
                style={{ margin: "50px 0" }}
            >

                <Form.Item
                    label="Username"
                    name="username"
                    initialValue={userProfile["username"]}
                    
                >
                    <Input
                        placeholder="Username" />
                </Form.Item>

                <Form.Item
                    label="First Name"
                    name="firstName"
                    initialValue={userProfile["firstName"]}
                >
                    <Input
                        placeholder="First Name" />

                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                    initialValue={userProfile["lastName"]}
                >
                    <Input
                        placeholder="Last Name" />

                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    initialValue={userProfile["email"]}
                >
                    <Input
                        placeholder="Email" />

                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 14 }}>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </ProfileWrapper>
    )
}