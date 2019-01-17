// mine
export default function at(h = 0, m = 0) {
  let hour = (h + Math.floor(m / 60)) % 24;
  let minute = m % 60;

  if (minute < 0) minute = 60 + minute;
  if (hour < 0) hour = 24 + hour;

  hour <= 9 ? (hour = "0" + hour) : hour.toString();
  minute <= 9 ? (minute = "0" + minute) : minute.toString();

  const result = {
    toString: () => `${hour}:${minute}`,
    plus: input => at(h, m + input),
    minus: input => at(h, m - input),
    equals: input => input.toString() === `${hour}:${minute}`
  };

  return result;
}

// other's
const padZero = n => n < 10 ? ("0" + n) : n
const adjustMins = n => n > 59 ? n % 60 : n
const adjustHours = n => n > 23 ? n % 24 : n
const adjustNegativeHours = n => n < 0 ? (n % 24) + 24 : n
const adjustNegativeMinutes = n => n < 0 ? (n % 60) + 60 : n

const at = (hours = 0, minutes = 0) => {
  const minutesAfterHour = adjustMins(adjustNegativeMinutes(minutes))
  const hoursAfterDay = adjustHours(adjustNegativeHours(hours + Math.floor(minutes/60)))
  const formattedTime = `${padZero(hoursAfterDay)}:${padZero(minutesAfterHour)}`
  return {
    toString: () => formattedTime,
    plus: mins => at(hoursAfterDay, minutesAfterHour + mins),
    minus: mins => at(hoursAfterDay, minutesAfterHour - mins),
    equals: time => formattedTime === time.toString()
  }
}

export default at

// other's 2
'use strict';

const HOUR_MINUTES = 60;
const DAY_HOURS = 24;
const DAY_MINUTES = DAY_HOURS * HOUR_MINUTES;

const pad = (amount) => `00${amount}`.slice(-2);

class Clock {
  constructor(hours, minutes) {
    const time = (hours * HOUR_MINUTES + minutes + DAY_MINUTES) % DAY_MINUTES;
    const hour = parseInt(time / HOUR_MINUTES) % DAY_HOURS;
    const minute = time % HOUR_MINUTES;

    const toString = () => `${pad(hour)}:${pad(minute)}`;
    const plus = (minutesToAdd) => new Clock(0, time + minutesToAdd);
    const minus = (minutesToSubstract) => plus(-minutesToSubstract);
    const equals = (otherClock) => toString() === otherClock.toString();

    Object.assign(this, {toString,plus,minus,equals});

  }

}

export default (hours, minutes = 0) => new Clock(hours, minutes);