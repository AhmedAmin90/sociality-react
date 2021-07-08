import React , {Component} from 'react';
import '../style/Sections.css';
import Cards from './Cards';
import axios from 'axios';
class Sections extends Component {

    state = {
        postsDates: [],
        posts: {},
        channels: ['instagrambusiness' , 'twitter' , 'facebook']
    }


    async componentDidMount(){
        const getData = await axios.get('./data.json');
        const data = await getData.data['posts_by_date'];
        this.setState({
        posts: {...data}});
        this.setState({postsDates: Object.keys(data).reverse()})
    }

    render() {
        const renderPosts = this.state.postsDates.map(date=> 
            {
                const newDate = new Date(date);
                const finalDate = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'long', day: 'numeric'}).format(newDate)
            return <div> 
                <h3 className="Sections-title-date">{finalDate}</h3>
                <div className="row">
                {this.state.posts[date].map(post=> {
                    const publishArr = post['published_at'].split(' ');
                    const postTime = publishArr[1].slice(0 , 5)
                    const postDate = new Date(publishArr[0])
                    const newPublishDate = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'long', day: 'numeric'}).format(postDate) 
                    console.log(newPublishDate)
                    return <div className="Card-main">
                        <Cards 
                        publishDate={`${newPublishDate} - ${postTime} ` } 
                        postBody={post['entry']['message']}
                        channel={post['account']['channel']}
                        status={post['status']}
                        img={post['entry']['image'][0]} />
                        </div>
                        })}
                       </div>
             </div>
            }
            );
        return (
            <div>
                {renderPosts}
               
            </div>
   
        )
    }
}

export default Sections;