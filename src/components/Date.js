import React , {Component} from 'react';
import '../style/Date.css'
class Date extends Component {
    render() {
        return (
            <h3 className="Date">{this.props.date}</h3>
        )
    }
}

export default Date;