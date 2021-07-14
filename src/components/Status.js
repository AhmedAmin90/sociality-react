import React , {Component} from 'react';
import '../style/Status.css'
class Status extends Component {
    state = {status: [
        {
            id: 1,
            color: "#acacac" ,
            status:"published"
        } ,
        {
            id: 2,
            color: "#3ac183" ,
            status:"scheduled"
        },
        {
            id: 3,
            color: "#f7bf38" ,
            status: "Need Approval"
        },
        {
            id: 4,
            color: "#fb6450" ,
            status:"Error"
        } ,
        {
            id: 5,
            color: "#67b1f2" ,
            status:"notes"
        }
    ]}

    render(){
        const renderStatus = this.state.status.map(st=> {
            return  <div className="Status" key={st.id} > 
                <div className="Layout-status-list-dot" style={{backgroundColor: st.color}}></div>
                <p>{st.status}</p>
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