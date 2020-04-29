import React, { Component } from 'react';
import { LeftNavWrap, NavHeader } from './style';
import logo from '../../statics/logo.png';

class LeftNav extends Component {
    render(){
        return(
            <LeftNavWrap>
                <NavHeader>
                    <img src={logo} alt="" />
                    <h1>OreFox Platform</h1>
                </NavHeader>
            </LeftNavWrap>
        )
    }
}

export default LeftNav;