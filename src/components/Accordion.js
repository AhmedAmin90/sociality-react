import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import IconOne from '../assests/icons/icon-1.png';
import IconTwo from '../assests/icons/icon-2.png';
import IconThree from '../assests/icons/icon-3.png';
import IconFour from '../assests/icons/icon-4.png';
import IconFive from '../assests/icons/icon-5.png';
import IconSix from '../assests/icons/icon-6.png';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [{
        id: 1,
        title: 'summary',
        icon: IconTwo,
        clicked: false,
        list: ['test'],
      },
      {
        id: 2,
        title: 'publish',
        icon: IconThree,
        clicked: false,
        list: ['compose', 'feed'],
      },
      {
        id: 3,
        title: 'engage',
        icon: IconFour,
        clicked: false,
        list: ['test'],
      },
      {
        id: 4,
        title: 'listen',
        icon: IconFive,
        clicked: false,
        list: ['test'],
      },
      {
        id: 5,
        title: 'report',
        icon: IconSix,
        clicked: false,
        list: ['test'],
      },
      ],
    };
  }

    handleClick = (title) => {
      const { buttons } = this.state;
      const clickedBtn = buttons.find((btn) => btn.title === title);
      clickedBtn.clicked = !clickedBtn.clicked;
      const otherBtns = buttons.filter((btn) => btn.title !== title);
      otherBtns.forEach((btns) => {
        const otherBtn = btns;
        otherBtn.clicked = false;
      });
      this.setState({ buttons: [...buttons] });
    }

    render() {
      const { notification } = this.props;
      const { buttons } = this.state;
      const renderBtns = buttons.map((btn) => (
        <Button
          key={btn.id}
          isClicked={btn.clicked}
          handleClick={this.handleClick}
          title={btn.title}
          icon={btn.icon}
          list={btn.list}
        />
      ));
      return (
        <div>
          <div className="Buttons p-0">
            <div className="Button-icon-name">
              <div className="Button-icon d-flex">
                <img src={IconOne} alt="notification icon" className="Button-icon-image notification-icon" />
              </div>
              <span> notification </span>
            </div>
            <div className="Buttons-notification-number">
              {notification}
              {' '}
            </div>
          </div>
          {renderBtns}
        </div>
      );
    }
}

Accordion.defaultProps = {
  notification: 0,
};

Accordion.propTypes = {
  notification: PropTypes.number,
};

export default Accordion;
