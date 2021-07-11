import React , {Component} from 'react';
import '../style/Sections.css';
import Cards from './Cards';


class Sections extends Component {

    state = {
        channels: ['instagrambusiness' , 'twitter' , 'facebook']
    }


    render() {
        const renderPosts = this.props.postsDates.map(date=> 
            {
                const newDate = new Date(date);
                const finalDate = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'long', day: 'numeric'}).format(newDate)
            return <div> 
                <h3 className="Sections-title-date">{finalDate}</h3>
                <div className="row">
                    {this.props.posts.map(post=>{
                    const publishArr = post['published_at'].split(' ');
                    const postTime = publishArr[1].slice(0 , 5)
                    const postDate = new Date(publishArr[0])
                    const newPublishDate = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'long', day: 'numeric'}).format(postDate) 
                    if (post['published_at'].split(' ').splice(0, 1).toString()=== date ) {
                        return <div className="Card-main">
                        <Cards 
                        publishDate={`${newPublishDate} - ${postTime} ` } 
                        postBody={post['entry']['message']}
                        channel={post['account']['channel']}
                        status={post['status']}
                        img={post['entry']['image'][0]} />
                        </div>
                    }
                    // return <h1>{post['published_at'].split(' ').splice(0, 1).toString()}</h1>
                    })}
                {/* {this.props.posts[date].map(post=> {
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
                        })} */}
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