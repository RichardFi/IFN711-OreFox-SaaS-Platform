import React, { Component } from 'react';
import { ProfileWrapper, ProfileBox, InputBox, Input, Button } from './style';

class Profile extends Component {
    render(){
        return(
            <ProfileWrapper>
                <h1>My profile</h1>
                <ProfileBox>
                    <InputBox>
                        <p>First Name: </p>
                        <Input />
                    </InputBox>
                    <InputBox>
                        <p>Last Name: </p>
                        <Input />
                    </InputBox>
                    <InputBox>
                        <p>Email: </p>
                        <Input />
                    </InputBox>
                    <InputBox>
                        <p>Mobile: </p>
                        <Input />
                    </InputBox>
                    <InputBox>
                        <Button>Update</Button>
                    </InputBox>
                </ProfileBox>
            </ProfileWrapper>
        )
    }
}

export default Profile;