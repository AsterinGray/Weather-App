import { atom } from 'recoil';

export const inputQuery = atom({
  key: 'inputQuery',
  default: '',
});

export const currentWeatherResponse = atom({
  key: 'currentWeatherResponse',
  default: '',
});
