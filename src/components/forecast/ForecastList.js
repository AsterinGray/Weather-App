import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { dayOfWeek } from '../../data/dayOfWeek';

import { forecastWeatherData } from '../../recoil/store';
import ForecastCard from './ForecastCard';

const ForecastList = () => {
  const data = useRecoilValue(forecastWeatherData);

  const getDay = (index) => {
    const date = new Date();
    var added = index + date.getDay() + 1;

    if (added >= 7) {
      added -= 7;
    }

    return dayOfWeek[added].substring(0, 3);
  };

  const renderList = data.daily.map((datum, index) => {
    return (
      <ForecastCard
        key={index}
        day={getDay(index)}
        image={datum.weather[0].icon}
        highTemp={datum.temp.max}
        lowTemp={datum.temp.min}
      />
    );
  });

  return (
    <React.Fragment>
      <h1 className="text-light">Forecast</h1>
      <div className="forecast-list">{renderList}</div>
    </React.Fragment>
  );
};

export default ForecastList;
