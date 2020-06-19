import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const Logo = styled.a`
    display: flex;
    margin: 0 auto;
    width: 55px;
    height: 60px;
    background: url(${logoPic});
    background-size: contain;
`;

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)
`

export const LoginBox = styled.div`
    width: 420px;
    height: 320px;
    margin: auto;
    margin-top: 15vh;
    padding-top: 20px;
    background #fff;
    .login-form{
        .ant-form-item{
            padding-top: 10px;
        }
    }
`

export const LoginHeader = styled.div`
    display: block;
    text-align:center;
    line-height: 60px;
    margin-bottom: 30px;
    padding: 0 10px;
    font-size: 25px;
    font-weight: bold;
`