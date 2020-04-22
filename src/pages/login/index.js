import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
//import { actionCreators } from './store';
import axios from 'axios';
import * as constants from './store/constants';

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

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem){
        //console.log(accountElem.value, passwordElem.value);
        //console.log(isPlainObject(actionCreators.login(accountElem.value, passwordElem.value)));    
        //dispatch(actionCreators.login(accountElem.value, passwordElem.value));
        axios.get('./api/login.json?account=' + accountElem + '&password=' + passwordElem)
        .then((res) => {
            console.log(res);
            const result = res.data.data;
            if (result){
                dispatch(changeLogin());
            }else {
                alert('fail');
            }
        })
    }
})


export default connect(mapState, mapDispatch)(Login);