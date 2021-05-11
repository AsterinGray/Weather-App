import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { currentWeatherResponse } from '../recoil/store';
import { currentWeather, weatherForecast } from '../api/openWeather';

import MainContent from '../components/MainContent';
import SideBar from '../components/SideBar';
import Loader from '../components/Loader';

const MainPage = () => {
  const [position, setPosition] = useState('');
  const [resp, setResp] = useRecoilState(currentWeatherResponse);

  const getWeather = async () => {
    const response = await currentWeather.get('', {
      params: {
        lon: position.lon,
        lat: position.lat,
      },
    });

    const data = await weatherForecast.get('');
    console.log(data);
    setResp(response.data);
  };

  const getPosition = () => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    if (!position.lon && !position.lat) {
      getPosition();
    } else if (!resp) {
      getWeather();
    } else {
      console.log(resp);
    }
  });

  const renderFragment = () => {
    if (resp) {
      return (
        <React.Fragment>
          <SideBar />
          <MainContent />
        </React.Fragment>
      );
    } else {
      return <Loader />;
    }
  };

  return renderFragment();
};

export default MainPage;
