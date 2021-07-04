import React , {Component} from 'react';
import axios from 'axios';
import '../style/Cards.css'

class Cards extends Component {

    render(){
        return(
            <div className="row">
            <div className="Card-body col-4">
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
            </div>
        )
    }
}

export default Cards