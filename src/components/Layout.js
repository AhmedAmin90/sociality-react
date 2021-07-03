import React , {Component} from 'react';
import Buttons from './Buttons';
import Tabs from './Tabs';
import Cards from './Cards';

class Layout extends Component {
    render(){
        return(
            <div>
                <Tabs />
                <Buttons />
                <div className="Layout-content-area">
                    <ul className="Layout-status-menu"></ul>
                    <Cards />
                </div>
            </div>
        )
    }
}

export default Layout