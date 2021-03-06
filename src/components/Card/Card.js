import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import DefaultImg from '../../assets/imgs/noImg.png';
import Delete from '../../assets/icons/delete.png';
import Approved from '../../assets/icons/approved.png';
import Comment from '../../assets/icons/comment.png';
import LikeFace from '../../assets/icons/likeFace.png';
import LikeTwitter from '../../assets/icons/likeTwitter.png';
import Retweet from '../../assets/icons/retweet.png';
import Seen from '../../assets/icons/seen.png';
import Settings from '../../assets/icons/settings.png';
import WaitingApproval from '../../assets/icons/waitingApproval.png';
import postImg from '../../assets/imgs/postImg.png';
import ShareImg from '../../assets/icons/share.png';

class Card extends Component {
    handleError = (e) => {
      e.target.src = DefaultImg;
    }

    render() {
      const statusColor = () => {
        const obj = {
          0: 'need-approval-color',
          1: 'scheduled-color',
          2: 'publishing-color',
          3: 'published-color',
          4: 'error-color',
        };
        const { status } = this.props;
        return obj[status];
      };

      const socialLogo = () => {
        const { channel } = this.props;
        if (channel === 'instagrambusiness') {
          return (
            <div className={`Card-social-icon ${statusColor()}`}>
              <i className="fab fa-instagram" />
            </div>
          );
        }
        if (channel === 'twitter') {
          return (
            <div className={`Card-social-icon ${statusColor()}`}>
              <i className="fab fa-twitter" />
            </div>
          );
        }

        return (
          <div className={`Card-social-icon ${statusColor()}`}>
            <i className="fab fa-facebook" />
          </div>
        );
      };

      const statusIcons = () => {
        const { status } = this.props;
        if (status === 0) {
          return (
            <ul>
              <li><img src={WaitingApproval} alt="post-cards-icon" /></li>
              <li><img src={Delete} alt="post-cards-icon" /></li>
              <li><img src={Settings} alt="post-cards-icon" /></li>
            </ul>
          );
        }
        if (status === 1) {
          return (
            <ul>
              <li><img src={Approved} alt="post-cards-icon" /></li>
              <li><img src={Delete} alt="post-cards-icon" /></li>
              <li><img src={Settings} alt="post-cards-icon" /></li>
            </ul>
          );
        }

        return (
          <ul>
            <li><img src={Delete} alt="post-cards-icon" /></li>
            <li><img src={Settings} alt="post-cards-icon" /></li>
          </ul>
        );
      };

      const socialEngageIcons = () => {
        const { channel } = this.props;
        if (channel === 'twitter') {
          return (
            <ul className="Card-under-img-icons">
              <li>
                <img src={LikeTwitter} alt="post-cards-icon" />

                <p>0</p>

              </li>
              <li>
                <img src={Retweet} alt="post-cards-icon" />

                <p>0</p>

              </li>
              <li>
                <img src={Comment} alt="post-cards-icon" />

                <p>0</p>

              </li>
              <li>
                <img src={Seen} alt="post-cards-icon" />

                <p>0</p>

              </li>
            </ul>
          );
        }

        return (
          <ul className="Card-under-img-icons">
            <li>
              <img src={LikeFace} alt="post-cards-icon" />

              <p>0</p>

            </li>
            <li>
              <img src={Comment} alt="post-cards-icon" />

              <p>0</p>

            </li>
            <li>
              <img src={ShareImg} alt="post-cards-icon" />

              <p>0</p>

            </li>
            <li>
              <img src={Seen} alt="post-cards-icon" />

              <p>0</p>

            </li>
          </ul>
        );
      };
      const { publishDate, postBody, img } = this.props;
      const renderSocialIcons = socialEngageIcons();
      const renderActionICon = statusIcons();
      return (

        <div className="Card-body border m-2">
          {socialLogo()}
          <div className="Card-content">
            <div className="Card-date">
              <p>{publishDate}</p>
              {renderActionICon}
            </div>
            <p className="Card-post-body">{postBody}</p>
            <img
              className="Card-post-img border"
              src={img}
              onError={this.handleError}
              alt="post-cards-img"
            />
            {renderSocialIcons}

          </div>
        </div>

      );
    }
}

Card.defaultProps = {
  img: postImg,
  publishDate: '',
  postBody: '',
  channel: '',
  status: 0,
};

Card.propTypes = {
  publishDate: PropTypes.string,
  postBody: PropTypes.string,
  channel: PropTypes.string,
  status: PropTypes.number,
  img: PropTypes.string,
};
export default Card;
