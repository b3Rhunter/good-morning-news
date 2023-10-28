// components/NewsFeed.js
import React from 'react';

const NewsFeed = ({ news }) => {
    return (
        <div className="news-feed">
            {news.map((story, index) => (
                <div key={index} className="news-story">
                    <a href={story.link} target="_blank" rel="noreferrer" className="news-title">{story.title}</a>
                    <p className="news-info">{story.extraInfo}</p>
                    <p className="news-timestamp">{new Date(story.timestamp).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}

export default NewsFeed;
