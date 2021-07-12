import React , {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../style/Status.css'
class Status extends Component {
    state = {status: [
        {
            color: "#acacac" ,
            status:"published"
        } ,
        {
            color: "#3ac183" ,
            status:"scheduled"
        },
        {
            color: "#f7bf38" ,
            status: "Need Approval"
        },
        {
            color: "#fb6450" ,
            status:"Error"
        } ,
        {
            color: "#67b1f2" ,
            status:"notes"
        }
    ]}

    render(){
        const renderStatus = this.state.status.map(st=> {
            return  <div className="Status" key={uuidv4()} > 
            <div className="Layout-status-list-dot" style={{backgroundColor: st.color}}></div>
            <li>{st.status}</li>
            </div>
       
        })
        return(
            <div className="d-flex" >
                {renderStatus}
            </div>
        )
    }
}

export default Status