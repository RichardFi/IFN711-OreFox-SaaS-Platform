import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as historyReducer } from '../pages/history/store';
const reducer = combineReducers({
    history: historyReducer,
    login: loginReducer
});


export default reducer;