import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header'
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

class App extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App;
