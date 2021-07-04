import React , {Component} from 'react';
import Buttons from './Buttons';
import Tabs from './Tabs';
import Cards from './Cards';
import logo from '../assests/imgs/logo.png';
import '../style/Layout.css';
import logoOne from '../assests/imgs/logo-1.png'
import logoTwo from '../assests/imgs/logo-2.png'
import logoThree from '../assests/imgs/logo-3.png'
import logoFour from '../assests/imgs/logo-4.png'
import logoFive from '../assests/imgs/logo-5.png'
import logoSix from '../assests/imgs/logo-6.png'


class Layout extends Component {
    state = {
        tabs: [
        {
            id: 1,
            name: "",
            logo: logoOne
        },
        {
            id: 2,
            name: "",
            logo: logoTwo
        }
        ,
        {
            id: 3,
            name: "",
            logo: logoThree
        }
        ,{
            id: 4,
            name: "",
            logo: logoFour
        },
        {
            id: 5,
            name: "",
            logo: logoFive
        },
        {
            id: 6,
            name: "",
            logo: logoSix
        }
    ],
        posts: {
            id: 0 ,
            companyName: "",
            text: "",
            socialPlatform: ""
        }
    }


    render(){
        const tabs = this.state.tabs.map(tab => (
            <Tabs key={tab.id} logo={tab.logo} name={tab.name} />
        ))
        return(
            <div className="Layout">
                <div className="row h-100">
                    
                    <div className="Layout-sidebar col-3">
                        <div className="Layout-sidebar-logo" >
                            <img src={logo}/>
                        </div>
                        <div className="row h-100">
                            <div className="Layout-tabs-area col-3 border border-primary">
                                {tabs}
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