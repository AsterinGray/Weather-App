import React from 'react';

const ForecastCard = ({ title, image, pop }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <img
        src={`http://openweathermap.org/img/wn/${image}@4x.png`}
        alt="weather icon"
      />
      <div className="card-description">
        <div>{pop}%</div>
      </div>
    </div>
  );
};

export default ForecastCard;
