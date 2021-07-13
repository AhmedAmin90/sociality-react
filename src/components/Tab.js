import React , {Component} from 'react';
import '../style/Tab.css';
import logo from '../assests/imgs/logo-1.png'

class Tab extends Component {
static defaultProps = {
    logo: logo
}

    state = {
        isClicked: false,
        notifictaion: true,
    }

    handleClick = ()=>{
        this.setState({
        isClicked: !this.state.isClicked ,
        notifictaion: false});
    }

    handle = () => {
        this.props.tabClick(this.props.name);
        this.props.tabStyle(this.props.id);
    }


    render(){
        const tabClicked = this.props.isClicked  ? "Tabs-clicked tab-active" : "Tabs-notCliked";
        const hiddenDiv = this.props.isClicked  ?  "Tabs-div-show " : "Tabs-div-hide";
        const notificationSeen = this.state.notifictaion && this.props.notifictaion ? "Tabs-notification-show" : "Tabs-notification-hide";
        return(
            <div className="Tabs" onClick={this.handle}>
                <div className={`Tabs-hidden ${hiddenDiv}`}></div>
                <div className="Tabs-img">
                    <div className={notificationSeen}>{this.props.notifictaion}</div>
                    <img src={this.props.logo} alt={`${this.props.name} logo`} onClick={this.handleClick} className={tabClicked}/>
                </div>
            </div>
        )
    }
}

export default Tab