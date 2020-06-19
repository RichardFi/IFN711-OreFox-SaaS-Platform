import React from 'react';
import { HeaderWrap, HeaderTop, HeaderBottom, HeaderBottomLeft, HeaderBottomRight } from './style';
import { Modal } from 'antd';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
import { useHistory } from "react-router-dom";

/*
 the header of the home page
 */
function BackHeader() {
    const history = useHistory()

    const logout = () => {
        Modal.confirm({
            content: 'Do you want to logout?',
            onOk() {
                storageUtils.removeUser();
                memoryUtils.user = {};
                history.push("/history")
            }
        })
    }

    //const title = getTitle();
    return (
        <HeaderWrap>
            <HeaderTop>
                <span>Welcome, {storageUtils.getUser().username}</span>
                <a href="javacript:" onClick={logout}>Logout</a>
            </HeaderTop>
            <HeaderBottom>
                <HeaderBottomLeft>

                </HeaderBottomLeft>
                <HeaderBottomRight>
                </HeaderBottomRight>
            </HeaderBottom>
        </HeaderWrap>
    )

}

export default BackHeader;