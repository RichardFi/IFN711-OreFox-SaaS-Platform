import React from 'react';
import { SupportWrapper } from './style';
import { Form, Input, Button, message, Typography } from 'antd';
import storageUtils from '../../utils/storageUtils';
import { useHistory } from "react-router-dom";

//import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Title } = Typography;

export default function Payment() {
    const userProfile = storageUtils.getUser()
    const history = useHistory()

    const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 7 },
    };

    //const { loginStatus } = this.props;
    const onFinish = values => {
        message.success('Billing details saved successfully')
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
                    <Title level={3}>Billing Details</Title>
                </Form.Item>
                <Form.Item
                    label="Card Number"
                    name="card"
                    initialValue={5217290000000000}
                    type="password"
                >
                    <Input.Password
                        />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                    initialValue={'Yongrui Pan'}
                >
                   <Input />

                </Form.Item>

                <Form.Item
                    label="Expires"
                    name="expires"
                    initialValue={'1/23'}
                >
                   <Input />

                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 14 }}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </SupportWrapper>
    )
}