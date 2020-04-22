import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, HistoryWrapper, ListWrapper } from './style';
//import { actionCreators } from './store';

class History extends Component {
    render(){
        return(
            <HistoryWrapper>
                <ListWrapper>
                    {
                        this.props.list.map((item) => {
                            return (
                                <ListItem key={item.get('id')}>
                                    <img className='pic' alt={item.get('alt')} src={item.get('imgUrl')}></img>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>    
                                </ListItem>
                            )
                        })
                    }
                </ListWrapper>
            </HistoryWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail();
    }
}

const mapState = (state) => ({
    list: state.get('history').get('historyList')
});

const mapDispatch = (dispatch) => ({
    getDetail(){
        
    }
})

export default connect(mapState, mapDispatch) (History);