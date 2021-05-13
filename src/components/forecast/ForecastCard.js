import React from 'react';

const ForecastCard = ({ title, image, highTemp, lowTemp }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <img
        src={`http://openweathermap.org/img/wn/${image}@4x.png`}
        alt="weather icon"
      />
      <div className="card-description">
        <div>{highTemp}</div>
        <div id="gray">{lowTemp}</div>
      </div>
    </div>
  );
};

export default ForecastCard;
