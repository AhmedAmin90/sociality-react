import React , {Component} from 'react';
import Buttons from './Buttons';
import '../style/Tabs.css';
import logo from '../assests/imgs/logo-1.png'

class Tabs extends Component {
static defaultProps = {
    logo: logo
}

    state = {
        isClicked: false,
        notifictaion: true,
        buttons: [{
            id: 1,
            title: "summary", 
            icon: "fas fa-laptop-code"
        } ,
        {
            id:2,
            title:"publish" ,
            icon:"fas fa-file-signature" 
        },
        {
            id:3,
            title:"engage",
            icon:"far fa-comments"
        },
        {
            id:4,
            title:"listen",
            icon:"fas fa-wave-square"
        } ,
        {
            id:5,
            title:"report",
            icon:"fas fa-chart-bar"
        }
    ]
    }



    handleClick = ()=>{
        this.setState({
        isClicked: !this.state.isClicked ,
        notifictaion: false});
        // const btnArea = document.querySelector('.Layout-btns-area');
        // btnArea.innerHTML = "";
        // const newDiv = document.createElement('div');
        // newDiv.innerHTML = <h1>Test</h1>
        // btnArea.insertAdjacentHTML('afterbegin' , <h1>Test</h1>)
    }

    render(){
        const tabClicked = this.state.isClicked ? "Tabs-clicked" : "Tabs-notCliked";
        const hiddenDiv = this.state.isClicked ? "Tabs-div-show" : "Tabs-div-hide";
        const notificationSeen = this.state.notifictaion && this.props.notifictaion ? "Tabs-notification-show" : "Tabs-notification-hide" 
        return(
            <div className="Tabs">
                <div className={`Tabs-hidden ${hiddenDiv}`}></div>
                <div className="Tabs-img">
                    <div className={notificationSeen}>{this.props.notifictaion}</div>
                    <img src={this.props.logo} onClick={this.handleClick} className={tabClicked} />
                </div>
            </div>
        )
    }
}

export default Tabs