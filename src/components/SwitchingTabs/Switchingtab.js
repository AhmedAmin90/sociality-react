import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Tab from './Tab';
import logoOne from '../../assets/imgs/logo-1.png';
import logoTwo from '../../assets/imgs/logo-2.png';
import logoThree from '../../assets/imgs/logo-3.png';
import logoFour from '../../assets/imgs/logo-4.png';
import logoFive from '../../assets/imgs/logo-5.png';
import logoSix from '../../assets/imgs/logo-6.png';

class Switchingtabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 1,
          name: 'Test One',
          logo: logoOne,
          not: 10,
          clicked: false,
        },
        {
          id: 2,
          name: 'Test Two',
          logo: logoTwo,
          not: 8,
          clicked: false,
        },
        {
          id: 3,
          name: 'Test Three',
          logo: logoThree,
          not: 0,
          clicked: false,
        },
        {
          id: 4,
          name: 'Test Four',
          logo: logoFour,
          not: 8,
          clicked: false,
        },
        {
          id: 5,
          name: 'Test Five',
          logo: logoFive,
          not: 0,
          clicked: false,
        },
        {
          id: 6,
          name: 'Social Orientation',
          logo: logoSix,
          not: 8,
          clicked: false,
        },
      ],

      posts: [],
      postsDates: [],
    };
  }

  async componentDidMount() {
    const getData = await axios.get('./data.json');
    const data = await getData.data.posts_by_date;
    this.setState({ posts: { ...data } });
    this.setState({ postsDates: Object.keys(data).reverse() });
  }

    handleTabClick = (name) => {
      // Get correct data that related to the client (company) name:
      const newData = [];
      const { postsDates, posts } = this.state;
      postsDates.forEach((date) => {
        posts[date].forEach((post) => {
          if (post.account.name === name) {
            newData.push(post);
          }
        });
      });
      // Connect Data with its publish date to update the dates in the state of layout:
      const dates = new Set();
      newData.forEach((post) => {
        const publishArr = post.published_at.split(' ').splice(0, 1).toString();
        dates.add(publishArr);
      });
      // convert Set object to an Array
      const datesArr = Array.from(dates);

      // Pass data with its dates to the layout state:
      const { clickedTab } = this.props;
      clickedTab(newData, datesArr);

      // Style:
      this.handleTabStyle(name);
    }

    handleTabStyle = (name) => {
      const { tabs } = this.state;
      const { handleNot } = this.props;
      const selectedTab = tabs.find((tab) => tab.name === name);
      handleNot(selectedTab.not);
      selectedTab.clicked = !selectedTab.clicked;
      selectedTab.not = 0;
      const otherTabs = tabs.filter((tab) => tab.name !== name);
      otherTabs.forEach((tab) => {
        const oTabs = tab;
        oTabs.clicked = false;
      });
      this.setState({ tabs: [...tabs] });
    }

    render() {
      const { tabs } = this.state;
      const renderTabs = tabs.map((tab) => (
        <Tab
          key={tab.id}
          logo={tab.logo}
          name={tab.name}
          notifictaion={tab.not}
          isClicked={tab.clicked}
          tabClick={this.handleTabClick}
        />
      ));

      return (
        <div>
          {renderTabs}
        </div>
      );
    }
}

Switchingtabs.defaultProps = {
  clickedTab: () => {},
  handleNot: () => {},
};

Switchingtabs.propTypes = {
  clickedTab: PropTypes.func,
  handleNot: PropTypes.func,
};

export default Switchingtabs;
