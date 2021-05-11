import React from 'react';
import { useRecoilValue } from 'recoil';

import { currentWeatherResponse } from '../recoil/store';
import SearchBar from '../components/SearchBar';

const SideBar = () => {
  const resp = useRecoilValue(currentWeatherResponse);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const getDate = () => {
    const dt = new Date();
    const day = dayOfWeek[dt.getDay()];
    const date = dt.getDate();
    const month = monthNames[dt.getMonth()];

    return `${day}, ${date} ${month}`;
  };

  return (
    <aside className="aside">
      <SearchBar />
      <div className="content">
        <div className="heading">
          <span className="text-regular title">
            <img src="./images/location.png" alt="" />
            {resp.name}
          </span>
          <img
            src={`http://openweathermap.org/img/wn/${resp.weather[0].icon}@4x.png`}
            alt="Weather Icon"
          />
        </div>
        <div className="temp">
          <h1 className="text-light">
            {resp.main.temp - (resp.main.temp % 100)}
            <span>&#176;</span>
          </h1>
          <p className="text-light">{getDate()}</p>
        </div>
        <div className="detail text-light">
          <img src="./images/cloud-icon.png" alt="Cloud Icon" />
          <p>{resp.weather[0].description}</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
