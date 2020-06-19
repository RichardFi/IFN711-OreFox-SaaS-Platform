import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, LoginHeader, Logo } from './style';
import { actionCreators } from './store';
import { Form, Input, Button, Tabs, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//import storageUtils from '../../utils/memoryUtils';
import 'antd/dist/antd.css';
import memoryUtils from '../../utils/memoryUtils';

//import { reqLogin } from '../../api';
const { TabPane } = Tabs;

/*
Login and Register page
*/
class Login extends Component {
    render() {

        const user = memoryUtils.user;
        if (user._id) {
            // if already log in, redirect to home page
            return <Redirect to='/' />
        }

        const onFinish = values => {
            this.props.login(values);
        };
        const onFinishFailed = errorInfo => {
            console.log('Wrong username or password, please try again!');
        };

        const onFinishRegister = values => {
            fetch("/register", {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(values),
              })
            .then(res => res.json())
            .then(message.success(`Register success!`))
            .then(window.location.reload())
            .catch(e => message.error(`Error`))
        };
        const onFinishRegisterFailed = errorInfo => {
            console.log('Please try again!');
        };

        return (
            <LoginWrapper>
                <LoginBox>
                    <LoginHeader>
                        <Logo href='/'></Logo>
                    </LoginHeader>
                    <Tabs defaultActiveKey="1" onChange={console.log(1)}>
                        <TabPane tab="Login" key="1">
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                        { required: true, message: 'Please input your Username!' },
                                        { min: 4, message: 'Username must be more than 4 characters!' },
                                        { max: 12, message: 'Username must be less than 4 characters!' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: 'User name can only consist of numbers, letters or underlines!' }
                                    ]}
                                >
                                    <Input ref={(input) => { this.account = input }}
                                        prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        { required: true, message: 'Please input your Password!' },
                                        { min: 4, message: 'Username must be more than 4 characters!' },
                                        { max: 12, message: 'Username must be less than 4 characters!' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: 'User name can only consist of numbers, letters or underlines!' }
                                    ]}
                                >
                                    <Input.Password allowClear
                                        ref={(input) => { this.password = input }}
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button"
                                        block="true">
                                        Log in
                                </Button>
                                </Form.Item>
                            </Form>
                        </TabPane>
                        <TabPane tab="Register" key="2">
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={onFinishRegister}
                                onFinishFailed={onFinishRegisterFailed}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                        { required: true, message: 'Please input your Username!' },
                                        { min: 4, message: 'Username must be more than 4 characters!' },
                                        { max: 12, message: 'Username must be less than 4 characters!' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: 'User name can only consist of numbers, letters or underlines!' }
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        { required: true, message: 'Please input your Password!' },
                                        { min: 4, message: 'Username must be more than 4 characters!' },
                                        { max: 12, message: 'Username must be less than 4 characters!' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: 'User name can only consist of numbers, letters or underlines!' }
                                    ]}
                                >
                                    <Input.Password allowClear
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    rules={[
                                        { type: 'email', required: true, message: 'Please input a valid email!' },
                                    ]}
                                >
                                    <Input
                                        placeholder="Email"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="firstName"
                                    rules={[
                                        {  required: true, message: 'Please input your first name!' },
                                    ]}
                                >
                                    <Input
                                        placeholder="First Name"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="lastName"
                                    rules={[
                                        {  required: true, message: 'Please input your first name!' },
                                    ]}
                                >
                                    <Input
                                        placeholder="Last Name"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button"
                                        block="true">
                                        Register
                                </Button>
                                </Form.Item>
                            </Form>
                        </TabPane>

                    </Tabs>
                </LoginBox>
            </LoginWrapper>
        )

    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(value) {
        //console.log(isPlainObject(actionCreators.login(accountElem.value, passwordElem.value)));
        dispatch(actionCreators.login(value));
    }
})


export default connect(mapState, mapDispatch)(Login);