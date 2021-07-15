import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './Buttons.css';

class Button extends Component {
    handleClick = () => {
      const { handleClick, title } = this.props;
      handleClick(title);
    }

    handleListClick = () => {
      [...document.querySelectorAll('.Button-list-item')].forEach((item) => {
        item.addEventListener('click', () => {
          const getOtherItems = document.querySelector('.Button-list-item-active');
          if (getOtherItems !== null) {
            getOtherItems.classList.remove('Button-list-item-active');
          }
          item.classList.add('Button-list-item-active');
        });
      });
    }

    render() {
      const {
        isClicked, list, icon, title,
      } = this.props;
      const btnClickedStyle = isClicked ? 'Button-clicked-style' : '';
      const btnClicked = isClicked ? <i className="fas fa-minus" /> : <i className="fas fa-plus" />;
      const ulShowHide = isClicked ? 'Button-list-show' : 'Button-list-hide';
      const ulText = list ? list.map((item) => (
        <li
          key={uuidv4()}
          className="Button-list-item"
          onClick={this.handleListClick}
          onKeyDown={this.handleListClick}
          role="menuitem"
        >
          {' '}
          {item}
          {' '}
        </li>
      )) : '';
      return (
        <div
          className="Button"

        >
          <div
            className={`Buttons ${btnClickedStyle}`}
            onClick={this.handleClick}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <div className="Button-icon-name">
              <div className="Button-icon d-flex">
                <img src={icon} className="Button-icon-image" alt={`${title} icon`} />
              </div>
              <span>{title}</span>
            </div>
            <div className="Button-plus-minus-icon">
              {btnClicked}
            </div>
          </div>
          <ul className={ulShowHide}>
            <div className="Button-down-arrow" />
            {ulText}
          </ul>
        </div>
      );
    }
}

Button.defaultProps = {
  isClicked: false,
  handleClick: () => {},
  title: '',
  icon: '',
  list: [],
};

Button.propTypes = {
  isClicked: PropTypes.bool,
  handleClick: PropTypes.func,
  title: PropTypes.string,
  icon: PropTypes.string,
  list: PropTypes.instanceOf(Array),
};
export default Button;
