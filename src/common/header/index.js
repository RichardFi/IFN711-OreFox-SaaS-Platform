import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem } from './style';
class Header extends Component{
    render() {
        return (
            <HeaderWrapper>
                <Logo href='/'></Logo>
                <Nav>
                    <NavItem className = 'left active'> Home</NavItem>
                    <NavItem className = 'left'> About us</NavItem>
                    <NavItem className = 'right'> Register</NavItem>
                    <NavItem className = 'right'> Login</NavItem>
                </Nav>
            </HeaderWrapper>
        )
    }
}

export default Header;