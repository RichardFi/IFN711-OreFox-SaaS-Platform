import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    height: 70px;
    border-bottom: 1px solid #f0f0f0;
    overflow: hidden;
`;

export const Logo = styled.a`
    float: left;
    margin-right: 20px;
    display: inline-block;
    width: 70px;
    height: 70px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 70px;
    padding: 0 15px;
    font-size: 20px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;