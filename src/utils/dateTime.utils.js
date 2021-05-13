import { dayOfWeek } from '../constants/dayOfWeek';
import { monthNames } from '../constants/monthNames';

export const unixToTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();

  return `${hours + ':' + minutes.substr(-2)}`;
};

export const getDay = (index) => {
  const date = new Date();
  var added = index + date.getDay() + 1;

  if (added >= 7) {
    added -= 7;
  }

  return dayOfWeek[added];
};

export const timezoneToDate = (timezone) => {
  const d = new Date(new Date().getTime() - timezone * 1000);
  console.log(d);
  const date = d.getDate();
  const month = monthNames[d.getMonth()];
  const day = dayOfWeek[d.getDay()];

  return `${day}, ${date} ${month}`;
};

export const getTime = (index) => {
  if (index > 12) {
    index -= 12;
    return `${index} pm`;
  } else {
    return `${index} am`;
  }
};
