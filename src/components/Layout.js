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
        posts: {},
        postsDates: [],
        newPosts : [],
            }

    async componentDidMount(){
        const getData = await axios.get('./data.json');
        const data = await getData.data['posts_by_date'];
        // this.setState({
        // posts: {...data}});
        // this.setState({postsDates: Object.keys(data).reverse()})
    }

    // componentDidMount(){
    //     sectionData = // data from json
    // }
    handleTabChange = (newData , newDates) => {
        this.setState({
            newPosts: newData,
            postsDates: newDates
        })
    }
    render(){
        console.log(this.state.posts)
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
                                {/* <Switchingtabs handleTabChange={this.handleTabChange} /> */}
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
                            <Sections posts={this.state.newPosts} postsDates={this.state.postsDates}/>
                            {/* <Sections data={this.state.sectionData} />               */}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Layout

