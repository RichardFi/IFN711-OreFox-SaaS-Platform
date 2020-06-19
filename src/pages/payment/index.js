import React from 'react';
import { SupportWrapper } from './style';
import { Form, Input, Button, message, Typography } from 'antd';
import storageUtils from '../../utils/storageUtils';

//import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Title } = Typography;

/*
Make payment page
*/
export default function Payment() {
    const userProfile = storageUtils.getUser()

    const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 7 },
    };

    //const { loginStatus } = this.props;
    const onFinish = values => {
        fetch("/paymentUpdate", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(values),
          })
        .then(res => res.json())
        .then(res => storageUtils.saveUser(res.data))
        .then(message.success(`Payment details updated`))
        .catch(e => message.error(`Error`))
    };

    return (
        <SupportWrapper>
            <Form
                name="payment"
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
                    initialValue={userProfile["cardNumber"]}
                    type="password"
                >
                    <Input.Password
                        />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                    initialValue={userProfile["cardHolderName"]}
                >
                   <Input />

                </Form.Item>

                <Form.Item
                    label="Expires"
                    name="expires"
                    initialValue={userProfile["expires"]}
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