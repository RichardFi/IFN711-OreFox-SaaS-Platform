import React, { Component } from 'react';
import memoryUtils from '../utils/memoryUtils';
import { Redirect } from 'react-router-dom';

class homeBack extends Component {
    render(){
        const user = memoryUtils.user;
        if(!user._id){
            return <Redirect to='/login'/>
        }
        return(
        <div>Hello {user.username}</div>
        )
    }
}

export default homeBack;