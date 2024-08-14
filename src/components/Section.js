


import React from 'react';
import './Section.css'; // Keep any additional custom styling here if needed

const Section = ({ id, content, backgroundColor }) => (
  <div
    id={id}
    className="section container my-5"
    style={{ backgroundColor }} // Apply background color via inline style
  >
    <div className="row g-3"> {/* Bootstrap row with gutters */}
      {content.items.map((item, index) => (
        <div key={index} className="col-12 col-md-4"> {/* Responsive column sizing */}
          <div className="card h-100"> {/* Full height card */}
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.description}</p>
              <a href="https://www.fresha.com/a/h2-salon-brooklyn-new-york-473-tompkins-avenue-oyclntrv/booking?allOffer=true" className="btn btn-primary">BOOK SLOT</a>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  </div>
);

export default Section;
