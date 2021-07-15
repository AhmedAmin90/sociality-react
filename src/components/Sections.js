/* eslint-disable consistent-return */
/* eslint-disable array-callback-return  */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './Sections.css';
import Card from './Card';

const Sections = ({ postsDates, posts }) => {
  // Take the data from layout component state, and loop to show cards:
  const renderPosts = postsDates.map((date) => {
    // Change the form of the date:
    const newDate = new Date(date);
    const finalDate = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }).format(newDate);
    return (
      <div key={uuidv4()}>
        <h3 className="Sections-title-date">{finalDate}</h3>
        <div className="row">
          {posts.map((post) => {
            // change the form of the date and the time:
            const publishArr = post.published_at.split(' ');
            const postTime = publishArr[1].slice(0, 5);
            const postDate = new Date(publishArr[0]);
            const newPublishDate = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }).format(postDate);

            // Show the post under its correct publish date:
            if (post.published_at.split(' ').splice(0, 1).toString() === date) {
              return (
                <div className="Card-main col-4" key={uuidv4()}>
                  <Card
                    key={uuidv4()}
                    publishDate={`${newPublishDate} - ${postTime} `}
                    postBody={post.entry.message}
                    channel={post.account.channel}
                    status={post.status}
                    img={post.entry.image[0]}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  });
  return (
    <div>
      {renderPosts}
    </div>

  );
};

Sections.defaultProps = {
  posts: [],
  postsDates: [],
};

Sections.propTypes = {
  posts: PropTypes.instanceOf(Array),
  postsDates: PropTypes.instanceOf(Array),
};

export default Sections;
