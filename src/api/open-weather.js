import axios from 'axios';

const KEY = '242a43bffc8baf967cacac8422fea2e7';

export default axios.create({
  baseURL: 'api.openweathermap.org/data/2.5/weather',
  param: {
    appid: KEY,
  },
});
