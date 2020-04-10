import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header'
import Footer from './common/footer';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail';
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont.js';

class App extends Component{
  render(){
    return (
      <Fragment>
        <GlobalStyle />
        <IconFont />
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
        </BrowserRouter>
        <Footer />
      </Fragment>
    )
  }
}

export default App;
