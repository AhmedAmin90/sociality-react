import React , {Component} from 'react';
import '../style/Cards.css';
import Delete from '../assests/icons/delete.png';
import Approved from '../assests/icons/approved.png';
import Comment from '../assests/icons/comment.png';
import LikeFace from '../assests/icons/likeFace.png';
import LikeTwitter from '../assests/icons/likeTwitter.png';
import Retweet from '../assests/icons/retweet.png';
import Seen from '../assests/icons/seen.png';
import Settings from '../assests/icons/settings.png';
import WaitingApproval from '../assests/icons/waitingApproval.png';
import postImg from '../assests/imgs/postImg.png'




class Cards extends Component {
    static defaultProps = {
        img: postImg
    }
    state = {
        dates: {},
        availableDates : []
    }


    render(){
        return(
            
            <div className="Card-body border col-4 m-2">
               <div className="Card-social-icon">
               <i className="fab fa-twitter"></i>
               </div>
               <div className="Card-content">
                    <div className="Card-date">
                        <p>Date</p>
                        <ul>
                            <li><img src={Approved}/></li>
                            <li><img src={Delete}/></li>
                            <li><img src={Settings}/></li>
                        </ul>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis purus elit, nec consectetur quam posuere eu.</p>
                    <img className="Card-post-img border" src={this.props.img} />
                    <ul className="Card-under-img-icons">
                        <li><img src={LikeTwitter}/> 0 </li>
                        <li><img src={Retweet}/> 0 </li>
                        <li><img src={Comment}/> 0 </li>
                        <li><img src={Seen}/> 0 </li>
                    </ul>

               </div>
            </div>
           
        )
    }
}

export default Cards