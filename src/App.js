import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './common/header'
import Footer from './common/footer';
import Home from './pages/home';
import Login from './pages/login';
import History from './pages/history';
import Profile from './pages/profile';
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont.js';
import store from './store';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <GlobalStyle />
        <IconFont />
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/profile' exact component={Profile}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/history' exact component={History}></Route>
        </BrowserRouter>
        <Footer />
      </Provider>
    )
  }
}

export default App;
