import React , {Component} from 'react'
import "../style/Buttons.css"
class Buttons extends Component {
    state = {
        isClicked: false
    }

    handleClick = ()=>{
        this.setState({isClicked: !this.state.isClicked})
    }
    render(){
        const btnIconColor = this.state.isClicked ? "Button-icon-clicked" : "Button-icon-notClicked"
        const btnClickedStyle = this.state.isClicked ? "Button-clicked-style" : ""
        const btnClicked = this.state.isClicked ?  <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>
        return(
            <div className={`Buttons ${btnClickedStyle}`} onClick={this.handleClick}>
                <div className="Button-icon-name">
                <i className={`far fa-comments ${btnIconColor}`}></i>
                <span>Test</span>
                </div>
                <div className="Button-plus-minus-icon">
                    {btnClicked}
                </div>
                
            </div>
        )
    }
}

export default Buttons