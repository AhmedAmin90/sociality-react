import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tab.css';
import logo from '../../assets/imgs/logo-1.png';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifictaionState: true,
    };
  }

    handleClick = () => {
      const {
        tabClick, name,
      } = this.props;
      tabClick(name);
    }

    render() {
      const {
        isClicked, notifictaion, logo, name,
      } = this.props;
      const { notifictaionState } = this.state;
      const tabClicked = isClicked ? 'Tabs-clicked tab-active' : 'Tabs-notCliked';
      const hiddenDiv = isClicked ? 'Tabs-div-show ' : 'Tabs-div-hide';
      const notificationSeen = notifictaionState && notifictaion ? 'Tabs-notification-show' : 'Tabs-notification-hide';
      return (
        <div
          className="Tabs"
          onClick={this.handleClick}
          role="button"
          onKeyDown={this.handleClick}
          tabIndex={0}
        >
          <div className={`Tabs-hidden ${hiddenDiv}`} />
          <div className="Tabs-img">
            <div className={notificationSeen}>{notifictaion}</div>
            <img src={logo} alt={`${name} logo`} className={tabClicked} />
          </div>
        </div>
      );
    }
}

Tab.defaultProps = {
  logo,
  name: '',
  notifictaion: 0,
  isClicked: false,
  tabClick: () => {},
};

Tab.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  notifictaion: PropTypes.number,
  isClicked: PropTypes.bool,
  tabClick: PropTypes.func,
};

export default Tab;
