import React, { Component } from 'react';
import List from './components/List';
import { HomeWrapper, HomeLeft, HomeRight } from './style';

class Home extends Component {
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img'src="https://www.mining-technology.com/wp-content/uploads/sites/8/2019/03/Fimiston-gold-mine.-Credit-Newmont-Mining.jpg">
                    </img>
                    
                </HomeLeft>
                <HomeRight>
                    <List />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;