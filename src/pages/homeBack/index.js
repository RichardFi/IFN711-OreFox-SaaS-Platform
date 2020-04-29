import React, { Component } from 'react';
import memoryUtils from '../../utils/memoryUtils';
import { Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import LeftNav from '../../common/leftNav';
import Header from '../../common/backHeader';

const { Footer, Sider, Content } = Layout;

class homeBack extends Component {
    render(){
        const user = memoryUtils.user;
        if(!user || !user._id){
            return <Redirect to='/login'/>
        }
        return(
            <div>
            <Layout style={{minHeight: '100vh'}}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                <Header>Header</Header>
                <Content style={{backgroundColor: '#fff'}}>Content</Content>
                <Footer style={{textAlign: 'center', color:'#ccc'}}>©2020 Created by IFN711 Group 97</Footer>
                </Layout>
            </Layout>
            </div>
        )
    }
}

export default homeBack;