import React , {Component} from 'react';
import axios from 'axios';
import Tab from './Tab';
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
            id: 1,
            name: "",
            logo: logoOne,
            not: 10,
            clicked: false
        },
        {
            id: 2,
            name: "",
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
        let selectedTab = this.state.tabs.filter(tab => tab.name === name);
        console.log(selectedTab);
        this.state.postsDates.map(date=> {
            {this.state.posts[date].map(post=> {
                if (post['account']['name'] === name) {
                    console.log(post)
                }
            })}
        })        
        
    }

    render(){

        const tabs = this.state.tabs.map(tab => (
            <Tab key={tab.id} logo={tab.logo} name={tab.name} notifictaion={tab.not} clicked={tab.clicked} tabClick={this.handleTabClick}/>
        ))

        return(
                <div>
                    {tabs}
                </div>
        )
    }

}

export default Switchingtabs ;