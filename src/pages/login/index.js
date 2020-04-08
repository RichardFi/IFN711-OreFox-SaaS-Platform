import React, { Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends Component {
    render(){
        return(
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>Log in</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

export default Login;