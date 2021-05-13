import React from 'react';

const WeatherCard = ({ title, data, attr }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-desc">
        <p>{data}</p>
        <div>{attr}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
