import React from 'react';

import Header from './common/Header';
import ForecastList from './forecast/ForecastList';
import WeatherList from './weather/WeatherList';

const MainContent = () => {
  return (
    <main className="main">
      <Header />
      <ForecastList />
      <WeatherList />
    </main>
  );
};

export default MainContent;
