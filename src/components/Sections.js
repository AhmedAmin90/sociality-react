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
            <div> 
                <h3 className="Sections-title-date">{date}</h3>
                <div className="row">
                {this.state.posts[date].map(post=> {
                    console.log(post)
                    return <div className="Card-main">
                        <Cards 
                        publishDate={post['published_at']} 
                        postBody={post['entry']['message']}
                        channel={post['account']['channel']}
                        status={post['status']}
                        img={post['entry']['image'][0]} />
                        </div>
                        })}
                       </div>
             </div>
            );
        return (
            <div>
                {renderPosts}
               
            </div>
   
        )
    }
}

export default Sections;