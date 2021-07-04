import React , {Component} from 'react';
import '../style/Tabs.css';
import logo from '../assests/imgs/logo-1.png'

class Tabs extends Component {
static defaultProps = {
    logo: logo
}

    state = {
        isClicked: false,
        notifictaion: true
    }

    handleClick = ()=>{
        this.setState({
        isClicked: !this.state.isClicked ,
        notifictaion: false});
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