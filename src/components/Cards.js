import React , {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


class Cards extends Component {

    //  componentDidMount(){
    //    fetch('./data.json')
    //    .then((res)=> {
    //     res.clone().json()})
    //    .then((data)=> {
    //     console.log(data)
    //    })
    // }
    render(){
        return(
            <div className="Card-body">
               <div className="Card-social-icon">

               </div>
               <div className="Card-content">
                    <div className="Card-date">
                        <p>Date</p>
                        <ul>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                        </ul>
                    </div>
                    <p>Text</p>
                    <img />
                    <ul>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                    </ul>

               </div>
            </div>
        )
    }
}

export default Cards