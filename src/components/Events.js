import React from 'react';
import './css/Events.css';

const Events = () => {
  const events = [
    {
      title: "Children, Helping",
      description: "Use Hashtags To Support Online",
      location: "United States",
      date: "07 Mar 2026",
      image: "/alone-img/events2.PNG"
    },
    {
      title: "Children, Donation",
      description: "Use Hashtags To Support Online",
      location: "United States",
      date: "06 Oct 2025",
      image: "/alone-img/cause1.jpeg"
    }
  ];

  return (
    <section className="events">
      <div className="container">
        <div className="events-content">
          <div className="events-left">
            <h3 className="events-subtitle">We Are In A Mission</h3>
            <h2 className="events-title">Explor Our <br></br><span>Upcoming Events</span> </h2>
            <button className="events-button">MORE EVENTS</button>
          </div>
          
          <div className="events-right">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <div className="event-info">
                    <div className="event-location">
                      <span className="event-label">EVENT IN:</span>
                      <span className="event-value">{event.location}</span>
                    </div>
                    <div className="event-date">
                      <span className="event-label">DATE:</span>
                      <span className="event-value">{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;