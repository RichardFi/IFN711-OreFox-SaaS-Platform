import React, { Component } from 'react';
import { HomeWrapper, HomeTop, HomeTopic, Portals, PortalsTxt, PortalsButton } from './style';

class Home extends Component {
    render(){
        return(
            <div>
                <HomeWrapper>
                    <HomeTop>
                    </HomeTop>
                    <HomeTopic>
                        OreFox SaaS Platform.
                    </HomeTopic>
                </HomeWrapper>
                <Portals>
                    <PortalsTxt>
                        Please select one of the following to be redirected to your account portal.
                    </PortalsTxt>
                    <PortalsButton className="client">
                        <span className="iconfont">&#xe625; </span>
                        Client Portal
                    </PortalsButton>
                    <PortalsButton className="analyst">
                        <span className="iconfont">&#xe600; </span>
                        Analyst Portal
                    </PortalsButton>
                </Portals>
            </div>
        )
    }
}

export default Home;