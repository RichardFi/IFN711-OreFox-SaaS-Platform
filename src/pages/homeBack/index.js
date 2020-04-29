import React, { Component } from 'react';
import memoryUtils from '../../utils/memoryUtils';
import { Redirect, Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';
import LeftNav from '../../common/leftNav';
import Header from '../../common/backHeader';
import History from '../history';
import Profile from '../profile';
import Support from '../support';
import Upload from '../upload';
import Payment from '../payment';
import MainHome from '../mainHome';

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
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Switch>
                            <Route path='/mainHome' component={MainHome}></Route>
                            <Route path='/profile' component={Profile}></Route>
                            <Route path='/payment' component={Payment}></Route>
                            <Route path='/upload' component={Upload}></Route>
                            <Route path='/history' component={History}></Route>
                            <Route path='/support' component={Support}></Route>
                            <Redirect to="/mainHome" />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center', color:'#ccc'}}>©2020 Created by IFN711 Group 97</Footer>
                </Layout>
            </Layout>
            </div>
        )
    }
}

export default homeBack;