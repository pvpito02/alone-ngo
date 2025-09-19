import React from 'react';
import './css/Causes.css';

const Causes = () => {
  const causes = [
    {
      title: "Your Small Donation Can Change a Life",
      date: "February 14, 2025",
      amount: "$120,000",
      description: "Donation Needed",
      image: "/alone-img/cause1.jpeg"
    },
    {
      title: "A New Album by Rebecca: Help poor people",
      date: "February 14, 2025",
      amount: "$50,000",
      description: "Donation Needed",
      image: "/alone-img/cause2.jpeg"
    },
    {
      title: "South African Pre Primary School Build",
      date: "February 14, 2025",
      amount: "$32,000",
      description: "Donation Needed",
      image: "/alone-img/cause3.jpeg"
    }
  ];

  return (
    <section id="causes" className="causes">
      <div className="container">
        <h5 className="causes-subtitle">We are in a mission</h5>
        <h2 className="causes-title">Explor Our <span>Latest Causes</span></h2>
        <div className="causes-grid">
          {causes.map((cause, index) => (
            <div key={index} className="cause-card">
              <div className="cause-image-container">
                <img 
                  src={cause.image} 
                  alt={cause.title}
                  className="cause-image"
                />
              </div>
              <div className="cause-content">
                <h3 className="cause-card-title">{cause.title}</h3>
                <p className="cause-date">{cause.date}</p>
                <p className="cause-amount">{cause.amount}</p>
                <p className="cause-description">{cause.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="causes-button">MORE CAUSES</button>
      </div>
    </section>
  );
};

export default Causes;