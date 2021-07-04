import React , {Component} from 'react';
import '../style/Status.css'
class Status extends Component {
    render(){
        return(
            <div className="Status">
                <div className="Layout-status-list-dot" style={{backgroundColor: this.props.color}}></div>
                <li>{this.props.status}</li>
            </div>
        )
    }
}

export default Status