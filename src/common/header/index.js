import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem } from './style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { constants } from '../../pages/login/store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';

/*
codes of old home page header, abandoned
*/
class Header extends Component{
    render() {
        const {login, logout} = this.props;
        if(this.props.history.location.pathname==='/'||
        this.props.history.location.pathname==='/history'||
        this.props.history.location.pathname==='/support'||
        this.props.history.location.pathname==='/profile'||
        this.props.history.location.pathname==='/payment'||
        this.props.history.location.pathname==='/mainHome'||
        this.props.history.location.pathname==='/upload'){
            return null;
        }   
        return (
            <HeaderWrapper>
                <Nav>
                    <Logo href='/marketing'></Logo>
                    <NavItem className = 'left active'> Home</NavItem>
                    <NavItem className = 'left'> About us</NavItem>
                    {
                        login ? 
                            <NavItem onClick={logout} className = 'right'> Log Out</NavItem>:
                            <Link to='/login'><NavItem className = 'right'> Register / Login</NavItem></Link>
                    }
                   
                </Nav>
            </HeaderWrapper>
        )
    }
}



const mapStateToProps = (state) =>{
    return{
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout() {
            dispatch(loginActionCreators.logout());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);