import React from 'react';
import { useRecoilValue } from 'recoil';

import { forecastWeatherData } from '../../recoil/store';
import { getDay } from '../../utils/dateTime.utils';
import ForecastCard from './ForecastCard';

const ForecastList = () => {
  const data = useRecoilValue(forecastWeatherData);

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
