import React from 'react';

const ForecastCard = ({ day, image, highTemp, lowTemp }) => {
  return (
    <div className="card">
      <div className="card-title">{day}</div>
      <img
        src={`http://openweathermap.org/img/wn/${image}@4x.png`}
        alt="weather icon"
      />
      <div className="card-description">
        <div>{highTemp}&#176;</div>
        <div id="gray">{lowTemp}&#176;</div>
      </div>
    </div>
  );
};

export default ForecastCard;
