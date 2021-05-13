import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { forecastWeatherData } from '../../recoil/store';
import { getDay, getTime } from '../../utils/dateTime.utils';
import ForecastCard from './ForecastCard';

const ForecastList = () => {
  const data = useRecoilValue(forecastWeatherData);
  const [forecastType, setForecastType] = useState('daily');
  const daily = useRef('checked');

  const renderDailyList = data.daily.map((datum, index) => {
    return (
      <ForecastCard
        key={index}
        title={getDay(index)}
        image={datum.weather[0].icon}
        highTemp={datum.temp.max}
        lowTemp={datum.temp.min}
      />
    );
  });

  const renderHourlyList = data.hourly.slice(0, 24).map((datum, index) => {
    return (
      <ForecastCard
        key={index}
        title={getTime(index)}
        image={datum.weather[0].icon}
        highTemp={datum.temp}
      />
    );
  });

  const renderList = () => {
    if (forecastType === 'daily') {
      return renderDailyList;
    } else {
      return renderHourlyList;
    }
  };

  useEffect(() => {
    daily.current.checked = true;
  }, []);

  return (
    <React.Fragment>
      <h1 className="text-medium">Forecast</h1>
      <div className="forecast-type text-regular">
        <input
          type="radio"
          name="type"
          id="daily"
          value="daily"
          ref={daily}
          onClick={(e) => setForecastType(e.target.value)}
        />
        <label htmlFor="daily">Daily</label>
        <input
          type="radio"
          name="type"
          id="hourly"
          value="hourly"
          onClick={(e) => setForecastType(e.target.value)}
        />
        <label htmlFor="hourly">Hourly</label>
      </div>
      <div className="forecast-list">{renderList()}</div>
    </React.Fragment>
  );
};

export default ForecastList;
