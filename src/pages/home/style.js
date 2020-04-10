import styled from 'styled-components';

export const HomeWrapper = styled.div`
    left: 0;
    right: 0;
    height: 500px;
    top: 71px;
    background: url(${"https://www.mining-technology.com/wp-content/uploads/sites/8/2019/03/Fimiston-gold-mine.-Credit-Newmont-Mining.jpg"})
`

export const HomeTop = styled.div`
    margin: 0 auto;
    padding-top: 180px;
`

export const HomeTopic = styled.div`
    text-align: center;
    margin: auto;
    padding: 24px 12px;
    width: 600px;
    border: 1px solid #f0f0f0;
    background-color: rgba(255,255,255,0.8);
    font-size: 60px;
    font-weight: 700;
    color: rgba(224,103,47,1);
`

export const Portals = styled.div`
    left: 0;
    right: 0;
    height: 290px;
    width: 100%;
    border: 1px solid #f0f0f0;
`

export const PortalsTxt = styled.div`
    text-align: center;
    margin: auto;
    padding: 60px 12px;
    font-size: 20px;
    font-weight: 400;
    color: #777777;
`

export const PortalsButton = styled.div`
    text-align: center;
    width: 15%;
    line-height: 40px;
    border-radius: 5px;
    border: 2px solid #E6732D;
    font-weight: bold;
    color: #E6732D;
    padding: 5px 10px;
    &.client{
        float: left;
        margin-left: 30%;
    }
    &.analyst{
        float: right;
        margin-right: 30%;
    }
`