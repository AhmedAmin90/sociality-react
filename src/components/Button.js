import React , {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import "../style/Buttons.css"
class Button extends Component {
    state = {
        isClicked: false,
        notification: 0
    }

    handleClick = ()=>{
        this.setState({isClicked: !this.state.isClicked});
    }

    handleListClick = ()=>{
    [...document.querySelectorAll('.Button-list-item')].forEach(item => {
        item.addEventListener('click', ()=> {
          let getOtherItems = document.querySelector('.Button-list-item-active');
          if (getOtherItems !== null) {
            getOtherItems.classList.remove('Button-list-item-active');
          }
          item.classList.add('Button-list-item-active')
        })
      })
    }


    

    render(){
        // const btnIconColor = this.state.isClicked ? "Button-icon-clicked" : "Button-icon-notClicked";
        const btnClickedStyle = this.state.isClicked ? "Button-clicked-style" : "";
        const btnClicked = this.state.isClicked ?  <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>;
        const ulShowHide = this.state.isClicked ? "Button-list-show" : "Button-list-hide";
        const ulText =  this.props.list ? this.props.list.map(item => {
            return <li key={uuidv4()} className="Button-list-item" onClick={this.handleListClick}> {item} </li>
                 

        }) : "";
        return(
            <div className="Button">
                <div className={`Buttons ${btnClickedStyle}`} onClick={this.handleClick}>
                    <div className="Button-icon-name">
                        <div className="Button-icon d-flex">
                         <img src={this.props.icon} className="Button-icon-image" alt={`${this.props.name} icon`} />
                        </div>
                    {/* <i className={`${this.props.icon} ${btnIconColor}`}></i>  */}
                    <span>{this.props.title}</span>
                    </div>
                    <div className="Button-plus-minus-icon">
                        {btnClicked}
                    </div>
                </div>
                    <ul className={ulShowHide}> 
                    <div className="Button-down-arrow"></div>
                        {ulText}
                    </ul>
            </div>
        )
    }
}

export default Button