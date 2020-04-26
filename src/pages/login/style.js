import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 71px;
    height: 800px;
    background: #eee;
`

export const LoginBox = styled.div`
    width: 400px;
    height: 270px;
    margin: 80px auto;
    padding-top: 20px;
    background #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    .login-form{
        .ant-form-item{
            padding: 0 40px;
        }
    }
`

export const LoginHeader = styled.div`
    display: block;
    text-align:center;
    line-height: 30px;
    margin-bottom: 30px;
    padding: 0 10px;
    font-size: 25px;
    font-weight: bold;
`