import { combineReducers } from 'redux-immutable';
import { reducer as historyReducer } from '../pages/history/store';
const reducer = combineReducers({
    history: historyReducer
});


export default reducer;