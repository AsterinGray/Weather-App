import { atom } from 'recoil';

export const inputQuery = atom({
  key: 'inputQuery',
  default: '',
});

export const currentWeatherData = atom({
  key: 'currentWeatherData',
  default: '',
});

export const forecastWeatherData = atom({
  key: 'forecastWeatherData',
  default: '',
});
