import React , {Component} from 'react';
import Button from './Button';
import axios from 'axios';
import '../style/Tab.css';
import logo from '../assests/imgs/logo-1.png'

class Tab extends Component {
static defaultProps = {
    logo: logo
}

    state = {
        isClicked: false,
        notifictaion: true,
    //     buttons: [{
    //         id: 1,
    //         title: "summary", 
    //         icon: "fas fa-laptop-code"
    //     } ,
    //     {
    //         id:2,
    //         title:"publish" ,
    //         icon:"fas fa-file-signature" 
    //     },
    //     {
    //         id:3,
    //         title:"engage",
    //         icon:"far fa-comments"
    //     },
    //     {
    //         id:4,
    //         title:"listen",
    //         icon:"fas fa-wave-square"
    //     } ,
    //     {
    //         id:5,
    //         title:"report",
    //         icon:"fas fa-chart-bar"
    //     }
    // ],
    // dates: {}
    }




    handleClick = ()=>{
        this.setState({
        isClicked: !this.state.isClicked ,
        notifictaion: false});
    }

    handle = (e) => {
        this.props.tabClick(this.props.name);
        this.props.tabStyle(this.props.id);

    }


    render(){
        const tabClicked = this.props.isClicked  ? "Tabs-clicked tab-active" : "Tabs-notCliked";
        const hiddenDiv = this.props.isClicked  ?  "Tabs-div-show " : "Tabs-div-hide";
        const notificationSeen = this.state.notifictaion && this.props.notifictaion ? "Tabs-notification-show" : "Tabs-notification-hide" 
        return(
            <div className="Tabs" onClick={this.handle}>
                <div className={`Tabs-hidden ${hiddenDiv}`}></div>
                <div className="Tabs-img">
                    <div className={notificationSeen}>{this.props.notifictaion}</div>
                    <a onClick={this.handleClick} className={tabClicked} >
                        <img src={this.props.logo} />
                    </a>
                </div>
            </div>
        )
    }
}

export default Tab