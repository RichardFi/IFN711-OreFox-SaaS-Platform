import * as constants from './constants';
import { reqLogin } from '../../../api';
import memoryUtils from "../../../utils/memoryUtils";
import storageUtils from '../../../utils/storageUtils';

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

        if (result.code===0){
            const user = result.data;
            memoryUtils.user = user;
            storageUtils.saveUser(user);

            dispatch(changeLogin());
        }else {
            alert('Wrong username or password, please try again');
        }
    }
}