import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tab.css';
import logo from '../assests/imgs/logo-1.png';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifictaionState: true,
    };
  }

    handleClick = () => {
      const {
        tabClick, tabStyle, name, id,
      } = this.props;
      tabClick(name);
      tabStyle(id);
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
  id: 0,
  name: '',
  notifictaion: 0,
  isClicked: false,
  tabStyle: () => {},
  tabClick: () => {},
};

Tab.propTypes = {
  id: PropTypes.number,
  logo: PropTypes.string,
  name: PropTypes.string,
  notifictaion: PropTypes.number,
  isClicked: PropTypes.bool,
  tabStyle: PropTypes.func,
  tabClick: PropTypes.func,
};

export default Tab;
