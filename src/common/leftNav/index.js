import React, { Component } from 'react';
import { LeftNavWrap, NavHeader } from './style';
import logo from '../../statics/logo.png';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
    //AppstoreOutlined,
    //MenuUnfoldOutlined,
    //MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    HomeOutlined
} from '@ant-design/icons';

const SubMenu = Menu.SubMenu;

/*
left navigation bar of the layout
*/
class LeftNav extends Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <LeftNavWrap>
                <Link to='/home'>
                    <NavHeader>
                        <img src={logo} alt="" />
                        <h1>OreFox Platform</h1>
                    </NavHeader>
                </Link>
                <Menu
                    defaultSelectedKeys={['0']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="0">
                        <Link to='/mainHome'>
                            <HomeOutlined />
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <DesktopOutlined />
                                <span>Account</span>
                            </span>
                        }
                    >
                        <Menu.Item key="1"><Link to='/profile'>Profile</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/payment'>Make payment</Link></Menu.Item>
                        
                    </SubMenu>
                    <Menu.Item key="4">
                        <Link to='/upload'>
                            <PieChartOutlined />
                            <span>Upload Data</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to='/history'>
                            <ContainerOutlined />
                            <span>Analysis History</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to='/support'>
                            <MailOutlined />
                            <span>Support</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </LeftNavWrap>
        )
    }
}

export default LeftNav;