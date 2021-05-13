import React from 'react';
import { useRecoilValue } from 'recoil';

import { currentWeatherData } from '../recoil/store';

import SearchBar from './common/SearchBar';
import { timezoneToDate } from '../utils/dateTime.utils';

const SideBar = () => {
  const resp = useRecoilValue(currentWeatherData);

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
            {resp.main.temp}
            <span>&#176;</span>
          </h1>
          <p className="text-light">{timezoneToDate(resp.timezone)}</p>
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
