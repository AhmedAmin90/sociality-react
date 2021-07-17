/* eslint-disable  react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable */
import React, { Component } from 'react';
import List from './List';
import PropTypes from 'prop-types';
import './AccordionItem.css';

class AccordionItem extends Component {
  constructor(props){
    super(props);
    this.state = {list: []}
  }
    handleClick = () => {
      this.setState({list: [...this.props.list]})
      const { handleClick, title } = this.props;
      handleClick(title);
    }

    handleListClick = (id)=>{
      const { list } = this.state;
      const selectedItem = list.find(item => item.id === id);
      selectedItem.clicked = !selectedItem.clicked;
      const otherItems = list.filter((Item) => Item.id !== id);
      otherItems.forEach((Items) => {
        const otherItem = Items;
        otherItem.clicked = false;
      });
      this.setState({list: [...list]})
    }

    

    render() {
      const {
        isClicked , icon, title,
      } = this.props;
      const { list } = this.state;
      const ItemClickedStyle = isClicked ? 'AccordionItem-clicked-style' : '';
      const ItemClicked = isClicked ? <i className="fas fa-minus" /> : <i className="fas fa-plus" />;
      const ulShowHide = isClicked && list.length !== 0 ? 'AccordionItem-list-show' : 'AccordionItem-list-hide';
      const ulText = list ? list.map((item) => 
         <List key={item.id} id={item.id} name={item.name} clicked={item.clicked} handleListClick={this.handleListClick}/>
      ) : '';
      return (
        <div
          className="AccordionItem"

        >
          <div
            className={`AccordionItems ${ItemClickedStyle}`}
            onClick={this.handleClick}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <div className="AccordionItem-icon-name">
              <div className="AccordionItem-icon d-flex">
                <img src={icon} className="AccordionItem-icon-image" alt={`${title} icon`} />
              </div>
              <span>{title}</span>
            </div>
            <div className="AccordionItem-plus-minus-icon">
              {ItemClicked}
            </div>
          </div>
          <ul className={ulShowHide}>
            <div className="AccordionItem-down-arrow" />
            {ulText}
          </ul>
        </div>
      );
    }
}

AccordionItem.defaultProps = {
  isClicked: false,
  handleClick: () => {},
  title: '',
  icon: '',
  list: [],
  listClicked: [false],
};

AccordionItem.propTypes = {
  isClicked: PropTypes.bool,
  handleClick: PropTypes.func,
  title: PropTypes.string,
  icon: PropTypes.string,
  list: PropTypes.instanceOf(Array),
  listClicked: PropTypes.instanceOf(Array),
};
export default AccordionItem;
