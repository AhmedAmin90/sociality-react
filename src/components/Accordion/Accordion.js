import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';
import IconOne from '../../assets/icons/icon-1.png';
import IconTwo from '../../assets/icons/icon-2.png';
import IconThree from '../../assets/icons/icon-3.png';
import IconFour from '../../assets/icons/icon-4.png';
import IconFive from '../../assets/icons/icon-5.png';
import IconSix from '../../assets/icons/icon-6.png';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionItems: [{
        id: 1,
        title: 'summary',
        icon: IconTwo,
        clicked: false,
        list: [{
          id: 1.1,
          name: 'test',
          clicked: false,
        }],

      },
      {
        id: 2,
        title: 'publish',
        icon: IconThree,
        clicked: false,
        list: [{
          id: 2.1,
          name: 'compose',
          clicked: true,
        },
        {
          id: 2.2,
          name: 'feed',
          clicked: false,
        }],

      },
      {
        id: 3,
        title: 'engage',
        icon: IconFour,
        clicked: false,
        list: [],

      },
      {
        id: 4,
        title: 'listen',
        icon: IconFive,
        clicked: false,
        list: [{
          id: 4.1,
          name: 'test',
          clicked: false,
        }],

      },
      {
        id: 5,
        title: 'report',
        icon: IconSix,
        clicked: false,
        list: [{
          id: 5.1,
          name: 'test',
          clicked: false,
        }],

      },
      ],
    };
  }

    handleClick = (title) => {
      const { accordionItems } = this.state;
      const clickedItem = accordionItems.find((item) => item.title === title);
      clickedItem.clicked = !clickedItem.clicked;
      const otherItems = accordionItems.filter((item) => item.title !== title);
      otherItems.forEach((items) => {
        const otherItem = items;
        otherItem.clicked = false;
      });
      accordionItems.forEach((item) => {
        item.list.forEach((listItem) => {
          const otherListItems = listItem;
          otherListItems.clicked = false;
        });
      });
      this.setState({ accordionItems: [...accordionItems] });
    }

    render() {
      const { notification } = this.props;
      const { accordionItems } = this.state;
      const renderItems = accordionItems.map((Item) => (
        <AccordionItem
          key={Item.id}
          isClicked={Item.clicked}
          handleClick={this.handleClick}
          title={Item.title}
          icon={Item.icon}
          list={Item.list}
        />

      ));
      return (
        <div>
          <div className="AccordionItems p-0">
            <div className="AccordionItem-icon-name">
              <div className="AccordionItem-icon d-flex">
                <img src={IconOne} alt="notification icon" className="AccordionItem-icon-image notification-icon" />
              </div>
              <span> notification </span>
            </div>
            <div className="AccordionItems-notification-number">
              {notification}

            </div>
          </div>
          {renderItems}
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
