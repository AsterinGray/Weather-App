import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  currentWeatherData,
  forecastWeatherData,
  inputQuery,
} from '../recoil/store';

import { currentWeather, weatherForecast } from '../api/openWeather';

import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';
import Loader from '../components/common/Loader';

const MainPage = () => {
  const [position, setPosition] = useState('');
  const [curr, setCurr] = useRecoilState(currentWeatherData);
  const [forecast, setForecast] = useRecoilState(forecastWeatherData);
  const query = useRecoilValue(inputQuery);

  const getWeather = async () => {
    const response1 = await currentWeather.get('', {
      params: {
        lon: position.lon,
        lat: position.lat,
        units: 'metric',
      },
    });

    const response2 = await weatherForecast.get('', {
      params: {
        lon: position.lon,
        lat: position.lat,
        units: 'metric',
      },
    });
    setCurr(response1.data);
    setForecast(response2.data);
  };

  const getPosition = () => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };

  const getSearchWeather = async () => {
    const response = await currentWeather.get('', {
      params: {
        q: query,
        units: 'metric',
      },
    });

    return response.data;
  };

  const getSearchForecast = async (data) => {
    const response = await weatherForecast.get('', {
      params: {
        lat: data.coord.lat,
        lon: data.coord.lon,
        units: 'metric',
      },
    });

    return response.data;
  };

  const searchWeather = () => {
    getSearchWeather().then((res) => {
      setCurr(res);
      getSearchForecast(curr).then((res) => {
        setForecast(res);
      });
    });
  };

  useEffect(() => {
    if (!position.lon && !position.lat) {
      getPosition();
    } else if (!curr) {
      getWeather();
    }
  }, [position, curr, forecast]);

  useEffect(() => {
    if (query) {
      searchWeather();
    }
  }, [query]);

  const renderFragment = () => {
    if (curr) {
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
