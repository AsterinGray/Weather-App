import { dayOfWeek } from '../constants/dayOfWeek';

export const unixToTime = (timestamp) => {
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();
  var minutes = '0' + date.getMinutes();

  return `${hours + ':' + minutes.substr(-2)}`;
};

export const getDay = (index) => {
  const date = new Date();
  var added = index + date.getDay() + 1;

  if (added >= 7) {
    added -= 7;
  }

  return dayOfWeek[added].substring(0, 3);
};
