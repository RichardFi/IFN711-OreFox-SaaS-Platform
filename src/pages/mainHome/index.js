import React from 'react';
import { HomeWrapper } from './style';
import storageUtils from '../../utils/storageUtils';

/*
home page
*/
export default function MainHome() {
    return (
        <HomeWrapper>
            Welcome to OreFox Platform, {storageUtils.getUser().username}.
        </HomeWrapper>
    )
}
