import { fromJS } from 'immutable';

const defaultState = fromJS({
    historyList: [{
        id: 1,
        title: "This is topic 1",
        desc: "This is decription 1",
        alt: "1",
        imgUrl: ''
    },{
        id: 2,
        title: "This is topic 2",
        desc: "This is description 2",
        alt: "2",
        imgUrl: ''
    },{
        id: 3,
        title: "This is topic 3",
        desc: "This is description 3",
        alt: "3",
        imgUrl: ''
    }]
});

export default(state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}