import React , {Component} from 'react';
import axios from 'axios';
import Accordion from './Accordion';
import Switchingtabs from './Switchingtab';
import Tab from './Tab';
import Sections from './Sections';
import Status from './Status';
import logo from '../assests/imgs/logo.png';
import '../style/Layout.css';



class Layout extends Component {
    state = {
        postsDates: [],
        newPosts : [],
        }

    // Update state with the posts that we have to show:
    handleTabChange = (newData , newDates) => {
        this.setState({
            newPosts: newData,
            postsDates: newDates
        })
    }
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
                                <Switchingtabs clickedTab={this.handleTabChange} />
                            </div>
                            <div className="Layout-btns-area p-0 col-9 ">
                                <Accordion />
                            </div>
                        </div>
                    </div>
               
                    <div className="Layout-content-area col-9 p-0 ">
                            <ul className="Layout-status-menu">
                                <Status />
                            </ul>
                        <div className="Layout-Cards-area row">
                            {/* Pass state to section to show the correct cards: */}
                            <Sections posts={this.state.newPosts} postsDates={this.state.postsDates}/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Layout

