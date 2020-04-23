import { fromJS } from 'immutable';

const defaultState = fromJS({
    historyList: []
});

export default(state = defaultState, action) => {
    switch(action.type) {
        case 'change_history_data':
            return state.merge({
                historyList: fromJS(action.historyList)
            })
        default:
            return state;
    }
}