import React , {Component} from 'react';
import '../style/Card.css';
import DefaultImg from '../assests/imgs/noImg.png';
import Delete from '../assests/icons/delete.png';
import Approved from '../assests/icons/approved.png';
import Comment from '../assests/icons/comment.png';
import LikeFace from '../assests/icons/likeFace.png';
import LikeTwitter from '../assests/icons/likeTwitter.png';
import Retweet from '../assests/icons/retweet.png';
import Seen from '../assests/icons/seen.png';
import Settings from '../assests/icons/settings.png';
import WaitingApproval from '../assests/icons/waitingApproval.png';
import postImg from '../assests/imgs/postImg.png';
import ShareImg from '../assests/icons/share.png';




class Card extends Component {
    static defaultProps = {
        img: postImg
    }
    state = {
        dates: {},
        availableDates : [],
    }

    handleError  = (e)=> {
        e.target.src = DefaultImg
    }
          
    render(){
        const statusColor = ()=> {
            // Switch way:
            // switch(this.props.status) {
            //     case 0:
            //         return 'need-approval-color';
            //         break;
            //     case 1:
            //         return 'scheduled-color';
            //         break;
            //     case 2 :
            //         return 'publishing-color';
            //         break;
            //     case 3 :
            //         return 'published-color';
            //         break;
            //     case 4 :
            //         return 'error-color';
            //         break;
            // }

            // Object way:
            let obj = {
                0 : 'need-approval-color',
                1 : 'scheduled-color' ,
                2 :  'publishing-color',
                3 : 'published-color',
                4 : 'error-color'
            }
            return obj[this.props.status]
        }

        const socialLogo = ()=> {

            if (this.props.channel === 'instagrambusiness') {
                return  (<div className={`Card-social-icon ${statusColor()}`}>
                            <i className="fab fa-instagram"></i>
                        </div>);
            }
            else if ( this.props.channel === 'twitter') {
                return  (<div className={`Card-social-icon ${statusColor()}`}>
                            <i className="fab fa-twitter"></i>
                        </div>);
            }
            else {
                return  (<div className={`Card-social-icon ${statusColor()}`}>
                            <i className="fab fa-facebook"></i>
                        </div>);
            }

        } 

        const statusIcons = ()=> {
            if (this.props.status === 0 ) {
                return  (<ul>
                <li><img src={WaitingApproval} alt="post-cards-icon"/></li>
                <li><img src={Delete} alt="post-cards-icon"/></li>
                <li><img src={Settings} alt="post-cards-icon"/></li>
            </ul>)
            }
            else if (this.props.status === 1 ) {
                return   (<ul>
                <li><img src={Approved} alt="post-cards-icon"/></li>
                <li><img src={Delete} alt="post-cards-icon"/></li>
                <li><img src={Settings} alt="post-cards-icon"/></li>
            </ul>)
            }
            else  {
                return (<ul>
                <li><img src={Delete} alt="post-cards-icon"/></li>
                <li><img src={Settings} alt="post-cards-icon"/></li>
            </ul>)
            }
        }

        const socialEngageIcons = ()=> {
            if ( this.props.channel === 'twitter') {
                return   (<ul className="Card-under-img-icons">
                <li><img src={LikeTwitter} alt="post-cards-icon"/> <p>0</p> </li>
                <li><img src={Retweet} alt="post-cards-icon"/> <p>0</p> </li>
                <li><img src={Comment} alt="post-cards-icon"/> <p>0</p>  </li>
                <li><img src={Seen} alt="post-cards-icon"/> <p>0</p>  </li>
            </ul>)
            }
            else {
                return   (<ul className="Card-under-img-icons">
                <li><img src={LikeFace} alt="post-cards-icon"/> <p>0</p>  </li>
                <li><img src={Comment} alt="post-cards-icon"/> <p>0</p>  </li>
                <li><img src={ShareImg} alt="post-cards-icon"/> <p>0</p>  </li>
                <li><img src={Seen} alt="post-cards-icon"/> <p>0</p>  </li>
            </ul>)
            }
        }
    


        return(
            
            <div className="Card-body border m-2">
               {socialLogo()}
               <div className="Card-content">
                    <div className="Card-date">
                        <p>{this.props.publishDate}</p>
                         {statusIcons()}
                    </div>
                    <p className="Card-post-body">{this.props.postBody}</p>
                    <img className="Card-post-img border" src={this.props.img}
                    onError={this.handleError}
                    alt="post-cards-img"
                    />
                    {socialEngageIcons()}

               </div>
            </div>
           
        )
    }
}

export default Card