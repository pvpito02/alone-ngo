import React from 'react';
import './css/News.css';

const News = () => {
  const newsItems = [
    {
      date: "MAY 14, 2025",
      comments: 0,
      title: "Sees boom in younger volunteers following pandemic",
      author: "By Bearsthemes",
      image: "/alone-img/News1.PNG",
      avatar: "/alone-img/comment-author-1.jpg"
    },
    {
      date: "MAY 11, 2025",
      comments: 0,
      title: "Breaking Barriers: Empowering Women in Sports",
      author: "By Bearsthemes",
      image: "/alone-img/News2.PNG",
      avatar: "/alone-img/comment-author-2.jpg"
    },
    {
      date: "MAY 03, 2025",
      comments: 0,
      title: "Summit to focus on responsible use of AI in fundraising",
      author: "By Bearsthemes",
      image: "/alone-img/News3.PNG",
      avatar: "/alone-img/comment-author-3.jpg"
    }
  ];

  return (
    <section className="news">
      <div className="container">
        <h2 className="news-title">We Are In A Mission</h2>
        <h3 className="news-subtitle">Explor Our <span>News & Updates</span></h3>
        
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div key={index} className="news-card">
              <div className="news-image-container">
                <img src={item.image} alt={item.title} className="news-image" />
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">{item.date}</span>
                  <div className="news-comments">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{item.comments}</span>
                  </div>
                </div>
                <h4 className="news-item-title">{item.title}</h4>
                <div className="news-author-container">
                  <img src={item.avatar} alt="Author" className="author-avatar" />
                  <p className="news-author">{item.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="news-button">MORE UPDATES</button>
      </div>
    </section>
  );
};

export default News;