import styled from 'styled-components';

export const ProfileWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 71px;
    height: 800px;
    background: #eee;
    & h1{
        text-align: center;
        margin: 30px auto;
        font-size: 24px;
        font-weight: bold;
    }
`

export const ProfileBox = styled.div`
    width: 960px;
    height: 500px;
    margin: 10px auto;
    padding-top: 20px;
    background #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const InputBox = styled.div`
    width: 400px;
    height: 50px;
    margin: 20px auto;
    padding-top: 20px;
    background #fff;

`

export const Input = styled.input`
    display: block;
    width: 396px;
    height: 30px;
    margin-top:10px;
    line-height: 30px;
    color: #777;
`

export const Button = styled.div`
    float: right;
    width: 150px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #E6732D;
    border-radius: 5px;
    text-align: center;
`