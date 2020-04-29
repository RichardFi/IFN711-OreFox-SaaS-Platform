import React, { Component } from 'react';
import { FooterWrapper, FooterNav, FooterLeft, FooterRight, NavItemLeft, NavItemRight } from './style';
class Footer extends Component{
    render() {        
        if(this.props.history.location.pathname==='/' || 
        this.props.history.location.pathname==='/history'||
        this.props.history.location.pathname==='/support'||
        this.props.history.location.pathname==='/profile'||
        this.props.history.location.pathname==='/payment'||
        this.props.history.location.pathname==='/mainHome'||
        this.props.history.location.pathname==='/upload'
        ){
            return null;
        }   
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