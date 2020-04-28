import * as constants from './constants';
import { reqLogin } from '../../../api';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})

export const login = (user) => {
    return async dispatch => {
        const response = await reqLogin(user);
        const result = response.data;
        console.log('11', user);
        console.log(result);
        if (result.code===0){
            dispatch(changeLogin());
        }else {
            alert('fail');
        }
    }
}