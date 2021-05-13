import axios from 'axios';

const KEY = '242a43bffc8baf967cacac8422fea2e7';

export const currentWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?',
  params: {
    appid: KEY,
  },
});

export const weatherForecast = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/onecall?',
  params: {
    appid: KEY,
  },
});
