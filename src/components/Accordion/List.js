import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  handleClick = () => {
    const { id, handleListClick } = this.props;
    handleListClick(id);
  }

  render() {
    const { name, clicked } = this.props;
    const style = clicked ? 'AccordionItem-list-item-active' : '';
    return (
      <li
        className={`AccordionItem-list-item ${style}`}
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        role="menuitem"
      >

        {name}

      </li>
    );
  }
}

List.defaultProps = {
  id: 0,
  name: '',
  clicked: false,
  handleListClick: () => {},
};

List.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  clicked: PropTypes.bool,
  handleListClick: PropTypes.func,
};

export default List;
