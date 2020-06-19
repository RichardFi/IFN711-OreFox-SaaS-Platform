import React from 'react';
import { SupportWrapper } from './style';
import { Form, Input, Button, message, Typography } from 'antd';
import storageUtils from '../../utils/storageUtils';
import { useHistory } from "react-router-dom";

//import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Title } = Typography;

/*
Support page
*/
export default function Support() {
    const userProfile = storageUtils.getUser()
    const history = useHistory()

    const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 7 },
    };

    //const { loginStatus } = this.props;
    const onFinish = values => {
        values.email = userProfile.email
        fetch("/sendEmail", {
            method: 'POST', // or 'PUT'
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(values),
          })
        .then(res => res.json())
        .then(message.success(`Issues have been sent!`))
        .catch(e => message.error(`Error`))
        history.push("/home")
    };

    return (
        <SupportWrapper>
            <Form
                name="profile"
                {...formItemLayout}
                onFinish={onFinish}
                style={{ margin: "50px 0" }}
            >
                <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
                    <Title level={4}>Please enter your issues, we will give you feedback via email.</Title>
                </Form.Item>
                <Form.Item
                    label="Title"
                    name="title"
                >
                    <Input
                        />
                </Form.Item>

                <Form.Item
                    label="Content"
                    name="content"
                >
                   <Input.TextArea />

                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 14 }}>
                    <Button type="primary" htmlType="submit">
                        Send
                    </Button>
                </Form.Item>
            </Form>
        </SupportWrapper>
    )
}