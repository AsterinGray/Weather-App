import React from 'react';
import { useRecoilValue } from 'recoil';

import weather from '../api/openWeather';

import inputQuery from '../recoil/store';

const WeatherList = () => {
  const query = useRecoilValue(inputQuery);

  const response = weather.get('', {
    params: {
      q: query,
    },
  });

  console.log(response);
  return <div className="ui list"></div>;
};

export default WeatherList;
