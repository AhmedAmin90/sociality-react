import React , {Component} from 'react';
import axios from 'axios';
import Buttons from './Buttons';
import Tabs from './Tabs';
import Sections from './Sections';
import Cards from './Cards';
import Status from './Status';
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
            logo: logoOne,
            not: 10
        },
        {
            id: 2,
            name: "",
            logo: logoTwo,
            not: 8
        }
        ,
        {
            id: 3,
            name: "",
            logo: logoThree,
            not: 0
        }
        ,{
            id: 4,
            name: "",
            logo: logoFour,
            not: 8
        },
        {
            id: 5,
            name: "",
            logo: logoFive,
            not: 0
        },
        {
            id: 6,
            name: "",
            logo: logoSix,
            not: 8
        }
    ],
    dates: {},
    isLoading: true
    }



    render(){

        const tabs = this.state.tabs.map(tab => (
            <Tabs key={tab.id} logo={tab.logo} name={tab.name} notifictaion={tab.not} tabClick={this.handleTabClick}/>
        ))

        return(
            <div className="Layout">
                <div className="row h-100">
                    
                    <div className="Layout-sidebar col-3">
                        <div className="Layout-sidebar-logo " >
                            <img src={logo}/>
                        </div>
                        <div className="row h-100">
                            <div className="Layout-tabs-area col-3 ">
                                {tabs}
                            </div>
                            <div className="Layout-btns-area p-0 col-9 ">
                               
                                <Buttons title="summary" icon="fas fa-laptop-code"/>
                                <Buttons title="publish" icon="fas fa-file-signature" />
                                <Buttons title="engage" icon="far fa-comments"/>
                                <Buttons title="listen" icon="fas fa-wave-square"/>
                                <Buttons title="report" icon="fas fa-chart-bar" />
                            </div>
                        </div>
                    </div>
               
                    <div className="Layout-content-area col-9 p-0 ">
                            <ul className="Layout-status-menu">
                                <Status color="#acacac" status="published" />
                                <Status color="#3ac183" status="scheduled" />
                                <Status color="#f7bf38" status="Need Approval" />
                                <Status color="#fb6450" status="Error" />
                                <Status color="#67b1f2" status="notes" />
                            </ul>
                        <div className="Layout-Cards-area row">
                            <Sections />
                                               
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Layout

