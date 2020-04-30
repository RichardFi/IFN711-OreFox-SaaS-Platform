import React, { Component } from 'react';
import { HeaderWrap, HeaderTop, HeaderBottom, HeaderBottomLeft, HeaderBottomRight } from './style';
import { Modal } from 'antd';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
//import { useLocation, 
    //useHistory, useRouteMatch 
//} from "react-router";

class BackHeader extends Component {
    logout(){
        Modal.confirm({
            content: 'Do you want to logout?',
            onOk(){
                storageUtils.removeUser();
                memoryUtils.user ={};
                
            }
        })
    }

    render(){
        //const title = getTitle();
        return(
            <HeaderWrap>
                <HeaderTop>
                    <span>Welcome, user_test</span>
                    <a href="javacript:" onClick={this.logout}>Logout</a>
                </HeaderTop>
                <HeaderBottom>
                    <HeaderBottomLeft>
                        Home
                    </HeaderBottomLeft>
                    <HeaderBottomRight>
                        <span></span>
                    </HeaderBottomRight>
                </HeaderBottom>
            </HeaderWrap>
        )
    }
}

export default BackHeader;