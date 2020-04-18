import styled from 'styled-components';

export const HistoryWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 71px;
    height: 800px;
    background: #eee;
`;

export const ListWrapper = styled.div`
    width: 960px;
    margin: 10px auto;
    border: 1px solid #dcdcdc;
    background: #fff;
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
        margin-right:100px;
    }
`;

export const ListInfo = styled.div`
    width: 600px;
    float: right;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;
