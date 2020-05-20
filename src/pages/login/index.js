import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, LoginHeader, Logo } from './style';
import { actionCreators } from './store';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//import storageUtils from '../../utils/memoryUtils';
import 'antd/dist/antd.css';
import memoryUtils from '../../utils/memoryUtils';
//import { reqLogin } from '../../api';

class Login extends Component {
    render(){
        const user = memoryUtils.user;
        if(user._id) {
            return <Redirect to='/' />
        }
        //const { loginStatus } = this.props;
        const onFinish = values => {
            this.props.login(values);
          };
          const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
          };
/*  
        this.props.form.validateFields(async (err,values) =>{
            if(!err){
                const {username, password} = values;
                const response = await reqLogin(username, password);
                const result = response.data;
                if (result.status===0){
                    console.log('success');
                } else{
                    console.erro(result.msg);
                }
            }
        });
*/
        
            return(
                <LoginWrapper>
                    <LoginBox>
                        <LoginHeader>
                            <Logo href='/'></Logo>
                        </LoginHeader>
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
                                <Input ref={(input) => {this.account = input}} 
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
                                ref={(input) => {this.password = input}}
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
                    </LoginBox>
                </LoginWrapper>
            )
        
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(value){
        //console.log(isPlainObject(actionCreators.login(accountElem.value, passwordElem.value)));
        dispatch(actionCreators.login(value));
    }
})


export default connect(mapState, mapDispatch)(Login);