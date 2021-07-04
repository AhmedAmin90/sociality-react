import React , {Component} from 'react';
import '../style/Tabs.css';
import logo from '../assests/imgs/logo-1.png'

class Tabs extends Component {
static defaultProps = {
    logo: logo
}

    state = {
        isClicked: false
    }

    handleClick = ({target})=>{
        this.setState({isClicked: !this.state.isClicked});
        
    }

    render(){
        const tabClicked = this.state.isClicked ? "Tabs-clicked" : "Tabs-notCliked";
        const hiddenDiv = this.state.isClicked ? "Tabs-div-show" : "Tabs-div-hide";
        return(
            <div className="Tabs">
                <div className={`Tabs-hidden ${hiddenDiv}`}></div>
                <img src={this.props.logo} onClick={this.handleClick} className={tabClicked} />
            </div>
        )
    }
}

export default Tabs