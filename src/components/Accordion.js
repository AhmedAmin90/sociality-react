import { faTextHeight } from '@fortawesome/free-solid-svg-icons';
import React , {Component} from 'react';
import Button from './Button';

class Accordion extends Component {
    //     state =[ {
    //         title:"summary",
    //         icon: "fas fa-laptop-code",
    //         clicked: false
    //     }, 
    //     {
    //         title:"publish",
    //         icon: "fas fa-file-signature",
    //         clicked: false,
    //         list: ["compose" , "feed"]
    //     },
    //     {
    //         title:"engage",
    //         icon: "far fa-comments",
    //         clicked: false
    //     },
    //     {
    //         title:"listen",
    //         icon: "fas fa-wave-square",
    //         clicked: false
    //     }, 
    //     {
    //         title:"report",
    //         icon: "fas fa-chart-bar",
    //         clicked: false
    //     }
    // ]
    // handleClick = ({target})=>{
    //     this.setState([...target.clicked])
    // }
    render(){
        return(
            <div>
                <Button title="summary" icon="fas fa-laptop-code" />
                <Button title="publish" icon="fas fa-file-signature" list={["compose" , "feed"]} />
                <Button title="engage" icon="far fa-comments"/>
                <Button title="listen" icon="fas fa-wave-square"/>
                <Button title="report" icon="fas fa-chart-bar"/>
            </div>
        )
    }
}

export default Accordion;