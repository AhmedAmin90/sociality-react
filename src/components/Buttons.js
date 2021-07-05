import React , {Component} from 'react'
import "../style/Buttons.css"
class Buttons extends Component {
    state = {
        isClicked: false,
        notification: 0
    }

    handleClick = ()=>{
        this.setState({isClicked: !this.state.isClicked})
    }

    

    render(){
        const btnIconColor = this.state.isClicked ? "Button-icon-clicked" : "Button-icon-notClicked";
        const btnClickedStyle = this.state.isClicked ? "Button-clicked-style" : "";
        const btnClicked = this.state.isClicked ?  <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>;
        const notificationBtn = this.props.notification ? <div className="Buttons-notification-number">{this.props.notification} </div> :  btnClicked
        const ulShowHide = this.state.isClicked ? "Button-list-show" : "Button-list-hide";
        // const ulText =  this.props.list.map(item => {
        //     <ul>
        //         <li onClick={this.handleListClick}> {item} </li>
        //     </ul>
           
        // })
        return(
            <div className="Button">
                <div className={`Buttons ${btnClickedStyle}`} onClick={this.handleClick}>
                    <div className="Button-icon-name">
                    <i className={`${this.props.icon} ${btnIconColor}`}></i> 
                    <span>{this.props.title}</span>
                    </div>
                    <div className="Button-plus-minus-icon">
                        {notificationBtn}
                    </div>
                </div>
                    <ul className={ulShowHide}> 
                    <div className="Button-down-arrow"></div>

                        <li onClick={this.handleListClick}>Test</li> 
                        <li onClick={this.handleListClick}>Test</li>     
                    </ul>
            </div>
        )
    }
}

export default Buttons