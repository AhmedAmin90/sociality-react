import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Tab.css';
import logo from '../assests/imgs/logo-1.png';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifictaion: true,
    };
  }

    handleClick = () => {
      this.props.tabClick(this.props.name);
      this.props.tabStyle(this.props.id);
    }

    render() {
      const {
        isClicked, notifictaion, logo, name,
      } = this.props;
      const tabClicked = isClicked ? 'Tabs-clicked tab-active' : 'Tabs-notCliked';
      const hiddenDiv = isClicked ? 'Tabs-div-show ' : 'Tabs-div-hide';
      const notificationSeen = this.state.notifictaion && notifictaion ? 'Tabs-notification-show' : 'Tabs-notification-hide';
      return (
        <div className="Tabs" onClick={this.handleClick}>
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
