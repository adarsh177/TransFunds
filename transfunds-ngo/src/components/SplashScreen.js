import React from 'react';
import {withRouter} from 'react-router-dom';

class SplashScreen extends React.Component{

    render(){
        return(
            <div className="MainContainer">
                <div className="MobileContainer MobileContainerFlow">
                    Hello there NGO! 
                </div>
            </div>
        );
    }
}

export default withRouter(SplashScreen);
