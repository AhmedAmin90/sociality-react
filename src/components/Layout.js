import React , {Component} from 'react';
import Buttons from './Buttons';
import Tabs from './Tabs';
import Cards from './Cards';
import logo from '../assests/imgs/logo.png';
import '../style/Layout.css'

class Layout extends Component {
    render(){
        return(
            <div className="Layout">
                <div className="row h-100">
                    
                    <div className="Layout-sidebar col-3">
                        <div className="Layout-sidebar-logo" >
                            <img src={logo}/>
                        </div>
                        <div className="row h-100">
                            <div className="Layout-tabs-area col-3 border border-primary">
                                <Tabs />
                            </div>
                            <div className="Layout-btns-area col-9 ">
                                <Buttons />
                            </div>
                        </div>
                    </div>
               
                    <div className="col-9 border border-warning h-100">
                        <div className="Layout-content-area">
                            <ul className="Layout-status-menu"></ul>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Layout