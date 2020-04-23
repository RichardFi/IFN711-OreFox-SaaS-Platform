import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends Component {
    render(){
        const { loginStatus } = this.props;
        if(!loginStatus) {
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="username" ref={(input) => {this.account = input}} />
                        <Input placeholder="password" type = "password" ref={(input) => {this.password = input}} />
                        <Button onClick={() => this.props.login(this.account, this.password)}>Log in</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else{
            return <Redirect to='/'></Redirect>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem){
        //console.log(accountElem.value, passwordElem.value);
        //console.log(isPlainObject(actionCreators.login(accountElem.value, passwordElem.value)));    
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
})


export default connect(mapState, mapDispatch)(Login);