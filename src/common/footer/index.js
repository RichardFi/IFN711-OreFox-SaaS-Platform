import React, { Component } from 'react';
import { FooterWrapper, FooterNav, FooterLeft, FooterRight, NavItemLeft, NavItemRight } from './style';
class Footer extends Component{
    render() {
        return (
            <FooterWrapper>
                <FooterNav>
                    <FooterLeft>
                        <NavItemLeft>Home</NavItemLeft>
                        <NavItemLeft>About us</NavItemLeft>
                        <NavItemLeft>Other..</NavItemLeft>
                    </FooterLeft>
                    <FooterRight>
                        <NavItemRight><span className="iconfont">&#xf19d;</span></NavItemRight>
                        <NavItemRight><span className="iconfont">&#xe87a;</span></NavItemRight>
                        <NavItemRight><span className="iconfont">&#xe617;</span></NavItemRight>
                    </FooterRight>
                </FooterNav>
            </FooterWrapper>
        )
    }
}

export default Footer;