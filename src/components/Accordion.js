import React , {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import IconOne from '../assests/icons/icon-1.png';
import IconTwo from '../assests/icons/icon-2.png';
import IconThree from '../assests/icons/icon-3.png';
import IconFour from '../assests/icons/icon-4.png';
import IconFive from '../assests/icons/icon-5.png';
import IconSix from '../assests/icons/icon-6.png';


class Accordion extends Component {
        state ={ buttons: [ {
            title:"summary",
            icon: IconTwo,
            clicked: false
        }, 
        {
            title:"publish",
            icon: IconThree,
            clicked: false,
            list: ["compose" , "feed"]
        },
        {
            title:"engage",
            icon: IconFour,
            clicked: false
        },
        {
            title:"listen",
            icon: IconFive,
            clicked: false
        }, 
        {
            title:"report",
            icon: IconSix,
            clicked: false
        }
    ]}

    handleClick = (title)=>{
        const clickedBtn = this.state.buttons.find(btn => btn.title === title);
        clickedBtn.clicked = !clickedBtn.clicked;
        const otherBtns = this.state.buttons.filter(btn=> btn.title !== title);
        otherBtns.forEach(btn=> {
            btn.clicked = false
        })
        this.setState({buttons: [...this.state.buttons]})
    }

    render(){
        const renderBtns = this.state.buttons.map(btn=>{
            return <Button key={uuidv4()}  isClicked={btn.clicked} handleClick={this.handleClick} title={btn.title} icon={btn.icon} list={btn.list} />
        }) 
        return(
            <div>
                <div className="Buttons p-0">
                    <div className="Button-icon-name">
                        <div className="Button-icon d-flex">
                            <img src={IconOne} alt={`notification icon`} className="Button-icon-image notification-icon"/>
                        </div>
                        <span> notification </span>
                    </div>
                    <div className="Buttons-notification-number">{this.props.notification} </div> 
                </div>
                {renderBtns}
            </div>
        )
    }
}

export default Accordion;