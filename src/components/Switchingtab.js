import React , {Component} from 'react';
import axios from 'axios';
import Tab from './Tab';
import Cards from './Cards';
import Sections from './Sections';
import logoOne from '../assests/imgs/logo-1.png'
import logoTwo from '../assests/imgs/logo-2.png'
import logoThree from '../assests/imgs/logo-3.png'
import logoFour from '../assests/imgs/logo-4.png'
import logoFive from '../assests/imgs/logo-5.png'
import logoSix from '../assests/imgs/logo-6.png'


class Switchingtabs extends Component {
    state = {
        tabs: [
        {
            id: "1",
            name: "",
            logo: logoOne,
            not: 10,
            clicked: false
        },
        {
            id: 2,
            name: "Test",
            logo: logoTwo,
            not: 8,
            clicked: false
        }
        ,
        {
            id: 3,
            name: "",
            logo: logoThree,
            not: 0,
            clicked: false
        }
        ,{
            id: 4,
            name: "",
            logo: logoFour,
            not: 8,
            clicked: false
        },
        {
            id: 5,
            name: "",
            logo: logoFive,
            not: 0,
            clicked: false
        },
        {
            id: 6,
            name: "Social Orientation",
            logo: logoSix,
            not: 8,
            clicked: false
        }
    ] ,

    posts : []
    }



    async componentDidMount(){
        const getData = await axios.get('./data.json');
        const data = await getData.data['posts_by_date'];
        this.setState({
        posts: {...data}});
        this.setState({postsDates: Object.keys(data).reverse()})
    }


    handleTabClick = (name)=>{
        // Get correct data that related to the client (company) name:
        let newData = []
         this.state.postsDates.map(date=> {
            {this.state.posts[date].map(post=> {
                if (post['account']['name'] === name) {
                    newData.push(post)
                }
            })}
        })

        // Connect Data with its publish date:
        let datesArr = []
        newData.map(post=>{
            const publishArr = post['published_at'].split(' ').splice(0, 1).toString();
            datesArr.push(publishArr)
        })

        // Remove repeated dates:
        let finalDateArr = [];
        for(let date of datesArr){
            if(finalDateArr.indexOf(date) === -1){
                finalDateArr.push(date);
            }
        }

        // Pass data with its dates to the layout state:
        this.props.clickedTab(newData , finalDateArr);
    }

    handleTabStyle = (id)=> {
        let selectedTab = this.state.tabs.find(tab=> tab.id === id);
        this.props.handleNot(selectedTab.not)
        selectedTab.clicked = !selectedTab.clicked;
        selectedTab.not = 0;
        const otherTabs = this.state.tabs.filter(tab => tab.id !== id);
        otherTabs.map(tab=>{
            tab.clicked = false
        })
        this.setState({tabs: [...this.state.tabs]});
    }



    

    render(){

        const tabs = this.state.tabs.map(tab => (
            <Tab key={tab.id} id={tab.id} logo={tab.logo} name={tab.name} notifictaion={tab.not} isClicked={tab.clicked} tabStyle={this.handleTabStyle} tabClick={this.handleTabClick}/>
        ))

        return(
                <div>
                    {tabs}
                </div>
        )
    }

}

export default Switchingtabs ;