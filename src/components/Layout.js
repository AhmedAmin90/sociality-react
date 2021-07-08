import React , {Component} from 'react';
import Accordion from './Accordion';
import Switchingtabs from './Switchingtab';
import Tab from './Tab';
import Sections from './Sections';
import Status from './Status';
import logo from '../assests/imgs/logo.png';
import '../style/Layout.css';



class Layout extends Component {

    render(){
        return(
            <div className="Layout">
                <div className="row h-100">
                    
                    <div className="Layout-sidebar col-3">
                        <div className="Layout-sidebar-logo " >
                            <img src={logo}/>
                        </div>
                        <div className="row h-100">
                            <div className="Layout-tabs-area col-3 ">
                                <Switchingtabs />
                            </div>
                            <div className="Layout-btns-area p-0 col-9 ">
                                <Accordion />
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

